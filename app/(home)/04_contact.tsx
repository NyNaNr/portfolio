import { SubmitHandler, useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import * as yup from "yup"
import InputField from "@/components/Contact/InputField"
import { yupResolver } from "@hookform/resolvers/yup"

// フォームの型
type ContactForm = {
  name: string
  email: string
  message: string
}

// バリーデーションルール
const schema = yup.object({
  name: yup.string().required("必須項目です"),
  email: yup
    .string()
    .required("必須項目です")
    .email("正しいメールアドレス入力してください"),
  message: yup.string().required("必須項目です"),
})

export default function Contact() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  })

  // フォーム送信時の処理（バリデーションOKな時に実行される）
  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await fetch("../api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (response.status === 200) {
      alert("正常に送信できました")
    } else {
      alert("正常に送信できませんでした")
    }
  }
  return (
    <>
      <div
        className=" relative mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl mt-72"
        id="contact"
      >
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Contact
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            name="Name"
            register={register}
            error={errors.name}
          />
          <InputField
            type="email"
            name="Email"
            register={register}
            error={errors.email}
          />
          <InputField
            type="text"
            name="Message"
            register={register}
            error={errors.message}
          />
          <button
            className="absolute inset-x-0 mx-32
          bg-blue-500 py-1 px-3 rounded-md text-white"
            type="submit"
          >
            送信
          </button>
        </form>
      </div>
    </>
  )
}

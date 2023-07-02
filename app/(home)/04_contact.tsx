import { SubmitHandler, useForm } from "react-hook-form"
import { useEffect } from "react"
import * as yup from "yup"
import InputField from "@/components/Contact/InputField"
import { yupResolver } from "@hookform/resolvers/yup"

// バリーデーションルール
const schema = yup.object().shape({
  name: yup.string().required("必須項目です"),
  email: yup
    .string()
    .required("必須項目です")
    .email("正しいメールアドレス入力してください"),
  message: yup.string().required("必須項目です"),
})

export default function Contact() {
  // フォームの型
  type ContactForm = {
    name: string
    email: string
    message: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactForm>({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(schema),
  })

  // フォーム送信時の処理（バリデーションOKな時に実行される）
  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    const response = await fetch("/api/send", {
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
  useEffect(() => {
    console.log(isValid, errors)
  }, [errors, isValid])

  return (
    <>
      <div
        className="flex flex-col items-center relative mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl mt-72"
        id="contact"
      >
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Contact
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            name="name"
            register={register}
            error={errors.name}
          />
          <InputField
            type="email"
            name="email"
            register={register}
            error={errors.email}
          />
          <InputField
            type="text"
            name="message"
            register={register}
            error={errors.message}
            isTextArea={true}
          />
          <input
            className={` mx-32 bg-blue-500 py-1 px-3 rounded-md text-white ${
              isValid
                ? "border-black text-black"
                : "border-red-500 text-red-500"
            }`}
            type="submit"
            value={isValid ? "送信する" : "不許可"}
          />
        </form>
      </div>
    </>
  )
}

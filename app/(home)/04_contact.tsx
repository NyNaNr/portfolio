import { SubmitHandler, useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import * as yup from "yup"
import InputField from "@/components/Contact/InputField"
import { yupResolver } from "@hookform/resolvers/yup"
import Send from "@/components/Contact/svgs/send.svg"
import Alert from "@/components/Contact/svgs/alert-triangle.svg"
import Success from "@/components/Contact/svgs/mood-check.svg"
import Loading from "@/components/Contact/loading"

// バリーデーションルール
const schema = yup.object().shape({
  name: yup
    .string()
    .required("必須項目です")
    .test("not-only-whitespace", "必須項目です", (value) =>
      value ? value.trim() !== "" : false,
    ),
  email: yup
    .string()
    .required("必須項目です")
    .email("正しいメールアドレス入力してください"),
  message: yup
    .string()
    .required("必須項目です")
    .test("not-only-whitespace", "必須項目です", (value) =>
      value ? value.trim() !== "" : false,
    ),
})

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [successSending, setSuccessSending] = useState(false)
  const [failedSending, setFailedSending] = useState(false)

  // フォームの型
  type ContactForm = {
    name: string
    email: string
    message: string
  }

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isSubmitSuccessful },
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
    setSending(true)
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      //response.ok プロパティは、HTTPステータスコードが成功ステータス（200-299の範囲）を示している場合に true を返す
      setSending(false)
      setSuccessSending(true)
      reset({
        name: "",
        email: "",
        message: "",
      })
      window.setTimeout(() => setSuccessSending(false), 10000)
    } else {
      setFailedSending(true)
      window.setTimeout(() => setFailedSending(false), 10000)
    }
  }
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" })
    }
  }, [formState, reset])

  useEffect(() => {
    console.log(isValid, errors)
  }, [errors, isValid])

  return (
    <>
      <div
        className="flex flex-col items-center relative mx-auto w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl mt-72"
        id="contact"
      >
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl flex flex-col items-center"
        >
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
          <div
            className={`Contact_form_Message flex mb-6 items-center h-20 w-full mx-32 bg-blue-400 bg-opacity-20 ${
              !successSending && !failedSending ? "hidden" : ""
            }`}
          >
            <div
              className={`flex justify-center items-center ml-5 ${
                successSending ? "" : "hidden"
              }`}
            >
              <Success width={18} height={18} strokeWidth={"1.2px"} />
              <p className="ml-3">
                送信成功。あなたのアドレスに受付完了メールを自動送信しました。ご確認ください。
              </p>
            </div>

            <div
              className={`flex justify-center items-center ml-5 text-red-600 ${
                failedSending ? "" : "hidden"
              }`}
            >
              <div className="flex h-full justify-items-center">
                <Alert width={18} height={18} strokeWidth={"1.2px"} />
              </div>
              <p className="ml-3 ">
                送信に失敗しました。通信が回復しない場合は、githubやTwitterのアカウントにご連絡いただければ幸いです。
              </p>
            </div>
          </div>
          <button
            className={`flex  items-center font-semibold text-white py-1 px-3 rounded-md bg-black 
            dark:bg-strongCyan dark:text-black`}
            type="submit"
          >
            {sending ? (
              <Loading />
            ) : (
              <Send width={20} height={20} strokeWidth={"1.2px"} />
            )}

            <p className="ml-2">Send message</p>
          </button>
        </form>
      </div>
    </>
  )
}

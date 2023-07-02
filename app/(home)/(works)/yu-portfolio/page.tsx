export default function Home() {
  return (
    <>
      <div className="text-3xl">{process.env.NEXT_PUBLIC_SENDGRID_API_KEY}</div>
      <div className="text-3xl">{process.env.NEXT_PUBLIC_MAIL_TO}</div>
      <div className="text-3xl">{process.env.NEXT_PUBLIC_MAIL_FROM}</div>{" "}
    </>
  )
}

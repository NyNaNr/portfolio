export default function Home() {
  return (
    <>
      <div className="text-3xl">{process.env.SENDGRID_API_KEY}</div>
    </>
  )
}

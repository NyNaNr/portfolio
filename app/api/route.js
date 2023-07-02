export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail")
    sgMail.setApiKey(process.env.SENDGRID_API_KEY) //SendGridのAPIキー

    const msg = {
      to: req.body.email,
      from: process.env.MAIL_FROM,
      subject: "お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
      html:
        "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
    }

    ;(async () => {
      try {
        await sgMail.send(msg)
      } catch (error) {
        console.error(error)
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })()
  }

  res.status(200)
}

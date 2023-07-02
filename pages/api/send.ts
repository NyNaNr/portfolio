import { NextApiRequest, NextApiResponse } from "next"

export default function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail")
    sgMail.setApiKey(process.env.SENDGRID_API_KEY) //SendGridのAPIキー

    const msgToManager = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM,
      subject: "ポートフォリオサイトからの問い合わせ",
      text:
        req.body.name +
        "様からお問合せがありました。" +
        "メッセージ：" +
        req.body.message +
        "アドレス：" +
        req.body.email,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メッセージ内容】</p>
        <p>${req.body.message}</p>
      `,
    }

    const msgToUser = {
      to: req.body.email,
      from: process.env.MAIL_FROM,
      subject: "【Yu's Portfolio】お問合せありがとうございました。",
      text:
        "お問合せを受け付けました。回答をお待ちください。" + req.body.message,
      html: `
        <p>${req.body.name} 様</p>
        <p>この度はお問い合わせいただきありがとうございました。回答をお待ちください。</p><br/>

        <p>お問い合わせいただいた内容は以下になります。</p>
        <p>___________________</p>
        <p>メールアドレス</p>
        <p>${req.body.email}</p>
        <p>メッセージ</p>
        <p>${req.body.message}</p>
        <p>___________________</p>
        <p>Yu's Portfolio</p>
         <p><a href="https://yur-portfolio.vercel.app/">https://yur-portfolio.vercel.app/</a></p>
      `,
    }

    ;(async () => {
      try {
        await sgMail.send(msgToManager)
        await sgMail.send(msgToUser)
        res.status(200).json(msgToUser)
      } catch (error: any) {
        console.error(error)
        res.status(500).json(error)
      }
    })()
  }
}

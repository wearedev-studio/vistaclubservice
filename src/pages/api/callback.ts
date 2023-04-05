import { Callback as CallbackProps } from "@/types/submit";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface ReqBody extends CallbackProps {
  title: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      const { title, phone }: ReqBody = req.body;
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_NAME,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailData = {
        from: process.env.MAILRU_NAME,
        to: process.env.MAILRU_NAME,
        subject: `Заявка с сайта ${process.env.DOMAIN_NAME}`,
        html: `
            <h1>${title} ${process.env.DOMAIN_NAME}</h1>
            <p>Телефон: ${phone}</p>
          `,
      };

      await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
          if (err) {
            reject();
            return { status: 500 };
          } else {
            resolve(info.messageId);
            return { status: 200, info: { info } };
          }
        });
      });

      return res.status(200).json({ message: "Ok" });

    default:
      res.status(404).json({ message: "Not found" });
      break;
  }
}

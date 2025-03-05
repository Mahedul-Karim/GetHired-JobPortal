import nodemailer from "nodemailer";

export const sendEmail = async ({reciever, subject, body}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mail = transporter.sendMail({
      from: "gethired@company.co",
      to: reciever,
      subject,
      html: body,
    });

    return mail;
  } catch (err) {
    if (process.env.NODE_ENV.trim() === "DEVELOPMENT") {
      return {
        success: false,
        message: "Something went wrong while sending email",
        error: err,
      };
    }

    return {
      success: false,
      message: "Something went wrong while sending email",
    };
  }
};

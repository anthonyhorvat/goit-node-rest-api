import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { ETHEREAL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "lucius.bartoletti11@ethereal.email",
    pass: ETHEREAL_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

export const sendEmail = (data) => {
  const email = { ...data, from: "lucius.bartoletti11@ethereal.email" };
  return transport.sendMail(email);
};

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

module.exports = async (email, otp) => {
  return transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Your MangoFarm Login OTP",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  });
};

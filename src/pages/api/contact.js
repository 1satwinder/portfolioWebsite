export default function (req, res) {
  console.log("Executing mail code");
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "kaurmanjit4056@gmail.com",
      pass: "manjit4056",
    },
  });
  const mailData = {
    from: "kaurmanjit4056@gmail.com",
    to: "satwindersinghsaini59@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}

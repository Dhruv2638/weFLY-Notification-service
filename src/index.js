const express = require("express");
const { ServerConfig, Logger } = require("./config/index.js");
const apiRoutes = require("./routes/index.js");

const mailSender = require("./config/email-config.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`successfully server started on port: ${ServerConfig.PORT}`);
  try {
    const responce = await mailSender.sendMail({
      from: ServerConfig.GMAIL_EMAIL,
      to: "dhruvnagar2021@gmail.com",
      subject: "This is temp email with nodemailer service",
      text: "Yes it is working",
    });
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
});

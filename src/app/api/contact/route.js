import nodemailer from "nodemailer";

export async function POST(req) {

  try {

    const body = await req.json();

    const {
      name,
      email,
      subject,
      message
    } = body;

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {

      return Response.json(
        {
          success: false,
          message: "All fields required",
        },
        {
          status: 400,
        }
      );
    }

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    /* ADMIN MAIL */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Contact Form: ${subject}`,

      html: `
        <h2>New Contact Message</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    /* USER MAIL */

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "We Received Your Message",

      html: `
        <h2>Thank You For Contacting Us</h2>

        <p>Hi ${name},</p>

        <p>
          We received your message and
          will contact you shortly.
        </p>

        <hr />

        <p><b>Subject:</b> ${subject}</p>

        <p>${message}</p>

        <br />

        <p>
          Regards,<br />
          Team
        </p>
      `,
    });

    return Response.json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
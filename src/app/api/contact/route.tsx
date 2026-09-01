import transporter from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      topic,
      message,
    } = await request.json();

    if (!name || !email || !topic || !message) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      replyTo: email,

      subject: `Contact Request for ${topic} from ${name}`,

      text: `
REBELROOT

New Contact

Name: ${name}
Email: ${email}

Topic: ${topic}

Message:
${message}
      `,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
  console.error("SMTP ERROR:", error);

  return NextResponse.json(
    {
      message: error instanceof Error ? error.message : "Unknown SMTP error",
    },
    {
      status: 500,
    }
  );
}
}
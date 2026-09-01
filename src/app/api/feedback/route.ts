import transporter from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      product,
      rating,
      message,
    } = await request.json();

    if (!name || !email || !product || !rating || !message) {
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

      subject: `New ${product} Feedback from ${name}`,

      text: `
REBELROOT

New Feedback

Name: ${name}
Email: ${email}

Product: ${product}
Rating: ${rating}/5

Feedback:
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
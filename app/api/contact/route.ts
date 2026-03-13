import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    // 1️⃣ Read form data
    const data = await request.json()
    const { name, company, phone, email, service, message } = data

    // 2️⃣ Save to Google Sheets
    await fetch(
      "https://script.google.com/macros/s/AKfycbwb-wCbOmdU-8odsXprxSJwCbzujfyddkwLpD_XWGBzNcGlmCDiDU7mk96XT588NEw9nQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          service,
          message
        })
      }
    )

    // 3️⃣ Configure email transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // 4️⃣ Send notification email
    await transporter.sendMail({
      from: `TriAxis Website <${process.env.EMAIL_USER}>`,
      to: "sales@triaxis.sa, triaxis.ksa@gmail.com",
      subject: "New Website Enquiry",
      html: `
        <h3>New Contact Form Submission</h3>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("CONTACT ERROR:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
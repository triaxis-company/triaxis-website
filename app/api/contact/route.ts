import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    let name: any, email: any, phone: any, message: any
    let company: any, service: any, position: any, file: any

    // 🔍 Detect request type
    const contentType = request.headers.get("content-type")

    if (contentType?.includes("application/json")) {
      // =========================
      // 📩 CONTACT FORM (JSON)
      // =========================
      const data = await request.json()

      name = data.name
      email = data.email
      phone = data.phone
      company = data.company
      service = data.service
      message = data.message

    } else {
      // =========================
      // 📄 CAREERS FORM (FormData)
      // =========================
      const formData = await request.formData()

      name = formData.get("name")
      email = formData.get("email")
      phone = formData.get("phone")
      position = formData.get("position")
      message = formData.get("message")
      file = formData.get("cv")
    }

    // ✅ Detect form type
    const isCareer = !!position

    // =========================
    // 📊 SAVE TO GOOGLE SHEET
    // =========================
    await fetch(
      "https://script.google.com/macros/s/AKfycbwb-wCbOmdU-8odsXprxSJwCbzujfyddkwLpD_XWGBzNcGlmCDiDU7mk96XT588NEw9nQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: isCareer ? "CAREER" : "CONTACT",
          name,
          email,
          phone,
          company,
          service,
          position,
          message,
        }),
      }
    )

    // =========================
    // 📧 EMAIL SETUP
    // =========================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // =========================
    // 📎 ATTACH CV (ONLY CAREERS)
    // =========================
    let attachments: any[] = []

    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      attachments.push({
        filename: file.name,
        content: buffer,
      })
    }

    // =========================
    // ✉️ EMAIL CONTENT
    // =========================
    const subject = isCareer
      ? `New Job Application - ${position}`
      : `New Website Enquiry`

    const html = isCareer
      ? `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Message:</b> ${message}</p>
      `
      : `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `

    // =========================
    // 🚀 SEND EMAIL
    // =========================
    await transporter.sendMail({
      from: `TriAxis Website <${process.env.EMAIL_USER}>`,
      to: ["sales@triaxis.sa", "triaxis.ksa@gmail.com"],
      subject,
      html,
      attachments,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("ERROR:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

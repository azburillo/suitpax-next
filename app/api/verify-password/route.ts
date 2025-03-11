import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { password } = await request.json()

  // Replace 'your_secret_password' with the actual password you want to use
  if (password === "unicorn") {
    const response = NextResponse.json({ message: "Success" }, { status: 200 })
    response.cookies.set("auth", "true", { httpOnly: true, maxAge: 60 * 60 * 24 }) // 1 day
    return response
  }

  return NextResponse.json({ message: "Incorrect password" }, { status: 401 })
}


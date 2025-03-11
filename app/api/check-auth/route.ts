import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const authCookie = request.cookies.get("auth")

  if (authCookie && authCookie.value === "true") {
    return NextResponse.json({ authenticated: true }, { status: 200 })
  }

  return NextResponse.json({ authenticated: false }, { status: 401 })
}


import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/users";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password, username } = await req.json();

    if (!email || !password || !username)
      return NextResponse.json({ success: false, message: "Lengkapi semua field!" }, { status: 400 });

    const exists = await User.findOne({ email });
    if (exists)
      return NextResponse.json({ success: false, message: "Email sudah terdaftar" }, { status: 400 });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashed,
      role: "user",
      verified: true,
    });

    return NextResponse.json({ success: true, message: "Registration success" });

  } catch (err) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

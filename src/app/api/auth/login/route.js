import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/users";

export async function POST(req) {
  try {
    await connectDB();
    const { user, password } = await req.json(); // ganti dari email → user

    // cari berdasarkan username OR email
    const foundUser = await User.findOne({
      $or: [{ email: user }, { username: user }],
    });

    if (!foundUser)
      return NextResponse.json(
        { success: false, message: "User tidak ditemukan" },
        { status: 404 }
      );

    // cek password
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword)
      return NextResponse.json(
        { success: false, message: "Password salah" },
        { status: 401 }
      );

    // JWT
    const token = jwt.sign(
      { id: foundUser._id, role: foundUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const res = NextResponse.json({
      success: true,
      message: "Login berhasil",
      role: foundUser.role,
    });

    // set cookie
    res.cookies.set("token", token, {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

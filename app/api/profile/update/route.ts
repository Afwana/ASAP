/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const formData = await req.formData();

    const response = await fetch(`${process.env.BACKEND_URL}/profile/update`, {
      method: "PUT",
      body: formData,
      credentials: "include",
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

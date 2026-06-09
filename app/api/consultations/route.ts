import { NextRequest, NextResponse } from "next/server";
import sql, { initDb } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, category, message } = await req.json();

    if (!name || !email || !category || !message) {
      return NextResponse.json(
        { error: "모든 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    await initDb();

    await sql`
      INSERT INTO consultations (name, email, category, message)
      VALUES (${name}, ${email}, ${category}, ${message})
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[consultations POST]", err);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await initDb();
    const rows = await sql`
      SELECT id, name, email, category, message, created_at
      FROM consultations
      ORDER BY created_at DESC
      LIMIT 50
    `;
    return NextResponse.json({ consultations: rows });
  } catch (err) {
    console.error("[consultations GET]", err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

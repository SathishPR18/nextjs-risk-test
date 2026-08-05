import { NextResponse } from "next/server";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  // TODO: save to database
  return NextResponse.json({ success: true, user: { name, email } });
}

export async function GET() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ];
  return NextResponse.json({ users });
}

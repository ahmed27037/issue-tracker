import { NextRequest, NextResponse } from "next/server";
import { string } from 'zod'
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../ValidationSchema";


export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format, {status :400})
  }
  const newIssue = await prisma.issue.create({
    data: {title: body.title, description: body.description}
  })
  return NextResponse.json(newIssue, {status: 201})
}

export async function GET(request: NextRequest) {
  try {
    const issues = await prisma.issue.findMany();
    return NextResponse.json(issues, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



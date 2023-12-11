import { NextRequest, NextResponse } from "next/server";
import { string } from 'zod'
import prisma from "@/prisma/client";
import { createIssueSchema } from "@/app/ValidationSchema";
import { Status } from "@prisma/client";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('Received DELETE request with params:', params);
  const { id } = params;

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!issue) {
      return NextResponse.json(
        { error: "Invalid issue" },
        { status: 404 }
      );
    }

    await prisma.issue.delete({
      where: { id: issue.id },
    });

    return NextResponse.json({});
  } catch (error) {
    console.error('An error occurred while deleting the issue:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const body = await request.json();
  const { status } = body;

  try {
    const updatedIssue = await prisma.issue.update({
      where: { id: parseInt(id, 10) },
      data: { status },
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error('An error occurred while updating the issue:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

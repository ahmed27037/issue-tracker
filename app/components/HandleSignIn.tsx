'use client';
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HandleSignIn() {
  signIn()
}
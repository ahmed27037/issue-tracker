import React from 'react'
import { Button, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import HandleSignIn from '../components/HandleSignIn';



export default async function IssuesPage() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return (
      <div className='flex gap-x-3'>
      <Text>Are you sure you want to continue without signing in</Text>
      <Button onClick={HandleSignIn}>No I want to Sign in</Button>
      <Button><Link href='/issues/DirectoryToIssues'>Yes</Link></Button>
      </div>
    )
    } else {
      redirect("/issues/DirectoryToIssues");
    }
}


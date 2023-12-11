import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const directorypage = () => {
  return (
    <div className='flex gap-2'>
    <Button>
      <Link href='/issues/new'>
        New Issue
      </Link>
    </Button>
    <Button>
      <Link href='/issues/currentIssues'>
        Current Issues
      </Link>
    </Button>
  </div>
  )
}

export default directorypage
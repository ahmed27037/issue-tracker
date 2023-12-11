'use client';
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import {Controller, useForm} from 'react-hook-form'
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/ValidationSchema';
import { z } from 'zod'
import { ErrorMessage } from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssue = () => {
  const router = useRouter()
  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });
  const [error, SetError] = useState('')
  const [isSubmitting, SetSubmitting] = useState(false);

  const HandleSubmit = handleSubmit(async (data) => {
    try {
      SetSubmitting(true);
      await axios.post('/api/issues', data);
      router.push('/issues') 
    } catch (error) {
      SetSubmitting(false)
      SetError('An unexpected error occured')
    }
  })

  return (
  <div className='max-w-xl'>
    {error && ( 
    <Callout.Root className='mb-5' color='red'>
    <Callout.Text>{error}</Callout.Text>
    </Callout.Root>
    )}
    <form 
      className='space-y-3' 
      onSubmit={HandleSubmit}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <ErrorMessage>
      {errors.title?.message}
      </ErrorMessage>
      <Controller
      name='description'
      control={control}
      render={({field}) => <SimpleMDE placeholder='Description' {...field} /> }
      />
      <ErrorMessage>
      {errors.description?.message}
      </ErrorMessage>
      <Button disabled = {isSubmitting} >Submit New Issue {isSubmitting && <Spinner/>} </Button>
    </form>
  </div>
  )
}

export default NewIssue
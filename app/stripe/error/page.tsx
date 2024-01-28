import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Button } from '~/components/ui/button';

const ErrorStripe = () => {
  return (
    <div className='h-screen'>
      <div className='mt-32 md:max-w-[50vw] mx-auto'>
        <AlertTriangle className='text-red-500 w-16 h-16 mx-auto my-6' />
        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>Payment Unsuccessful!</h3>
          <p className='text-gray-600 my-2'>Something went wrong, as a result, payment could not be proccessed.</p>
          <p>We apologise for the inconvenience caused.</p>

          <Button asChild className='mt-5'>
            <Link href='/'>Go Back</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorStripe;

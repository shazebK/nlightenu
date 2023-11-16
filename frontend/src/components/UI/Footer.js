import React from 'react';
import Facebook from '../Icons/Facebook';
import LinkedIn from '../Icons/LinkedIn';
import Twitter from '../Icons/Twitter';
import Instagram from '../Icons/Instagram';

export default function Footer() {
  return (
        <div className='w-full flex border p-4'>
            <div className='w-1/2'>
            <h1 className='text-[40px] font-medium'>Nlightenu</h1>
            <p>
                I and writing some content to show some work done.I and writing some content to show some work done
                I and writing some content to show some work done
                I and writing some content to show some work done
            </p>
            </div>
            <div className='w-1/2 flex flex-col items-center'>
                <h1>Connect With Us</h1>
                <div className='w-4/5 flex justify-around my-12'>
                    <Facebook/>
                    <Instagram/>
                    <LinkedIn/>
                    <Twitter/>
                </div>
            </div>
        </div>
  );
}
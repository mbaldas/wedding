'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

export default function CountdownPrimitive() {
  const [hydrated, setHydrated] = useState(false);
  // Define the target date for the countdown
  const weddingDate = new Date('2024-09-21T16:00:00');

  // Renderer function for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <p className='text-2xl md:text-3xl'>The big day is here!</p>;
    } else {
      return (
        <div className='flex flex-wrap justify-center space-x-6 md:space-x-12 font-medium uppercase text-white'>
          <div className='flex flex-col items-center justify-center p-2'>
            <span className='text-4xl md:text-7xl font-medium'>{days}</span>
            <span className='text-xs md:text-sm tracking-wider'>Dias</span>
          </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <span className='text-4xl md:text-7xl font-medium'>{hours}</span>
            <span className='text-xs md:text-sm'>Horas</span>
          </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <span className='text-4xl md:text-7xl font-medium'>{minutes}</span>
            <span className='text-xs md:text-sm'>Minutos</span>
          </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <span className='text-4xl md:text-7xl font-medium'>{seconds}</span>
            <span className='text-xs md:text-sm tracking-wider'>Segundos</span>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <div className='absolute inset-0'>
        <Image
          src='/fusca.jpg'
          alt='Adriele & Matheus'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='opacity-50'
        />
      </div>
      <div className='relative opacity-80 flex flex-col items-center justify-center'>
        <p className='uppercase mb-4 md:mb-8 text-white text-xs md:text-base'>
          E que comece a contagem regressiva
        </p>
        {hydrated && <Countdown date={weddingDate} renderer={renderer} />}
      </div>
    </>
  );
}

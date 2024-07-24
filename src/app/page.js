'use client';

import React from 'react';
import Image from 'next/image';
import {
  Container,
  Countdown,
  DescriptionList,
  GiftList,
  Header,
  Hero,
  RSVP,
  SendMessage,
  Testimonial,
} from '../components';

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <h1 className='text-center text-black mt-2 text-2xl md:text-4xl lg:text-6xl'>
          Adriele & Matheus
        </h1>
        <section className='scroll-mt-16 mt-8 relative w-full flex items-center justify-center bg-white'>
          <Container>
            <Hero />
          </Container>
        </section>

        <p className='text-center max-w-80 mt-8 text-black text-xs md:text-base'>
          Se junte a nós enquanto embarcamos em uma jornada de amor, paixão e
          felicidade eterna
        </p>

        <section
          id='cerimony'
          className='relative mt-12 lg:mt-24 w-full h-[50vh] flex items-center justify-center bg-gray-900'
        >
          <Container>
            <Countdown />
          </Container>
        </section>

        <section className='mt-12 lg:mt-24'>
          <Container>
            <DescriptionList />
          </Container>
        </section>

        <section
          id='rsvp'
          className='relative mt-12 lg:mt-24 w-full h-[700px] flex items-center justify-center bg-gray-900'
        >
          <h3 className='text-4xl pl-[15%] md:pl-0 md:text-6xl tracking-[0.3em] font-normal uppercase absolute text-white/80 z-20 top-2 md:top-4'>
            confirme sua presença
          </h3>
          <Container>
            <RSVP />
          </Container>
        </section>

        <section
          id='gift-list'
          className='scroll-mt-16 w-full mt-12 lg:mt-24 flex flex-col items-center'
        >
          <Container>
            <GiftList />
          </Container>
        </section>

        <section className='scroll-mt-16' id='our-history'>
          <Container>
            <Testimonial />
          </Container>
        </section>

        <section className='scroll-mt-6 w-full' id='message'>
          <h3 className='text-center text-3xl font-normal mb-1'>
            Mural de Recados
          </h3>
          <p className='text-xs text-center text-gray-500 mb-4'>
            Deixe seu recado, nós vamos adorar ler!
          </p>
          <Container>
            <SendMessage />
          </Container>
        </section>

        <section className='relative w-full h-64 lg:h-96'>
          <Image
            src='/mao.png'
            alt='Beautiful closing image'
            layout='fill'
            className='object-cover'
            style={{ objectPosition: 'center 50%' }}
          />
        </section>
      </main>
    </>
  );
}

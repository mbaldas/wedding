import Image from 'next/image';

export default function Hero({}) {
  return (
    <div className='flex items-center justify-between w-full max-w-6xl relative'>
      <div className='relative flex-shrink-0'>
        <Image
          src='/borrada.jpg'
          alt='Photo 1'
          className='w-[80px] md:w-[150px] lg:w-[300px] h-auto'
          width={300}
          height={400}
        />
      </div>
      <div className='relative flex-shrink-0'>
        <Image
          src='/borrada.jpg'
          alt='Photo 2'
          className='w-[100px] md:w-[200px] lg:w-[400px] h-auto'
          width={400}
          height={500}
        />
      </div>
      <div className='relative flex-shrink-0'>
        <Image
          src='/borrada.jpg'
          alt='Photo 3'
          className='w-[80px] md:w-[150px] lg:w-[300px] h-auto'
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}

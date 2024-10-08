export default function Hero() {
  return (
    <div className='flex items-center justify-between w-full max-w-6xl relative'>
      <div className='relative flex-shrink-0'>
        <img
          src='/hero_2.jpg'
          alt='Photo of me and Adriele looking at the camera on CCBB'
          className='w-[120px] md:w-[150px] lg:w-[300px] h-auto'
          width={300}
          height={400}
        />
      </div>
      <div className='relative flex-shrink-0'>
        <img
          src='/hero_1_cropped.jpg'
          alt='Our outfit details'
          className='w-[150px] md:w-[200px] lg:w-[400px] h-auto'
          width={400}
          height={500}
        />
      </div>
      <div className='relative flex-shrink-0'>
        <img
          src='/hero_3.jpg'
          alt='Me and Adriele dancing'
          className='w-[120px] md:w-[150px] lg:w-[300px] h-auto'
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}

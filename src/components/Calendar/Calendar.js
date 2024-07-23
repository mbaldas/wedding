export default function Calendar() {
  const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className='flex flex-col items-center mb-8'>
      <h3 className='text-lg md:text-xl font-semibold text-center uppercase'>
        Setembro 2024
      </h3>
      <div className='grid grid-cols-7 gap-x-2 gap-y-2 md:gap-x-6 md:gap-y-3 mt-4 text-black'>
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className='text-center font-semibold text-sm md:text-base'
          >
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className='relative flex items-center justify-center p-1 md:p-2'
          >
            {day === 21 ? (
              <div className='relative flex items-center justify-center'>
                <span className='relative z-10 font-bold text-sm md:text-base'>
                  {day}
                </span>
                <div className='absolute flex items-center justify-center'>
                  <svg
                    className='absolute w-6 h-6 md:w-10 md:h-10'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='red'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                  </svg>
                </div>
              </div>
            ) : (
              <span className='text-sm md:text-base'>{day}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

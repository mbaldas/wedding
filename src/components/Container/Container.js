export default function Container({ children }) {
  return (
    <div className='flex-1 flex flex-col mx-auto w-full max-w-[1200px] md:px-6'>
      {children}
    </div>
  );
}

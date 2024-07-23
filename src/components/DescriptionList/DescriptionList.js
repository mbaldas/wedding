import { Calendar } from '../Calendar';

export default function DescriptionList() {
  return (
    <div className='gap-y-3 lg:gap-x-24 grid grid-cols-12'>
      <div className='col-span-full lg:col-span-6'>
        <Calendar />
      </div>
      <div className='col-span-full lg:col-span-6'>
        <div className='flex gap-y-8 flex-col items-start justify-center h-full'>
          <div className='border-l-2 pl-6 border-l-gray-200'>
            <h2 className='text-2xl md:text-3xl uppercase font-semibold text-gray-500'>
              Cerimônia
            </h2>
            <p className='text-lg md:text-xl mt-4 font-bold text-black'>
              16hr - Maricá Garden Lounge
            </p>
            <p className='text-sm md:text-base font-medium text-gray-700'>
              R. Gerânio, 5/6 - Condado de Maricá
            </p>
            <p className='text-xs text-gray-500 mb-4'>
              Vagas disponíveis na rua do salão
            </p>
            <a
              type='button'
              className='rounded-lg bg-gray-800 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-900'
              href='https://maps.app.goo.gl/tYFpHTDubwfeXhG4A'
              target='_blank'
            >
              Ver no Mapa
            </a>
          </div>
          <div className='border-l-2 pl-6 border-l-gray-200'>
            <h2 className='text-2xl md:text-3xl uppercase font-semibold text-gray-500'>
              Dress Code
            </h2>
            <p className='text-lg md:text-xl mt-4 font-bold text-black'>
              Traje Esporte Fino
            </p>
            <p className='text-sm md:text-base font-medium text-gray-700'>
              Evitar roupa branca
            </p>
            <p className='text-sm md:text-base font-medium text-gray-700'>
              Evitar chinelo durante a cerimônia
            </p>
            <p className='text-xs text-gray-500 mb-4'>
              Mas, não deixe de levá-lo para dançar a noite toda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

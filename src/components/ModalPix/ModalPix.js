import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import Image from 'next/image';

export default function ModalPix({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='flex flex-col items-center space-y-4'>
              <div className='relative w-32 h-32'>
                <Image
                  src='/qr.png'
                  alt='QR Code'
                  layout='fill'
                  className='object-cover'
                />
              </div>
              <span className='text-center text-xs lg:text-sm text-gray-800'>
                Caso prefira, chave pix: adrielematoso@outlook.com
              </span>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

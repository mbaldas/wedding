import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { sendGift } from '../../../action';
import { useRouter } from 'next/navigation';

export default function ModalCard({ open, onClose, link, gift }) {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendGift(name, gift);
      setName('');
      onClose();
      router.push(link);
    } catch (error) {
      console.error('Falha ao enviar presente :(', error);
      alert('Falha ao enviar presente :(' + (error.message || 'Unknown error'));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'
          >
            <div className='flex flex-col items-center space-y-4'>
              <form onSubmit={handleSubmit} className='space-y-6 w-full'>
                <div className='flex items-center space-x-4'>
                  <label
                    htmlFor='name'
                    className='w-1/4 text-sm font-medium text-gray-600'
                  >
                    Nome
                  </label>
                  <div className='w-3/4'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Digite seu nome'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className='block w-full text-sm p-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:tracking-wider'
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-lg font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-150'
                  >
                    Confirmar e Pagar
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

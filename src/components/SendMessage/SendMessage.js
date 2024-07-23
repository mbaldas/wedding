import { useState } from 'react';
import { Inter } from 'next/font/google';
import { sendMessage } from '../../../action';

const inter = Inter({ subsets: ['latin'] });

export default function SendMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(name, message);
      setName('');
      setMessage('');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <div
      className={`font-inter mb-24 border border-gray-200 px-4 sm:p-6 lg:p-8 bg-white rounded ${inter.className}`}
    >
      <form onSubmit={handleSubmit} className='space-y-6'>
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

        <div className='flex items-center space-x-4'>
          <label
            htmlFor='message'
            className='w-1/4 text-sm font-medium text-gray-600'
          >
            Mensagem
          </label>
          <div className='w-3/4'>
            <textarea
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows='4'
              placeholder='Digite aqui sua mensagem de amor pra nós'
              className='block w-full text-sm p-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:tracking-wider'
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-md text-lg font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition duration-150'
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
}

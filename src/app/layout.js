import { Cinzel } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Adriele & Matheus',
  description: 'Junte-se a nós no nosso dia especial',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}

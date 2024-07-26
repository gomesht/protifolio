import Link from 'next/link';
import './globals.css';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'Henrique Tavares Gomes',
  description: 'Aqui você vai conhecer um pouco mais sobre o Henrique.',
};

export default function RootLayout({ children }) {
  const link =
    'transform hover:scale-125 transition-transform duration-300 text-xs lg:text-lg';
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <header className="flex items-center justify-between w-full py-10 bg-bkg-dark-green text-white  flex-col lg:flex-row lg:p-20 lg:mt-10">
            <Image src={'/HTG.png'} width={150} height={150} alt="Logo" />
            <nav className="flex gap-10">
              <Link href="/" className={link}>
                Início
              </Link>
              <Link href="/certificados" className={link}>
                Certificados
              </Link>
              <Link href="/projetos" className={link}>
                Projetos
              </Link>
              <Link href="/contato" className={link}>
                Contato
              </Link>
            </nav>
          </header>

          <main className="flex-grow w-full">{children}</main>

          <footer className="flex-shrink-0 px-10 flex flex-col items-center bg-slate-100 w-full h-15">
            <p className="flex items-center space-x-4">
              <span>Desenvolvido por Henrique Tavares Gomes</span>
              <a
                href="https://www.linkedin.com/in/gomesht/"
                className="flex items-center"
              >
                <Image
                  src={'/linkedIn.png'}
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://github.com/gomesht"
                className="flex items-center"
              >
                <Image
                  src={'/github.png'}
                  width={20}
                  height={20}
                  alt="GitHub"
                />
              </a>
              <a
                href="https://wa.me/5531999637526?text=Ol%C3%A1%2C%20vim%20do%20seu%20site"
                className="flex items-center"
              >
                <Image
                  src={'/whatsapp1.png'}
                  width={20}
                  height={20}
                  alt="WhatsApp"
                />
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

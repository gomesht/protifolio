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
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto">
          <header className="flex items-center justify-between w-full py-10">
            {/* <span className="text-2xl font-black cursor-default">INSIGHTS</span> */}
            <Image src={'/HTG.png'} width={150} height={150} />
            <nav className="flex gap-10">
              <Link href="/">início</Link>
              <Link href="/certificados">Certificados</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
            </nav>
          </header>

          {children}

          <footer className="p-10 flex flex-col items-center">
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
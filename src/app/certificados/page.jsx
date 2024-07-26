'use client';
import Image from 'next/image';
import { useState } from 'react';

const certificados = [
  {
    nome: 'Certificado Next.JS',
    imagem: '/NextJS.jpeg',
  },
  {
    nome: 'Certificado JavaScript FullStack',
    imagem: '/JavascriptFullStack.jpeg',
  },
  {
    nome: 'Certificado CSS',
    imagem: '/CSSModerno.jpeg',
  },
];

export default function Certificados() {
  const [certificadoAberto, setCertificadoAberto] = useState(null);

  const toggleCertificado = (index) => {
    setCertificadoAberto(certificadoAberto === index ? null : index);
  };

  const h1 = 'mt-5 lg:mt-20 mb-6 text-2xl font-bold';

  return (
    <main class="flex-auto content-start w-full px-5 lg:px-20">
      <h1 className={h1}>Certificados</h1>
      <ul>
        {certificados.map((certificado, index) => (
          <li key={index}>
            <button onClick={() => toggleCertificado(index)}>
              {certificado.nome}
            </button>
            {certificadoAberto === index && (
              <div>
                <Image
                  src={certificado.imagem}
                  alt={certificado.nome}
                  width={800}
                  height={600}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

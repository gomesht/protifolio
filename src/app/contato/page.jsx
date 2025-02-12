import Formulario from '../components/Formulario';

export const metadata = {
  title: 'Contato | HTG',
  description: 'Aqui você pode entrar em contato comigo.',
  //openGraph gera a previsualização do link no facebook
  openGraph: {
    title: 'Contato | HTG',
    description: 'Entre em contato comigo.',
  },
};

export default function Projects() {
  const h1 = 'mt-5 lg:mt-20 mb-6 text-2xl font-bold';
  const h2 = 'mt-8 mb-4 text-xl font-bold';
  const p = 'mt-4 mb-2';

  return (
    <main className="flex-auto content-start w-full px-5 lg:px-20">
      <h1 className={h1}>Contato</h1>
      <Formulario className="flex-auto content-start" />
    </main>
  );
}

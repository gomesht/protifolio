export const metadata = {
  title: 'Projetos | HTG',
  description: 'Aqui você encontra alguns dos meus projetos.',
  //openGraph gera a previsualização do link no facebook
  openGraph: {
    title: 'Projetos | HTG',
    description: 'Aqui você encontra alguns dos meus projetos.',
  },
};

export default function Projects() {
  const h1 = 'mt-5 lg:mt-20 mb-6 text-2xl font-bold';
  const h2 = 'mt-8 mb-4 text-xl font-bold';
  const p = 'mt-4 mb-2';

  return (
    <main className="flex-auto content-start w-full px-5 lg:px-20">
      <h1 className={h1}>Meus Projetos</h1>
    </main>
  );
}

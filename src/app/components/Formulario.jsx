'use client';
import React, { useState } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        assunto,
        mensagem,
      }),
    });

    if (res.ok) {
      console.log('E-mail enviado com sucesso');
      alert('Email enviado com sucesso!');
      setNome('');
      setEmail('');
      setAssunto('');
      setMensagem('');
    } else {
      console.log('Falha ao enviar e-mail');
      alert('Erro ao enviar o email. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="flex flex-col  content-start">
      {/* <h1 className="mt-20 mb-6 text-2xl font-bold">Contato</h1> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          placeholder="Assunto"
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full h-32"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;

'use client';

import { useState, useEffect } from 'react';
import { sendEmail } from '../../../action';
import Image from 'next/image';

const people = [
  { id: 1, name: 'Adriana Matoso', related: [2] },
  { id: 2, name: 'Marcos Matoso', related: [1] },
  { id: 3, name: 'Laísa Leite', related: [4, 5, 6] },
  { id: 4, name: 'Taiane Leite', related: [3, 5, 6] },
  { id: 5, name: 'Cesar Maio', related: [3, 4, 6] },
  { id: 6, name: 'Deusa Leite', related: [3, 4, 5] },
  { id: 7, name: 'Kaique Leite', related: [8, 9] },
  { id: 8, name: 'Aila Leite', related: [7, 9] },
  { id: 9, name: 'Anderson Leite', related: [7, 8] },
  { id: 10, name: 'Edilson Tavares', related: [11, 12, 13] },
  { id: 11, name: 'Esposa Edilson', related: [10, 12, 13] },
  { id: 12, name: 'Giuliana Moreira', related: [10, 13, 11] },
  { id: 13, name: 'Sidwanderson Camargo', related: [10, 12, 11] },
  { id: 14, name: 'Joubert Delduque', related: [15, 16, 17] },
  { id: 15, name: 'Vanessa Delduque', related: [14, 16, 17] },
  { id: 16, name: 'Rayane Delduque', related: [14, 15, 17] },
  { id: 17, name: 'Pedro Henrique Rodrigues', related: [14, 15, 16] },
  { id: 18, name: 'Vinicius Araujo', related: [19] },
  { id: 19, name: 'Bruna Rodrigues', related: [18] },
  { id: 20, name: 'Vitória Cuellar', related: [] },
  { id: 21, name: 'Felipe Nascimento', related: [22] },
  { id: 22, name: 'Matheus Coccaro', related: [23, 24, 25] },
  { id: 23, name: 'Thiago Coccaro', related: [22, 24, 25] },
  { id: 24, name: 'Márcia Coccaro', related: [22, 23, 25] },
  { id: 25, name: 'Davi Coccaro', related: [22, 23, 24] },
  { id: 26, name: 'Giselle Souza', related: [] },
  { id: 27, name: 'Vinicius Todaro', related: [] },
  { id: 28, name: 'Marceli Matoso', related: [33, 34] },
  { id: 29, name: 'Marcio Matoso', related: [30] },
  { id: 30, name: 'Christiane Matoso', related: [29] },
  { id: 31, name: 'Christyano Castro', related: [28, 33] },
  { id: 32, name: 'Maria José', related: [28, 31] },
  { id: 33, name: 'René Artur', related: [34] },
  { id: 34, name: 'Lucas Murilo', related: [33] },
  { id: 35, name: 'Isabella Oliveira', related: [36] },
  { id: 36, name: 'João Victor', related: [35] },
  { id: 37, name: 'Lívia Vilardo', related: [38] },
  { id: 38, name: 'Arthur Souza', related: [37] },
  { id: 39, name: 'Beatriz Rosa', related: [40, 41, 42] },
  { id: 40, name: 'Marlon Castro', related: [39, 41, 42] },
  { id: 41, name: 'Henrique Rosa', related: [39, 40, 42] },
  { id: 42, name: 'Elaine Rosa', related: [39, 40, 41] },
  { id: 43, name: 'Michelle Matos', related: [44] },
  { id: 44, name: 'Rafael Seara', related: [43] },
  { id: 45, name: 'André Lucca', related: [46] },
  { id: 46, name: 'Rafaela Reis', related: [45] },
  { id: 47, name: 'Letícia Machado', related: [48] },
  { id: 48, name: 'Anderson Amaral', related: [47] },
  { id: 49, name: 'Renata Lima', related: [50] },
  { id: 50, name: 'Nilda Mendes', related: [49] },
  { id: 51, name: 'Guilherme Neves', related: [52] },
  { id: 52, name: 'Ana Carolina Oliveira', related: [51] },
  { id: 53, name: 'Izaura Garruth', related: [54] },
  { id: 54, name: 'Maria Clara Garruth', related: [53] },
  { id: 55, name: 'Ramona Farani', related: [56] },
  { id: 56, name: 'Anderson Farani', related: [55] },
  { id: 57, name: 'Marina Amaral', related: [58] },
  { id: 58, name: 'Diogo de Camargo', related: [57] },
  { id: 59, name: 'Guilherme França', related: [60] },
  { id: 60, name: 'Deborah França', related: [59] },
  { id: 61, name: 'Anne Caroline Torres', related: [] },
  { id: 62, name: 'Patricia Baldas', related: [63, 64, 65, 66] },
  { id: 63, name: 'Nathalia Baldas', related: [62, 64, 65, 77] },
  { id: 64, name: 'Paulo Roberto Wandermurem', related: [62, 63, 65, 66] },
  { id: 65, name: 'Cezarino de Souza', related: [62, 63, 64, 66] },
  { id: 66, name: 'Roseli Leal', related: [62, 63, 64, 65] },
  { id: 67, name: 'Aparecida Oliveira', related: [68, 69, 80] },
  { id: 68, name: 'Larissa Oliveira', related: [67, 69, 80] },
  { id: 69, name: 'Ricardo Mattos', related: [67, 68, 80] },
  { id: 70, name: 'Ana Lúcia Hoyos', related: [71] },
  { id: 71, name: 'Elson Hoyos', related: [70] },
  { id: 72, name: 'Elson Hoyos Junior', related: [73] },
  { id: 73, name: 'Tatiane Manhães', related: [72] },
  { id: 74, name: 'Guilherme Alexandre', related: [] },
  { id: 75, name: 'Matheus Giron', related: [76] },
  { id: 76, name: 'Rafaela Seixas', related: [75] },
  { id: 77, name: 'Douglas Gomes', related: [] },
  { id: 78, name: 'Luiza Muniz', related: [89] },
  { id: 79, name: 'Larissa Anghinoni', related: [78] },
  { id: 80, name: 'Lucas Ceia', related: [] },
  { id: 81, name: 'Gabriel Lira', related: [97, 98, 108] },
  { id: 82, name: 'Fábio Araujo Baldas', related: [] },
  { id: 83, name: 'José Wandermurem', related: [90] },
  { id: 84, name: 'Wallace Wandermurem', related: [85] },
  { id: 85, name: 'Alessandrra Wandermurem', related: [84] },
  { id: 86, name: 'Wanderson Wandermurem', related: [87] },
  { id: 87, name: 'Carolina Guerra', related: [86] },
  { id: 88, name: 'Barbara Wandermurem', related: [83] },
  { id: 89, name: 'Luhan Rohan', related: [90] },
  { id: 90, name: 'Ana Clara Carvalho', related: [89] },
  { id: 91, name: 'Nathan Moura', related: [92] },
  { id: 92, name: 'Milena Alves', related: [91] },
  { id: 93, name: 'Leonardo Carvalho', related: [94] },
  { id: 94, name: 'Beatriz Andrade', related: [93] },
  { id: 95, name: 'Odalea Baldas', related: [96] },
  { id: 96, name: 'Fábio Baldas', related: [95] },
  { id: 97, name: 'Val Lira', related: [98, 108, 81] },
  { id: 98, name: 'José Carlos', related: [97, 81, 108] },
  { id: 99, name: 'Hanrry Guerra', related: [67, 68, 69] },
  { id: 100, name: 'Dilza Leite', related: [101, 1, 2] },
  { id: 101, name: 'Arnaldo Leite', related: [100, 1, 2] },
  { id: 102, name: 'Bruna Zangerolame', related: [] },
  { id: 103, name: 'Wislley Costa', related: [104] },
  { id: 104, name: 'Josinaldo Barbosa', related: [103] },
  { id: 105, name: 'Lara Bearzi', related: [] },
  { id: 106, name: 'Washington Silva', related: [107] },
  { id: 107, name: 'Igor Silva', related: [106] },
  { id: 108, name: 'Thayna Lira', related: [] },
];

export default function RSVP() {
  const [query, setQuery] = useState('');
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [relatedPeople, setRelatedPeople] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      setFilteredPeople(
        people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredPeople([]);
    }
  }, [query]);

  const handleSelect = (person) => {
    setSelectedPerson(person);
    const related = person.related.map((id) => people.find((p) => p.id === id));
    setRelatedPeople([person, ...related]);
    setSelectedPeople([person]);
    setQuery('');
    setFilteredPeople([]);
  };

  const handleCheckboxChange = (person) => {
    setSelectedPeople((prev) =>
      prev.includes(person)
        ? prev.filter((p) => p !== person)
        : [...prev, person]
    );
  };

  const handleSubmit = async () => {
    try {
      await sendEmail(selectedPeople);
      alert('Recebemos a sua confirmação, muito obrigado!');
      setSelectedPerson(null);
      setSelectedPeople([]);
      setRelatedPeople([]);
      setQuery('');
      setFilteredPeople([]);
    } catch (error) {
      console.error(error);
      alert(
        'Falha ao enviar confirmação: ' + (error.message || 'Erro desconhecido')
      );
    }
  };

  const handleGoBack = () => {
    setSelectedPerson(null);
    setSelectedPeople([]);
    setRelatedPeople([]);
    setQuery('');
    setFilteredPeople([]);
  };

  return (
    <div className='flex items-center justify-center p-4 md:p-0'>
      <div className='absolute inset-0'>
        <Image
          src='/carro.jpg'
          alt='Adriele & Matheus'
          layout='fill'
          objectFit='cover'
          quality={100}
          className='opacity-70'
        />
      </div>
      <div className='relative text-white max-w-2xl items-center text-center flex flex-col'>
        {!selectedPerson && (
          <p className='text-lg md:text-xl text-white'>
            Digite seu nome &gt; Selecione seu nome &gt; Marque o nome dos seus
            familiares &gt; Clique em confirmar presença
          </p>
        )}

        {!selectedPerson ? (
          <div className='relative w-full md:w-[300px] mt-6 md:mt-8'>
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Digite seu nome'
              className='block w-full placeholder:text-black text-gray-800 bg-white/80 px-2 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800'
            />
            {filteredPeople.length > 0 && (
              <ul className='absolute z-10 text-left mt-1 bg-white/80 w-full text-gray-800 border border-gray-300 rounded-md shadow-lg'>
                {filteredPeople.map((person) => (
                  <li
                    key={person.id}
                    onClick={() => handleSelect(person)}
                    className='cursor-pointer rounded-md py-2 px-4 text-gray-800'
                  >
                    {person.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <>
            <div className='p-4 md:p-6 w-full md:w-[300px] mt-6 md:mt-8 space-y-3'>
              {relatedPeople.map((person) => (
                <div
                  key={person.id}
                  className='flex items-center rounded-md shadow-md bg-white/80 p-2 md:p-3'
                >
                  <input
                    checked={selectedPeople.includes(person)}
                    id={`person-${person.id}`}
                    name='related-person'
                    type='checkbox'
                    onChange={() => handleCheckboxChange(person)}
                    className='h-4 w-4 md:h-6 md:w-6 bg-gray-800 border-gray-300 text-gray-800 focus:ring-gray-800 rounded'
                  />
                  <label
                    htmlFor={`person-${person.id}`}
                    className='ml-2 md:ml-3 block text-xs md:text-sm font-medium text-gray-800'
                  >
                    {person.name}
                  </label>
                </div>
              ))}
            </div>
            <div className='flex flex-col space-y-4 mt-4'>
              <button
                onClick={handleSubmit}
                className='px-4 py-2 text-xs md:text-base bg-gray-600 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
              >
                Confirmar Presença
              </button>
              <button
                onClick={handleGoBack}
                className='px-4 py-2 text-xs md:text-base bg-gray-400 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2'
              >
                Voltar
              </button>
            </div>
          </>
        )}
        <span className='block text-base md:text-lg mt-6 md:mt-8'>
          Confirme até a data 1 de setembro.
        </span>
        <span className='block text-xs md:text-sm italic mt-1'>
          A não confirmação será considerada como ausência.
        </span>
      </div>
    </div>
  );
}

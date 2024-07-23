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
  { id: 7, name: 'Kaique Leite', related: [8, 9, 10] },
  { id: 8, name: 'Kauan Leite', related: [7, 9, 10] },
  { id: 9, name: 'Aila Leite', related: [7, 8, 10] },
  { id: 10, name: 'Anderson Leite', related: [7, 8, 9] },
  { id: 11, name: 'Edilson Tavares', related: [12, 13] },
  { id: 12, name: 'Giuliana Moreira', related: [11, 13] },
  { id: 13, name: 'Sidwanderson Camargo', related: [11, 12] },
  { id: 14, name: 'Joubert Delduque', related: [15, 16] },
  { id: 15, name: 'Vanessa Delduque', related: [14, 16] },
  { id: 16, name: 'Rayane Delduque', related: [14, 15] },
  { id: 17, name: 'Vinicius Araujo', related: [18] },
  { id: 18, name: 'Bruna Rodrigues', related: [17] },
  { id: 19, name: 'Vitória Cuellar', related: [] },
  { id: 20, name: 'Raynne Xavier', related: [] },
  { id: 21, name: 'Felipe Nascimento', related: [] },
  { id: 22, name: 'Matheus Coccaro', related: [23, 25, 26] },
  { id: 23, name: 'Thiago Coccaro', related: [22, 25, 26] },
  { id: 25, name: 'Márcia Coccaro', related: [22, 23, 26] },
  { id: 26, name: 'Michel Kogut', related: [22, 23, 25] },
  { id: 27, name: 'Giselle Souza', related: [] },
  { id: 28, name: 'Vinicius Todaro', related: [] },
  { id: 29, name: 'Marceli Matoso', related: [34] },
  { id: 30, name: 'Marcio Matoso', related: [31] },
  { id: 31, name: 'Christiane Matoso', related: [30] },
  { id: 32, name: 'Christyan Castro', related: [] },
  { id: 33, name: 'Christyano Castro', related: [] },
  { id: 34, name: 'Maria José', related: [] },
  { id: 35, name: 'René Artur', related: [36] },
  { id: 36, name: 'Lucas Murilo', related: [35] },
  { id: 37, name: 'Isabella Oliveira', related: [38] },
  { id: 38, name: 'João Victor', related: [37] },
  { id: 39, name: 'Lívia Vilardo', related: [40] },
  { id: 40, name: 'Arthur Souza', related: [39] },
  { id: 41, name: 'Wislley Costa', related: [] },
  { id: 42, name: 'Beatriz Rosa', related: [43, 44, 45] },
  { id: 43, name: 'Marlon Castro', related: [42, 44, 45] },
  { id: 44, name: 'Henrique Rosa', related: [42, 43, 45] },
  { id: 45, name: 'Elaine Rosa', related: [42, 43, 44] },
  { id: 46, name: 'Michelle Matos', related: [47] },
  { id: 47, name: 'Rafael Seara', related: [46] },
  { id: 48, name: 'André Lucca', related: [49] },
  { id: 49, name: 'Rafaela Reis', related: [48] },
  { id: 50, name: 'Letícia Machado', related: [51] },
  { id: 51, name: 'Anderson Amaral', related: [50] },
  { id: 52, name: 'Renata Lima', related: [104] },
  { id: 53, name: 'Guilherme Neves', related: [54] },
  { id: 54, name: 'Ana Carolina Oliveira', related: [53] },
  { id: 55, name: 'Izaura Garruth', related: [56] },
  { id: 56, name: 'Maria Clara Garruth', related: [55] },
  { id: 57, name: 'Ramona Farani', related: [58] },
  { id: 58, name: 'Anderson Farani', related: [57] },
  { id: 59, name: 'Marina Amaral', related: [60] },
  { id: 60, name: 'Diogo de Camargo', related: [59] },
  { id: 61, name: 'Guilherme França', related: [62] },
  { id: 62, name: 'Deborah França', related: [61] },
  { id: 63, name: 'Anne Caroline Torres', related: [] },
  { id: 64, name: 'Patricia Baldas', related: [65, 66, 67, 68] },
  { id: 65, name: 'Nathalia Baldas', related: [64, 66, 67, 78] },
  { id: 66, name: 'Paulo Roberto Wandermurem', related: [64, 65, 67, 68] },
  { id: 67, name: 'Cezarino de Souza', related: [64, 65, 66, 68] },
  { id: 68, name: 'Roseli Leal', related: [64, 65, 66, 67] },
  { id: 69, name: 'Aparecida Oliveira', related: [70, 71, 103] },
  { id: 70, name: 'Larissa Oliveira', related: [69, 71, 103] },
  { id: 71, name: 'Ricardo Mattos', related: [69, 70, 103] },
  { id: 72, name: 'Ana Lúcia Hoyos', related: [73] },
  { id: 73, name: 'Elson Hoyos', related: [72] },
  { id: 74, name: 'Elson Hoyos Junior', related: [75] },
  { id: 75, name: 'Tatiane Manhães', related: [74] },
  { id: 76, name: 'Guilherme Alexandre', related: [] },
  { id: 77, name: 'Matheus Giron', related: [78] },
  { id: 78, name: 'Rafaela Seixas', related: [77] },
  { id: 79, name: 'Douglas Gomes', related: [] },
  { id: 80, name: 'Luiza Muniz', related: [102] },
  { id: 81, name: 'Lucas Ceia', related: [] },
  { id: 82, name: 'Yuri Baldas', related: [] },
  { id: 83, name: 'Fábio Araujo Baldas', related: [] },
  { id: 84, name: 'José Wandermurem', related: [89] },
  { id: 85, name: 'Wallace Wandermurem', related: [86] },
  { id: 86, name: 'Alessandrra Wandermurem', related: [85] },
  { id: 87, name: 'Wanderson Wandermurem', related: [88] },
  { id: 88, name: 'Carolina Guerra', related: [87] },
  { id: 89, name: 'Barbara Wandermurem', related: [84] },
  { id: 90, name: 'Luhan Rohan', related: [91] },
  { id: 91, name: 'Ana Clara Carvalho', related: [90] },
  { id: 92, name: 'Nathan Moura', related: [93] },
  { id: 93, name: 'Milena Alves', related: [92] },
  { id: 94, name: 'Leonardo Carvalho', related: [95] },
  { id: 95, name: 'Beatriz Andrade', related: [94] },
  { id: 96, name: 'Allan Joubert', related: [97] },
  { id: 97, name: 'Lorenna Fioravante', related: [96] },
  { id: 98, name: 'Odalea Baldas', related: [99] },
  { id: 99, name: 'Fábio Baldas', related: [98] },
  { id: 100, name: 'Val Lira', related: [101] },
  { id: 101, name: 'José Carlos', related: [100] },
  { id: 102, name: 'Larissa Anghinoni', related: [80] },
  { id: 103, name: 'Hanrry Guerra', related: [69, 70, 71] },
  { id: 104, name: 'Nilda Mendes', related: [52] },
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
    setSelectedPeople([person]); // Initially select the chosen person
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
      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
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
            <button
              onClick={handleSubmit}
              className='mt-4 px-4 py-2 text-xs md:text-base bg-gray-600 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
            >
              Confirmar Presença
            </button>
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

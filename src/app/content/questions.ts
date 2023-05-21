import { Difficulty } from '../types/Difficulty';
import IQuestion from '../types/IQuestion';

/*
  EASY: 36 preguntas
  MEDIUM_EASY: 67 preguntas
  MEDIUM: 105 preguntas
  HARD: 48 preguntas
  VERY_HARD:19 preguntas
*/


export const questions: IQuestion[] = [
  //EASY
    {
      difficulty: Difficulty.EASY,
      question: '¿Cuál es la capital de Portugal?',
      options: [
        'Lisboa', 
        'Madrid', 
        'Barcelona', 
        'Valencia',
      ],
      reference: ''
    },
    {
      difficulty: Difficulty.EASY,
      question: '¿En qué ciudad se encuentra la famosa Torre Inclinada?',
      options: [
        'Pisa',
        'París',
        'Londres',
        'Berlín'
      ],
      reference: ''
    },
    {
      difficulty: Difficulty.EASY,
      question: '¿Qué banda de rock tiene como vocalista a Bono?',
      options: [
        'U2', 
        'The Rolling Stones', 
        'Queen', 
        'AC/DC',
      ],
      reference: ''
    },
    {
      difficulty: Difficulty.EASY,
      question: '¿Cuál es el nombre del actor que interpretó a Neo en la película \'The Matrix\'?',
      options: [
        'Keanu Reeves', 
        'Tom Cruise', 
        'Brad Pitt', 
        'Will Smith'
      ],
      reference: ''
    },
    {
      difficulty: Difficulty.EASY,
      question: '¿Quién compuso la Novena Sinfonía?',
      options: [
        'Ludwig van Beethoven',
        'Wolfgang Amadeus Mozart', 
        'Johann Sebastian Bach', 
        'Franz Schubert'
      ],
      reference: ''
    },
    {
      difficulty: Difficulty.EASY,
      question: 'Qué día se celebra el Día de San Valentín?',
      options: [
      '14 de febrero',
      '14 de abril',
      '14 de mayo',
      '14 de julio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el nombre del metal líquido que se utiliza en los termómetros?',
    options: [
      'Mercurio', 
      'Oro', 
      'Plata', 
      'Hierro'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la capital de México?',
    options: [
      'Ciudad de México',
      'Guadalajara', 
      'Monterrey', 
      'Puebla,'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Qué ciudad es conocida como \'La Ciudad Eterna\'?',
    options: [
      'Roma',
      'Estambul',
      'Venezia',
      'Atenas'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Qué científico desarrolló la teoría de la relatividad?',
    options: [
      'Albert Einstein', 
      'Galileo Galilei', 
      'Nikola Tesla', 
      'Isaac Newton'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Quién fue el líder de la Revolución Cubana que derrocó al dictador Fulgencio Batista en 1959?',
    options: [
      'Fidel Castro', 
      'Che Guevara', 
      'Camilo Cienfuegos', 
      'Raúl Castro'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el nombre del satélite natural de la Tierra?',
    options: [
      'Luna', 
      'Io', 
      'Ganímedes', 
      'Europa'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿En qué país se encuentra la Torre Eiffel?',
    options: [
      'Francia', 
      'Alemania', 
      'Italia', 
      'España'

    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el animal más rápido del mundo?',
    options: [
      'Guepardo',
      'Águila',
      'Leopardo',
      'Lobo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿En qué país se encuentra la Gran Muralla China?',
    options: [
      'China',
      'Japón',
      'Corea del Norte',
      'Vietnam'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el país más grande del mundo por superficie terrestre?',
    options: [
      'Rusia',
      'China',
      'Estados Unidos',
      'Brasil'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el nombre de la célula reproductora femenina?',
    options: [
      'Óvulo',
      'Espermatozoide',
      'Cigoto',
      'Blastocisto'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: 'Cuál es la fórmula química del agua?',
    options: [
      'H2O',
      'CO2',
      'NaCl',
      'NH3'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la capital de la República Popular China',
    options: [
      'Pekín',
      'Hong Kong',
      'Shanghái',
      'Macao',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el elemento químico más abundante en la corteza terrestre?',
    options: [
      'Oxígeno',
      'Hierro',
      'Calcio',
      'Aluminio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Quién escribió la obra \'El Quijote\'?',
    options: [
      'Miguel de Cervantes', 
      'William Shakespeare', 
      'Gustave Flaubert', 
      'Jane Austen',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la capital de Argentina?',
    options: [
      'Buenos Aires', 
      'Santiago de Chile', 
      'Montevideo', 
      'Caracas'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el nombre del presidente de Rusia en la actualidad (2023)?',
    options: [
      'Vladimir Putin', 
      'Dmitry Medvédev', 
      'Vladimir Zhirinovsky', 
      'Alexander Lukashenko',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿En qué país se encuentra el río Amazonas?',
    options: [
      'Brasil', 
      'Argentina', 
      'Perú', 
      'Colombia'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿En qué país se encuentra la ciudad de Marrakech?',
    options: [
      'Marruecos', 
      'Argelia', 
      'Túnez', 
      'Turquía'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿En qué país nació el fundador de Apple, Steve Jobs?',
    options: [
      'Estados Unidos', 
      'Japón', 
      'China', 
      'India',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Qué pintor español creó \'Las Meninas\'?',
    options: [
      'Diego Velázquez', 
      'Pablo Picasso', 
      'Salvador Dalí', 
      'Joan Miró'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la capital de Francia?',
    options: [
      'París',
      'Roma',
      'Madrid',
      'Londres'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: 'Qué famoso director de cine dirigió \'Psicosis\'?',
    options: [
      'Alfred Hitchcock',
      'Stanley Kubrick',
      'Martin Scorsese',
      'Francis Ford Coppola'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la velocidad de la luz en el vacío?',
    options: [
      '300.000 kilómetros por segundo', 
      '200.000 kilómetros por segundo', 
      '150.000 kilómetros por segundo', 
      '100.000 kilómetros por segundo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es la montaña más alta del mundo?',
    options: [
      'Monte Everest', 
      'K2', 
      'Monte Kilimanjaro', 
      'Monte Aconcagua'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Quién escribió la obra \'Romeo y Julieta\'?',
    options: [
      'William Shakespeare', 
      'Miguel de Cervantes', 
      'Charles Dickens', 
      'Fyodor Dostoyevsky'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el número atómico del hidrógeno?',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el país más poblado del mundo?',
    options: [
      'China', 
      'India', 
      'Estados Unidos', 
      'Brasil'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el planeta más cercano al Sol?',
    options: [
      'Mercurio',
      'Venus', 
      'Marte', 
      'Júpiter',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.EASY,
    question: '¿Cuál es el continente más grande del mundo en términos de superficie?',
    options: [
      'Asia',
      'África', 
      'América del Norte', 
      'Europa'
    ],
    reference: ''
  },
  // MEDIUM_EASY
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
    options: [
      '1892',
      '1896',
      '1900',
      '1904'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'Qué actor interpretó el papel principal en la película \'Forrest Gump\'?',
    options: [
      'Tom Hanks',
      'Brad Pitt',
      'Johnny Depp', 
      'Leonardo DiCaprio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Que hombre tenía una larga y pesada cabellera?',
    options: [
      'Sansón', 
      'Juan el Bautista', 
      'Roboam', 
      'Absalón'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién fue el primer presidente de los Estados Unidos de América?',
    options: [
      'George Washington', 
      'Thomas Jefferson', 
      'Abraham Lincoln', 
      'Benjamin Franklin'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la obra maestra de Leonardo da Vinci que se encuentra en el Museo del Louvre?',
    options: [
      'La Gioconda o Mona Lisa',
      'La última cena', 
      'La creación de Adán', 
      'La Venus de Milo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué año se llevó a cabo la Revolución Rusa?',
    options: [
      '1917', 
      '1914', 
      '1922', 
      '1910'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué país es el hogar del Taj Mahal?',
    options: [
      'India', 
      'Tailandia', 
      'Camboya', 
      'Malasia'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué elemento químico tiene el símbolo \'Fe\' en la tabla periódica?',
    options: [
      'Hierro',
      'Plata', 
      'Oro', 
      'Cobre'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué famoso pintor holandés cortó su propia oreja?',
    options: [
      'Vincent van Gogh', 
      'Rembrandt van Rijn', 
      'Johannes Vermeer', 
      'Pieter Bruegel'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la moneda oficial de México?',
    options: [
      'Peso mexicano', 
      'Dólar estadounidense',
      'Euro', 
      'Yen japonés'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién fue el primer ser humano en viajar al espacio?',
    options: [
      'Yuri Gagarin',
      'Neil Armstrong',
      'Alan Shepard', 
      'Buzz Aldrin'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el planeta más grande del sistema solar?',
    options: [
      'Júpiter',
      'Saturno',
      'Neptuno',
      'Urano'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién descubrió la penicilina?',
    options: [
      'Alexander Fleming', 
      'Louis Pasteur', 
      'Marie Curie', 
      'Albert Einstein'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién es el fundador de la compañía Apple?', 
    options: [
      'Steve Jobs', 
      'Bill Gates', 
      'Mark Zuckerberg', 
      'Larry Page',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el símbolo químico del sodio?',
    options: [
      'Na', 
      'So', 
      'Si', 
      'Sd'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Canadá?' ,
    options: [
      'Ottawa',
      'Toronto',
      'Vancouver',
      'Montreal'
    ],
    reference: '' 
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el gas más abundante en la atmósfera terrestre?',
    options: [
      'Nitrógeno',
      'Oxígeno',
      'Dióxido de carbono',
      'Argón'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Egipto?',
    options: [
      'El Cairo',
      'Alejandría',
      'Giza',
      'Luxor'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién pintó la \'Mona Lisa\'?',
    options: [
      'Leonardo da Vinci',
      'Michelangelo',
      'Rafael',
      'Botticelli',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién escribió \'La Divina Comedia\'?',
    options: [
      'Dante Alighieri',
      'Giovanni Boccaccio',
      'Francesco Petrarca',
      'Niccolò Machiavelli'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál de las siguientes enfermedades no está causada por un virus?',
    options: [
      'Malaria',
      'Hepatitis',
      'SIDA',
      'Varicela'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la lengua oficial de Brasil?',
    options: [
      'Portugués',
      'Español',
      'Inglés',
      'Francés'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el único país del mundo cuya bandera no es cuadrada?',
    options: [
      'Nepal',
      'Suiza',
      'Malta',
      'Liechtenstein'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el libro más vendido de todos los tiempos?',
    options: [
      'La Biblia',
      'Don Quijote de la Mancha',
      'El Principito',
      'Harry Potter y la Piedra Filosofal'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la célula reproductora masculina?',
    options: [
      'Espermatozoide',
      'Óvulo',
      'Cigoto',
      'Embrión'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre del proceso mediante el cual se libera energía a partir de la glucosa?',
    options: [
      'Glucólisis',
      'Respiración celular',
      'Fotosíntesis',
      'Fermentación'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre del continente más frío del mundo',
    options: [
      'Antártida',
      'Asia',
      'Europa',
      'América del Sur',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la ley que establece que la energía no se puede crear ni destruir, solo transformar?',
    options: [
      'Ley de la conservación de la energía', 
      'Ley de la gravitación universal', 
      'Ley de la termodinámica', 
      'Ley de la relatividad'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién fue el primer hombre en pisar la Luna?',
    options: [
      'Neil Armstrong',
      'Buzz Aldrin',
      'Yuri Gagarin',
      'Alan Shepard'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la molécula responsable de la transmisión de la información genética?',
    options: [
      'ADN',
      'ARN',
      'Carbohidrato',
      'Proteína'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué año se hundió el Titanic?',
    options: [
      '1912',
      '1910',
      '1914',
      '1916'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el océano más pequeño del mundo?',
    options: [
      'Océano Ártico', 
      'Océano Atlántico', 
      'Océano Índico', 
      'Océano Pacífico'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué país se encuentra la ciudad de Praga?',
    options: [
      'República Checa', 
      'Polonia', 
      'Alemania', 
      'Hungría',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué grupo musical británico se hizo famoso en los años 60 con canciones como \'Hey Jude\' y \'Let It Be\'?',
    options: [
      'The Beatles', 
      'The Rolling Stones', 
      'Led Zeppelin', 
      'Pink Floyd',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la mayor cadena montañosa del mundo?',
    options: [
      'El Himalaya', 
      'Los Andes', 
      'Los Alpes', 
      'Las Rocosas'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el metal más abundante en la corteza terrestre?',
    options: [
      'Aluminio', 
      'Hierro', 
      'Plomo', 
      'Cobre'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la moneda oficial de Japón?',
    options: [
      'Yen', 
      'Dólar', 
      'Euro', 
      'Libra'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre del pigmento que da a las plantas su color verde?',
    options: [
      'Clorofila', 
      'Melanina', 
      'Hemoglobina', 
      'Caroteno',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre del protagonista en la novela \'Don Quijote de la Mancha\'?',
    options: [
      'Alonso Quixano', 
      'Sancho Panza', 
      'Dulcinea del Toboso', 
      'Rocinante'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la forma de gobierno en la que una sola persona tiene el poder absoluto?',
    options: [
      'Dictadura', 
      'Democracia', 
      'Monarquía', 
      'República'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Marruecos?',
    options: [
      'Rabat', 
      'Tánger', 
      'Casablanca', 
      'Fez'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el único metal líquido a temperatura ambiente?',
    options: [
      'Mercurio', 
      'Plomo', 
      'Hierro', 
      'Oro'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Ucrania?',
    options: [
      'Kiev',
      'Moscú',
      'Minsk',
      'Chisinau'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el océano más frío del mundo?,',
    options: [
      'Océano Ártico',
      'Océano Atlántico',
      'Océano Índico',
      'Océano Pacífico'
    ],
    reference: ''
  },

  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el continente más poblado?',
    options: [
      'Asia',
      'África',
      'Europa',
      'América'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién compuso la \'Quinta Sinfonía\'?',
    options: [
      'Ludwig van Beethoven',
      'Wolfgang Amadeus Mozart',
      'Johann Sebastian Bach',
      'Franz Schubert'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién compuso la ópera \'La Traviata\'?',
    options: [
      'Giuseppe Verdi',
      'Wolfgang Amadeus Mozart',
      'Gioachino Rossini',
      'Richard Wagner'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué año se fundó Google?',
    options: [
      '1998',
      '2001',
      '2004',
      '1995'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'Quién pintó \'La creación de Adán\' en la Capilla Sixtina?',
    options: [
      'Miguel Ángel',
      'Leonardo da Vinci',
      'Sandro Botticelli',
      'Rafael Sanzio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Quién es el autor de la novela \'El nombre de la rosa\'?',
    options: [
      'Umberto Eco',
      'Mario Vargas Llosa',
      'Gabriel García Márquez',
      'Jorge Luis Borges'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'En qué país se encuentra el Monte Everest?',
    options: [
      'Nepal',
      'China',
      'India',
      'Bután'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'Qué científico descubrió la ley de la gravitación universal?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Johannes Kepler'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué presidente de los Estados Unidos aparece en el billete de $1?',
    options: [
      'George Washington', 
      'Abraham Lincoln', 
      'Thomas Jefferson', 
      'Benjamin Franklin'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: 'Cuál es la obra más famosa de William Shakespeare?',
    options: [
      'Hamlet', 
      'Macbeth', 
      'Romeo y Julieta', 
      'Otelo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la galaxia en la que se encuentra nuestro sistema solar?',
    options: [
      'Vía Láctea',
      'Andrómeda', 
      'Cigarro', 
      'Sombrero'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿En qué año comenzó la Segunda Guerra Mundial?',
    options: [
      '1939', 
      '1941', 
      '1945', 
      '1948'
    ],
    reference:'' 
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Irlanda?',
    options: [
      'Dublín', 
      'Edimburgo', 
      'Belfast', 
      'Cork'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el metal más precioso?',
    options: [
      'Oro', 
      'Plata', 
      'Platino', 
      'Cobre'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el órgano más grande del cuerpo humano?',
    options: [
      'Piel', 
      'Corazón', 
      'Pulmón', 
      'Hígado'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el principal gas que emite el efecto invernadero?',
    options: [
      'Dióxido de carbono', 
      'Oxígeno', 
      'Nitrógeno', 
      'Metano'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el principal ingrediente del sushi?',
    options: [
      'Arroz', 
      'Fideos', 
      'Pescado', 
      'Verduras'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el nombre de la mascota de la marca Disney?',
    options: [
      'Pluto', 
      'Mickey Mouse', 
      'Donald Duck', 
      'Goofy',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es la capital de Brasil?',
    options: [
      'Brasilia', 
      'São Paulo', 
      'Río de Janeiro', 
      'Buenos Aires'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Qué país fue el anfitrión de los Juegos Olímpicos de verano en 2016?',
    options: [
      'Brasil', 
      'China', 
      'Reino Unido', 
      'Australia'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el proceso por el cual las plantas convierten la luz solar en energía?',
    options: [
      'Fotosíntesis', 
      'Respiración', 
      'Evaporación', 
      'Transpiración',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el país más grande de África?',
    options: [
      'Argelia', 
      'Sudáfrica', 
      'Egipto', 
      'Nigeria'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM_EASY,
    question: '¿Cuál es el país más pequeño del mundo en términos de superficie?', 
    options: [
      'Vaticano', 
      'Mónaco', 
      'San Marino',
      'Malta'
    ],
    reference: ''
  },
  // MEDIUM
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del protagonista de la novela \'Cien años de soledad\' de Gabriel García Márquez?',
    options: [
      'Aureliano Buendía', 
      'Arcadio Buendía', 
      'José Arcadio Buendía', 
      'Úrsula Iguarán'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué famoso compositor es conocido por su obra \'Las cuatro estaciones\'?',
    options: [
      'Antonio Vivaldi',
      'Johann Sebastian Bach',
      'Ludwig van Beethoven', 
      'Wolfgang Amadeus Mozart'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿De qué banda de rock es guitarrista David Gilmour?',
    options: [
      'Pink Floyd',
      'The Beatles', 
      'The Rolling Stones', 
      'Led Zeppelin'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del instrumento musical que se toca con las manos y se origina en Cuba?',
    options: [
      'Bongó', 
      'Conga', 
      'Timbal', 
      'Maracas'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió la novela \'Matar a un ruiseñor\'\'?',
    options: [
      'Harper Lee', 
      'William Faulkner', 
      'Ernest Hemingway', 
      'John Steinbeck'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Surinam?',
    options: [
      'Paramaribo', 
      'Boavista', 
      'Macapa', 
      'Aruba'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál de estos compuestos químicos es conocido como \'el rey de los venenos\'?',
    options: [
      'Cianuro de potasio', 
      'Sulfato de cobre', 
      'Ácido sulfúrico', 
      'Plomo tetraetilo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la pintura de Edvard Munch que representa una figura humana gritando?',
    options: [
      'El grito', 
      'La noche estrellada', 
      'La persistencia de la memoria', 
      'Los girasoles'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Australia?',
    options: [
      'Canberra', 
      'Melbourne', 
      'Sídney', 
      'Perth'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Senegal?',
    options: [
      'Dakar',
      'Accra',
      'Lagos',
      'Abuya'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Laos?',
    options: [
      'Vientián',
      'Phnom Penh',
      'Bangkok',
      'Naypyidaw'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el río más largo de Europa?',
    options: [
      'Río Volga',
      'Río Danubio',
      'Río Rin',
      'Río Támesis'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el número atómico del oxígeno?',
    options: [
      '8',
      '6',
      '12',
      '16'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué escritor francés es conocido por sus novelas \'Los Miserables\' y \'El Jorobado de Notre Dame\'?',
    options: [
      'Victor Hugo', 
      'Gustave Flaubert', 
      'Marcel Proust', 
      'Albert Camus'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del tratado internacional que tiene como objetivo evitar la propagación de armas nucleares?',
    options: [
      'Tratado de No Proliferación Nuclear',
      'Tratado de Versalles', 
      'Tratado de Tlatelolco', 
      'Tratado de Kioto'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué tipo de animal es la mascota de Tony Stark en los cómics de Marvel?',
    options: [
      'Mapache',
      'Perro',
      'Gato',
      'Avestruz'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la hormona del sueño?',
    options: [
      'Melatonina',
      'Serotonina',
      'Dopamina',
      'Adrenalina'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del río más largo del mundo?',
    options: [
      'Nilo', 
      'Amazonas', 
      'Yangtsé', 
      'Amarillo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se fundó la ciudad de Roma?',
    options: [
      '753 a.C.', 
      '476 d.C.', 
      '814 d.C.', 
      '1200 a.C.'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se inauguró el Canal de Panamá?',
    options: [
      '1914', 
      '1910', 
      '1920', 
      '1924'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió la novela \'Cien años de soledad\'?',
    options: [
      'Gabriel García Márquez', 
      'Pablo Neruda', 
      'Jorge Luis Borges', 
      'Julio Cortázar'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se lanzó el primer satélite artificial, el Sputnik 1?',
    options: [
      '1957',
      '1961',
      '1955',
      '1965'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el océano más grande del mundo?',
    options: [
      'Océano Pacífico',
      'Océano Atlántico',
      'Océano Índico', 
      'Océano Ártico'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el símbolo químico del oro?',
    options: [
      'Au', 
      'Ag', 
      'O', 
      'Or'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?',
    options: [
      '1945', 
      '1950', 
      '1960', 
      '1970'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué país es el segundo más grande del mundo en términos de superficie?',
    options: [
      'Canadá',
      'Rusia',
      'China', 
      'Estados Unidos'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el océano más profundo del mundo?',
    options: [
      'Océano Pacífico', 
      'Océano Atlántico', 
      'Océano Índico', 
      'Océano Ártico'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién pintó la obra \'La noche estrellada\'?',
    options: [
      'Vincent van Gogh', 
      'Leonardo da Vinci', 
      'Pablo Picasso', 
      'Claude Monet'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el símbolo químico del hierro?',
    options: [
      'Fe',
      'H',
      'He', 
      'Ca'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué país se encuentra la ciudad de Petra?',
    options: [
      'Jordania', 
      'Egipto', 
      'Turquía', 
      'Irán',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se estrenó la película \'El Padrino\'?',
    options: [
      '1972', 
      '1975', 
      '1980', 
      '1983'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué país se encuentra el lago Titicaca?',
    options: [
      'Bolivia', 
      'Perú', 
      'Argentina' , 
      'Chile'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el río más largo de América del Sur?',
    options: [
      'Amazonas', 
      'Paraná', 
      'Orinoco', 
      'Magdalena'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el metal más pesado que existe en la Tierra?',
    options: [
      'Osmio', 
      'Oro', 
      'Platino', 
      'Plomo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el país más grande de América del Sur?',
    options: [
      'Brasil',
      'Argentina',
      'Colombia',
      'Perú'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién pintó la obra \'El jardín de las delicias\'?',
    options: [
      'Hieronymus Bosch',
      'Salvador Dalí',
      'Vincent van Gogh',
      'Claude Monet'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué famoso físico formuló las leyes del movimiento planetario?',
    options: [
      'Johannes Kepler',
      'Galileo Galilei',
      'Isaac Newton',
      'Albert Einstein'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el rango de audición normal para los seres humanos?',
    options: [
      '20-20,000',
      '10-10,000',
      '5-30,000',
      '50-20,000'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del proceso mediante el cual se forman las estrellas?',
    options: [
      'Fusión nuclear',
      'Fisión nuclear',
      'Combustión',
      'Oxidación'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió la novela \'1984\'?',
    options: [
      'George Orwell',
      'Aldous Huxley',
      'Ernest Hemingway',
      'F. Scott Fitzgerald'
    ],
    reference: ''
  },
    {
    difficulty: Difficulty.MEDIUM,
    question:'¿Quién escribió \'La Odisea\'?',
    options: [
      'Homero',
      'Platón',
      'Sófocles',
      'Aristóteles'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el hueso más largo del cuerpo humano?',
    options: [
      'Fémur',
      'Tibia',
      'Peroné',
      'Húmero'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió \'El Gran Gatsby\'?',
    options: [
      'F. Scott Fitzgerald',
      'Ernest Hemingway', 
      'William Faulkner', 
      'John Steinbeck'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del proceso mediante el cual se libera energía a partir de la luz?',
    options: [
      'Fotosíntesis',
      'Quimiosíntesis',
      'Respiración celular',
      'Fermentación'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la unidad de medida de la intensidad de sonido?',
    options: [
      'Decibelio',
      'Hertzio',
      'Vatio',
      'Amperio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se llevó a cabo la Guerra de Vietnam?',
    options: [
      '1962-1973',
      '1945-1954',
      '1954-1962',
      '1973-1983',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del proceso mediante el cual se produce la corriente eléctrica a partir de una reacción química?',
    options: [
      'Electrólisis',
      'Electrificación',
      'Electromagnetismo',
      'Electrón',
    ],
    reference: ''
  },

  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el instrumento que se utiliza para medir la presión arterial?',
    options: [
      'Esfigmomanómetro',
      'Estetoscopio', 
      'Termómetro', 
      'Fonendoscopio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se cayó el muro de Berlín?',
    options: [
      '1989',
      '1991',
      '1993',
      '1987'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se produjo la Revolución Francesa?',
    options: [
      '1789', 
      '1798', 
      '1815', 
      '1832'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió \'El origen de las especies\'?',
    options: [
      'Charles Darwin', 
      'Albert Einstein', 
      'Isaac Newton',
      'Galileo Galilei'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el metal más caro del mundo?',
    options: [
      'Rodio', 
      'Platino', 
      'Oro', 
      'Paladio',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se produjo la Primera Guerra Mundial?',
    options: [
      '1914',
      '1918',
      '1922', 
      '1912'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la molécula responsable del efecto invernadero en la atmósfera terrestre?',
    options: [
      'CO2 (Dióxido de carbono)', 
      'O2 (Oxígeno)', 
      'N2 (Nitrógeno)', 
      'H2O (Agua)',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la corriente eléctrica que fluye en una batería de 9V?',
    options: [
      '0.1 amperios', 
      '9 amperios', 
      '1 amperio',
      '0.01 amperios'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question:'¿Cuál es el período de la función seno?',
    options: [
      '2π',
      'π',
      'π/2',
      '1'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la velocidad de escape de la Tierra?',
    options: [
      '11,2 km/s', 
      '9,8 km/s', 
      '7,9 km/s', 
      '5,7 km/s',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se lanzó el primer iPhone?',
    options: [
      '2007', 
      '2006', 
      '2004', 
      '2008',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Chile?',
    options: [
      'Santiago', 
      'Lima', 
      'Bogotá', 
      'Buenos Aires'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué país se encuentra la ciudad de Dubái?',
    options: [
      'Emiratos Árabes Unidos', 
      'Kuwait', 
      'Qatar', 
      'Arabia Saudita'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre del villano en la película \'El Rey León\'?',
    options: [
      'Scar', 
      'Jafar', 
      'Ursula', 
      'Mufasa',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Nueva Zelanda?',
    options: [
      'Wellington',
      'Auckland',
      'Christchurch',
      'Queenstown'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el río más largo de África?',
    options: [
      'Nilo', 
      'Congo', 
      'Zambeze', 
      'Níger'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la ciudad más poblada del mundo?',
    options: [
      'Tokio', 
      'Delhi', 
      'Shanghái', 
      'Ciudad de México',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió el libro \'Don Quijote de la Mancha\'?',
    options: [
      'Miguel de Cervantes', 
      'Gabriel García Márquez', 
      'William Shakespeare', 
      'Dante Alighieri'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué país se encuentra la isla de Pascua?',
    options: [
      'Chile', 
      'Perú', 
      'Colombia', 
      'Ecuador'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió \'El viejo y el mar\'?',
    options: [
      'Ernest Hemingway',
      'F. Scott Fitzgerald',
      'John Steinbeck',
      'William Faulkner'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Malasia?',
    options: [
      'Kuala Lumpur',
      'Bangkok.Manila',
      'Yakarta'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el grupo sanguíneo universalmente aceptado para transfusiones?',
    options: [
      'O-',
      'A-',
      'B+',
      'AB+'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se estrenó la primera película de \'Star Wars\'?',
    options: [
      '1977',
      '1975',
      '1972',
      '1980'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se descubrió la penicilina?',
    options: [
      '1928',
      '1932',
      '1940',
      '1950'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el cuadro más famoso de Vincent Van Gogh?',
    options: [
      'La noche estrellada',
      'Los girasoles',
      'La siesta',
      'La persistencia de la memoria'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué tipo de animal es el \'okapi\'?',
    options: [
      'Una jirafa',
      'Un felino',
      'Un equino',
      'Un bóvido'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el autor de la novela \'El gran Gatsby\'?',
    options: [
      'F. Scott Fitzgerald',
      'Ernest Hemingway', 
      'William Faulkner', 
      'Truman Capote'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué imperio fue derrotado en la Primera Guerra Mundial?',
    options: [
      'Imperio Otomano', 
      'Imperio Romano', 
      'Imperio Británico', 
      'Imperio Azteca'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la ciudad más poblada de Brasil?',
    options: [
      'Sao Paulo', 
      'Río de Janeiro', 
      'Brasilia', 
      'Salvador'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué enfermedad es causada por la bacteria Mycobacterium tuberculosis?',
    options: [
      'Tuberculosis', 
      'SIDA', 
      'Cáncer', 
      'Poliomielitis',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el rango del ejército estadounidense equivalente al de un capitán en el ejército español?',
    options: [
      'Teniente primero', 
      'Sargento primero', 
      'Teniente coronel',
      'General',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué tipo de animal es la mascota de Tony Stark en los cómics de Marvel?',
    options: [
      'Mapache', 
      'Perro', 
      'Gato', 
      'Avestruz'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question:'¿Cuál es el nombre de la hormona del sueño?' ,
    options: [
      'Melatonina', 
      'Serotonina', 
      'Dopamina', 
      'Adrenalina',
    ],
    reference: '' 
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el edificio más alto del mundo?',
    options: [
      'Burj Khalifa', 
      'Empire State Building', 
      'Taipei 101', 
      'Torre Eiffel'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el lago más profundo del mundo?',
    options: [
      'Lago Baikal', 
      'Lago Superior', 
      'Lago Tanganica', 
      'Lago Ness'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año se estrenó la primera película de \'Star Wars\'?',
    options: [
      '1977',
      '1975',
      '1972',
      '1980'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la actriz que interpreta a Hermione Granger en las películas de \'Harry Potter\'?',
    options: [
      'Emma Watson', 
      'Emma Stone', 
      'Emma Roberts', 
      'Emma Thompson',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿En qué año fue fundada la compañía Apple?',
    options: [
      '1976', 
      '1971', 
      '1981', 
      '1986'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué nombre recibe el proceso por el cual una célula se divide en dos células hijas?',
    options: [
      'Mitosis', 
      'Meiosis', 
      'Fotosíntesis', 
      'Respiración celular',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la capa más externa de la Tierra?',
    options: [
      'Corteza', 
      'Manto', 
      'Núcleo', 
      'Estratosfera',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el nombre de la actriz que interpreta a Katniss Everdeen en la película \'Los juegos del hambre\'?',
    options: [
      'Jennifer Lawrence',
      'Jennifer Aniston', 
      'Emma Watson', 
      'Emma Stone'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué equipo ganó la Copa del Mundo de la FIFA 2018?',
    options: [
      'Francia', 
      'Alemania', 
      'Argentina', 
      'Brasil'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la unidad básica de medida de la corriente eléctrica?',
    options: [
      'Amperio', 
      'Voltio', 
      'Ohmio', 
      'Vatio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién compuso el \'Concierto para piano No.2\'?',
    options: [
      'Sergei Rachmaninoff',
      'Frédéric Chopin',
      'Ludwig van Beethoven',
      'Wolfgang Amadeus Mozart'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la montaña más alta de África?',
    options: [
      'Kilimanjaro',
      'Monte Everest',
      'Mont Blanc',
      'Aconcagua'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Nepal',
    options: [
      'Kathmandu',
      'Colombo',
      'Islamabad',
      'Thimphu'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién compuso el \'Concierto para piano No.2\'?',
    options: [
      'Sergei Rachmaninoff',
      'Frédéric Chopin',
      'Ludwig van Beethoven',
      'Wolfgang Amadeus Mozart'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Qué elemento químico tiene el símbolo Pb?',
    options: [
      'Plomo',
      'Platino',
      'Potasio',
      'Paladio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién escribió \'El retrato de Dorian Gray\'?',
    options: [
      'Oscar Wilde',
      'James Joyce',
      'Virginia Woolf',
      'T.S. Eliot'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la montaña más alta de África?',
    options: [
      'Kilimanjaro',
      'Monte Everest',
      'Mont Blanc',
      'Aconcagua'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Nepal',
    options: [
      'Kathmandu',
      'Colombo',
      'Islamabad',
      'Thimphu'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién compuso \'El Barbero de Sevilla\'?',
    options: [
      'Gioachino Rossini',
      'Giuseppe Verdi',
      'Wolfgang Amadeus Mozart',
      'Richard Wagner'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Letonia?',
    options: [
      'Riga',
      'Vilna',
      'Tallin',
      'Helsinki'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Qatar?',
    options: [
      'Doha',
      'Abu Dabi',
      'Manama',
      'Riad'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Quién pintó \'Las meninas\'?',
    options: [
      'Diego Velázquez',
      'Francisco de Goya',
      'El Greco',
      'Pablo Picasso'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es la capital de Islandia?',
    options: [
      'Reikiavik',
      'Helsinki',
      'Oslo',
      'Estocolmo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el desierto más grande del mundo?',
    options: [
      'Desierto del Sahara',
      'Desierto de Gobi',
      'Desierto de Atacama',
      'Desierto de Arabia'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.MEDIUM,
    question: '¿Cuál es el número atómico del oxígeno?',
    options: [
      '8', 
      '6', 
      '12', 
      '16'
    ],
    reference: ''
  },

  // HARD
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se llevó a cabo la primera Copa Mundial de Fútbol?',
    options: [
      '1930',
      '1924',
      '1934',
      '1938'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el metal más ligero que existe?',
    options: [
      'Litio',
      'Aluminio',
      'Titanio',
      'Magnesio'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el instrumento musical más antiguo que se conoce?',
    options: [
      'Flauta', 
      'Guitarra', 
      'Tambor', 
      'Lira',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se produjo el primer vuelo tripulado de los hermanos Wright?',
    options: [
      '1903',
      '1910',
      '1920',
      '1930'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se inauguró la Torre Eiffel en París?',
    options: [
      '1889', 
      '1900',
      '1925', 
      '1950'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el nombre de la técnica pictórica que consiste en aplicar capas de pintura transparente sobre un fondo previamente pintado?',
    options: [
      'Glacis',
      'Acrílico', 
      'Óleo', 
      'Temple'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el nombre del proceso mediante el cual se produce el hielo seco?',
    options: [
      'Sublimación',
      'Evaporación',
      'Condensación',
      'Solidificación'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el nombre del proceso mediante el cual se produce la lluvia ácida?',
    options: [
      'Combustión',
      'Oxidación',
      'Polución',
      'Acidificación'
    ],
    reference: ''
  },
  
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se produjo el desastre de Chernóbil?',
    options: [
      '1986', 
      '1991', 
      '1996', 
      '1989'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se inventó el teléfono?',
    options: [
      '1876', 
      '1854', 
      '1892', 
      '1901'
    ],
    reference: ''
  },
  
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién ganó el Premio Nobel de Física en 2020?',
    options: [
      'Todas las opciones', 
      'Roger Penrose', 
      'Reinhard Genzel', 
      'Andrea Ghez'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió \'El Principito\'?',
    options: [
      'Antoine de Saint-Exupéry', 
      'Albert Camus', 
      'Gustave Flaubert', 
      'Victor Hugo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el nombre del villano principal de la serie de videojuegos \'The Legend of Zelda\'?',
    options: [
      'Ganondorf', 
      'Bowser', 
      'Dr. Eggman', 
      'Sephiroth',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el significado de la palabra \'hipopótamo\'?',
    options: [
      'Cerdo de río', 
      'Caballo de río', 
      'Elefante de río', 
      'León de río'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Qué continente tiene la mayor cantidad de países?',
    options: [
      'África', 
      'América', 
      'Asia', 
      'Europa' 
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se fundó la ciudad de Nueva York?',
    options: [
      '1664', 
      '1607', 
      '1620', 
      '1701',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el número atómico del hierro?',
    options: [
      '26', 
      '12', 
      '36', 
      '55'
    ],
    reference: ''
  },

  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se descubrió el ADN?',
    options: [
      '1953', 
      '1869', 
      '1902', 
      '1987'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se fundó la ciudad de San Francisco?',
    options: [
      '1776',
      '1849',
      '1856',
      '1901'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió la novela \'La montaña mágica\'?',
    options: [
      'Thomas Mann',
      'Hermann Hesse',
      'Franz Kafka',
      'Robert Musil'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el único estado de EE. UU. que limita con un solo estado?',
    options: [
      'Rhode Island',
      'Maine',
      'Vermont',
      'Nuevo Hampshire'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se firmó el Tratado de Tordesillas?',
    options: [
      '1494',
      '1512',
      '1532',
      '1492'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió \'La naranja mecánica\'?',
    options: [
      'Anthony Burgess',
      'George Orwell',
      'Aldous Huxley',
      'Ray Bradbury'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se fundó la ciudad de Los Ángeles?',
    options: [
      '1781',
      '1850',
      '1900',
      '1925'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién pintó \'El Grito\'?',
    options: [
      'Edvard Munch',
      'Gustav Klimt',
      'Paul Cézanne',
      'Henri Matisse'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué país se encuentra el río Zambeze?,',
    options: [
      'Sudáfrica',
      'Zimbabue',
      'Mozambique',
      'Kenia'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es la capital de Montenegro?,',
    options: [
      'Podgorica',
      'Sarajevo',
      'Belgrado',
      'Pristina'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: 'Quién escribió \'Moby Dick\'?,',
    options: [
      'Herman Melville',
      'Nathaniel Hawthorne',
      'Edgar Allan Poe',
      'Mark Twain'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es la capital de Turkmenistán?,',
    options: [
      'Ashgabat',
      'Bakú',
      'Tashken',
      'Teherán'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el nombre del filósofo griego que fue el discípulo de Platón y maestro de Alejandro Magno?',
    options: [
      'Aristóteles',
      'Diógenes',
      'Epicuro',
      'Sócrates'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Qué escritor francés es conocido por sus novelas \'Madame Bovary\' y \'Salambó\'?',
    options: [
      'Gustave Flaubert', 
      'Marcel Proust', 
      'Émile Zola', 
      'Honoré de Balzac'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se declaró la independencia de los Estados Unidos de América?',
    options: [
      '1776', 
      '1789', 
      '1793', 
      '1812'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el estado más grande de EE. UU. por superficie?',
    options: [
      'Alaska', 
      'Texas', 
      'California', 
      'Montana'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió la novela \'Mujercitas\'?,',
    options: [
      'Louisa May Alcott',
      'Jane Austen',
      'Charlotte Brontë',
      'Emily Dickinson'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el río más largo de Europa?',
    options: [
      'Río Volga', 
      'Río Danubio', 
      'Río Rin', 
      'Río Támesis'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se descubrió la penicilina?',
    options: [
      '1928', 
      '1932', 
      '1940', 
      '1950'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió la novela \'Orgullo y prejuicio\'?',
    options: [
      'Jane Austen',
      'Charlotte Brontë',
      'Virginia Woolf',
      'Emily Brontë'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién ganó el premio Nobel de Física en 2018?',
    options: [
      'Donna Strickland',
      'Arthur Ashkin',
      'Gerard Mourou',
      'Kip Thorne'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién escribió \'El señor de las moscas\'?',
    options: [
      'J.D. Salinger',
      'William Golding',
      'Jack Kerouac',
      'Kurt Vonnegut'
    ],
    reference: ''
  },

  {
    difficulty: Difficulty.HARD,
    question: '¿Quién fue el primer emperador de China?',
    options: [
      'Qin Shi Huang',
      'Sun Yat-sen',
      'Mao Zedong',
      'Chiang Kai-shek'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál fue el máximo goleador de la Copa Mundial de la FIFA 2018?',
    options: [
      'Harry Kane',
      'Cristiano Ronaldo',
      'Antoine Griezmann',
      'Romelu Lukaku'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el único país que ha ganado la Copa Mundial de la FIFA sin anotar goles en la final?',
    options: [
      'Italia',  
      'Alemania',
      'Argentina',
      'España'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el equipo con más títulos de la Copa Libertadores de América?',
    options: [
      'Independiente',
      'Boca Juniors',
      'River Plate',
      'Peñarol'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿En qué año se introdujo el premio Balón de Oro al mejor futbolista del mundo?',
    options: [
      '1956',
      '1964',
      '1971',
      '1991'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Quién es el entrenador con más títulos de la historia del fútbol?',
    options: [
      'Alex Ferguson',
      'Pep Guardiola',
      'José Mourinho',
      'Carlo Ancelotti'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el único equipo que ha ganado la Liga de Campeones de la UEFA tres veces consecutivas en la era moderna?',
    options: [
      'Real Madrid',
      'Barcelona',
      'Bayern Munich',
      'Manchester United'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: '¿Cuál es el jugador con más partidos internacionales disputados en la historia?',
    options: [
      'Ahmed Hassan',
      'Cristiano Ronaldo',
      'Sergio Ramos',
      'Iker Casillas'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.HARD,
    question: ' ¿Cuál es el equipo con más títulos de la Premier League de Inglaterra?',
    options: [
      'Manchester United',
      'Chelsea',
      'Arsenal',
      'Liverpool',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el jugador con más títulos de la Premier League de Inglaterra en la historia?',
    options: [
      'Ryan Giggs',
      'Paul Scholes',
      'Gary Neville',
      'John Terry'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Quién fue el máximo goleador en la historia de la Copa Mundial de la FIFA antes de que Miroslav Klose lo superara en 2014?',
    options: [
      'Just Fontaine',  
      'Pelé',
      'Gerd Müller',
      'Ronaldo Nazário'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el único país que ha ganado la Copa Mundial de la FIFA sin haber sido anfitrión ni haber jugado la final en su propio país?',
    options: [
      'Alemania',
      'Brasil',
      'Argentina',
      'Uruguay'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuántas veces ha ganado la selección de fútbol de Argentina la Copa América?',
    options: [
      '12 veces',
      '14 veces',
      '8 veces',
      '6 veces'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el único jugador que ha ganado el Balón de Oro, el premio al Jugador del Año de la FIFA y el premio The Best en el mismo año?',
    options: [
      'Lionel Messi',
      'Cristiano Ronaldo',
      'Ronaldinho',
      'Zinedine Zidane'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Quién fue el primer futbolista en ganar el premio FIFA al Mejor Jugador del Mundo en dos ocasiones consecutivas?',
    options: [
      'Marco van Basten',
      'Ronaldo Nazário',
      'Ronaldinho',
      'Zinedine Zidane'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el único equipo que ha ganado la Liga de Campeones de la UEFA sin haber ganado su liga nacional en la misma temporada?',
    options: [
      'Porto',
      'Chelsea',
      'Aston Villa',
      'Feyenoord'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el entrenador con más títulos de la Copa Mundial de la FIFA en la historia?',
    options: [
      'Vittorio Pozzo',
      'Vicente del Bosque',
      'Joachim Löw',
      'Luiz Felipe Scolari'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el equipo que ha ganado la Copa Libertadores de América en más ocasiones?',
    options: [
      'Independiente',
      'River Plate',
      'Boca Juniors',
      'Peñarol'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el jugador con más títulos de la Liga de Campeones de la UEFA en la historia?',
    options: [
      'Francisco Gento',
      'Cristiano Ronaldo',
      'Lionel Messi',
      'Paolo Maldini'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Quién fue el primer presidente de México?',
    options: [
      'Agustín de Iturbide', 
      'Benito Juárez', 
      'Porfirio Díaz', 
      'Miguel Hidalgo'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el nombre de la famosa escultura de la diosa griega de la victoria?',
    options: [
      'Niké de Samotracia', 
      'Venus de Milo', 
      'La Piedad',
      'El David',
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el nombre del personaje principal de la película \'La naranja mecánica\'?',
    options: [
      'Alex DeLarge', 
      'Travis Bickle', 
      'Donnie Darko', 
      'Patrick Bateman'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el río más largo de Asia?',
    options: [
      'Río Yangtze',
      'Río Mekong',
      'Río Amur',
      'Río Obi'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el nombre del satélite de Saturno que tiene un océano líquido debajo de su superficie helada?',
    options: [
      'Encélado', 
      'Titán', 
      'Mimas', 
      'Rea'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Qué país es conocido como \'La tierra de las mil colinas\'?',
    options: [
      'Ruanda', 
      'Kenya', 
      'Tanzania', 
      'Uganda'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Cuál es el nombre del científico que descubrió la estructura del ADN?',
    options: [
      'Francis Crick',
      'Rosalind Franklin',
      'James Watson',
      'Maurice Wilkins'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿En qué año se llevó a cabo el primer vuelo tripulado en la historia?',
    options: [
      '1903',
      '1911',
      '1920',
      '1932'
    ],
    reference: ''
  },
  {
    difficulty: Difficulty.VERY_HARD,
    question: '¿Quién fue el primer emperador de China?',
    options: [
      'Qin Shi Huang',
      'Sun Yat-sen',
      'Mao Zedong',
      'Chiang Kai-shek'
    ],
    reference: ''
  },

];

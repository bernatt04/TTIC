// src/hooks/useCursos.ts
import { useState, useEffect } from 'react';

export interface Curso {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  learningObjectives: string[]; // Objetivos de aprendizaje
  transversalCompetencies: string[]; // Competencias transversales
  acquiredSkills: string[]; // Habilidades adquiridas
  courseBenefits: string[]; // Beneficios del curso
  imageUrl: string;
}

// Definir los cursos localmente con detalles enriquecidos
const cursosData: Curso[] = [
  {
    id: '1',
    title: 'Scratch para Principiantes',
    description: 'Aprende los fundamentos de la programación utilizando Scratch, ideal para niños y principiantes.',
    detailedDescription: 'En este curso, exploraremos los conceptos básicos de programación a través de Scratch, una plataforma visual que permite a los principiantes entender la lógica de programación sin necesidad de escribir código. Los estudiantes crearán juegos y animaciones interactivas mientras aprenden sobre bucles, condicionales y variables.',
    learningObjectives: [
      'Comprender los conceptos básicos de la programación y la lógica computacional.',
      'Desarrollar habilidades en la creación de juegos y animaciones simples.',
      'Fomentar la creatividad y el pensamiento lógico a través de proyectos prácticos.',
    ],
    transversalCompetencies: [
      'Pensamiento crítico y resolución de problemas.',
      'Creatividad e innovación.',
      'Colaboración y trabajo en equipo.',
    ],
    acquiredSkills: [
      'Manejo de herramientas de programación visuales como Scratch.',
      'Entendimiento de conceptos básicos de programación como bucles y condicionales.',
      'Capacidad para desarrollar proyectos creativos y resolver problemas lógicos.',
    ],
    courseBenefits: [
      'Ideal para niños y principiantes que deseen iniciarse en el mundo de la programación.',
      'Promueve el aprendizaje lúdico y la experimentación con la tecnología.',
      'Desarrolla habilidades digitales desde una edad temprana.',
    ],
    imageUrl: '/img/scratch.png',
  },
  {
    id: '2',
    title: 'Introducción a la Ciberseguridad',
    description: 'Comprende los conceptos básicos de ciberseguridad y cómo proteger tus datos en línea.',
    detailedDescription: 'Este curso proporciona una introducción a la ciberseguridad, cubriendo temas como amenazas en línea, ataques comunes y métodos de protección. Aprenderás a mantener la seguridad de tus dispositivos y redes, así como a proteger tu información personal contra robos y ataques.',
    learningObjectives: [
      'Conocer los principios fundamentales de la ciberseguridad.',
      'Identificar y comprender las amenazas y vulnerabilidades en línea.',
      'Implementar medidas básicas para proteger dispositivos y datos personales.',
    ],
    transversalCompetencies: [
      'Conciencia digital y responsabilidad cívica.',
      'Análisis y evaluación de riesgos.',
      'Pensamiento crítico frente a la información en línea.',
    ],
    acquiredSkills: [
      'Manejo de herramientas básicas de seguridad digital.',
      'Identificación de riesgos y amenazas cibernéticas comunes.',
      'Aplicación de prácticas seguras para la navegación en internet.',
    ],
    courseBenefits: [
      'Perfecto para estudiantes interesados en proteger su privacidad y seguridad en línea.',
      'Fomenta una comprensión sólida de las mejores prácticas en seguridad digital.',
      'Capacita a los estudiantes para navegar por el mundo digital de manera segura y responsable.',
    ],
    imageUrl: '/img/ciberseguridad.jpeg',
  },
  {
    id: '3',
    title: 'Programación Competitiva',
    description: 'Desarrolla habilidades en algoritmos y estructuras de datos para la programación competitiva.',
    detailedDescription: 'La programación competitiva es un campo desafiante que requiere un profundo conocimiento de algoritmos y estructuras de datos. Este curso te preparará para competiciones de programación al enseñarte técnicas avanzadas de resolución de problemas, optimización de código y análisis de complejidad.',
    learningObjectives: [
      'Dominar los algoritmos y estructuras de datos fundamentales para la programación competitiva.',
      'Desarrollar habilidades avanzadas de resolución de problemas y pensamiento lógico.',
      'Prepararse para competiciones de programación de alto nivel.',
    ],
    transversalCompetencies: [
      'Perseverancia y manejo de la presión.',
      'Capacidad para resolver problemas complejos de manera eficiente.',
      'Trabajo en equipo y colaboración en entornos competitivos.',
    ],
    acquiredSkills: [
      'Conocimiento profundo de algoritmos y estructuras de datos.',
      'Capacidad para escribir código eficiente y optimizado.',
      'Experiencia en competiciones de programación y resolución de problemas en tiempo limitado.',
    ],
    courseBenefits: [
      'Excelente para estudiantes que desean competir en concursos de programación.',
      'Desarrolla habilidades de pensamiento lógico y resolución de problemas a un nivel avanzado.',
      'Prepara a los estudiantes para carreras en desarrollo de software y ciencias de la computación.',
    ],
    imageUrl: '/img/Programacion-competitiva.jpg',
  },
];

const useCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = () => {
      try {
        setLoading(true);
        setError(null); // Resetear el error antes de hacer la llamada
        
        // En lugar de hacer fetch, usamos los datos locales
        setCursos(cursosData);
      } catch (err) {
        setError('Error al cargar los cursos.');
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  return { cursos, loading, error };
};

export default useCursos;

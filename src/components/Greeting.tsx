import React from 'react';

// Définition du type pour les props du composant Greeting
interface GreetingProps {
  name: string; // Le prop 'name' est de type 'string'
}

// Conversion de Greeting en un composant fonctionnel TypeScript avec le type défini pour les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

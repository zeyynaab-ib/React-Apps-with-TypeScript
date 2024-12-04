import React, { Component } from 'react';

// Type pour les props de Counter, ici nous n'avons pas de props spécifiques, donc un objet vide
interface CounterProps {}

// Type pour l'état de Counter
interface CounterState {
  count: number; // Le seul état est 'count' de type 'number'
}

// Définition du composant Counter en TypeScript en étendant Component avec les types de props et d'état
class Counter extends Component<CounterProps, CounterState> {
  // Initialisation de l'état avec TypeScript
  state: CounterState = {
    count: 0
  };

  // Fonction pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

import React from "react";

// Componentes
import Navbar from "../components/Navbar/Index";

const Resumo = () => {
  return (
    <div className="app bg-faded">
      <Navbar />
      <div className="container mt-2">
        <div className="card card-block">
          <h1 className="text-primary-dark">Resumo do meu pedido</h1>
          <p className="font-bold text-primary">
            Valor total do pedido: R$ 00,00
          </p>
          <small className="text-muted">Valor mínimo: 50,00</small>
        </div>
      </div>
      <div className="container text-xs-center">
        <button className="btn btn-success btn-lg px-4 font-light letterspacing">Concluir pedido</button>
      </div>
    </div>
  );
};

export default Resumo;

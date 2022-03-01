const Carrinho = ({preco}) => {
  return (
    <div className="container-fluid bg-inverse p-3">
      <div className="flex-xs flex-xs-middle flex-xs-center mb-2">
        <div className="form-group m-0 mr-1">
          <select className="form-control" id="quantitySelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <h2 className="text-success">R$ {preco}</h2>
      </div>
      <button className="btn btn-success btn-lg btn-block font-light">
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Carrinho;

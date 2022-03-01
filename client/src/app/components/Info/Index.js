const Info = ({ titulo, descricao, preco}) => {
  return (
    <div className="container">
      <h1 className="text-primary">{titulo}</h1>
      <p className="text-primary-light">{descricao}</p>
      <h6 className="text-success">R$ {preco}</h6>
      <hr className="blue-divider"/>
    </div>
  );
};

export default Info;

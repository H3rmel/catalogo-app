// Formulário para observações dos produtos
const Form = ({ titulo, placeholder, setData }) => {
  return (
    <div className="container mb-2">
      <h1 className="text-primary mb-1">{titulo}</h1>
      <input
        type="text"
        className="form-control"
        id="categoryInput"
        placeholder={placeholder}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
};

// Formulário de categorias dos produtos
const FormCategory = ({ setSearchTerm, categorias }) => {
  return (
    <div className="container mb-2">
      <input
        type="text"
        list="categorys"
        className="form-control"
        placeholder="Insira a categoria aqui..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <datalist id="categorys">
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.titulo} />
        ))}
      </datalist>
    </div>
  );
};

export { Form, FormCategory };

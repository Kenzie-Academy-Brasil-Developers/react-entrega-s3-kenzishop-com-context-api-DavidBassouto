import { useContext } from "react";
import { ProductsContext } from "./Providers/Produtos";

function App() {
  const { products, setpProduts } = useContext(ProductsContext);

  return (
    <>
      <div>NarutoFunkoShop</div>
      {products.map((produto, index) => (
        <li key={index}>
          <img src={produto.image} alt="funko-Naruto" />
          <p>{produto.name}</p>
          <button>Adicionar ao carrinho</button>
        </li>
      ))}
    </>
  );
}

export default App;

import { useContext } from "react";
import { CarrinhoContext } from "../../Providers/Carrinho";
import { ProductsContext } from "../../Providers/Produtos";
import { Container, StyledLi, StyledUl } from "./style";

export const ProdCard = () => {
  const { products } = useContext(ProductsContext);
  const { addCarrinho } = useContext(CarrinhoContext);

  return (
    <Container>
      <StyledUl>
        {products.map((produto, index) => (
          <StyledLi key={index}>
            <div>
              <img src={produto.image} alt="funko-Naruto" />
            </div>
            <section>
              <p>{produto.name}</p>
              <button onClick={() => addCarrinho(produto)}>
                Adicionar ao carrinho
              </button>
            </section>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  );
};

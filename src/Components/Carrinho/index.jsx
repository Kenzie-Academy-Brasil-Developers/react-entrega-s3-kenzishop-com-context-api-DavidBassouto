import { useContext } from "react";
import { CarrinhoContext } from "../../Providers/Carrinho";
import {
  HeaderCarrinho,
  StyledUl,
  Container,
  StyledLi,
  DivStyled,
} from "./style";
import { toast } from "react-toastify";

export const Carrinho = () => {
  const { carrinho, removeCarrinho, setCarrinho } = useContext(CarrinhoContext);
  console.log(carrinho);
  const vendeu = () => {
    toast.success("Compra realizada!");
    setCarrinho([]);
  };

  return (
    <>
      <Container>
        <HeaderCarrinho>
          <h4>Carrinho</h4>
        </HeaderCarrinho>
        <StyledUl>
          {carrinho.length > 0 ? (
            carrinho.map((produto, index) => (
              <StyledLi key={index}>
                <img src={produto.image} alt="funko-Naruto" />
                <p>{produto.name}</p>
                <button onClick={() => removeCarrinho(produto)}>
                  Remover Produto
                </button>
              </StyledLi>
            ))
          ) : (
            <span> Ainda nao há produtos aqui</span>
          )}
          <DivStyled>
            <p>
              Total: R$
              {carrinho.reduce((valorAnterior, acc) => {
                return valorAnterior + acc.price;
              }, 0)}
            </p>
            <button onClick={vendeu}> Finalizar Compra </button>
          </DivStyled>
        </StyledUl>
      </Container>
    </>
  );
};

import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const addCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  //lógica para remover
  const removeCarinho = (item) => {
    const novoCarrinho = carrinho.filter(
      (itemOnCart) => itemOnCart.name !== item.name
    );
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, setCarrinho, addCarrinho, removeCarinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const addCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  //lógica para remover
  const removeCarrinho = (item, indexProd) => {
    const novoCarrinho = carrinho.filter((cartPRod,index) => index !== indexProd);
    setCarrinho(novoCarrinho);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, setCarrinho, addCarrinho, removeCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

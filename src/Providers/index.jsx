import { CarrinhoProvider } from "./Carrinho";
import { ProductsProvider } from "./Produtos";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CarrinhoProvider>{children}</CarrinhoProvider>
    </ProductsProvider>
  );
};

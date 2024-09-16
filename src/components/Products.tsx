interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface TypographyProps {
  children: React.ReactNode;
}

const toBRL = (value: number): string => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const products: Product[] = [
  { name: "Produto 1", price: 100, quantity: 40 },
  { name: "Produto 2", price: 200, quantity: 20 },
  { name: "Produto 3", price: 300, quantity: 20 },
  { name: "Produto 4", price: 400, quantity: 30 },
];

const calculateTotalBudget = (products: Product[]): string => {
  const totalBudget = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return toBRL(totalBudget);
};

const formatProductsList = (products: Product[]) =>
  products.map((product, index) => {
    const formattedPrice = toBRL(product.price);

    return (
      <li key={index}>
        {product.name} - {formattedPrice} - {product.quantity}
      </li>
    );
  });

const H1: React.FC<TypographyProps> = ({ children }) => (
  <h1 className="font-extrabold text-4xl">{children}</h1>
);

const H2: React.FC<TypographyProps> = ({ children }) => (
  <h2 className="font-semibold text-3xl">{children}</h2>
);

const Products: React.FC = () => {
  const currencyBudget = calculateTotalBudget(products);
  const productsList = formatProductsList(products);

  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center font-inter">
      <H1>Produtos</H1>
      <ul>{productsList}</ul>
      <div>
        <H2>Custo Total</H2>
        <div>{currencyBudget}</div>
      </div>
    </div>
  );
};

export default Products;

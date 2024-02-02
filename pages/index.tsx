import { Products } from "@/src/subpages/products";
import { Product } from "@/src/types/Product";
import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { CreateProducts, URL_API } from "@/src/handlers/product";

interface HomeProps {
  productsData: string;
}

const Home: React.FC<HomeProps> = ({ productsData }) => {
  const [products, setProducts] = React.useState<Product[]>(
    CreateProducts(JSON.parse(productsData))
  );
  return (
    <VStack>
      <Box h="20px" />
      <Heading>Scalable Path</Heading>
      <Box h="20px" />
      {products.length === 0 ? (
        <>
          <Box h="100px" />
          <Spinner />
        </>
      ) : (
        <Products products={products} setProducts={setProducts} />
      )}
    </VStack>
  );
};

export async function getServerSideProps() {
  try {
    // Llama a tu API en el servidor
    const apiResponse = await axios(URL_API);
    const products = CreateProducts(apiResponse.data.products);
    // Pasa los datos como props a la página
    return {
      props: {
        productsData: JSON.stringify(products),
      },
    };
  } catch (err) {
    console.error(
      "Error getting the products from the API of Python (FastAPI). ",
      err
    );
    return {
      props: {
        productsData: [],
      },
    };
  }
}

export default Home;

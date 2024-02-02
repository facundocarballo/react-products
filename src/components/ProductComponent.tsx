import {
  Divider,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Product } from "../types/Product";
import axios from "axios";
import { URL_API } from "../handlers/product";

interface ProductComponentProps {
  product: Product;
  products: Product[];
  setProducts: (p: Product[]) => void;
}

export const ProductComponent = ({
  product,
  products,
  setProducts,
}: ProductComponentProps) => {
  // Attributes
  // Context
  // Methods
  const handleDeleteProduct = async () => {
    let newProducts: Product[] = [];
    products.forEach((p) => {
      if (p.id !== product.id) {
        newProducts.push(p);
      }
    });
    setProducts(newProducts);
    try {
      const res = await axios.delete(URL_API, {
        data: {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          photo_url: product.photo_url,
          deleted_at: null,
        },
      });
      console.log("Response after delete: ", res);
    } catch (err) {
      console.error("Error trying to delete a product. ", err);
    }
  };
  // Component
  return (
    <VStack
      w="250px"
      p={4}
      border="1px solid"
      borderColor="gray.300"
      borderRadius={10}
      minH="400px"
      maxH="400px"
    >
      <Image
        src={product.photo_url}
        alt="productImg"
        w="100%"
        minH="200px"
        maxH="200px"
        borderRadius={10}
      />
      {/* This can be a component.. */}
      <HStack w="full">
        <Box w="5px" />
        <Text fontSize="18px" fontWeight="bold">
          {product.name}
        </Text>
        <Spacer />
      </HStack>
      <HStack w="full">
        <Box w="5px" />
        <Text>Price:</Text>
        <Spacer />
        <Text>$ {product.price}</Text>
      </HStack>
      <Divider />
      <HStack w="full">
        <Box w="5px" />
        <Text>{product.description}</Text>
        <Spacer />
      </HStack>
      <Spacer />
      <Button w="full" colorScheme="red" onClick={handleDeleteProduct}>
        DELETE
      </Button>
    </VStack>
  );
};

import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ProductComponent } from "../components/ProductComponent";
import { Product } from "../types/Product";

interface ProductProps {
  products: Product[];
  setProducts: (p: Product[]) => void;
}
export const Products = ({ products, setProducts }: ProductProps) => {
  // Attributes
  // Context
  // Methods
  // Component
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductComponent
            product={product}
            products={products}
            setProducts={setProducts}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

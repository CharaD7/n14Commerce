'use client';

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "~/components/ui/button"

export interface ProductCart {
  name: string;
  price: number;
  image: any;
  description: string;
  currency: string;
}

export default function AddToCart( { currency, description, image, name, price } : ProductCart ) {
  const { addItem, handleCartClick } = useShoppingCart();

  return <Button>Add To Cart</Button>;
}

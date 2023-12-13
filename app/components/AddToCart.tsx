'use client';

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "~/components/ui/button"

export default function AddToCart() {
  const { addItem, handleCartClick } = useShoppingCart();

  return <Button>Add To Cart</Button>;
}

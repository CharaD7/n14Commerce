'use client';

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "~/components/ui/button"
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  price: number;
  image: any;
  description: string;
  currency: string;
  price_id: string;
}

export default function AddToCart( { currency, description, image, name, price, price_id } : ProductCart ) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: urlFor(image).url(),
    description: description,
    currency: currency,
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => { addItem(product), handleCartClick() }}
    >Add To Cart</Button>
  );
}

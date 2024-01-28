'use client';

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "~/components/ui/button"
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToCart";

export default function CheckoutNow( { currency, description, image, name, price, price_id } : ProductCart ) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

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
      onClick={() => { buyNow( product.price_id )}}
    >Add To Cart</Button>
  );
}


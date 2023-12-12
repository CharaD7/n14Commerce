'use client';

import { useShoppingCart } from "use-shopping-cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet"

export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw] font-sans">
        <SheetHeader>
          <SheetTitle>Shopping Cart Items</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              { cartCount === 0 ? (
                <h1 className="py-6">You do not have any items in your cart.</h1>
              ) : (
                <h1>Hey, you have some items</h1>
              ) }
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

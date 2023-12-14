'use client';

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet"

export default function ShoppingCartModal() {
  const { cartCount, shouldDisplayCart, handleCartClick, cartDetails } = useShoppingCart();

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
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image src={entry.image} alt={entry.name} width={100} height={100} />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          {/* Item header */}
                          <div className="flex justify-between text-base font-semibold text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>

                          {/* Item Description */}
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{entry.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              ) }
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

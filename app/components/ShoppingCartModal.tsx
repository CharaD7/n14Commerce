import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet"

export default function ShoppingCartModal() {
  return (
    <Sheet defaultOpen>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Checkout</SheetTitle>
        </SheetHeader>

        <div>
          <h1>Well, hello there!</h1>
        </div>
      </SheetContent>
    </Sheet>
  )
}

'use client';

import { CartProvider as USCProvider } from 'use-shopping-cart';

export default function CardProvider({ children }: { children: React.ReactNode}) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as  string}
      currency="USD"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/cancel"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
      // enableRecaptcha={true}
      // onCheckoutStart={() => console.log('onCheckoutStart')}
      // onCheckoutError={(err) => console.log('onCheckoutError', err)}
    >
      { children }
    </USCProvider>
  )
};

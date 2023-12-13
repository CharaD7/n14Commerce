import { Star, Truck } from "lucide-react";
import AddToCart from "~/app/components/AddToCart";
import ImageGallery from "~/app/components/ImageGallery";
import { fullProduct } from "~/app/interface";
import { client } from "~/app/lib/sanity";
import { Button } from "~/components/ui/button";

async function getData(slug: string) {
  const query = `
    *[_type == "product" && slug.current == "${slug}"][0] {
      _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name
    }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage( { params }: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white font-sans">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          {/* Product Description */}
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">{ data.categoryName }</span>
              <h2 className="text-2xl font-bold lg:text-3xl text-gray-800">{ data.name }</h2>
            </div>

            {/* Star ratings */}
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              {/* Number ratings */}
              <span className="text-sm text-gray-500 transition duration-300">56 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">${ data.price }</span>
                <span className="md-0.5 text-red-500 line-through">${ data.price + 30 }</span>
              </div>

              <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6"/>
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2.5">
              <AddToCart />
              <Button variant={"secondary"}>Checkout Now</Button>
            </div>

            {/* Description */}
            <p className="text-gray-500 mt-12 text-base tracking-wide">{ data.description }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

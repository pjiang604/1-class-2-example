import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { initialProducts } from "@/data/information"

export default function Home() {

  const [products, setProducts] = useState(initialProducts);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Tiny Store</h1>
      <Link href={'/enumPage'}>Enum Page</Link>
      <div className={'App-container'}>
        {
          products.map((product, index) => {
            return (
              <div key={index} className={'App-item'}>
                <h3>{product.name}</h3>
                <div>
                  <Image
                    src={product.images}
                    width={100}
                    height={100}
                    alt={product.name} />
                </div>
                <div className={'Price-item'}>
                  price ${product.price}
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

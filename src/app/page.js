import Header from "@/components/Header";
import Image from "next/image";
import Link from 'next/link'

const links = [
  {
    goTo: 'https://jup.ag/swap/SOL-BYAT_BYATmZ7ry2pewxW3213sczJYB7ZJzPr921uvcRcJYYZQ',
    icon: 'jupiter',
  },
  {
    goTo: 'https://twitter.com/byatcoin',
    icon: 'twitter',
  },
  {
    goTo: 'https://www.dextools.io/app/en/solana/pair-explorer/HeKGYeTtEdRgWB9PvL4E4S3vzCshM9CiX1pSXHiJ8cqT?t=1709889120449',
    icon: 'dextools',
  },
  {
    goTo: 'https://t.me/byatcoin',
    icon: 'telegram',
  },
  {
    goTo: 'https://www.coingecko.com/en/coins/byat',
    icon: 'coingecko',
  }
]

export default function Home() {
  return (
    <main>
      <section className="md:pt-40 px-8 sm:px-12 pb-20">
        <div className="max-w-base mx-auto grid md:grid-cols-2 items-center">
          <div className="grid grid-cols-2 justify-items-center -space-y-12 -space-x-12">
            <Image
              src="/hero1.png"
              width={270}
              height={270}
              alt="Hero image"
            />
            <Image
              src="/hero2.png"
              width={270}
              height={270}
              alt="Hero image"
              className="row-start-2 col-start-2"
            />
          </div>

          <div className="text-center">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl text-primary-light font-black block mb-8">
              $BYAT
            </h1>
            
            <div className="text-4xl lg:text-5xl font-bold text-white space-y-5 uppercase">
              <p>
                $BYAT Delving Deep Into Byat Meme Coin.
              </p>
              <p>
                The Unofficial Supporter of Bonk
              </p>
            </div>
            
            <div className="flex justify-center mt-10">
              <div className="relative flex items-center gap-5">
                {links.map((item,idx)=> (
                  <div key={idx} className="group relative">
                    <Link href={item.goTo} target="_blank" rel="noopener" className="block rounded-full bg-primary-light transition-all ease-in-out group-hover:scale-105 p-3">
                      <Image
                        src={`/connections/${item.icon}.svg`}
                        width={28}
                        height={28}
                        alt="Coingecko Icon"
                        className="size-6 sm:size-7"
                      />
                    </Link>

                    <div className="hidden group-hover:block absolute -bottom-10 sm:-bottom-14 left-1/2 -translate-x-1/2 bg-primary-light rounded-lg text-sm sm:text-xl uppercase font-medium text-primary py-1 sm:py-1.5 px-2 sm:px-3">
                      {item.icon}
                    </div>
                  </div>
                ))}

                <div className="absolute -left-10 sm:-left-14 pointer-events-none">
                  <Image
                    src="/buy.gif"
                    width={80}
                    height={80}
                    alt="buy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light px-8 sm:px-12 py-20">
        <div className="max-w-base mx-auto space-y-10">
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-primary text-center">
            How to buy $byat
          </h2>

          <ul className="max-w-4xl mx-auto text-center flex flex-col items-center gap-5 list-decimal list-inside text-white text-xl sm:text-2xl font-bold uppercase">
            <li className="space-y-3">
              <span>
                Go to buy on jupiter above
              </span>
              <div>
                <Image
                  src="/buy-on-jupiter.PNG"
                  width={206}
                  height={131}
                  alt="buy-on-jupiter"
                  className="mx-auto"
                />
              </div>
            </li>
            <li className="space-y-3">
              <span>
                Connect wallet
              </span>
              <div>
                <Image
                  src="/connect-wallet.png"
                  width={343}
                  height={58}
                  alt="connect-wallet"
                  className="mx-auto"
                />
              </div>
            </li>
            <li className="space-y-3">
              <span>
                Choose payment token
              </span>
              <div>
                <Image
                  src="/choose-pay-token.PNG"
                  width={340}
                  height={276}
                  alt="connect-wallet"
                  className="mx-auto"
                />
              </div>
            </li>
            <li className="">
              Enter amount & swap
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

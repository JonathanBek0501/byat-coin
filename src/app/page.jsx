import RoadMap from "@/components/RoadMap";
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

const logos = [
  {
    img: 'binance.png',
    link: 'https://www.binance.com/en/feed/post/4574360220458?ref=152602153&utm_campaign=app_share_link',
  },
  {
    img: 'CoinWire.png',
    link: 'https://coinwire.com/dive-into-byat-the-next-big-wave-in-solanas-meme-coin-ocean/',
  },
  {
    img: 'Yahoo.png',
    link: 'https://finance.yahoo.com/byat-launches-presale-february-20th-122000959.html?guccounter=1',
  },
  {
    img: 'Benzinga.png',
    link: 'https://www.benzinga.com/pressreleases/24/02/ac37154284/byat-launches-its-presale-on-february-20th-with-the-focus-on-innovation-and-community',
  },
  {
    img: 'DigitalJournal.png',
    link: 'https://www.digitaljournal.com/pr/news/binary-news-network/byat-memecoin-presale-going-live-1293663429.html',
  },
  {
    img: 'TechBullion.png',
    link: 'https://techbullion.com/byat-memecoin-presale-is-going-live-on-feb-20th/',
  },
  {
    img: 'TechAnnouncer.png',
    link: 'https://techannouncer.com/byat-memecoin-presale-is-going-live-on-feb-20th-2024/',
  },
  {
    img: 'MarketWatch.svg',
    link: 'https://www.marketwatch.com/press-release/byat-launches-its-presale-on-february-20th-with-the-focus-on-innovation-and-community-18e91c16?mod=search_headline',
  },
]

export default function Home() {
  return (
    <main>
      <section className="md:pt-40 px-8 sm:px-12 pb-20">
        <div className="max-w-base mx-auto grid md:grid-cols-2 items-center">
          <div className="grid grid-cols-2 justify-items-center -space-y-12 -space-x-12">
            <Image
            className="animate-bounce"
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
              className="animate-spin-slow row-start-2 col-start-2"
            />
          </div>

          <div className="text-center">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl text-primary-lighter font-black block mb-8">
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
                    <Link href={item.goTo} target="_blank" rel="noopener" className="block rounded-full bg-primary-lighter transition-all ease-in-out group-hover:scale-105 p-3">
                      <Image
                        src={`/connections/${item.icon}.svg`}
                        width={28}
                        height={28}
                        alt="Coingecko Icon"
                        className="size-6 sm:size-7"
                      />
                    </Link>

                    <div className="hidden group-hover:block absolute -bottom-10 sm:-bottom-14 left-1/2 -translate-x-1/2 bg-primary-lighter rounded-lg text-sm sm:text-xl uppercase font-medium text-primary py-1 sm:py-1.5 px-2 sm:px-3">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-lighter px-8 sm:px-12 py-20">
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

      <section className="px-8 sm:px-12 MaxW1400:px-24 py-20">
        <div className="space-y-32 max-w-base mx-auto">
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center">
            Seen on
          </h2>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            {logos.map((logo,idx)=> (
              <Link key={idx} href={logo.link} target="_blank" className="block bg-primary-light rounded-lg p-3">
                <Image
                  src={`/seenOn/${logo.img}`}
                  width={270}
                  height={88}
                  alt="yahoo"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-lighter px-8 sm:px-12 py-20">
        <div className="max-w-base mx-auto space-y-20">
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center">
            our partners
          </h2>

          <div className="flex items-center justify-center gap-10 sm:gap-20 flex-wrap">
            <img src="/gotBit.webp" alt="GotBit logo" className="max-w-xs" />
            <img src="/KenzoLabs.webp" alt="KenzoLabs" className="max-w-xs" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="px-8 sm:px-12 MaxW1400:px-24 py-20">
          <div className="space-y-32 max-w-base mx-auto">
            <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center">
              Roadmap
            </h2>

            <RoadMap />
          </div>
        </div>
      </section>

      <section className="bg-primary-lighter px-4 sm:px-12 py-20">
        <div className="max-w-base mx-auto space-y-10">
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-white text-center">
            flip the bonk goal (live)
          </h2>
          
          <div className="space-y-4">
            <table className="text-sm sm:text-xl uppercase text-white w-full text-center">
              <thead>
                <tr>
                  <th className="w-[5%] border border-primary p-2"></th>
                  <th className="w-2/5 font-bold border border-primary p-2">
                    $byat
                  </th>
                  <th className="w-[15%] font-bold border border-primary p-2">
                    Progress
                  </th>
                  <th className="w-2/5 font-bold border border-primary p-2">
                    $byat
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="border border-primary font-bold p-1">
                    MC
                  </td>
                  <td className="border border-primary font-bold p-1">
                    $12,690,700
                  </td>
                  <td className="border border-primary font-bold p-1">
                    x120
                  </td>
                  <td className="border border-primary font-bold p-1">
                    $1,518,567,621
                  </td>
                </tr>
                <tr>
                  <td className="border border-primary font-bold p-1">
                    ATH
                  </td>
                  <td className="border border-primary font-bold p-1">
                    $39,749,971
                  </td>
                  <td className="border border-primary font-bold p-1">
                    x53
                  </td>
                  <td className="border border-primary font-bold p-1">
                    $2,100,000,000
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="uppercase sm:text-xl font-black text-white">
              Progress before the flippening
            </h3>
            
            <table className="text-sm sm:text-xl text-white w-full text-center">
              <tbody>
                <tr className="border border-primary">
                  <td className="font-bold w-[0.84%] bg-primary">
                    0.84%
                  </td>
                  <td className="font-bold bg-white text-primary w-[99.16%]">
                    99.16%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-primary px-8 sm:px-12 py-20">
        <div className="max-w-base mx-auto space-y-10">
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-6xl font-black text-primary-lighter text-center">
            tokenomics
          </h2>

          <p className="max-w-4xl mx-auto text-center text-xl font-medium text-white">
            In the vibrant world of Solana’s meme coins, a new star is rising, promising not just a wave but a tsunami of opportunities for the keen investor. Byat ($BYAT), affectionately known as “$BONK Goes Gyat,” is setting the crypto world alight with its current presale. As the saying goes, “The early dog gets the Byat,” and this couldn’t be truer for those ready to leap into its presale phases, each offering a golden ticket to be part of the next big success story in the $SOL  ecosystem.
          </p>

          <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-0 pt-10">
            <div className="space-y-5 text-center">
              <h3 className="text-2xl sm:text-3xl uppercase text-white font-bold">
                current total supply:
              </h3>
              <div className="flex flex-col gap-1 text-primary-lighter">
                <span className="text-5xl sm:text-7xl font-bold">
                  51T $BYAT
                </span>
                <span className="text-3xl sm:text-4xl font-bold">
                  (50 980 987 923 127)
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl uppercase text-white font-bold">
                supply burned: 49% 🔥
              </h3>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="relative w-[75%] sm:w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative size-32 sm:size-40">
                    <Image
                      className="w-full h-full object-cover"
                      src="/logo.png"
                      fill={true}
                      alt="Logo"
                    />
                  </div>
                </div>

                <svg viewBox="0 0 100 100" width="100%" height="100%" className="w-full object-cover overflow-visible h-[300px] max-sm:h-[52vw]">
                  <path d="M 87.5 50 A 37.5 37.5 0 1 1 80.33813728906053 27.95805303903225" fill="none" strokeWidth="25" stroke="#ffc252"><title>Solana NFT Communities</title></path><path d="M 80.33813728906053 27.95805303903225 A 37.5 37.5 0 0 1 87.5 49.99999999999999" fill="none" strokeWidth="25" stroke="#ff9431"><title>DEX Liquidity &amp; Rewards</title></path><text fill="white" className="text-xs sm:text-sm" dominantBaseline="central" x="50" y="50" dx="-52.30810839623345" dy="16.995934690622114" textAnchor="end">90%</text><text fill="white" className="text-xs sm:text-sm" dominantBaseline="central" x="50" y="50" dx="52.30810839623345" dy="-16.995934690622125" textAnchor="start">10%</text>
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-lighter"></div>
                  <span className="text-white font-medium text-lg">
                    90% - Solana NFT Communities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-light"></div>
                  <span className="text-white font-medium text-lg">
                    10% - DEX Liquidity & Rewards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

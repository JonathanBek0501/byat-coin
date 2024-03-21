import Image from "next/image";

const RoadMap = () => {
    return (
        <div>
            <div className="hidden lg:grid grid-cols-3">
                <div className="border-t border-primary-lighter py-6 xl:py-10">
                    <div className="-translate-y-1/2 translate-x-1/2 mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-1.svg"
                        width={170}
                        height={167}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                            <span className="block text-yellow-400 xl:text-xl">
                                first dex launch
                            </span>
                            <span className="block text-white text-sm xl:text-base">
                                first moon
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-primary-lighter py-6 xl:py-10">
                    <div className="-translate-y-1/2 translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-ping-slow"
                        src="/roadMap/road-map-2.svg"
                        width={130}
                        height={136}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            first cex launch
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            second moon
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-y border-r border-primary-lighter rounded-r-full py-6 xl:py-10">
                    <div className="translate-x-[70%] xl:translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-3.svg"
                        width={145}
                        height={139}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            bonk x byat nft
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            awareness overload
                        </span>
                        </div>
                    </div>
                </div>

                <div className="-mt-px border-y border-l border-primary-lighter py-6 xl:py-10 rounded-l-full">
                    <div className="-translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-bounce"
                        src="/roadMap/road-map-6.svg"
                        width={114}
                        height={122}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            gamified raids
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            strongkest army
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="-mt-px border-t border-primary-lighter py-6 xl:py-10">
                    <div className="-translate-y-1/2 -translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-5.svg"
                        width={151}
                        height={122}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            loyalty rewards
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            darwinism
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-primary-lighter py-6 xl:py-10">
                    <div className="-translate-y-1/2 -translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-4.svg"
                        width={145}
                        height={157}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                           staking rewards
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            second moon
                        </span>
                        </div>
                    </div>
                </div>

                <div className="border-primary-lighter py-6 xl:py-10">
                    <div className="-translate-y-1/2 translate-x-1/2 mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-7.svg"
                        width={131}
                        height={122}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            tier-1 listings
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            first moon
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-primary-lighter -mt-px py-6 xl:py-10">
                    <div className="-translate-y-1/2 translate-x-[80%] mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-bounce"
                        src="/roadMap/road-map-8.svg"
                        width={92}
                        height={121}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            Bonk products collab
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            big brother!
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-primary-lighter rounded-r-full -mt-px py-6 xl:py-10">
                    <div className="translate-x-[70%] xl:translate-x-full mx-auto w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-9.svg"
                        width={113}
                        height={118}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            1B mc
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            super status
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:hidden">
                <div className="border-t border-primary-lighter py-5">
                    <div className="-translate-y-1/2 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-1.svg"
                        width={120}
                        height={118}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                            <span className="block text-yellow-400 xl:text-xl">
                                first dex launch
                            </span>
                            <span className="block text-white text-sm xl:text-base">
                                first moon
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-y border-primary-lighter border-r rounded-r-full py-5">
                    <div className="ml-auto -translate-y-10 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-ping-slow"
                        src="/roadMap/road-map-2.svg"
                        width={100}
                        height={104}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            first cex launch
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            second moon
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="-mt-px border-y border-l rounded-l-full border-primary-lighter py-5">
                    <div className="translate-y-20 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-4.svg"
                        width={110}
                        height={139}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            bonk x byat nft
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            awareness overload
                        </span>
                        </div>
                    </div>
                </div>

                <div className="border-primary-lighter py-5">
                    <div className="-translate-y-1/2 -translate-x-24 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-3.svg"
                        width={110}
                        height={96}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            first dex launch
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            first moon
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="border-primary-lighter py-5">
                    <div className="translate-y-1/2 ml-10 sm:ml-32 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-bounce"
                        src="/roadMap/road-map-6.svg"
                        width={110}
                        height={122}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl whitespace-nowrap">
                            Loyalty rewards
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            darnism
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="-mt-px border-primary-lighter border-y border-r rounded-r-full py-5">
                    <div className="ml-auto translate-x-8 -translate-y-[20%] w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-5.svg"
                        width={140}
                        height={157}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            staking rewards
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            second moon
                        </span>
                        </div>
                    </div>
                </div>

                <div className="-mt-px border-primary-lighter border-l border-y rounded-l-full py-5">
                    <div className="translate-y-1/2 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-spin-slow"
                        src="/roadMap/road-map-7.svg"
                        width={100}
                        height={122}
                        alt="sun"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            tier-1 listings
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            big fish
                        </span>
                        </div>
                    </div>
                </div>
                
                <div className="py-5">
                    <div className="ml-auto translate-y-[90%] translate-x-5 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-bounce"
                        src="/roadMap/road-map-8.svg"
                        width={80}
                        height={121}
                        alt="heart"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            bonk products collab
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            big brother!
                        </span>
                        </div>
                    </div>
                </div>
                
                <div></div>

                <div className="border-primary-lighter border-y border-r rounded-r-full -mt-px py-5">
                    <div className="-translate-x-32 translate-y-1/2 w-fit flex flex-col items-center gap-4">
                        <Image
                        className="animate-pulse"
                        src="/roadMap/road-map-9.svg"
                        width={113}
                        height={118}
                        alt="star"
                        />
                        <div className="uppercase text-center font-medium">
                        <span className="block text-yellow-400 xl:text-xl">
                            1b mc!
                        </span>
                        <span className="block text-white text-sm xl:text-base">
                            super status
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
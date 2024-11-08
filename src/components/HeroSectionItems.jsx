import React from 'react'

const HeroSectionItems = () => {
    return (
            <div className="flex flex-col lg:flex-row lg:pt-[60px]">
                <div className="lg:absolute">
                    <h1 className="heading">Taste the authentic <br/> Saudi cuisine</h1>
                    <p className="sub-heading">
                        Among the best Saudi chefs in the world, serving you something beyond flavor.
                    </p>
                    <button
                        className="mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded shadow-lg hover:bg-yellow-500">
                        EXPLORE MENU
                    </button>
                </div>
                <div className="lg:ml-[708px]">
                    <div>
                        <img src="/images/star.svg" width={45} height={45}
                             className="ml-auto relative top-[12px] right-1 lg:left-[24px]"/>
                    </div>
                    <img src="/images/heroImage.png" className="h-[450px] w-full"/>
                    <div
                        className="ml-auto relative bottom-[100px] right-1 lg:left-[50px] bg-yellow-400 rounded-full w-24 h-24 flex justify-center items-center">
                        <div
                            className="border-2 w-20 h-20 border-dotted border-red-600 rounded-full flex justify-center items-center">
                            <p className="text-center font-extrabold uppercase">Today Offer</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default HeroSectionItems

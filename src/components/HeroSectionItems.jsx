import React from 'react'

const HeroSectionItems = () => {
    return (
        <section className="hero_container">
            <div className="flex flex-col lg:flex-row lg:pt-[60px]">
                <div className="lg:absolute">
                    <h1 className="heading">Taste the authentic <br/> Saudi cuisine</h1>
                    <p className="sub-heading">
                        Among the best Saudi chefs in the world, serving you something beyond flavor.
                    </p>
                    <button
                        className="app-btn mt-6"
                    >
                        EXPLORE MENU
                    </button>
                </div>
                <div className="lg:ml-[708px] marforsmlap">
                    <div>
                        <img src="/images/star.svg" width={45} height={45}
                             className="ml-auto relative top-[12px] right-1 lg:left-[24px]"/>
                    </div>
                    <img src="/images/heroImage.png" className="h-[450px] w-full"/>
                    <div
                        className="today-offer-1st-div">
                        <div
                            className="today-offer-2nd-div">
                            <p className="text-center font-extrabold uppercase">Today Offer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSectionItems

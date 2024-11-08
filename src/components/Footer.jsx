
import {footerData} from "../data.js";
const Footer = () => {
    return (
        <div className="text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 uppercase mb-[48px] mt-[16px]">We ready to have you the best dining
                experiences
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {
                    footerData.map((items) => (
                        <div key={items.id} className="flex flex-col justify-center items-center">
                            <img src={items.imgSrc} className="mb-[24px]"/>
                            <h1 className="uppercase font-bold mb-[12px]">{items.h1}</h1>
                            <p>{items.p1} <br/> {items.p2}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center pt-[120px]">
                <div className="flex mb-[25px] flex-wrap">
                    <div className="flex justify-center items-center border-2 border-white rounded-full p-3 me-[24px]">
                        <img src="/images/facebook-circle.svg"/>
                    </div>
                    <div className="flex justify-center items-center border-2 border-white rounded-full p-3 me-[24px]">
                        <img src="/images/twitter-round-new-alt.svg"/>
                    </div>
                    <div className="flex justify-center items-center border-2 border-white rounded-full p-3 me-[24px]">
                        <img src="/images/instagram-round.svg"/>
                    </div>
                    <div className="flex justify-center items-center border-2 border-white rounded-full p-3 ">
                        <img src="/images/linkedin-round.svg"/>
                    </div>
                </div>
                <p className="text-center text-[21px]">
                    © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved
                </p>
            </div>
        </div>
    )
}
export default Footer

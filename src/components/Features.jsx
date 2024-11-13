import {useState} from 'react'
import {Link} from "react-router-dom";

const Features = () => {
    const [activeTab, setActiveTab] = useState('About');
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (

        <section className="pt-[120px]">
            <div className="px-6 lg:px-20 max-w-[1349px] m-auto">
                <div className="grid lg:grid-cols-2 gap-12 mb-[70px]">
                    <img src="/images/feature.png" className="object-cover w-full" alt="Feature"/>
                    <div>
                        <div className="flex flex-col justify-center">
                            <nav className="flex space-x-4">
                                <button
                                    onClick={() => handleTabClick('About')}
                                    className={activeTab === "About" ? "features_tab_active" :
                                        "features_tab_inactive"}

                                >
                                    About
                                </button>
                                <button
                                    onClick={() => handleTabClick('Experience')}
                                    className={activeTab === "Experience" ? "features_tab_active" :
                                        "features_tab_inactive"}

                                >
                                    Experience
                                </button>
                                <button
                                    onClick={() => handleTabClick('Contact')}
                                    className={activeTab === "Contact" ? "features_tab_active" :
                                        "features_tab_inactive"}

                                >
                                    Contact
                                </button>
                            </nav>
                            <hr className="bg-[#BD1F17] h-[2px] mt-0"/>
                            {
                                activeTab === "About" ? (
                                    <>
                                        <h1 className="text-4xl font-bold leading-tight my-5">
                                            EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                                        </h1>
                                        <p className="text-gray-400 mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est
                                            cursus.
                                            Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
                                        </p>
                                    </>
                                ) : activeTab === "Experience" ? (
                                    <>
                                        <h1 className="text-4xl font-bold leading-tight my-5">
                                            A JOURNEY OF TASTE, ELEGANCE, AND EXCELLENCE
                                        </h1>
                                        <p className="text-gray-400 mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est
                                            cursus.
                                            Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-4xl font-bold leading-tight my-5">
                                            CREATING MEMORABLE MOMENTS WITH EVERY MEAL
                                        </h1>
                                        <p className="text-gray-400 mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est
                                            cursus.
                                            Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
                                        </p>
                                    </>
                                )
                            }
                            <div className="flex flex-wrap">
                                <Link className="app-btn">
                                    ABOUT MORE
                                </Link>
                                <p className="mt-2 ms-6 flex font-bold text-black">
                                    <img src="/images/call-alt.svg" alt="Call Icon"/>
                                    <span className="p-2">+88 3426 739 485</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="flex items-center ">
                        <div className="features_icon">
                            <img src="/images/cube.svg"/>
                        </div>
                        <div>
                            <p className="uppercase font-bold">fast delivery</p>
                            <p className="">Within 30 minutes</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="features_icon">
                            <img src="/images/medal.svg"/>
                        </div>
                        <div>
                            <p className="uppercase font-bold">absolute dining</p>
                            <p className="">Best buffet restaurant</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="features_icon">
                            <img src="/images/bag.svg"/>
                        </div>
                        <div>
                            <p className="uppercase font-bold">pickup delivery</p>
                            <p className="">Grab your food order</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative hidden lg:block">
                <div className="absolute right-0 bottom-[90px]">
                    <img src="/images/plater.png" className="w-[150px]"/>
                </div>
            </div>
        </section>
    );
}
export default Features

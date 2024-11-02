import { Link } from "react-router-dom"
import { useContext } from "react"
import ModeContext from "../context/ModeContext"

const About = () => {
    const { darkMode } = useContext(ModeContext)
    return (
        <div className={`mt-16 font-spartan`}>
            <div className="">
                <div className="lg:mx-24 text-center">
                    <h1 className="text-5xl font-bold sm:text-4xl">The trusted and reliable place to <span className="text-[#008000]">Buy</span> Farm Produce</h1>
                    <div className={`my-8 text-lg ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-sm`}>
                        <p>Ebilivie farm is an online market place for customers to get wholesale price of agricultural produce such as palm oil, tubers and nuts. With ebilvie platform, products are delivered at the customers location and guarantees quick delivery</p>
                    </div>
                    <div className="">
                        <input type="email" placeholder="Enter your email" className={`p-3 px-5 mr-2 ${darkMode ? 'bg-[#f2f8f2]' : 'bg-[#c4c4c4]'}  rounded-lg sm:mb-5`} />
                        <button className="p-3 px-4 rounded-lg bg-[#008000] text-[white] sm:text-sm">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="lg:my-28 md:my-20 sm:my-12">
                <div className="flex justify-evenly sm:flex-wrap sm:justify-center w-full">
                    <img className="max-w-32 md:max-w-24" src="/images/MarketWatch Logo.svg" alt="" />
                    <img className="max-w-32 md:max-w-24 sm:my-5 sm:mr-3" src="/images/vector.svg" alt="" />
                    <img className="max-w-32 md:max-w-24" src="/images/Business Insider Logo.svg" alt="" />
                    <img className="max-w-32 md:max-w-24 sm:my-5 sm:mr-3" src="/images/Fidelity Management and Research Company Logo.svg" alt="" />
                    <img className="max-w-32 md:max-w-24" src="/images/WIRED UK Logo undefined.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-between lg:mx-16 md:flex-col-reverse sm:flex-col-reverse">
                <div className="my-5 text-lg text-oxfordBlue lg:mr-16 lg:w-2/4">
                    <div className="mb-5">
                        <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-oxfordBlue'}`}>How <span className="text-[#008000]">Ebilivie </span>Works</h1>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
                    <div className="my-5">

                        {/* Step 1 */}
                        <div className="flex mb-5">
                            <div className="lg:w-22 md:w-16 sm:w-16 mr-5">
                                <img src="/images/Group 2524.svg" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-white' : 'text-oxfordBlue'} sm:text-sm`}>Download FarmVest</h5>
                                <p className={`text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-xs`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex mb-5">
                            <div className="lg:w-22 md:w-16 sm:w-16 mr-5">
                                <img src="/images/Group 2525.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-white' : 'text-oxfordBlue'} sm:text-sm`}>Create account</h5>
                                <p className={`text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-xs`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex mb-5">
                            <div className="lg:w-22 md:w-16 sm:w-16 mr-5">
                                <img src="/images/Group 2526.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-white' : 'text-oxfordBlue'} sm:text-sm`}>Link your bank account</h5>
                                <p className={`text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-xs`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex mb-5">
                            <div className="lg:w-22 md:w-16 sm:w-16 mr-5">
                                <img src="/images/Group 2526.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-sm`}>Start Investing</h5>
                                <p className={`text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} sm:text-xs`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2 px-5 lg:bg-[#f2f8f2] sm:bg-[#f2f8f2] rounded-xl lg:w-2/4">
                    <div className="lg:relative sm:relative">
                        <img src="/images/Group 2528.png" className="md:hidden" alt="" />
                        <img src="/images/unsplash_G_ov3T7WCZg.png" className="lg:absolute top-36 sm:absolute sm:top-16 md:w-57" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly mt-28 sm:mt-5 lg:px-16 md:flex-col sm:flex-col">
                <div className="lg:w-2/4 lg:mr-16 md:mb-5">
                    <div className="py-2 px-5 bg-[#f2f8f2] rounded-xl">
                        <div className="relative">
                            <img src="/images/Group 2528.png" className="" alt="" />
                            <img src="/images/unsplash_oqY09oVTa3k.png" className="absolute top-20 md:top-16" alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/4 sm:mt-5">
                    <h1 className="text-4xl font-bold sm:text-2xl">Your <span className="text-[#008000]">pathway</span> to Future Investment</h1>
                    <p className={`my-8 sm:my-5 text-sm ${darkMode ? 'text-[#c4c4c4]' : 'text-oxfordBlue'} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
                    <p className={`text-sm text-oxfordBlue bg-[#f2f8f2] hover:text-[#008000] p-3 rounded-lg mb-5 relative`}>What is FarmVest?<i className="absolute right-5 bi bi-chevron-down"></i></p>
                    <p className={`text-sm text-oxfordBlue bg-[#f2f8f2] hover:text-[#008000] p-3 rounded-lg mb-5 relative`}>How safe is FarmVest<i className="absolute right-5 bi bi-chevron-down"></i></p>
                    <p className={`text-sm text-oxfordBlue bg-[#f2f8f2] hover:text-[#008000] p-3 rounded-lg mb-5 relative`}>What do I gain from using FarmVest?<i className="absolute right-5 bi bi-chevron-down"></i></p>
                </div>
            </div>
            <div>
                <div className="flex justify-around md:flex-col-reverse sm:flex-col-reverse mt-28 sm:mt-5 lg:px-16 items-center">
                    <div className="md:mt-10">
                        <h1 className="text-5xl md:text-4xl font-bold sm:text-2xl sm:mt-5">Why Choose <span className="text-[#008000]">Ebilivie</span></h1>
                        <p className="my-8 text-lg text-OxfordBlue text-justify sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                        <div className="sm:text-xs">
                            <div className="flex items-center my-5 sm:my-3">
                                <span className={`${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-full text-3xl font-bold text-[#008000] p-2 px-5 sm:px-3 mr-3 sm:text-sm`}>1</span>
                                <p>Real-time Checkup</p>
                            </div>
                            <div className="flex items-center my-5 sm:my-3">
                                <span className={`${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-full text-3xl font-bold text-[#008000] p-2 px-5 sm:px-3 mr-3 sm:text-sm`}>2</span>
                                <p>Flexibility in Investment</p>
                            </div>
                            <div className="flex items-center my-5 sm:my-3">
                                <span className={`${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-full text-3xl font-bold text-[#008000] p-2 px-5 sm:px-3 mr-3 sm:text-sm`}>3</span>
                                <p>Encrypted and Secured</p>
                            </div>
                            <div className="flex items-center my-5 sm:my-3">
                                <span className={`${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-full text-3xl font-bold text-[#008000] p-2 px-5 sm:px-3 mr-3 sm:text-sm`}>4</span>
                                <p>Withdraw Anytime</p>
                            </div>
                            <div className="my-10">
                                <a href="#" className='bg-[#008000] p-3 px-8 text-[#f2f8f2] rounded-lg md:text-sm'>Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:ml-10">
                        <img src="/images/unsplash_L3W6GiQIRWA.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div>
                    <h1 className="text-4xl font-bold text-center sm:text-2xl">What <span className="text-[#008000]">Customers</span> have to say</h1>
                    <p className="my-8 text-sm text-OxfordBlue text-center lg:px-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                    <div className="flex md:flex-col sm:flex-col my-10">
                        <div className={`flex ${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-lg lg:mr-10 md:mb-10`}>
                            <div className="lg:w-1/3">
                                <img src="/images/Rectangle 203.png" className="lg:h-full md:w-96 sm:w-96" alt="" />
                            </div>
                            <div className="lg:w-2/3 lg:ml-5 p-2">
                                <p className="text-sm text-OxfordBlue sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                                <p className="pt-4 text-lg text-OxfordBlue font-semibold text-[#231F20]">Tonia Smart</p>
                            </div>
                        </div>
                        <div className={`flex ${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} rounded-lg sm:mt-5`}>
                            <div className="lg:w-1/3">
                                <img src="/images/Rectangle 205.png" className="lg:h-full md:w-96 sm:w-96" alt="" />
                            </div>
                            <div className="lg:w-2/3 lg:ml-5 p-2">
                                <p className="text-sm text-OxfordBlue sm:text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                                <p className="pt-4 text-lg text-OxfordBlue font-semibold text-[#231F20]">Grace Obi</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 text-center">
                        <a href="#" className='bg-[#008000] p-3 px-8 text-[#f2f8f2] rounded-lg md:text-sm sm:text-xs'>View All</a>
                    </div>
                </div>
            </div>
            <div className={`${darkMode ? 'bg-[#231F20]' : 'bg-[#f2f8f2]'} lg:mx-14 p-12 sm:p-5 text-center rounded-xl`}>
                <div className="">
                    <h1 className="text-3xl font-bold md:text-xl sm:text-lg">Get the best products from <span className="text-[#008000]">Ebilivie</span> Farm</h1>
                    <div className="mt-7">
                        <Link to="/products" className='bg-[#008000] p-3 lg:px-8 text-[#f2f8f2] rounded-lg md:text-sm sm:text-xs'>Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

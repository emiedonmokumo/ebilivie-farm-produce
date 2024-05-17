import { Link } from "react-router-dom"
import { useContext } from "react"
import ModeContext from "./ModeContext"

const Home = () => {
    const { darkMode } = useContext(ModeContext)
    return (
        <div className={`mt-16 container mx-auto p-10 font-spartan`}>
            <div className="">
                <div className="lg:mx-40 text-center">
                    <h1 className="text-5xl font-bold">The trusted and reliable place to <span className="text-forestGreen">Buy</span> Farm Produce</h1>
                    <div className={`my-8 text-lg ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                    <div className="">
                        <input type="email" placeholder="Enter your email" className={`p-3 px-5 mr-2 ${darkMode ? 'bg-semiLight' : 'bg-lightGray'}  rounded-lg`} />
                        <button className="p-3 px-4 rounded-lg bg-forestGreen text-light">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="my-28">
                <div className="flex justify-evenly sm:flex-col w-full">
                    <img className="max-w-32 md:w-24" src="/images/MarketWatch Logo.svg" alt="" />
                    <img className="max-w-32 md:w-24" src="/images/vector.svg" alt="" />
                    <img className="max-w-32 md:w-24" src="/images/Business Insider Logo.svg" alt="" />
                    <img className="max-w-32 md:w-24" src="/images/Fidelity Management and Research Company Logo.svg" alt="" />
                    <img className="max-w-32 md:w-24" src="/images/WIRED UK Logo undefined.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-between mx-16">
                <div className="my-5 text-lg text-oxfordBlue mr-16 w-2/4">
                    <div className="mb-5">
                        <h1 className={`text-3xl font-bold ${darkMode ? 'text-light' : 'text-oxfordBlue'}`}>How <span className="text-forestGreen">Ebilivie </span>Works</h1>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
                    <div className="my-5">

                        {/* Step 1 */}
                        <div className="flex mb-5">
                            <div className="w-22 mr-5">
                                <img src="/images/Group 2524.svg" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-light' : 'text-oxfordBlue'}`}>Download FarmVest</h5>
                                <p className={`text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex mb-5">
                            <div className="w-22 mr-5">
                                <img src="/images/Group 2525.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-light' : 'text-oxfordBlue'}`}>Create account</h5>
                                <p className={`text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex mb-5">
                            <div className="w-22 mr-5">
                                <img src="/images/Group 2526.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-light' : 'text-oxfordBlue'}`}>Link your bank account</h5>
                                <p className={`text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex mb-5">
                            <div className="w-22 mr-5">
                                <img src="/images/Group 2526.png" alt="" />
                            </div>
                            <div>
                                <h5 className={`text-1xl font-semibold ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Start Investing</h5>
                                <p className={`text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'}`}>Start by downloading Ebilivie app on your Android or IOS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-2 px-5 bg-semiLight rounded-xl w-2/4 ">
                    <div className="relative">
                        <img src="/images/Group 2528.png" className="" alt="" />
                        <img src="/images/unsplash_G_ov3T7WCZg.png" className="absolute top-36" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly mt-28 px-16">
                <div className="w-2/4 lg:mr-16">
                    <div className="py-2 px-5 bg-semiLight rounded-xl">
                        <div className="relative">
                            <img src="/images/Group 2528.png" className="" alt="" />
                            <img src="/images/unsplash_oqY09oVTa3k.png" className="absolute top-20" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-2/4">
                    <h1 className="text-4xl font-bold">Your <span className="text-forestGreen">pathway</span> to Future Investment</h1>
                    <p className={`my-8 text-sm ${darkMode ? 'text-lightGray' : 'text-oxfordBlue'} text-justify`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur </p>
                    <p className={`text-sm text-oxfordBlue bg-semiLight p-3 rounded-lg mb-5 relative`}>What is FarmVest?<i className="absolute right-5 bi bi-chevron-down"></i></p>
                    <p className={`text-sm text-oxfordBlue bg-semiLight p-3 rounded-lg mb-5 relative`}>How safe is FarmVest<i className="absolute right-5 bi bi-chevron-down"></i></p>
                    <p className={`text-sm text-oxfordBlue bg-semiLight p-3 rounded-lg mb-5 relative`}>What do I gain from using FarmVest?<i className="absolute right-5 bi bi-chevron-down"></i></p>
                </div>
            </div>
            <div>
                <div className="flex justify-around mt-28 px-16 items-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Why Choose <span className="text-forestGreen">Ebilivie</span></h1>
                        <p className="my-8 text-lg text-OxfordBlue text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                        <div>
                            <div className="flex items-center my-5">
                                <span className={`${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-full text-3xl font-bold text-forestGreen p-2 px-5 mr-3`}>1</span>
                                <p>Real-time Checkup</p>
                            </div>
                            <div className="flex items-center my-5">
                                <span className={`${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-full text-3xl font-bold text-forestGreen p-2 px-5 mr-3`}>2</span>
                                <p>Flexibility in Investment</p>
                            </div>
                            <div className="flex items-center my-5">
                                <span className={`${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-full text-3xl font-bold text-forestGreen p-2 px-5 mr-3`}>3</span>
                                <p>Encrypted and Secured</p>
                            </div>
                            <div className="flex items-center my-5">
                                <span className={`${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-full text-3xl font-bold text-forestGreen p-2 px-5 mr-3`}>4</span>
                                <p>Withdraw Anytime</p>
                            </div>
                            <div className="my-10">
                                <a href="#" className='bg-forestGreen p-3 px-8 text-semiLight rounded-lg '>Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10">
                        <img src="/images/unsplash_L3W6GiQIRWA.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="my-16">
                <div>
                    <h1 className="text-4xl font-bold text-center">What <span className="text-forestGreen">Customers</span> have to say</h1>
                    <p className="my-8 text-sm text-OxfordBlue text-center px-56">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                    <div className="flex my-10">
                        <div className={`flex ${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-lg mr-10`}>
                            <div className="w-1/3">
                                <img src="/images/Rectangle 203.png" className="h-full" alt="" />
                            </div>
                            <div className="w-2/3 ml-5 p-2">
                                <p className="text-sm text-OxfordBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                                <p className="pt-4 text-lg text-OxfordBlue font-semibold text-OxfordBlue2">Tonia Smart</p>
                            </div>
                        </div>
                        <div className={`flex ${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} rounded-lg`}>
                            <div className="w-1/3">
                                <img src="/images/Rectangle 205.png" className="" alt="" />
                            </div>
                            <div className="w-2/3 ml-5 p-2">
                                <p className="text-sm text-OxfordBlue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</p>
                                <p className="pt-4 text-lg text-OxfordBlue font-semibold text-OxfordBlue2">Grace Obi</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 text-center">
                        <a href="#" className='bg-forestGreen p-3 px-8 text-semiLight rounded-lg '>View All</a>
                    </div>
                </div>
            </div>
            <div className={`${darkMode ? 'bg-OxfordBlue2' : 'bg-semiLight'} mx-14 p-12 text-center rounded-xl`}>
                <div className="">
                    <h1 className="text-3xl font-bold">Get the best products from <span className="text-forestGreen">Ebilivie</span> Farm</h1>
                    <div className="mt-7">
                        <Link to="/products" className='bg-forestGreen p-3 px-8 text-semiLight rounded-lg '>Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../../Categories/Categories';

import logo2 from '../../../assets/logo2.png'
import logo3 from '../../../assets/logo3.png'
import logo4 from '../../../assets/logo4.png'
import logo5 from '../../../assets/logo5.png'
import logo6 from '../../../assets/logo6.png'

const Home = () => {
    return (
        <div>

            <section className='pb-8  md:pb-15 lg:pb-20'>
                {/*changed parent div class name lg:max-w-screen-xl */}
                <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-10">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="lg:pr-10">
                            <Link
                                to="/"
                                aria-label="Go Home"
                                title="Logo"
                                className="inline-block mb-5"
                            >

                            </Link>
                            <h5 className="mb-4 text-4xl font-extrabold leading-none">
                                Pick your best ukulele

                                <br className="hidden md:block" />
                                to pick or sell in{' '}
                                <span className="inline-block text-primary">
                                    Find Uke
                                </span>

                            </h5>
                            <p className="mb-6 text-gray-900">
                                <strong>Find Uke</strong> is a resale website which ensures it's user to pick the best desired Ukelele to purchase or sell! Take a look at all the products,their review and the proper information about the instrument,buyer and seller!
                            </p>
                            <hr className="mb-5 border-gray-300" />
                            <div className="flex items-center space-x-4">
                                <img src={logo2} style={{ width: 60, height: 50 }} alt="" />
                                <img src={logo4} style={{ width: 60, height: 50 }} alt="" />
                                <img src={logo5} style={{ width: 60, height: 50 }} alt="" />
                                <img src={logo6} style={{ width: 60, height: 50 }} alt="" />
                                <img src={logo3} style={{ width: 60, height: 55 }} alt="" />
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src="https://cdn.shoplightspeed.com/shops/619825/files/40690464/image.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section className='bg-Neutral-50'>

                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                        <Link to="/" className="mb-4 mr-8">

                        </Link>
                        <div>

                            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Choose the Ukelele Category
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                You can choose the Ukulele category and click on the card to see availability and the full description of that product!
                            </p>
                        </div>
                    </div>
                </div>
                <Categories></Categories>

            </section>

            <section className='pb-10  md:pb-15 lg:pb-20'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-slate-100">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            Find Uke gallery will give you a clear idea about earlier and latest ukulele!
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Since most people only have five fingers per hand, four strings are much easier to manage than six. Chords are easier on the ukulele than guitar. Aside from the advantage of four strings, the ukulele is tuned differently than a guitar. The unique tuning makes chords much easier to finger.
                        </p>
                    </div>
                    <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://images.wallpaperscraft.com/image/single/ukulele_guitar_sunset_200027_1280x720.jpg"
                            alt=""
                        />
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://images.unsplash.com/photo-1518190171695-bbbb69c4a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dWt1bGVsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt=""
                        />
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://previews.123rf.com/images/chloton/chloton1702/chloton170200003/71653810-brown-ukulele-rests-on-a-wooden-floor-use-as-wallpaper.jpg?fj=1"
                            alt=""
                        />
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75OPiH0FKlnkZlcZhuI087RL1g8KkNbaEJw&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className="flex items-center sm:justify-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-warning"
                        >
                            Sign up
                        </Link>
                        <Link
                            to="/login"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-secondary"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>


            <section className="p-6 my-6 bg-cyan-50 className='pb-10  md:pb-15 lg:pb-20'">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">200</p>
                            <p className="capitalize">Orders</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">7500</p>
                            <p className="capitalize">New customers</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                <rect width="32" height="32" x="80" y="264"></rect>
                                <rect width="32" height="32" x="240" y="128"></rect>
                                <rect width="32" height="32" x="136" y="168"></rect>
                                <rect width="32" height="32" x="400" y="264"></rect>
                                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">172%</p>
                            <p className="capitalize">Growth</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  dark:text-gray-100">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 dark:text-gray-800">
                                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">17%</p>
                            <p className="capitalize">Bounce rate</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-100">
                    <div className="max-w-lg sm:text-center sm:mx-auto">
                        <Link
                            to="/"
                            aria-label="Go Home"
                            title="Logo"
                            className="inline-block mb-4"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative bg-white">The</span>
                            </span>{' '}
                            Find Uke is now on mobile App Store and Google Play!
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Google Play has also served as a digital media store, offering games, music, books, movies, and television programs be. Content that has been purchased on Google Play Movies & TV and Google Play Books can be accessed on a web browser, and through the Android and iOS apps.
                        </p>
                        <hr className="my-8 border-gray-300" />
                        <div className="flex items-center mb-3 sm:justify-center">
                            <Link to="/" className="mr-3 transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </Link>
                            <Link to="/" className="transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
                            Download and use for a better experience.So download ASAP!!!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
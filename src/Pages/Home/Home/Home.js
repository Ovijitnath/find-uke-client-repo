import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    The quick, brown fox
                                    <br className="hidden md:block" />
                                    jumps over{' '}
                                    <span className="relative px-1">
                                        <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                        <span className="relative inline-block text-deep-purple-accent-400">
                                            a lazy dog
                                        </span>
                                    </span>
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae. explicabo.
                                </p>
                            </div>
                            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                    <div className="h-full p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            I'll be sure to note that in my log
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            Lookout flogging bilge rat main sheet bilge water nipper fluke
                                            to go on account heave down.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                    <div className="h-full p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            A business big enough that it could be listed
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            Those options are already baked in with this model shoot me an
                                            email clear.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src="https://us.123rf.com/450wm/nutthasethv/nutthasethv1906/nutthasethv190600544/nutthasethv190600544.jpg?ver=6"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-lg sm:text-center sm:mx-auto">
                        <a
                            href="/"
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
                        </a>
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
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <hr className="my-8 border-gray-300" />
                        <div className="flex items-center mb-3 sm:justify-center">
                            <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </a>
                            <a href="/" className="transition duration-300 hover:shadow-lg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                                    className="object-cover object-top w-32 mx-auto"
                                    alt=""
                                />
                            </a>
                        </div>
                        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
                            Sed ut unde omnis iste natus accusantium doloremque laudantium omnis
                            iste.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
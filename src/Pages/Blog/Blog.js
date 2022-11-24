
import React, { useState } from 'react';
import logo from '../../Blog_niche_Brain_2.gif'
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Blog = () => {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 pb-5">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <img className='mx-auto' src={logo} style={{ width: 150, height: 180 }} alt="" />
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/blog" className="mb-6 sm:mx-auto">

                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">

                                <span className="relative">The</span>
                            </span>{' '}
                            Blog Page
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Four asked question is answered in this page! <br />
                            Take a look at the questions and the answers!
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="What are the difference ways to manage a state in a React Application?">

                        <strong> When we talk about state in our applications, it’s important to be clear about what types of state actually matter.</strong> <br />
                        - <strong>Local (UI) state</strong> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.. <br />
                        - <strong>Global (UI) state</strong> – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. <br />
                        - <strong>Server state</strong> – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. <br />
                        - <strong>URL state</strong> – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </Item>
                    <Item title="How does prototypical inheritance work?">
                        Every object with its methods and properties contains an internal and hidden property known as <strong>[[Prototype]]</strong>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>[[Prototype]]</strong> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.


                    </Item>
                    <Item title="What Unit Testing? Why should we write unit tests? ">
                        <strong>Unit testing</strong> is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.
                        <br />
                        <strong>Unit Tests</strong> enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </Item>
                    <Item title="What are the difference  between React,Angular and Vue?">
                        <strong>Pros of Angular</strong>
                        <br />
                        Angular's created to be used alongside with Typescript. And has exceptional support for it.Angular language service, which allows intelligence and autocomplete inside of component external HTML template files.
                        New features like a generation of Angular based npm libraries from CLI, generation, and development of WebComponents based on Angular.
                        MVVM (Model-View-ViewModel) allows developers to work separately on the same app section using the same set of data.
                        <br />
                        <strong>Cons of Angular</strong>
                        <br />
                        Variety of different structures makes it a bit harder to learn in comparison with React and Vue.js.
                        Relatively slower performance, according to different benchmarks.
                        <br />
                        <strong> Pros of React</strong>
                        <br />
                        Easy to learn, thanks to its simple design, use of JSX for templating, and highly detailed documentation.
                        Developers spend more time writing modern JavaScript, and less time worrying about the framework-specific code.
                        Extremely fast, courtesy of React's Virtual DOM implementation and various rendering optimizations.
                        Data-binding is one-way, meaning less unwanted side effects.
                        <br />
                        <strong>Cons of React</strong>
                        <br />
                        React is moving away from class-based components, which may be a barrier for developers more comfortable with Object Oriented Programming.
                        Mixing templating with logic (JSX) can be confusing for some developers at first.
                        <br />
                        <strong> Pros of Vue</strong>
                        <br />
                        Vue.js has very circumstantial documentation which can fasten learning curve for developers.
                        It provides a rapid switching period from other frameworks to Vue.js.
                        Vue.js has weight around 20KB that allows reaching much better performance in comparison to other frameworks.
                        Vue.js can help to develop pretty large reusable templates that can be made with no extra time allocated for that according to its simple structure.
                        <br />
                        <strong>Cons of Vue</strong>
                        <br />
                        Vue.js might have issues while integrating into huge projects and there is still no experience with possible solutions, but they will definitely come soon.
                        Vue.js still has a pretty small market share in comparison with React or Angular​.
                    </Item>
                </div>
            </div>
        </div>
    );
};
export default Blog;
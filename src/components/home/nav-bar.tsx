"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const NavBar = () => {
    const people = [{ name: "Lorem ipsum 1" }, { name: "Lorem ipsum 2" }];

    const [selected, setSelected] = useState(people[0]);

    return (
        <nav className="w-full gap-3 py-[13px] px-[40px]   bg-[#fff] flex justify-between items-center">
            <div className="flex gap-8 items-center">
                <Image
                    src="/images/jkyoglogo.png"
                    alt="JKYog Logo"
                    width={100}
                    height={30}
                />

                <div className="hidden lg:flex space-x-4 items-center">
                    {/* Dropdown menus for 'Yoga & Meditation' and 'Kids corner' would require additional implementation */}

                    <div className="flex gap-3 justify-start items-center ">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left  text-base">
                                    <span className="block truncate">
                                        Yoga & Meditation
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2  ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-base">
                                    <span className="block truncate">
                                        Events
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2  ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-base">
                                    <span className="block truncate">
                                        Online Offering
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2 ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-base">
                                    <span className="block truncate">
                                        Resources
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2   ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-base">
                                    <span className="block truncate ">
                                        About us
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2  ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative text-[#645743] font-medium cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-base">
                                    <span className="block truncate ">
                                        Kids corner
                                    </span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.9292 7L8.9292 11L12.9292 7"
                                                stroke="#645743"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-2  ${
                                                        active
                                                            ? "bg-amber-100 text-amber-900"
                                                            : "text-gray-900"
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4 6.5L8 10.5L12 6.5"
                                                                        stroke="white"
                                                                        strokeWidth="1.2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    aria-label="Search"
                    className="text-gray-700 hover:text-orange-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                    >
                        <path
                            d="M15.7138 7.3382C18.1647 9.78913 18.1647 13.7629 15.7138 16.2138C13.2629 18.6647 9.28913 18.6647 6.8382 16.2138C4.38727 13.7629 4.38727 9.78913 6.8382 7.3382C9.28913 4.88727 13.2629 4.88727 15.7138 7.3382"
                            stroke="#645743"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M19 19.5L15.71 16.21"
                            stroke="#645743"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <Link legacyBehavior href="/login" passHref>
                    <a className="text-gray-700 border flex justify-center border-[#dad3c8] gap-[2px] rounded-3xl px-[16px] py-[10px]  hover:text-orange-500">
                        Log in
                    </a>
                </Link>
                <Link legacyBehavior href="/signup" passHref>
                    <a className="bg-[#EF6F1F] flex justify-center border-[#dad3c8] gap-[2px] rounded-3xl px-[16px] py-[10px]  text-white  ">
                        Sign up
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

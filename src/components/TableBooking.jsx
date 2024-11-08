import React from 'react'
import {DatePickerForm} from "./ui/DatePicker.jsx";

const TableBooking = () => {
    const formSubmit = (e)=>{
        e.preventDefault()
        alert("Thanks for the booking request. Your Request is under processing. We will inform you through email shortly.")
    }
    return (
        <div className="text-white pt-[30px] lg:pt-[120px] !max-w-[1349px]">
            <div>
                <h3 className="text-red-600 font-bold text-lg flex items-center">
                    <img src="/images/Rectangle%204708.svg" className="me-2"/>
                    Book Now
                </h3>
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 uppercase">Book Your Table</h2>
                <p className="lg:w-[485px]">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie
                    vel, ornare non id blandit netus.</p>
            </div>
            <form onSubmit={formSubmit}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8 lg:w-[50%]">
                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full border-0 py-1.5 text-white
                            shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-white sm:text-sm/6 bg-transparent ps-3"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="family-name"
                                className="block w-full border-0 py-1.5 text-white
                            shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-white sm:text-sm/6 bg-transparent ps-3"
                                placeholder="Your Email"/>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <DatePickerForm/>
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <div className="mt-2">
                            <input
                                id="total-people"
                                name="total-people"
                                type="number"
                                autoComplete="family-name"
                                className="block w-full border-0 py-1.5 text-white
                            shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-white sm:text-sm/6 bg-transparent ps-3"
                                placeholder="Total People"/>
                        </div>
                    </div>
                    <div className="sm:col-span-8">
                        <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full border-0 py-1.5 text-white
                            shadow-sm ring-1 ring-inset ring-gray-300
                            placeholder:text-white sm:text-sm/6 bg-transparent ps-3"
                            placeholder="Message"
                            rows="5"
                        />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-yellow-400 text-black font-bold py-[16px] px-[24px]  shadow-lg hover:bg-yellow-500">
                    BOOK NOW
                </button>
            </form>
        </div>
    )
}
export default TableBooking

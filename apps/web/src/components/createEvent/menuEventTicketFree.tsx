"use client"
import Image from "next/image"
import React, { useEffect, useRef, useState } from 'react';
import ModalEventTicket from "./modal_eventpay";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps, useFormik } from "formik";
import * as yup from "yup";
import { RiGalleryUploadFill } from "react-icons/ri";
import ImagePreview from "./imagePreview";
import { createEventFree } from "@/libs/action/event";

// import { useAppSelector } from '@/redux/hooks';

export interface FormEventTicketFree {
    image: File | null,
    name: string,
    category: string,
    date: string,
    time: string,
    seat: string,
    location: string,
    description: string,
}


export default function MenuEventTicketFree () {

    
    const mediaRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: any, setFieldValue: any) => {
        const file = event.target.files[0]
        console.log(file);
        
        if (file) {
            setFieldValue('image', file)
        }
    }

    // SETTINGAN MODAL
    const [ModalOpen, setModalOpen] = useState(false)

    const HandleOpen = () => {
        setModalOpen(!false)
    }

    const HandleClose = () => {
        setModalOpen(false)
    }

    const [startDate, setStartDate] = useState(new Date());


    const [qty, number] = useState(0);

    const plus = () => {
        number(a => a + 1);
    }

    const min = () => {
        if (qty > 0) {
            number(qty - 1)
        }
    }

    // SETTINGAN FORMIK
    const createEvent = async (data: FormEventTicketFree) => {
        try {
            const res = await createEventFree(data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    const validationSchema = yup.object().shape({
        image: yup.string().required("required fields"),
        name: yup.string().required("required fields"),
        date: yup.string().required("required fields"),
        time: yup.string().required("required fields"),
        seat: yup.string().required("required fields"),
        location: yup.string().required("required fields"),
        description: yup.string().required("required fields"),

    })

    const initialValues: FormEventTicketFree = {
        image: null,
        name: "",
        category: "",
        date: "",
        time: "",
        seat: "",
        location: "",
        description: "",
    }

    return (
        <div>
            <div className="relative">
                <div>
                    <div onClick={HandleOpen} className="avatar cursor-pointer">
                        <button className="text-secondary py-3 px-[83px] pb-3 rounded-xl border border-solid border-secondary hover:bg-gradient-to-l from-third to-primary transition duration-300 ease-in-out">
                            Create New Event
                        </button>
                    </div>
                </div>
                <div>
                    <ModalEventTicket isOpen={ModalOpen} onClose={HandleClose}>
                        <div className="flex justify-center pb-5">
                            <Image src="/Logo-minpro.png" alt="Logo" width={70} height={70} className='' />
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(value, action) => {
                                createEvent(value)
                                alert(JSON.stringify(value))
                                action.resetForm()
                                console.log(value)
                            }}
                        >
                            {({setFieldValue, values}) => {
                                return (
                                    <Form>
                                        <h1 className='text-secondary font-bold text-center text-[30px]'>CREATE <span className="text-third">FREE EVENT</span></h1>
                                        <div className="pb-5 p-4">
                                            <div className="pb-5">
                                                <p className="text-sm text-white">Event Poster</p>
                                                <div className="py-20 px-5 border border-solid border-white rounded-md">
                                                    <label htmlFor="upload" className="text-center">
                                                        <div className="flex justify-center">
                                                            <RiGalleryUploadFill size={40} className="text-third cursor-pointer hover:text-white" />
                                                        </div>
                                                        <p className="text-white">Upload Your Poster Event</p>
                                                    </label>
                                                    <ImagePreview image={values.image} setFieldValue={setFieldValue} mediaRef={mediaRef} />
                                                    <input
                                                        onChange={(e : any) => handleFileChange(e, setFieldValue)}
                                                        type="file"
                                                        id="upload"
                                                        name="image"
                                                        className="hidden"
                                                    />
                                                    <ErrorMessage
                                                        name="image"
                                                        component={'div'}
                                                        className="text-xs text-red-700"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-sm text-white">Event Name</p>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className="py-3 p-2 w-full rounded-md bg-transparent border border-solid border-white text-white "
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                            <div className="flex flex-wrap gap-10">
                                                <div className="lg:pt-5">
                                                    <p className="text-white text-sm pb-[6px]">Category Event</p>
                                                    <Field
                                                        as="select"
                                                        id="Category"
                                                        name="category"
                                                        className="bg-white text-primary pr-10 text-center rounded-md py-[6px] px-[10px]">
                                                        <option selected className="text-gray-200">Category</option>
                                                        <option value="music">Music</option>
                                                        <option value="film">Film</option>
                                                        <option value="game">Games</option>
                                                    </Field>
                                                    <ErrorMessage
                                                        name="category"
                                                        component={'div'}
                                                        className="text-xs text-red-700"
                                                    />
                                                </div>
                                                <div className="lg:pt-5">
                                                    <p className="text-white font-normal text-sm pb-[6px]">Date Event</p>
                                                    <Field
                                                        type="date"
                                                        name="date"
                                                        className='bg-secondary rounded-lg text-black py-1 p-2' />

                                                    <ErrorMessage
                                                        name="date"
                                                        component={'div'}
                                                        className="text-xs text-red-700"
                                                    />
                                                </div>
                                                <div className="lg:pt-5">
                                                    <p className="text-white font-normal text-sm">Time</p>
                                                    <div className="pt-2">
                                                        <Field
                                                            type= "time"
                                                            name="time"
                                                            className="w-full h-[30px] p-1 text-center text-primary text-[14px] rounded-md bg-white border border-solid resize-none"
                                                        />
                                                        <ErrorMessage
                                                            name="time"
                                                            component={'div'}
                                                            className="text-xs text-red-700"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="lg:pt-5">
                                                    <p className="text-white font-normal text-sm">Visitor Quota</p>
                                                    <div className="flex gap-3">
                                                        <div className="pt-2">
                                                            <Field
                                                                type="number"
                                                                name="seat"
                                                                className="w-[50px] h-[30px] p-1 text-center text-primary text-[14px] rounded-md bg-white border border-solid resize-none"
                                                            />
                                                            <ErrorMessage
                                                                name="seat"
                                                                component={'div'}
                                                                className="text-xs text-red-700"
                                                            />
                                                        </div>
                                                        {/* <div>
                                                            <div className="rotate-180">
                                                                <button onClick={plus}><FaRegCaretSquareDown className="text-white hover:text-third" /></button>
                                                            </div>
                                                            <button onClick={min}><FaRegCaretSquareDown className="text-white hover:text-third" /></button>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-5">
                                                <p className="text-white text-sm">Event Location</p>
                                                <textarea
                                                    name="location"
                                                    className="w-full h-[32px] p-1 text-white text-[14px] rounded-lg bg-transparent border border-solid resize-none"
                                                    onChange={(e) => setFieldValue("location", e.target.value)}
                                                />
                                                <ErrorMessage
                                                    name="location"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                            <div className="pt-5">
                                                <p className="text-white text-sm">Description Event</p>
                                                <textarea
                                                    name="description"
                                                    className="w-full min-h-24 p-3 text-white text-[14px] rounded-xl bg-transparent border border-solid resize-none"
                                                    onChange={(e) => setFieldValue("description", e.target.value)}
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                            <div className="pt-10">
                                                <button
                                                    type="submit"
                                                    className="py-3 px-1 bg-white rounded-lg w-full text-primary hover:bg-gradient-to-l from-purple-700 to-purple-700 hover:text-white">Create Event Ticket</button>
                                            </div>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </ModalEventTicket>
                </div>
            </div>
        </div >
    )
}
"use client"

import Image from "next/image"
import { RiUser3Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { getCookie } from "@/libs/action/server";
import axios from "axios";
import Cookies from "js-cookie";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

export interface Date {
    start: string;
    end: string;
}

export default function Graphic() {
    const [data, setData] = useState()

    const validationSchema = yup.object().shape({
        start: yup.string().required("required fields date"),
        end: yup.string().required("required fields date"),
    })

    const initialValues: Date = {
        start: "",
        end: "",
    }

    useEffect(() => {
        const fetchData = async () => {
            const token = await Cookies.get("token")
            const organizer = await axios.get(`http://localhost:8000/api/checkouts/transaction/range`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            setData(organizer.data.data);
        }
        fetchData()
    }, [])

    console.log(data)

    return (
        <div>
            <div className="w-full bg-gradient-to-b from-primary to-primary to-20% pb-10 lg:pb-10">
                <Image src="/bgprofile.png" alt="Background" width={1000} height={100} className="absolute opacity-50 md:w-auto lg:w-[1920px]" />
                <div className="flex flex-wrap justify-center gap-20 pt-[150px]">
                    <div className="avatar cursor-pointer flex justify-center pt-10">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, action) => {
                                alert(JSON.stringify(values))
                                action.resetForm()
                                console.log(values)
                            }}
                        >
                            {({ setFieldValue, values }) => {
                                return (
                                    <div className=" w-[250] flex justify-center items-center">
                                        <Form className="grid grid-cols-2 items-center place-content-center gap-20 justify-between">
                                            <div>
                                                <Field
                                                    type="date"
                                                    name="start"
                                                    // placeholder="Start"
                                                    className='bg-secondary rounded-lg text-black py-1 p-2' />

                                                <ErrorMessage
                                                    name="start"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                            <div>
                                                <Field
                                                    type="date"
                                                    name="start"
                                                    className='bg-secondary rounded-lg text-black py-1 p-2' />

                                                <ErrorMessage
                                                    name="start"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                            <button type="submit" className="bg-primary text-secondary rounded-lg p-2">Submit</button>
                                        </Form>
                                    </div>
                                )
                            }}
                        </Formik>
                    </div>
                    
                    <div className="p-10 pt-0 lg:pt-16">
                    </div>
                </div>
            </div>
        </div>
    )
}
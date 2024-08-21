"use client";

import { ErrorMessage, Field, Form, Formik, FormikProps, useFormik } from "formik";
import * as yup from "yup";
import { data } from "cypress/types/jquery"
import Image from "next/image"
import Link from "next/link"
import { props } from "cypress/types/bluebird";

// Setingan Formik

interface PostReview {
    review: string,
    ratings: string
}

const validationSchema = yup.object().shape({
    review: yup.string().required("write your review!"),
    ratings: yup.string().required("Please fill in the rating!")
})

const initialValues: PostReview = {
    review: "",
    ratings: ""
}

export default function CreateReview() {
    return (
        <div>
            <div className="w-full lg:pr-[17%] bg-primary lg:pt-10 lg:pl-[240px] p-5">
                <h1 className="font-bold text-xl text-center lg:text-start text-secondary">Review</h1>
                <div className="pt-10">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(value, action) => {
                            alert(JSON.stringify(value))
                            action.resetForm
                        }}
                    >
                        {({ setFieldValue }) => {
                            return (
                                <Form>
                                    <div className="flex gap-3">
                                        <div>
                                            <div className="avatar cursor-pointer">
                                                <div className="ring-third ring-offset-base-100 w-[55px] rounded-full">
                                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-white font-semibold text-start text-[16px] hover:text-third">Name User</h1>
                                            <div className="flex gap-3">
                                                <p>Rating</p>
                                                <Field
                                                    type="number"
                                                    name="ratings"
                                                    className="w-[50px] h-[30px] p-1 text-center text-primary text-[14px] rounded-md bg-white border border-solid resize-none"
                                                />
                                                <ErrorMessage
                                                    name="ratings"
                                                    component={'div'}
                                                    className="text-xs text-red-700"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="lg:pl-[65px]">
                                            <textarea
                                                name="review"
                                                className="w-full lg:w-[840px] p-1 text-white text-[16px] bg-transparent border-b border-solid border-secondary focus:outline-none resize-none"
                                                placeholder="What is your review?"
                                                onChange={(e) => setFieldValue("review", e.target.value)}
                                            />
                                            <ErrorMessage
                                                name="review"
                                                component='div'
                                                className="text-xs text-red-700"
                                            />
                                        </div>
                                        <div className="flex justify-end pt-10 pb-3">
                                            <button
                                                type="submit"
                                                // disabled={!!errors.rating-2 || !!errors.review || !dirty}
                                                className="text-primary font-semibold py-2 px-[80px] rounded-full disabled:bg-gray-500 bg-secondary hover:bg-gradient-to-l from-third to-third transition duration-100 ease-in-out hover:text-white"
                                            >Post</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
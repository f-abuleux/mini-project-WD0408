"use client";

import { ErrorMessage, Field, Form, Formik, FormikProps, useFormik } from "formik";
import * as yup from "yup";
import { data } from "cypress/types/jquery"
import Image from "next/image"
import Link from "next/link"
import { props } from "cypress/types/bluebird";

//Setingan Formik

interface PostReview {
    review: string,
    rating-2: string
}

const validationSchema = yup.object().shape({
    review: yup.string().required("write your review!")
    rating-2: yup.string().required("Please fill in the rating!")
})

const initialValues: PostReview = {
    review: ""
    rating-2:""
}

export default function ReviewEvent() {
    return (
        <div>
            <div className="w-full pr-[17%] bg-primary pt-10 pl-[240px]">
                <h1 className="font-bold text-xl text-secondary">Review</h1>
                <div className="pt-10">

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(value, action) => {
                            alert(JSON.stringify(value))
                            action.resetForm
                        }}
                    > {({ errors, dirty, isSubmitting }) => {
                        return (
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
                                    <div className="rating">
                                        <Field
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                        />
                                        <ErrorMessage
                                            name="rating-2"
                                            component='div'
                                            className="text-xs text-red-700"
                                        />
                                        <Field
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <Field type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <Field type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <Field type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                                <div className="pl-[65px]">
                                    <textarea
                                        name="review"
                                        className="w-[840px] p-1 text-white text-[16px] bg-transparent border-b border-solid border-secondary focus:outline-none resize-none"
                                        placeholder="What is your review?"
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
                                    disabled={!!errors.rating-2 || !!errors.review || !dirty}
                                    className="text-primary font-semibold py-2 px-[80px] rounded-full disabled:bg-gray-500 bg-secondary hover:bg-gradient-to-l from-third to-third transition duration-100 ease-in-out hover:text-white"
                                    >Post</button>
                                </div>
                            </div>
                         )
                    }}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
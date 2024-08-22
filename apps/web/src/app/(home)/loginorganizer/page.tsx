"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import * as yup from "yup";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { loginOrganizer } from "@/libs/action/organizer";
import { createCookie, deleteCookie } from "@/libs/action/server";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { toast } from "react-toastify";

const signUpSchema = yup.object().shape({
      username: yup.string().required("username is required"),
      password: yup.string().required("password is required"),
});

export interface ILogin {
      username: string;
      password: string;
}
const initialValues: ILogin = { username: "", password: "" };

export default function Login() {
      const router = useRouter()

      const onLogin = async (data: ILogin, action : FormikHelpers<ILogin>) => {
            try {
                  const { result, ok } = await loginOrganizer(data)
                  if (!ok) {
                        throw result.msg
                  }
                  createCookie('token', result.token)
                  router.push('/home')
                  console.log(result)
                  console.log(ok)
                  toast.info(result.msg)
            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <div className="bg-gradient-to-b from-primary to-primary to-20%" id="#loginorganizer">
                  <Image src="/bg5.png" alt="Background" width={800} height={100} className="absolute opacity-40 md:w-auto lg:w-[1440px]" />
                  <div className="flex justify-center relative pt-10">
                        <Image src="/Logo-minpro.png" alt="hero" width={200} height={200}
                              className="w-[150px] mx-10 items-center"
                        />
                  </div>
                  <div className="flex flex-col sm:flex-row w-svh justify-center items-center pt-10 pb-5 relative">
                        {/* <div className="p-5">
                              <Image
                                    src="/photo/1concert.jpg"
                                    alt="hero"
                                    width={500}
                                    height={500}
                                    className=" mb-10 sm:mb-40 shadow-lg border-[1px] rounded-[20px] "
                              />
                        </div> */}
                        <div className="mb-40 pt-10">
                              <h1 className="font-bold mt-6 mb-6 mx-10 font-[bold] text-[38px] text-center text-secondary p-1">WELCOME BACK! <span className="text-third">ORGANIZER</span></h1>
                              <p className=" text-secondary text-center text-[15px] font-[normal]">Create your EventUs account here! <Link href="/registerorganizer" className="text-third hover:font-[bold] font-[normal] underline hover:text-secondary duration-300 ">Register</Link></p>
                              <Formik
                                    initialValues={initialValues}
                                    validationSchema={signUpSchema}
                                    onSubmit={(values, action) => {
                                          onLogin(values, action)
                                          action.resetForm()
                                          console.log(values);
                                    }}
                              >
                                    {(props: FormikProps<ILogin>) => {
                                          return (
                                                <div className="my-6">
                                                      <Form>
                                                            <div className="flex flex-col gap-5 items-center">
                                                                  <div>
                                                                        <Field
                                                                              type="text"
                                                                              name="username"
                                                                              placeholder="Username"
                                                                              className="text-white md:min-w-[500px] mx-10 rounded-full pl-5 pr-10 py-3 border-[1px] border-gray-400 focus:outline-none "
                                                                        />
                                                                        <ErrorMessage
                                                                              name="username"
                                                                              component={"div"}
                                                                              className="text-third text-[12px]  pl-6 mx-10"
                                                                        />
                                                                  </div>
                                                                  <div>
                                                                        <Field
                                                                              type="password"
                                                                              name="password"
                                                                              placeholder="Password"
                                                                              className="text-white md:min-w-[500px] mx-10 rounded-full pl-5 pr-10 py-3 border-[1px] border-gray-400 focus:outline-none"
                                                                        />
                                                                        <ErrorMessage
                                                                              name="password"
                                                                              component={"div"}
                                                                              className="text-third text-[12px]  pl-6 mx-10"
                                                                        />
                                                                  </div>
                                                                  <button
                                                                        type="submit"
                                                                        className="mt-4 text-secondary w-[100px] md:min-w-[150px] text-center py-1 rounded-full font-semibold hover:bg-secondary hover:text-primary hover:border-[1px] hover:w-[155px]  duration-300 ease-in border-[1px] active:text-third "
                                                                  >
                                                                        Login
                                                                  </button>
                                                            </div>
                                                      </Form>
                                                </div>
                                          );
                                    }}
                              </Formik>
                        </div>
                  </div>
            </div>
      );
}

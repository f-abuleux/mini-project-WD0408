"use client"

import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsClipboardCheck, BsCart2 } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Image from "next/image";
import * as yup from "yup";
import { Metadata } from "next";

const checkoutSchema = yup.object().shape({
      quantitiy: yup.number().required("amount is required").positive("amount must be a positive number"),
      voucherdiscount: yup.string(),
      point: yup.boolean()
})

interface ICheckout {
      quantitiy: number;
      voucherdiscount: string;
      point: boolean;
}

export default function Checkout() {
      const initialValues: ICheckout = { quantitiy: 0,
            voucherdiscount: "", point: false
      }
      return (
            <div>
                  <div className="bg-primary pt-10">
                        <div className="flex justify-center">
                              <Image src="/Logo-minpro.png" alt="hero" width={100} height={200}
                                    className="w-[100px] flex justify-center mx-10 items-center"
                              />
                        </div>
                        <div className="flex flex-col sm:flex-row  justify-evenly">
                              <div className="mt-5 p-5 sm:w-[350px] lg:w-[600px]" >
                                    <div className="sm:w-[350px] lg:w-[600px]">
                                          <div className="flex flex-col">
                                                <p className="font-[bold] text-white text-[20px] pt-4">Secure Checkout powered</p>
                                                <div className="flex items-center gap-2">
                                                      <h1 > by Purwadikhap</h1>
                                                      <MdOutlineVerifiedUser />
                                                </div>
                                          </div>
                                          <div className=""></div>
                                          <span className="border-b  w-full block my-4"></span>
                                    </div>
                                    <div>
                                          <div className="flex gap-2 items-center px-5">
                                                <BsClipboardCheck className="w-[30px] h-[30px]" />
                                                <h1 className="font-[bold] text-[28px] text-third">Details</h1>
                                          </div>
                                          <Formik
                                                initialValues={initialValues}
                                                validationSchema={checkoutSchema}
                                                onSubmit={(values) => {
                                                      console.log(values);
                                                }}
                                          >
                                                {(props: FormikProps<ICheckout>) => {
                                                      return (
                                                            <div className="flex flex-col gap-5 m-5">
                                                                  <Form>
                                                                        <div className="flex flex-col gap-5">
                                                                                                                        <div>
                                                                                    <Field
                                                                                          type="text"
                                                                                          name="quantitiy"
                                                                                          placeholder="Amount of Ticket"
                                                                                          className="text-white w-[175px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                          name="quantitiy"
                                                                                          component={"div"}
                                                                                          className="text-third text-[12px]"
                                                                                    />
                                                                              </div>
                                                                              <div>
                                                                                    <Field
                                                                                          type="text"
                                                                                          name="voucherdiscount"
                                                                                          placeholder="Voucher Discount"
                                                                                          className="text-white w-[175px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                          name="voucherdiscount"
                                                                                          component={"div"}
                                                                                          className="text-third text-[12px]"
                                                                                    />
                                                                              </div>
                                                                              <div className=" flex justify-start gap-5 items-center">
                                                                                    <div>
                                                                                          <p className="text-white items-center text-center place-content-center">USE YOUR POINTS? </p>
                                                                                          <p className="text-gray-300 text-[10px]">your current point is ${"points"}</p>
                                                                                    </div>
                                                                                    <Field
                                                                                          type="checkbox"
                                                                                          name="point"
                                                                                          className="w-[35px] h-[35px] rounded-[20px] border-secondary"
                                                                                    />
                                                                                    <ErrorMessage
                                                                                          name="point"
                                                                                          component={"div"}
                                                                                          className="text-third text-[12px]"
                                                                                    />
                                                                              </div>
                                                                              <div className="mt-10 text-center">
                                                                                    <button
                                                                                          type="submit"
                                                                                          className="text-center text-secondary h-[50px] w-[200px] lg:w-[105%] bg-third rounded-[10px] hover:bg-secondary hover:text-primary duration-100 ease-in"
                                                                                    >CHECKOUT</button>
                                                                              </div>
                                                                        </div>
                                                                  </Form>
                                                            </div>
                                                      )
                                                }}
                                          </Formik>
                                    </div>
                              </div>
                              <div className="flex flex-col gap-5 lg:border-l w-[410px] p-10 mt-10 h-[700px]">
                                    <div className="flex items-center gap-2 ">
                                          <BsCart2 className="w-[35px] h-[35px] text-third" />
                                          <h1 className="text-[28px] font-[bold] text-white">Your Order</h1>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5 items-center">
                                          <p className="text-white">Quantity</p>
                                          <p className="text-white text-right">JUMLAH TIKET</p>

                                          <p className="text-white">Discount Applied</p>
                                          <p className="text-white text-right">JUMLAH HARGA DIDISKON</p>

                                          <p className="text-white text-[20px] font-[normal]">TOTAL</p>
                                          <p className="text-white text-right">JUMLAH TOTAL</p>
                                    </div>
                                    <div className="flex items-center gap-2 pt-10">
                                          <IoBagCheckOutline className="w-[35px] h-[35px] text-third" />
                                          <h1 className="text-[28px] text-white font-[bold]">Your Checkout</h1>
                                    </div>
                                    <div className="flex flex-col">
                                          <p></p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
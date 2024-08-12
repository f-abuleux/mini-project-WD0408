"use client"

import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsClipboardCheck, BsCart2 } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import Image from "next/image";
import * as yup from "yup";

const checkoutSchema = yup.object().shape({
      name: yup.string().required("username is required"),
      email: yup.string().email("please enter a valid email").required("email is required"),
      phonenumber: yup.string().matches(/^[0-9]+$/, "phonenumber must contain only numbers").required("phonenumber is required"),
      amount: yup.number().required("amount is required").positive("amount must be a positive number"),
      voucherdiscount: yup.string(),
      point: yup.boolean()
})

interface ICheckout {
      name: string;
      email: string;
      phonenumber: string;
      amount: number;
      voucherdiscount: string;
      point: boolean;
}

export default function Checkout() {
      const initialValues: ICheckout = {
            name: "", email: "", phonenumber: "", amount: 0,
            voucherdiscount: "", point: false
      }
      return (
            <div className="">
                  <div className="bg-primary">
                        <Image src="/Logo-minpro.png" alt="hero" width={200} height={200}
                              className="w-[100px] mx-10 items-center"
                        />
                  </div>
                  <div className="flex flex-col sm:flex-row  justify-evenly">
                        <div className="mt-5 p-5 sm:w-[350px] lg:w-[600px]" >
                              <div className=" border-t sm:w-[350px] lg:w-[600px]">
                                    <div className="flex flex-col">
                                          <p className="font-[bold] text-[20px] pt-4">Secure Checkout powered</p>
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
                                          <h1 className="font-[bold] text-[28px]">Your Details</h1>
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
                                                                                    name="name"
                                                                                    placeholder="Name"
                                                                                    className="w-[350px] lg:w-[550px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                              />
                                                                              <ErrorMessage
                                                                                    name="name"
                                                                                    component={"div"}
                                                                                    className="text-third text-[12px]"
                                                                              />
                                                                        </div>
                                                                        <div>
                                                                              <Field
                                                                                    type="text"
                                                                                    name="email"
                                                                                    placeholder="Email"
                                                                                    className="w-[350px] lg:w-[550px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                              />
                                                                              <ErrorMessage
                                                                                    name="email"
                                                                                    component={"div"}
                                                                                    className="text-third text-[12px]"
                                                                              />
                                                                        </div>
                                                                        <div>
                                                                              <Field
                                                                                    type="text"
                                                                                    name="phonenumber"
                                                                                    placeholder="08XXXXXXXXXX"
                                                                                    className="w-[350px] lg:w-[550px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                              />
                                                                              <ErrorMessage
                                                                                    name="phonenumber"
                                                                                    component={"div"}
                                                                                    className="text-third text-[12px]"
                                                                              />
                                                                        </div>
                                                                        <div>
                                                                              <Field
                                                                                    type="text"
                                                                                    name="amount"
                                                                                    placeholder="Amount of Ticket"
                                                                                    className="w-[175px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                              />
                                                                              <ErrorMessage
                                                                                    name="amount"
                                                                                    component={"div"}
                                                                                    className="text-third text-[12px]"
                                                                              />
                                                                        </div>
                                                                        <div>
                                                                              <Field
                                                                                    type="text"
                                                                                    name="voucherdiscount"
                                                                                    placeholder="Voucher Discount"
                                                                                    className="w-[175px] border-[1px] h-[50px] p-5 rounded-[10px] border-secondary"
                                                                              />
                                                                              <ErrorMessage
                                                                                    name="voucherdiscount"
                                                                                    component={"div"}
                                                                                    className="text-third text-[12px]"
                                                                              />
                                                                        </div>
                                                                        <div className=" flex justify-start gap-5 items-center">
                                                                              <div>
                                                                                    <p className=" items-center text-center place-content-center">USE YOUR POINTS? </p>
                                                                                    <p className=" text-[10px]">your current point is ${"points"}</p>
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
                                                                        <div className="mt-10">
                                                                              <button
                                                                                    type="submit"
                                                                                    className="text-center text-secondary h-[50px] w-[200px] bg-primary rounded-[10px] hover:bg-secondary hover:text-primary duration-100 ease-in"
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
                        <div className="flex flex-col gap-5 border-l w-[405px] p-10 mt-10 h-[700px]">
                              <div className="flex items-center gap-2 ">
                                    <BsCart2 className="w-[30px] h-[30px]" />
                                    <h1 className="text-[28px] font-[bold]">Your Order</h1>
                              </div>
                              <div className="grid grid-cols-2 gap-5 items-center">
                                    <p>Quantity</p>
                                    <p className="text-right">JUMLAH TIKET</p>

                                    <p>Discount Applied</p>
                                    <p className="text-right">JUMLAH HARGA DIDISKON</p>

                                    <p className="text-[20px] font-[normal]">TOTAL</p>
                                    <p className="text-right">JUMLAH TOTAL</p>
                              </div>
                              <div className="flex items-center gap-2">
                                    <IoBagCheckOutline className="w-[30px] h-[30px]" />
                                    <h1 className="text-[28px] font-[bold]">Your Checkout</h1>
                              </div>
                              <div className="flex flex-col">
                                    <p></p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}
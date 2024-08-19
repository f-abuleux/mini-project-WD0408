"use client"

import { DatePicker } from "@nextui-org/react";
import { useField } from "formik";  

const DatePickersCustom = ({ name = '' }) => {
    const [field, meta, helpers] = useField(name);

    const { value } = meta;
    const { setValue } = helpers;

    return (
        <DatePicker
            {...field}
            aria-selected={value}
            onChange={(date) => setValue(date)}
            // placeholderValue={}
            className='w-full border-b bg-transparent text-black focus:border-blue-700 border-gray-500 outline-none h-10 pb-3'
        />
    );
};

export default DatePickersCustom;


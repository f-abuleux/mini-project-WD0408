"use client"

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Chart from "react-apexcharts";

export interface DataTransaction {
    createdAd: string;
    finalprice: number;
    quantitiy: number;
}

export interface IDataTransaction {
    status: string;
    data: DataTransaction[]
}

interface ChartOptions {
    chart: {
        id: string;
    };
    xaxis: {
        categories: string[];
    };
}

interface ChartData {
    options: ChartOptions;
    series: {
        name: string;
        data: number[];
    }[];
}
const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


export default function CardLineChart() {
    const [data, setData] = useState<ChartData>({ options: { chart: { id: 'basic-bar' }, xaxis: { categories: [] } }, series: [] });
    const token = Cookies.get("token")

    useEffect(() => {
        const fetchData = async () => {
            const transaction = await axios.get('http://localhost:8000/api/checkouts/transactionall', {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const groupedData: { [key: string]: number } = {};
            transaction.data.map((item :any) => {
                const date = formatDate(item.createdAd);
                if (!groupedData[date]) {
                    groupedData[date] = 0;
                }
                groupedData[date] += item.finalprice;
            });

            const date = Object.keys(groupedData);
            const finalprice = Object.values(groupedData);

            console.log(date, finalprice);
            console.log(date, finalprice);

            setData({
                options: {
                    chart: {
                        id: 'basic-bar',
                    },
                    xaxis: {
                        categories: date
                    },
                },
                series: [
                    {
                        name: 'Total Sum Price',
                        data: finalprice,
                    },
                ],
            });
        };
        fetchData();
    }, []);
    return (
        <div className="flex items-center justify-center">
            {data.options && data.series && data.series.length > 0 ? (
                <div className="w-full max-w-4xl">
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="line"
                        width="100%"
                    />
                </div>
            ) : (
                <div className="text-center text-gray-500">No data available</div>
            )}
        </div>
    )
}
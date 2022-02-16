import React from 'react';
import {useOutletContext} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchCoinHistory} from "../api";
import ApexChart from 'react-apexcharts'

interface IHistorical {
    time_open: string
    time_close: string
    open: number
    high: number
    low: number
    close: number
    volume: number
    market_cap: number
    map: any
    slice: any
}

interface IChart {
    coinId: string
}

const Chart = () => {
    const {coinId} = useOutletContext<IChart>()
    const {
        isLoading, data
    } = useQuery<IHistorical>(["ohlcv", coinId], () => fetchCoinHistory(coinId))
    return (
        <div>{isLoading ? "Loading Chart..." :
            <ApexChart
                type="line"
                series={[
                    {
                        name: "Price",
                        data: data?.map((price: { close: number }) => price.close),
                    },
                ]}
                options={{
                    theme: {
                        mode: "dark",
                    },
                    chart: {
                        height: 300,
                        width: 500,
                        toolbar: {},
                        background: "transparent",
                    },
                    stroke: {
                        curve: "smooth",
                        width: 4,
                    },
                    grid: {
                        show: false,
                    },
                    yaxis: {
                        show: false,
                    },
                    xaxis: {
                        axisBorder: {show: false},
                        axisTicks: {show: false},
                        labels: {show: false},
                        type: "datetime",
                        categories: data?.map((date: { time_close: number }) => date.time_close)
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            gradientToColors: ["#00a8ff"], stops: [0, 100]
                        },
                    },
                    colors: ["#9c88ff"],
                    tooltip: {
                        y: {
                            formatter: (value: number) => `$ ${value.toFixed(2)}`
                        }
                    }
                }}
            />}
        </div>
    );
}

export default Chart;
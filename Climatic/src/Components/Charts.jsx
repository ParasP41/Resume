import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


export default function Charts({ weatherDetail }) {

    let windowWidth = window.innerWidth;

    const data = windowWidth > 768 ? weatherDetail?.hourly?.time?.map((time, i) => ({
        name: new Date(time).toLocaleTimeString([], { hour: '2-digit' }),
        Temperature: weatherDetail?.hourly?.apparent_temperature[i],
        Relative_Humidity: weatherDetail?.hourly?.relative_humidity_2m[i],
        Wind_Speed: weatherDetail?.hourly?.wind_speed_180m[i],
        amt: weatherDetail?.hourly?.temperature_2m[i],
    })).slice(0, 24) : weatherDetail?.hourly?.time?.map((time, i) => ({
        name: new Date(time).toLocaleTimeString([], { hour: '2-digit' }),
        Temperature: weatherDetail?.hourly?.apparent_temperature[i],
        Relative_Humidity: weatherDetail?.hourly?.relative_humidity_2m[i],
        Wind_Speed: weatherDetail?.hourly?.wind_speed_180m[i],
        amt: weatherDetail?.hourly?.temperature_2m[i],
    })).slice(0, 12)

    const chartWidth = windowWidth > 768 ? '98%' : '95%';
    const chartHeight = windowWidth > 768 ? 360 : 400;

    return (
        <div>
            <ResponsiveContainer width={chartWidth} height={chartHeight}>
                <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Line
                        dataKey="Temperature"
                        type="monotone"
                        stroke="red"
                        activeDot={{ r: 8 }}
                    ></Line>
                    <Line type="monotone" dataKey="Relative_Humidity" stroke="orange"></Line>
                    <Line type="monotone" dataKey="Wind_Speed" stroke="#4100c8
"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


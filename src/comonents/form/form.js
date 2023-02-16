import React from 'react'
import axios from "axios";
import { useState } from "react"



const Form = async() => {
    const [count, setCount] = useState(" initial value");
    
    try {
        // const city_path = 'http://localhost:3002'
        // const getCityRequestURL = `${city_path}/api/v1/city`;
        // const response = await axios.get(getCityRequestURL);
        // //const flightData = response.data.data;
        // console.log("from city", response.data);
    } catch (error) {
        console.log("something went wrong");
        throw error
    }
  return (
    <div>
        <div>
            {2+2}
            {/* <div>
                <h1>First value is{count}</h1>
            </div>
            <button onClick={()=>setCount(response)}>button1</button> */}
        </div>
    </div>
  )
}

export default Form
import { useState } from "react"
import axios from "axios";
function ButtonClick(){

    const [count, setCount] = useState(" initial value");
    
    const form = async() => {
        try {
            const city_path = 'http://localhost:3002'
            const getCityRequestURL = `${city_path}/api/v1/city`;
            const response = await axios.get(getCityRequestURL);
            //const flightData = response.data.data;
            console.log("from city", response.data);
        } catch (error) {
            console.log("something went wrong");
            throw error
        }
    }
    return(
        <div>
            <div>
                <h1>First value is{count}</h1>
            </div>
            <button onClick={()=>setCount(form)}>button1</button>
        </div>
    )
}
export default ButtonClick
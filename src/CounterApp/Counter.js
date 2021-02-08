    import React from 'react'
    import {Button} from 'react-bootstrap'
    import { useState } from 'react';
    import Increment from './Increment'
    const Counter = ()=>{
        const[value,setValue] = useState(0);
                let increment = (x)=>{
                setValue(value + x);
                }
                let reseter = ()=>{
                setValue(value - value)
                }
        return(
            <div>
            <Increment by={5}  incrementMethod={increment}/>
                <Increment by={10} incrementMethod={increment}/>
                {value}
                <Button onClick={reseter}>Reset</Button> 

            </div>

        )
    }
    export default Counter
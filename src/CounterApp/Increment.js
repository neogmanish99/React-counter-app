    import React,{useState} from 'react'
    import {Button} from 'react-bootstrap'
    
    const Increment = ({by,incrementMethod}) =>{
        const[number,setNumber] = useState(0);
        
        
        


        const incrementer = ()=>{
            setNumber(number + by);
            console.log(number);
            incrementMethod(by)
            
            }
            const decrementer = ()=>{
                setNumber(number - by);
                console.log(number);
                incrementMethod(-by)
            }
            
        
        


        return(
            <div>
            <h1>Counter {number}</h1>
            <Button onClick={incrementer}>Add {by}</Button>
            <Button onClick={decrementer}>Deduct {by}</Button>
            <p>{number}</p>




        
            
            </div>
        )
    }
    Increment.defaultProps={
        by: 1
    }
    export default Increment;
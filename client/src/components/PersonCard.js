import React, { useState } from "react";
import Button from '@mui/material/Button';



const PersonCard = (props) => {
    const [age, setAge] = useState(props.age)
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <Button variant="contained" onClick={ (event) => setAge(age + 1) }>Birthday Button for {props.firstName} {props.lastName}</Button>
        </div>
    )
}

export default PersonCard;
import React from "react";

export default function phonetic (props){
return (
    <div className="phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen N
        </a>
        <br />
        {props.phonetic.text}
    </div>
)
}
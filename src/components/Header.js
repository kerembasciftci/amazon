import React from 'react'
import { useState } from 'react'

export default function Header() {

    const [input,setInput] = useState("");

    const control = () => {
        if(input.valueOf === "heisenberg"){
            alert("GOD DAMN RIGHT !");
        }
        else{
            alert("YOU DESERVE THIS !");
        }
    }

  return (
    <>
    <div>
        <input placeholder='say my name...' name="input"/>
    </div>
    <div>
      <button  onClick={control}>OK!</button>
    </div>
    </>
  )
}

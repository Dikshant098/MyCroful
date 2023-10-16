import React from 'react'
import '../login/loginScreen.scss'
import { useState } from 'react'
import { useEffect } from 'react'


const LoginScreen = () => {

  const [bgColor, setBgColor] = useState(true);
  const [numberArray, setNumberArray] = useState([4, 6, 7, 7]);
  const [click, setClick] = useState(false);
  useEffect(() => {

  })

  const printList = () => {
    setClick(!click)


  }

  const onClick = () => {
    setBgColor(!bgColor)
  }

  return (
    <div class='login'>
      {/* <button style={{ background: bgColor ? "red" : 'yellow' }} onClick={onClick}>Button</button>
      <button onClick={printList}>printList</button>
      <div>
        {click && <h5> {numberArray}</h5>}
      </div> */}
    </div>
  )
}

export default LoginScreen
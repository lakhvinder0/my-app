import React, { useState } from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState('enter Text here');
  const handleUpClick = () => {
    console.log("uppercase was clicked")
    let newText = Text.toUpperCase()
    setText(newText)
    props.showAlert("converted to uppercase", "success")

  }

  const handleOnChange = (event) => {
    console.log("on Change")
    setText(event.target.value)

  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <label htmlFor="myBox" className="form-label" >Textarea</label>
          <textarea className="form-control"  value={Text} id="myBox" style={{backgroundColor:(props.mode==='dark'?'grey':'white'), color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}> Convert To UPPERCASE</button>

      </div>
      <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> This is entered text</h1>
        <p>you have written {Text.split(" ").length} words and {Text.length} charactors </p>
        <h2>preview</h2>
        <p>{Text}</p>
      </div>
    </>
  )
}

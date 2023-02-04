import React, { useState } from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const handleUpClick = () => {
    console.log("uppercase was clicked")
    let newText = Text.toUpperCase()
    setText(newText)
    props.showAlert("converted to uppercase", "success")

  }

  const handleLoClick = () => {
    console.log("lowercase was clicked")
    let newText = Text.toLowerCase()
    setText(newText)
    props.showAlert("converted to lowercase", "success")

  }
  const handleCpClick = () => {
    console.log("CopyText was clicked")
    var text = document.getElementById("myBox")
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard", "success")

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
          {/* <label htmlFor="myBox" className="form-label" >Textarea</label> */}
          <textarea className="form-control"  value={Text} id="myBox" style={{backgroundColor:(props.mode==='dark'?'#13466e':'white'), color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert To UPPERCASE</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert To LOWERCASE</button>
        <button  disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCpClick}> COPY TEXT</button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleSpcClick}> REMOVE EXTRA SPACES</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}> CLEAR TEXT</button>
 */}

      </div>
      <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1> This is entered text</h1>
        <p>you have written {Text.split(" ").filter((element=>{return element.length!==0})).length} words and {Text.length} charactors </p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to Preview"}</p>
      </div>
    </>
  )
}

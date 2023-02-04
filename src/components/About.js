import React, { useState } from 'react'

export default function About(props) {

    let myStyle={
        color:props.mode==='dark'?'white':'#171e26',
        backgroundColor:props.mode==='dark'?'#171e26':'white'
    }
    // const [myStyle, setMyStyle] = useState({
    //     color: "white",
    //     backgroundColor: "black",
    //     border: "2px solid white"
    // })
    // const [btnText, setBtnText] = useState("enable dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("enable dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //             setBtnText("enable light mode")
    //     }
    // }
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Free of Cost
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This website provides you the conversion of a paragraph Free of Cost.</strong> in modern days you won't find the similar websites for free as we delivers to you without any charges. <code>thank-you for visiting us</code>, thanks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            So Easy to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>we provides you the simplest way of translation.</strong> Our features and declarations of buttons are so easy for any person in contact<code>Best User Experience</code>, We will provide you the best user experience ever.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>you can reach to us everytime and everywhere in this whole world</strong>.We are trying to Serve all over the diffrent browsers to reach maximum of the users <code>Thanks Again for Visiting Us</code>,
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
                <button onClick={toggleStyle} type="button" className="btn btn-primary"> {btnText} </button>
            </div> */}
        </div>
    )
}

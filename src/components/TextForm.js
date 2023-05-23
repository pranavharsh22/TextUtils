import React,{useState} from 'react'

export default function TextForm(props) {
    const clickOn=()=>{
        console.log("done")
        let x=text.toUpperCase();
        setText(x)
        props.showalert('Text is converted to uppercase','Congratulations')
    }
    const clickoff=()=>{
      let y=text.toLocaleLowerCase();
      setText(y)
      props.showalert('Text is converted to lowercase','Congratulations')
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const clickdone=()=>{
      var y=document.getElementById("myBox")
      y.select();
      navigator.clipboard.writeText(y.value)
      props.showalert('Text is copied','Congratulations')
    }
    const clickkro=()=>{
      let z=text.split(/[ ]+/);
      setText(z.join(" "));
      props.showalert('Extra spaces are removed','Congratulations')
      
    }
    const [text,setText]=useState("")
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
      
<div className="mb-3">


<textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="9" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary" onClick={clickOn}>Convert to uppercase</button>

<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={clickoff}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={clickdone}>Copy the text</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={clickkro}>Remove Extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>Time required to read text is {0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length }</p>
    </div>
    </>
  )
}

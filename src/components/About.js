import React,{useState} from 'react'

export default function About(props) {
    const [myStyle,setstylex]=useState({
        color:'black',
        backgroundColor:'white'
        
})
    const[text,setbtntext]= useState('Enable dark mode')
    const toggle=()=>{
    if (myStyle.color==='black'){
        setstylex({
            color:'white',
            backgroundColor:'darkblue',
            border: "1px solid yellow"
        
    })
    setbtntext("Enable light mode")

    }
    else{
        setstylex({
            color:'black',
            backgroundColor:'white'
        })
        setbtntext("Enable dark mode")
    }
   
}
  return (
    <div className='container'style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black'}}>
        <h1>About us</h1>
      <div className="accordion" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}} value={text}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?"1 px solid white":"1 px solid black"}}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

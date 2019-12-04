import React, { Component, useState } from 'react';
const ToTop=()=>{
  window.onscroll=()=>{scrollFunction()}
  const[scroll,setScroll]=useState(false)
  const handleTop=()=>{
      window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  const scrollFunction=()=>{
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){setScroll(true)}
     
    else{
      setScroll(false)
    }
  }
    return ( 
      <div className='row justify-content-end' >
          <div className='position-fixed' style={{zIndex:5,paddingRight:50,marginTop:680,cursor:'pointer'}} onClick={handleTop} >
            <i className="fa fa-arrow-circle-o-up fa-2x" style={{color:'#E91E63',fontSize: '45px', display:`${scroll ? 'block':'none'}`}} id='button' ></i>
          </div>
      </div>
    )
}
export default ToTop;
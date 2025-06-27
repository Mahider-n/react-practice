import React, { useState } from 'react'
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'

interface Props{
    OnClick:()=>void
    // OnClose:()=>void
}
const Like = ({OnClick}:Props) => {
   const [bgcolor,setbgcolor]=useState(false)

   const toggle=()=>{
    setbgcolor(!bgcolor);
    OnClick;
   }

   if(bgcolor) return  <AiFillHeart onClick={toggle}  size="40" color='red'/>
   return <AiOutlineHeart onClick={toggle} size= "40"/>
  
  // return (
  //   <div>
  //     {/* <AiFillHeart color='transparent'/> */}
  //     {/* <AiFillHeart onClick={OnClick} size="40" /> */}
  //      {/* <AiFillHeart onClick={OnClose}  size="40" color='red'/> */}
  //   </div>
  // )
}

export default Like

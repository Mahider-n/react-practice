import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import AlertExercise from "./components/AlertExercise";
import Button from "./components/Button";
import ListGroup from './components/ListGroup'
let cities=["Addis Ababa","Jimma","Hawassa"]
const handleSelectItem=(city:string)=>{
  console.log(city)
}
function App(){

  const [alertVisibility,setAlertVisibility]=useState(false)
  // const [alertVisible,setAlertVisibility]=useState(false)
  // return <div><Message /></div>
  return (
    <div>
      {alertVisibility && <AlertExercise onClose={()=>setAlertVisibility(false)}></AlertExercise>}
      {/* {<AlertExercise></AlertExercise>} */}
      {/* <Button onClick={()=> {AlertExercise}}></Button>
       */}
       {<Button color="primary" onClick={()=>setAlertVisibility(true)}></Button>}
      {/* <Button color ="primary" onClick={()=> console.log("clicked")}></Button> */}
      
    </div>
  // <>
  // {/* {<Alert>
  //   <span>Hello World</span>
  //  </Alert>} */}
  // {/* {<Alert  //  text="Hello World"  />} */}
  // </>

  )
 
  // <div>
  //   {<Alert text="Hello World"/>}
  //   {/* <ListGroup cities={cities} heading="Cities" onSelectItem={handleSelectItem}/> */}
  //   {/* <ListGroup /> */}
  //   </div>
}
export default App;
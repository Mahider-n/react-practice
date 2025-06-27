import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
// styles-  there won't be naming conflict 
import styles from './ListGroup.module.css'
import styled from "styled-components";
// using css in js
const List=styled.ul`
    list-style:none;
    padding:0

`;
interface ListItemProps{
    active:boolean;
}
const ListItem=styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props =>props.active ? "blue" : "none"}
`;
// {items:[], headings: string}
interface Props{
    cities:string[],
    heading:string
    onSelectItem:(city:string)=>void;
}

// import { MouseEvent, useState } from "react";
// let cities=["Addis Ababa","Jimma","Hawassa"]

// hook
// state variable selectedIndex - and function setSelectedIndex
// const [selectedIndex,setSelectedIndex] = useState(-1);
// const [name,setName]=useState('')

// cities=[]

// function getMessage(){
//     return cities.length === 0 && <p>No item found</p>;
// }

// event handling   
// const handleClick=(event:MouseEvent)=>(console.log(event))

function ListGroup({cities,heading,onSelectItem} :Props){
    // hook
// state variable selectedIndex - and function setSelectedIndex
const [selectedIndex,setSelectedIndex] = useState(0);
// const [name,setName]=useState('')
    // const [selectedIndex,setSelectedIndex] = useState(-1);

    // return <h1> List group </h1>
    return (
        <>
            <h1>{heading}</h1>
            {/* {getMessage()} */}
            {cities.length === 0 && <p>No item found</p>}
            <List>
                
            {/* <ul className={[styles.listGroup,styles.container].join(' ')}> */}
                {cities.map((cities,index)=>
                <ListItem
                active={index===selectedIndex}
                // className={
                //     selectedIndex === index 
                //     ? "list-group-item active"
                //     : "list-group-item"
                // }
                key={cities} 
                // onClick={(event)=>console.log(event)}
                // onClick={()=>console.log(cities,index)}
                // onClick={handleClick}
                onClick={()=>{
                    setSelectedIndex(index);
                    onSelectItem(cities)
                }}
                >
                    {cities}
                </ListItem>)}
              {/* <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li> */}
            </List>
        </>
    )
} 
export default ListGroup;  
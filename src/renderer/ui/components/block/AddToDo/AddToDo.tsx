import React, {useRef} from "react";

const AddToDo = (state:any) => {
    
  const textInput:any = useRef(null);
    
  const addtodo = () => {
    console.log(1)
  }
  
    
  return (
    <>
      <input ref={textInput} type="text" />
      <button onClick={addtodo}>Add do</button>
    </>
  )
}

export default AddToDo;
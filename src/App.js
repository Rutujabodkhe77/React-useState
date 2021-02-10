// *******This is useState function ##useState:button click change h1 value (using function) *******


import React, {Component,useState} from 'react';
function App()
{
  const [my_name,changeMyName]=useState("react js");
  const [my_age,changeMyAge]=useState(24);

const buttonClicked=()=>
{
  changeMyName("Wisdom");
}

  return(
    <div>
      
      <h1> Hello there This is useState function {my_name}</h1>
      <h2> And My Age Is: {my_age}</h2>
      <button onClick={buttonClicked}>Change Name </button>
      </div>
      );
}
export default App;
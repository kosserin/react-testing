import React, {useState} from 'react';

const Greeting = () => {

    const [isChanged, setIsChanged] = useState(false);

  return (
    <React.Fragment>
        <p>{!isChanged && "Greeting bro!"}</p>
        <p>It's changed!</p>
        <button onClick={() => {setIsChanged(prev => !prev)}}>Click me to toggle</button>
    </React.Fragment>
  )
}

export default Greeting
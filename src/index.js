import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Block() {
  let input = useRef();
  const [status, setStatus] = useState(true)

  const show = () => {
    setStatus(true);
  }

  const hide = () => {
    setStatus(false);
  }

  useEffect(() => {
    let inputElement = input.current;
    inputElement.style.display = status ? 'block' : 'none';
  })

  return (
    <div className='wrapper'>
      <p>
        <button onClick={show}>Show</button>
        <button onClick={hide}>Hide</button>
      </p>
      <p>An input field</p>
      <input type='text' ref={input} />
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Block />
  </React.StrictMode>
);



import React, { useRef } from "react";

// import { Button } from 'antd'

import { TfXXX } from './component/index.js'
import './app.css';


export default function App({ name, ...rest }) {
  console.log(name, rest)
  
  return (
    <div>
      <TfXXX />
      {/* <Button type="primary">Primary</Button>  */}
    </div>
  )

}
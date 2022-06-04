import React from "react";
import SrcImage from "./SrcImage";


const Name = () => {
  return(
    <div>

      <h1 className="title red">Your name here</h1>

      <br />

      <SrcImage />
      <p className="click">src image</p>

      <br />

      <img src ="./images/imgs.jpg"  alt="Public"/> 
      <p className="click">Public image</p>
      {/* the public folder is the root folder hence ./ or (the root) */}

    </div>
  )
}

export default Name;
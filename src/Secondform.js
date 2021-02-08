import React from 'react';
import './index.css'
const image = "https://picsum.photos/200";
const Secondform = () => {
    return (
        <div className="sectionOne">
          
          <img src={image + "?grayscale"}/>
          <img src="https://picsum.photos/id/237/200/200"/>
          <img src="https://picsum.photos/id/1002/200/200"/>
          <img src="https://picsum.photos/id/1022/200/200"/>
        </div>
       );
}
export default Secondform
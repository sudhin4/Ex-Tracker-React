import { useContext, useEffect, useState } from "react";
import Image from "../TypeList/Entertainment Image.png";
import "../TypeList/TypeList.css";

function Typelistcontent({ image, name, getvalueeimagefun, getvaluenamefun }) {
  // passing a value to the parent component
  function getvaluefromlist(image, name) {
    getvalueeimagefun(image);
    getvaluenamefun(name);
  }

  return (
    <>
      <div
        className="whole_type_list"
        onClick={() => getvaluefromlist(image, name)}
      >
        <img src={image} alt="" className="Image_in_typelist" />
        <h2 className="Type_name">{name}</h2>
      </div>
    </>
  );
}
export default Typelistcontent;

import { Datacontext } from "../../../Data/Context";//base of the dropdown
import { ExpanseImage } from "../../../Data/IncExpdata";
import { IncomeImage } from "../../../Data/IncExpdata";
export function Typelist({ getvalueimage, getvaluename,isitincomeorexpanse }) {

  const checkincomeorexpanse = isitincomeorexpanse;
  var dropdown_listandImage = ExpanseImage;// default
  if(checkincomeorexpanse==false){
    dropdown_listandImage = ExpanseImage; //false means expanse
  }
  else{
    dropdown_listandImage = IncomeImage // true means income
  }

  return (
    <>
      <div className="fullcontent_component_list"> {/* InsideCategroy div class name */}
        {dropdown_listandImage.map((item, index) => (
          <div key={index} className="typelistcontent_component">
            <Typelistcontent
              image={item.image}
              name={item.name}
              getvalueeimagefun={getvalueimage}
              getvaluenamefun={getvaluename}
            />
          </div>
        ))}
      </div>
    </>
  );
}

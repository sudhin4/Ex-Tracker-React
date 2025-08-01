import { useState } from "react";
import "./TypeList.css";
import { FaChevronDown } from "react-icons/fa";
import { Typelist } from "./TypeList";
import { useContext } from "react";

function Choosetypelist({ getimage, getname,isincomeorexpanse }) {
  const [isclick, setclick] = useState(false);

  const [isimagevalue, setimagevalue] = useState();
  const [isnamevalue, setnamevalue] = useState("Choose type");

  // name and image from child component
  function getvalueimagefromdropdown(image) {
    if (image) {
      setimagevalue(image);
      setclick(false);
      getimage(image);
    }
  }
  function getvaluenamefromdropdown(name) {
    if (name) {
      setnamevalue(name);
      setclick(false);
      getname(name);
    }
  }

  //send the image and name contxt

  return (
    <>
      <div className="choose_typelist_div" onClick={() => setclick(!isclick)}>
        {isimagevalue ? (
          <img src={isimagevalue} alt="" className="image_for_chooseinput" />
        ) : null}
        <h1 className="chooseType">{isnamevalue}</h1>
      </div>
      {isclick ? (
        <div className="drop_down_list">
          <Typelist
            getvalueimage={getvalueimagefromdropdown}
            getvaluename={getvaluenamefromdropdown}
            isitincomeorexpanse={isincomeorexpanse}
          />
        </div>
      ) : null}
    </>
  );
}
export default Choosetypelist;

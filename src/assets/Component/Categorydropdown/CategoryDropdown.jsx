import IncomeImage from '../Categorydropdown/Income Image.png';
import Expanseimage from '../Categorydropdown/Expanse Image.png';
import '../Categorydropdown/CategoryDropdown.css'
import { useState } from 'react';

function CategoryDropdown(){
    const[iscategoryopen,setcatgeoryopen] = useState(false)
    const[getvaluefromcategory,setgetvaluecategory] = useState("Choose Category")
    const [getvaluefromimage,setgetimage] = useState()

    function getvaluefromchild(value){
        setgetvaluecategory(value)
        setcatgeoryopen(false)
    }
    function getvalueimage(value){
        setgetimage(value)
        setcatgeoryopen(false)
    }
    return (
        <>
        <div className='whole_Category_divv' onClick={()=>setcatgeoryopen(!iscategoryopen)}>
            {getvaluefromimage?<img src={getvaluefromimage} alt="" className='expanse_content_imageSection' />:null}
            
            <h1 className='Category_headinggg'>{getvaluefromcategory}</h1>
        </div>
        {iscategoryopen ?<div className='Contentincomeandexpanse'>
            <CategoryDropdowncontent getvaluefromchildname={getvaluefromchild} getvalueimagefunction={getvalueimage}/>
        </div> : null}
        

        </>
    )
}
export default CategoryDropdown;

export function CategoryDropdowncontent({getvaluefromchildname,getvalueimagefunction}){

    function sendvaluefunction(name,image){
        getvaluefromchildname(name);
        getvalueimagefunction(image)
    }

    return (
        <>
        <div className='whole_category_dropDownContent' onClick={()=>sendvaluefunction("Income",IncomeImage)}>
            <img src={IncomeImage} alt="" className='expanse_content_imageSection' />
            <h2 className='expanse_content_heading'>Income</h2>
        </div>
        <div className='whole_category_dropDownContent expanse_content'onClick={()=>sendvaluefunction("Expanse",Expanseimage)} >
            <img src={Expanseimage} alt="" className='expanse_content_imageSection' />
            <h2 className='expanse_content_heading'>Expanse</h2>
        </div>
        </>
    )
}

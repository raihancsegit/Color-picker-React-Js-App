import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Color = () => {
    const [ColorName] = React.useState(['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#e67e22','#bdc3c7','#f39c12','#8e44ad','#f1c40f','#8e44ad']);

    const colorCopy = (e) => {
        let color = e.target.innerText;
        if(navigator.clipboard){
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();
            toast.success(`you have copy ${color} value successfilly`,{
                position:toast.POSITION.TOP_RIGHT
            })
        }
        console.log(color);
    }
   return (
       <div className="row">
           {ColorName.map(color => (
               <div className="item" key={color} style={{background:color}} 
               onClick={colorCopy}>
                   {color}
               </div>
           ))}
       </div>
   )
}

export default Color;
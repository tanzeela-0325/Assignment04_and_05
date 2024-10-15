import React from "react";
import Image from "next/image"
import image from "../public/mixed-vage.jpg"
import pic_1 from "../public/tomato.webp";
import pic_2 from  "../public/bell-pepper.jpg"
import pic_3 from "../public/brinjal.jpg"
import pic_4 from "../public/download.jpg"
import pic_5 from "../public/carrot.jpg"
import pic_6 from "../public/lady-finger.jpg"
import Link from "next/link";

export default function Transition() {
  return (
    
    <div className="mainContainer">

    <div>
      <Image src={image} alt="image" height={1000} width={1000} className="main-image"/>
   </div>
    <div className="parentContainer">
    
       {/*Card 01*/}
    <div className="childContainer">
      <div className="box-image">
        <Image src={pic_1} alt="image" height={1000} width={1000}/>
    </div>
    <h1 className="title"><b>Tomato</b></h1>
     <p className="discription">The tomato is a versatile, nutrient-rich fruit commonly used as a vegetable 
      in cooking.Originating from South America,</p>

     <button className="button">
      <Link href={"/tomato"}>Read Me</Link>
     </button>
    </div>
    
       
        {/* Card 02 */}
    <div className="childContainer">
      <div className="box-image">
        <Image src={pic_2} alt="image" width={1000} height={1000} />
    </div>
    <h1 className="title"><b>Bell Pepper</b></h1>
     <p className="discription">Bell pepper, also known as sweet pepper or capsicum, is a popular, colorful 
      vegetable that belongs to the nightshade family, Solanaceae</p>

     <button className="button">
     <Link href={"/ball-papper"}>Click Me</Link>
     </button>
    </div>
    
     
        {/* Card 03*/}
    <div className="childContainer">
      <div className="box-image">
      <Image src={pic_3} alt="image" width={1000} height={1000} />
    </div>
    <h1 className="title"><b>Brinjil</b></h1>
     <p className="discription">Brinjal, also known as eggplant or aubergine, is a popular vegetable that belongs
     to the nightshade family, Solanaceae.</p>

     <button className="button">
     <Link href={"/brinjil"}>Click Me</Link>
     </button>
    </div>
    
    
       {/* Card 04*/}
        <div className="childContainer">
      <div className="box-image">
      <Image src={pic_4} alt="image" width={1000} height={1000} />
    </div>
    <h1 className="title"><b>Onion</b></h1>
     <p className="discription">Onion is a widely cultivated vegetable belonging to the Allium family, which also
       includes garlic, leeks, and chives.</p>

     <button className="button">
     <Link href={"/onion"}>Click Me</Link>
     </button>
    </div>
    
    
         {/* Card 05*/}
        <div className="childContainer">
        <div className="box-image">
        <Image src={pic_5} alt="image" width={1000} height={1000} />
      </div>
      <h1 className="title"><b>Carrot</b></h1>
       <p className="discription">Carrot is a root vegetable known for its crunchy texture and sweet, earthy flavor.
       Belonging to the Apiaceae family, it is typically orange, </p>
  
       <button className="button">
       <Link href={"/carrot"}>Click Me</Link>
       </button>
      </div>

      {/* Card 06*/}
      <div className="childContainer">
      <div id="box-6" >
      <Image src={pic_6} alt="image" width={500} height={500} ></Image>
       </div >
    <h1 className="title"><b>Lady Finger</b></h1>
     <p className="discription" >Lady finger, also known as okra or bhindi, is a green, pod-shaped vegetable
     that belongs to the mallow family, Malvaceae.</p>

     <button className="button">
     <Link href={"/lady-finger"}>Click Me</Link>
     </button>
    </div>
    </div>


    </div>

  
  );

}


import Image from "next/image"
import img04 from "../../public/lady-finger-group.jpg"

export default function ladyFinger(){
    return(
        <div>

            <div className="image">
                <Image src={img04} alt="image" width={1000} height={1000}/>

            </div>

            <div className="mainText">

                <p>Lady finger, also known as okra or bhindi, is a green, elongated vegetable that belongs to 
                the Malvaceae or mallow family. It is highly valued in tropical and subtropical regions for
                 its versatility and nutritional benefits. The vegetable is rich in dietary fiber, vitamins 
                 C, A, and K, and minerals such as magnesium, making it beneficial for digestive health, 
                 immunity, and bone strength. Lady finger has a mild, slightly grassy flavor and a unique 
                 texture, with edible seeds inside its pods. It is often used in a variety of dishes, including
                  stir-fries, curries, soups, and stews. When cooked, okra releases a thickening substance, 
                  which is especially useful for making hearty soups and sauces.</p>
            </div>
        </div>
    )
}
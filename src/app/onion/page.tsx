
import Image from "next/image"
import img06 from "../../public/onion.jpg"

export default function Onion(){
    return(
        <div>

            <div className="image">
                <Image src={img06} alt="image" width={1000} height={1000}/>

            </div>

            <div className="mainText">

                <p>Onion is a versatile and widely used vegetable from the Allium family, 
                    which also includes garlic, shallots, and leeks. Known for its strong 
                    aroma and distinctive flavor, it serves as a foundational ingredient in 
                    many cuisines around the world, adding depth to a variety of dishes. Onions 
                    come in several varieties, such as red, white, yellow, and sweet, each offering 
                    different levels of pungency and sweetness. They are rich in nutrients like vitamin
                     C, vitamin B6, folate, and potassium, and contain powerful antioxidants, including 
                     quercetin, which help reduce inflammation and support heart health. Whether eaten raw 
                     in salads, sautéed as a flavor base, caramelized for sweetness, or used in soups and 
                     stews, onions are a culinary staple with numerous health benefits.</p>
            </div>
        </div>
    )
}

import Image from "next/image";
import img05 from "../../public/carrot-group.jpg"

export default function Carrot(){
    return(
        <div>

            <div className="image">
                <Image src={img05} alt="image" width={1000} height={1000}/>

            </div>

            <div className="mainText">

                <p>Carrot is a root vegetable that belongs to the Apiaceae family and is renowned for its crunchy 
                    texture, sweet flavor, and rich nutritional profile. The most common variety is orange, but 
                    carrots also come in purple, red, yellow, and white. The orange color is due to beta-carotene, 
                    a type of carotenoid that the body converts into vitamin A. Carrots can be eaten raw, cooked, 
                    or juiced and are used in various dishes worldwide, including salads, soups, stews, and 
                    desserts like carrot cake.</p>

                <h2>Nutritional Benefits of Carrots:</h2> 
                <p><span>Rich in Beta-Carotene and Vitamin A:</span> Carrots are one of the best sources of beta-carotene, which is converted into vitamin A in the body. Vitamin A is essential for maintaining good vision, particularly night vision, and it also supports skin health and the immune system.<br/>
                <span>Antioxidant Properties:</span> In addition to beta-carotene, carrots contain other antioxidants, such as lutein and zeaxanthin, which help protect the eyes from damage caused by free radicals and may reduce the risk of age-related macular degeneration.<br/>
                <span> High in Fiber:</span> Carrots provide a good amount of dietary fiber, which is essential for maintaining a healthy digestive system. Fiber aids in regulating bowel movements, reducing constipation, and promoting gut health.<br/>
                <span> Supports Heart Health:</span> The potassium in carrots helps regulate blood pressure by balancing the effects of sodium in the diet. The fiber content also contributes to lowering cholesterol levels, further supporting cardiovascular health.<br/>
                <span> Improves Skin Health:</span> The vitamins and antioxidants in carrots can help maintain healthy skin, reduce the appearance of wrinkles, and protect the skin from damage caused by UV rays.<br/>
                <span> Helps in Weight Management:</span> Being low in calories and high in fiber, carrots make for a filling and nutritious snack that can aid in weight loss or weight management by promoting a sense of fullness. <br/></p>   
            </div>
        </div>
    );
}
import Image from "next/image";
import img01 from "../../public/bell-pepper.jpg"


 

export default function BallPapper(){
    return(
        <div>
            <div className="image">
                <Image src={img01} alt="image" width={1000} height={1000}/>
            </div>

            <div>
                <p>Ball papper are rich in vitamins A, C, and E, and provide beneficial antioxidants that help
                  boost the immune system and protect against oxidative stress. Unlike other peppers, bell 
                  peppers are not spicy due to the lack of capsaicin, the compound responsible for heat. Versatile
                  in the kitchen, they can be eaten raw, roasted, grilled, or incorporated into various dishes like
                  salads, stir-fries, and stuffed peppers.</p>
            </div>
        </div>

    )
}
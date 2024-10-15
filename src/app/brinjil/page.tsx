
import Image from "next/image";
import img01 from "../../public/brinjil-group.jpg";

export default function Brinjil(){
    return(
        <div>
            <div className="image">
                <Image src={img01} alt="image" width={1000} height={1000} />

            </div>

            <div>
             <p>Brinjal comes in different shasizes, and colors, including purple, green,and white.It is a low-calorie
                 vegetable, rich in dietary fiber,vitamins like B1 and B6, and mineralssuch as potassium and
                 manganese.</p>
            </div>
        </div>

    )
}
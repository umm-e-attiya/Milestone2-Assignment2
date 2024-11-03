import Image from "next/image";

<link rel="stylesheet" href="globals.css" />
import Dazzle_Pink_Luxury_Dress_For_Women1 from "../../public/Dazzle_Pink_Luxury_Dress_For_Women1.jpg"
import Evelyn_Green_Luxury_Dress2 from "../../public/Evelyn_Green_Luxury_Dress2.jpg"
import Saga_Blue_Luxury_Dress3 from "../../public/Saga_Blue_Luxury_Dress3.jpg"
import Amelia_Luxury_Dress4 from "../../public/Amelia_Luxury_Dress4.jpg"
import silkpic1 from "../../public/silkpic1.webp"
import silkpic2 from "../../public/silkpic2.jpeg"
import silkpic3 from "../../public/silkpic3.jpeg"
import silkpic4 from "../../public/silkpic4.jpg"
import printedkurti1 from "../../public/printedkurti1.webp"
import printedkurti2 from "../../public/printedkurti2.webp"
import printedkurti3 from "../../public/printedkurti3.webp"
import printedkurti4 from "../../public/printedkurti4.webp"
      export default function Home () {
  return (
            <div>
             
              <div id="container2">
                <h1>Collections'24</h1>
              </div>
              

                <div>
                  <h1  id="home1">Occasion Wear'24</h1></div>


                  <div id="occasion">

                    <div id="image2">
                      <Image src={Dazzle_Pink_Luxury_Dress_For_Women1} alt="Dazzle_Pink_Luxury_Dress_For_Women1" />
                      <p>Dazzle Pink Luxury</p>
                      <span>8000Pkr</span>
                    </div>

                    <div id="image3">
                      <Image src={Evelyn_Green_Luxury_Dress2} alt="Evelyn_Green_Luxury_Dress2"/>
                      <p>Evelyn Green Luxury</p>
                      <span>8000pkr</span>
                    </div>

                    <div id="image4">
                      <Image src={Saga_Blue_Luxury_Dress3} alt="Saga_Blue_Luxury_Dress3" />
                      <p>Saga Blue Luxury</p>
                      <span>8000Pkr</span>
                    </div>
                    
                    
                    <div id="image5">
                      <Image src={Amelia_Luxury_Dress4} alt="Amelia_Luxury_Dress4" />
                      <p>Amelia Luxury</p>
                      <span>8000Pkr</span>
                    </div>
                    </div>

                    <div id="button1">
                      <button>View Product</button>
                    </div>
               
               
                   <div id="home2">
                      <h1>Women's Silk</h1>
                   </div>


                   <div id="silk">

                         <div id="image6">
                         <Image src={silkpic1} alt="Sia Green Silk"/>
                         <p>Sia Green Silk</p>
                         <span>12000Pkr</span>
                         </div>
                         <div id="image7">
                         <Image src={silkpic2} alt="Dark Blue Silk"/>
                         <p>Dark Blue Silk</p>
                         <span>12000Pkr</span>
                          </div>

                          <div id="image8">
                         <Image src={silkpic3} alt="Light Golden Silk"/>
                         <p>Light Golden Silk</p>
                         <span>12000Pkr</span>
                         </div>

                         <div id="image9">
                         <Image src={silkpic4} alt="Ivory Gold Pure Silk"/>
                         <p>Ivory Gold Pure Silk</p>
                         <span>12000Pkr</span>
                        </div>
                        </div>
                        <div id="button2">
                      <button>View Product</button>
                       </div>
                       
                        <div id="home3"><h1>Printed Kurtis</h1></div>

                        <div id="printedkurti">
                        <div id="image10">
                         <Image src={printedkurti1} alt="Light Frozen Printed Kurti"/>
                         <p>Light Frozen Printed Kurti</p>
                         <span>2000Pkr</span>
                        </div>

                        <div id="image11">
                         <Image src={printedkurti2} alt="Cathine Printed Kurti"/>
                         <p>Cathine Printed Kurti</p>
                         <span>2000Pkr</span>
                        </div>

                        <div id="image12">
                         <Image src={printedkurti3} alt="Reoche Printed Kurti"/>
                         <p>Reoche Printed Kurti</p>
                         <span>2000Pkr</span>
                        </div>

                        <div id="image13">
                         <Image src={printedkurti4} alt="Darkil Printed Kurti"/>
                         <p>Darkil Printed Kurti</p>
                         <span>2000Pkr</span>
                        </div>
                       </div>

                       <div id="button3">
                      <button>View Product</button>
                       </div>

               
               <div id="home4">
                    <h1 id="wcu1">Why Choose Us?</h1>
                    <p id="wcu2">Choose us for our unique style and commitment to quality, where every piece is crafted with care and reflects the latest trends while remaining timeless. We prioritize sustainability and inclusivity, ensuring our collections cater to diverse body types and eco-conscious shoppers. With personalized service and a strong community focus, we aim to create a memorable shopping experience that resonates with your values and style.</p>
               </div>
               
               </div>
        
  );
}

import img1 from './images5/1.svg'
import img2 from './images5/2.svg'
import img3 from './images5/3.svg'
import img4 from './images5/4.svg'
import img5 from './images5/5.svg'
import img6 from './images5/6.svg'
import img7 from './images5/7.svg'
import img8 from './images5/8.svg'
import stars from './images5/stars.svg'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'


function Part5(){
    return(
        <BrowserRouter>
<div>
    <h1>Our Product</h1>
    <div className="flex">
        <Link>HOT</Link>
        <Link>ON SALE</Link>
        <Link>TRENDING NOW</Link>
        <Link>NEW ARRIVAL</Link>
    </div>

    <div>
    {/* img part 1 */}
        <div className='flex'>
{/* img1 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img1}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Sweater Shirt</h1>
  <div>
    <h1>$45.99</h1>
    <h1>$35.99</h1>
  </div>
</div>
</div>  

{/* img2 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img2}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Pastel Long Sleeve</h1>
  <div>
    <h1>$55</h1>
    <h1>$44.99</h1>
  </div>
</div>
</div>  

{/* img3 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img3}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>T-Shirt orange</h1>
  <div class='flex'>
    <h1>$29.99</h1>
    <h1>$15.99</h1>
  </div>
</div>
</div>  

{/* img4 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img4}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Blue Bombers</h1>
  <div>
    <h1>$69.99</h1>
    <h1>$49.99</h1>
  </div>
</div>
</div>  


        </div>

        
        {/* images 2nd part */}
        <div className='flex'>
{/* img-5 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img5}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Jeans Jacket</h1>
  <div>
    <h1>$125</h1>
    <h1>$99.99</h1>
  </div>
</div>
</div>  

{/* img-6 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img6}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Denim shirt</h1>
  <div>
    <h1>$100</h1>
    <h1>$74.99</h1>
  </div>
</div>
</div>  

{/* img-7 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img7}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1>Red Suede sweater</h1>
  <div>
    <h1>$29.99</h1>
    <h1>$19.99</h1>
  </div>
</div>
</div>        

{/* img-8 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img8}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 class=''>Leather Brown Jacket</h1>
  <div class='flex'>
    <h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$90.65</h1>
    <h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$79.99</h1>
  </div>
</div>
</div>  



        </div>
    </div>
</div>
        </BrowserRouter>
    )
}
export default Part5
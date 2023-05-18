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
<div class='pl-[4.166vw] pr-[0.695vw]'>
<div class='flex flex-col justify-center items-center '>
    <h1 class=' mt-[49px] font-bold font-frank_ruhi text-[4rem] max-w-[362px] min-h-[120px]'>Our Product</h1>
    <div className="flex max-w-[676px] min-h-[36px]  justify-between font-bold text-[1.5rem] leading-[36px]">
        <Link class='hover:border-b-[3px] mr-[61px]'>HOT</Link>
        <Link class='hover:border-b-[3px] mr-[61px]'>ON SALE</Link>
        <Link class='hover:border-b-[3px] mr-[61px]'>TRENDING NOW</Link>
        <Link>NEW ARRIVAL</Link>
    </div>
</div>
    <div class='mt-[151px]'>
    {/* img part 1 */}
        <div className='flex justify-between'>
{/* img1 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img1}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Sweater Shirt</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$45.99</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$35.99</h1>
  </div>
</div>
</div>  

{/* img2 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img2}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Pastel Long Sleeve</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$55</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$44.99</h1>
  </div>
</div>
</div>  

{/* img3 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img3}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>T-Shirt orange</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$29.99</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$15.99</h1>
  </div>
</div>
</div>  

{/* img4 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img4}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Blue Bombers</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$69.99</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$44.99</h1>
  </div>
</div>
</div>  


        </div>

        
        {/* images 2nd part */}
        <div className='flex justify-between'>
{/* img-5 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img5}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Jeans Jacket</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$125</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$99.99</h1>
  </div>
</div>
</div>  

{/* img-6 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img6}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Denim shirt</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$100</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$74.99</h1>
  </div>
</div>
</div>  

{/* img-7 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img7}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Red Suede sweater</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$29.99</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$19.99</h1>
  </div>
</div>
</div>        

{/* img-8 */}
<div className="min-h-[551px] max-w-[366px]">
<img src={img8}/>
<div class='bg-white'>
  <img src={stars}/>
  <h1 className='font-semibold text-[1.375rem]'>Leather Brown Jacket</h1>
<div class='flex gap-[39px]'>
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
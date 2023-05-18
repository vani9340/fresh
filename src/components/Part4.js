import pants from './images/pants_4.svg'
import sweater from './images/part4sweater.svg'
import star from './images5/stars.svg'
function Part4(){
    return(
        <>
      <div class='min-h-[828px] mt-[127px] bg-gradient-to-b from-[#CFA485] from-[68.72%]'>
        <div class='flex justify-between items-center pl-[10.347vw] pr-[1.6666vw]'>
        {/* text */}
<div>
<h1 class='text-white font-frank_ruhi mt-[36px] font-bold max-w-[437px] text-[4rem] leading-[5.1643rem]'>
Best Seller Product
</h1>
<p class='text-white font-frank_ruhi font-bold text-[1.5rem] leading-[1.935rem] max-w-[437px] min-h-[270px] mt-[43px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.
</p>
<button class='bg-black text-white px-[100px] py-[25px] mt-[40px] rounded-[10px]'>
SEE MORE
</button>
</div>


{/* images */}
<div class='flex gap-[67px] mt-[56px]'>
<div className="min-h-[551px] max-w-[366px]">
<img src={sweater}/>
<div class='bg-white pt-[14.24px] pl-[22.21px] min-h-[127px]'>
  <img src={star}/>
  <h1 className='font-semibold text-[1.375rem]'>Sweater Shirt</h1>
  <div class='flex gap-[39px]'>
    <h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$45.99</h1>
    <h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$35.99</h1>
  </div>
</div>
</div>


<div className="min-h-[551px] max-w-[366px]">
<img src={pants}/>
<div class='bg-white pt-[14.24px] pl-[22.21px] min-h-[127px]'>
<img src={star}/>
<h1 className='font-semibold text-[1.375rem]'>Pants fashion</h1>
<div class='flex gap-[39px]'>
<h1 class='text-[#C4C4C4] text-[1.5rem] leading-[2.25rem] font-normal'>$55</h1>
<h1 class='text-[1.5rem] leading-[2.25rem] font-normal'>$44.99</h1>
  </div>
</div>
</div>
</div>













</div>


        {/* black 5 dots */}
    <div className='flex justify-center items-center gap-[0.5rem] mt-[97px]'>
    <div class='bg-black rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black  border-[1px] rounded-full h-[17px] w-[17px]'></div>
    </div>

      </div>
        </>
    )
}
export default Part4
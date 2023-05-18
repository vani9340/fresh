import sweater from './images/sweater.svg'
import jeans from './images/jeans.svg'
import shoes from './images/shoes.svg'

function Part2(){
    return(
        <>
<div class='mt-[93px] leading-[2.25rem] text-[1.5rem] pl-[6.25vw] pr-[5.13vw]'>
<div class='text-center'>
    <h1 class='font-frank_ruhi text-[4rem] leading-[5.16375rem] font-bold '>
    New Collection
    </h1>
    <p class='font-normal text-[1.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div>

    <div class='flex justify-between mt-[40px]'>

    <div class="relative">
  <img src={sweater} alt="Image" class="w-full"/>
  <div class="w-full absolute bottom-0 left-0 flex text-center pb-[3.08541vw]">
    <div class="text-black text-[1.5rem] font-normal leading-[2.25rem] bg-white w-full rounded-[20px] ml-[1.4583vw] mr-[0.8971vw] pt-[0.66388vw] pb-[0.456vw]">Sweater</div>
  </div>
</div>

<div class="relative">
  <img src={jeans} alt="Image" class="w-full"/>
  <div class="w-full absolute bottom-0 left-0 flex text-center pb-[3.08541vw]">
    <div class="text-black text-[1.5rem] leading-[2.25rem] font-normal bg-white w-full rounded-[20px] py-[0.625vw]">Jeans</div>
  </div>
</div>

<div class="relative">
  <img src={shoes} alt="Image" class="w-full"/>
  <div class="w-full absolute bottom-0 left-0 flex text-center pb-[3.08541vw]">
    <div class="text-black text-[1.5rem] font-normal leading-[2.25rem] bg-white w-full  rounded-[20px] ml-[1.388vw] mr-[1.736vw] pt-[0.66388vw] pb-[0.456vw]">Baskets</div>
  </div>
</div>

   </div>

        
    </div>
</div>
        </>
    )
}
export default Part2
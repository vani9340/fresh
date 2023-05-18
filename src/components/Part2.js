import sweater from './images/sweater.svg'
import jeans from './images/jeans.svg'
import shoes from './images/shoes.svg'

function Part2(){
    return(
        <>
<div>
<div>
    <h1>
    New Collection
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div>

    <div class='flex'>
    <div class="relative">
  <img src={sweater} alt="Image" class="w-full"/>
  <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="text-black text-2xl bg-white">Sweater</div>
  </div>
</div>

<div class="relative">
  <img src={jeans} alt="Image" class="w-full"/>
  <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="text-black text-2xl bg-white">jeans</div>
  </div>
</div>

<div class="relative">
  <img src={shoes} alt="Image" class="w-full"/>
  <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="text-black text-2xl bg-white">basket</div>
  </div>
</div>
   </div>

        
    </div>
</div>
        </>
    )
}
export default Part2
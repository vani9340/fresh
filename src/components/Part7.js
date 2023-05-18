import img1 from './images786/part7_1.svg'
import img2 from './images786/part7_2.svg'
function Part7(){
    return(
        <>
<div>
    <h1>What People Say About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam.</p>
</div>

{/* cards */}
{/* card-1 */}
<div className='flex gap-[67px] overflow-x-visible flex-shrink-0'>
    <div class='min-h-[364px] max-w-[515px] bg-[#FEECC8]'>
    <h1 class='font-bold'>
    Comfortable And Meet All My Expectation !
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. 
    </p>
    <div>
    <img src={img1}/>
    <h1>John Deep</h1>
    <p>Customer</p>
    </div>
    </div>

    <div class='min-h-[364px] max-w-[515px] bg-[#FEECC8]'>
    <h1 class='font-bold'>
    Comfortable And Meet All My Expectation !
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. 
    </p>
    <div>
    <img src={img1}/>
    <h1>John Deep</h1>
    <p>Customer</p>
    </div>
    </div>

    <div class='min-h-[364px] max-w-[515px] bg-[#FEECC8]'>
    <h1 class='font-bold'>
    Really Satisfied With The Product !
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. 
    </p>
    <div>
    <img src={img2}/>
    <h1>Alexandra Dario</h1>
    <p>Customer</p>
    </div>
    </div>

    <div class='min-h-[364px] max-w-[515px] bg-[#FEECC8]'>
    <h1 class='font-bold'>
    Comfortable And Meet All My Expectation !
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. 
    </p>
    <div>
    <img src={img1}/>
    <h1>John Deep</h1>
    <p>Customer</p>
    </div>
    </div>


</div>

<div className='flex justify-center items-center gap-[0.5rem]'>
    <div class='bg-black rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black border-[1px] rounded-full h-[17px] w-[17px]'></div>
    <div class='border-black  border-[1px] rounded-full h-[17px] w-[17px]'></div>
</div>



        </>
    )
}
export default Part7
import img1 from './images786/part8_1.svg'
import img2 from './images786/part8_2.svg'
import img3 from './images786/part8_3.svg'
import img4 from './images786/part8_4.svg'
import img5 from './images786/part8_5.svg'


function Part8(){
    return(
        <>
<div class='mt-[54px]'>
{/* images */}
    <div class='flex justify-center'>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
 
    </div>
    {/* div */}
    <div class='min-h-[424px] bg-black flex flex-col justify-items-start'>
    <div class='min-h-[128px] max-w-[638px] bg-white'>
    Follow Our INSTAGRAM : @FRESH
    </div>

    </div>
</div>

        </>
    )
}
export default Part8
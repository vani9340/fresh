import img1 from './images5/1.svg'
import img2 from './images5/2.svg'
import img3 from './images5/3.svg'
import img4 from './images5/4.svg'
import img5 from './images5/5.svg'
import img6 from './images5/6.svg'
import img7 from './images5/7.svg'
import img8 from './images5/8.svg'



function Part5(){
    return(
        <>
<div>
    <h1>Our Product</h1>
    <div className="flex">
        <Link>HOT</Link>
        <Link>ON SALE</Link>
        <Link>TRENDING NOW</Link>
        <Link>NEW ARRIVAL</Link>
    </div>

    <div>
        <div>
            <div className="min-h-[526px] max-w-[318px]">
                <img src={img1}/>
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
    </div>
</div>
        </>
    )
}
export default Part5
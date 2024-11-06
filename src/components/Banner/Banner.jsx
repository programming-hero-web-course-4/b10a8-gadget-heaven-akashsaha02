import { useNavigate } from 'react-router-dom'
import bannerImg from '../../assets/gadget-banner.jpg'
const Banner = () => {
    const navigate=useNavigate();
    return (
        <div>
            <div className='bg-blue-600 text-white text-center pt-16 pb-32 md:pt-20 md:pb-64 rounded-b-xl'>
                <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mx-auto px-4">Upgrade Your Tech Accessorize with Blu Gadgets Accessories</h1>
                <p className="max-w-2xl mx-auto my-4 md:my-6 px-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
                <button
                onClick={()=>navigate('/dashboard')}
                className="bg-white text-blue-600 font-bold px-6 py-2 text-lg md:text-xl rounded-full shadow-md">Shop Now</button>
            </div>
            <div className="mx-8">
            <div className="max-w-3xl mx-auto p-3 rounded-xl backdrop:blur-lg bg-white/60 border-2 border-white -mt-24 md:-mt-52">
                <img src={bannerImg} alt=""
                    className='w-full rounded-lg'
                />
            </div>
            </div>
        </div>
    )
}

export default Banner

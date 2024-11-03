import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-purple-600 text-white text-center py-10 rounded-b-xl'>
            <h1 className="text-5xl font-bold max-w-4xl mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="max-w-2xl mx-auto my-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
            <button className="bg-white text-purple-600 font-bold px-6 py-2 text-xl rounded-full">Shop Now</button>
            <div className="">
                <div className="max-w-3xl mx-auto p-3 rounded-xl mt-10 backdrop:blur-lg bg-white/60 border-2 border-white">
                    <img src={bannerImg} alt=""
                        className='w-full rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner

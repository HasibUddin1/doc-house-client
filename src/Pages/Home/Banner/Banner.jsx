import './Banner.css'
import doctorImage1 from '../../../assets/images/banner-images/doctor-image-1.jpg'
import doctorImage2 from '../../../assets/images/banner-images/doctor-image-2.jpg'
import doctorImage3 from '../../../assets/images/banner-images/doctor-image-3.jpg'

const Banner = () => {
    return (
        <div className="banner-container h-[700px] -mt-16 bg-slate-900 bg-blend-overlay">
            <div className='flex h-[700px] justify-between py-5 w-9/12 mx-auto items-center'>
                <div className='text-white w-1/2'>
                    <h1 className='text-6xl font-bold mb-5'>Your Best Medical Help Center</h1>
                    <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam quod, esse natus odit corrupti tempora perspiciatis laborum dolores alias.</p>
                    <button className='bg-[#F7A582] hover:bg-orange-600 ease-in-out duration-200 px-8 py-4 rounded-lg font-semibold '>All Services</button>
                </div>
                <div className='flex items-center'>
                    <div className='flex relative'>
                        <div className='absolute -left-[360px]'>
                            <img className='h-[280px] w-[280px] bg-white p-3' src={doctorImage1} alt="" />
                        </div>
                        <div className='z-20'>
                            <img className='h-[280px] w-[280px] bg-white p-3' src={doctorImage2} alt="" />
                        </div>
                        <div className='absolute -left-[180px] top-[140px] z-10'>
                            <img className='h-[280px] w-[280px] bg-white p-3' src={doctorImage3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
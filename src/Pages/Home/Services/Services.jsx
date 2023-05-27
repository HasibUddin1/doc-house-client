import OurServices from './OurServices/OurServices';
import './Services.css'

const Services = () => {
    return (
        <div className="w-9/12 mx-auto mt-20 mb-20 flex gap-5">
            <div className='bg-emerald-900 bg-blend-overlay service-image-container h-[900px] rounded-xl w-1/2 bg-cover'>

            </div>
            <div className='w-1/2'>
                <OurServices></OurServices>
            </div>
        </div>
    );
};

export default Services;
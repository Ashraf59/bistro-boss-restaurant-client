import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={'What Our Client Say'}
            heading={'Testimonial'}
            ></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        

        {
            reviews.map(review => 
                <SwiperSlide
                key={review._id}
               
                >
                   <div  className='items-center text-center my-16 mx-20 flex flex-col'>
                   <Rating style={{ maxWidth: 180 }} value={review.rating} />
                   <p className='py-8'>{review.details}</p>
                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                   </div>
                </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testimonial;
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
       <section>
        <SectionTitle
         subHeading = {"From 11.00am to 10.00pm"}
         heading = {"Order Online"}
        >
           
        </SectionTitle>
         <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='mySwiper mb-24'
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='uppercase text-4xl text-center -mt-20 text-slate-200'>Salad</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='uppercase text-4xl text-center -mt-20 text-slate-200'>Pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='uppercase text-4xl text-center -mt-20 text-slate-200'>Soup</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='uppercase text-4xl text-center -mt-20 text-slate-200'>Desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='uppercase text-4xl text-center -mt-20 text-slate-200'>Salad</h3>
            </SwiperSlide>
        
       
      </Swiper>
       </section>
    );
};

export default Category;
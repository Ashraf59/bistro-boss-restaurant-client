import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="feature-item text-white pt-8 my-20 bg-fixed">
           <SectionTitle
           subHeading="check it out"
           heading="Featured Items"
           ></SectionTitle> 

           <div className="md:flex justify-center items-center pb-20 pt-12 px-16">
            <div className="md:mr-20">
                <img src={featureImg} alt="" />
            </div>
            <div className="">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can I get some?</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque similique aliquid explicabo quisquam rerum ipsa dolorem consequuntur? Itaque beatae repellendus, animi saepe et in maiores tempora unde consectetur nesciunt perferendis adipisci doloremque consequuntur id. Dignissimos, repellendus voluptatem sapiente exercitationem maiores illo porro tempore sit rerum voluptatibus veritatis eligendi quam!</p>

                <button className="btn btn-outline mt-4 border-b-2 border-0 border-white text-white">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;
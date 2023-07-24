import React from "react";
import little from "../../../assets/img/little.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar, AiOutlineClockCircle,AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";

import { BiSolidStarHalf } from "react-icons/bi";
import { FiVideo } from "react-icons/fi";
import { TbDownload } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; // Import left and right arrow icons
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import SwiperCore, { Navigation ,Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

const Tracks = () => {
  return (
    <div className="track">
      <div className="track-top">
        <h2 className="OurTracks">Our Tracks</h2>
        <p className="Instructors">
          Best Instructors Cost Friendly Class To Make Successor
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: false,
        }}
        modules={[]}
        className="Swiper"
        navigation={{
          prevEl: ".AiOutlineArrowLeft",
          nextEl: ".AiOutlineArrowRight",
        }} // Pass the prevEl and nextEl class names to Swiper navigation prop
      >
        {/* Left and Right arrow buttons */}
      <button className="AiOutlineArrowLeft">
        <AiOutlineArrowLeft />
      </button>
      <button className="AiOutlineArrowRight">
        <AiOutlineArrowRight />
      </button>
        <SwiperSlide className="SwiperSlide">
           <div className="">
             <img
              src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o="
              alt=""
              width="464"
              height="238"
            />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  {" "}
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="">
            <img src={little} alt="" width="464" height="238" />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="SwiperSlide">
          <div className="">
            <img
              src="https://c0.wallpaperflare.com/preview/717/27/657/beautiful-blur-casual-close-up.jpg"
              alt=""
              width="464"
              height="238"
            />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="">
            <img
              src="https://media.istockphoto.com/id/1221479375/photo/young-woman-working-from-home.webp?b=1&s=170667a&w=0&k=20&c=UA1OdMC5Mh3CxVu6AzcHMEpbCfLSsvhHyHk3YFb3Vvs="
              alt=""
              width="464"
              height="238"
            />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="">
            <img src={little} alt="" width="464" height="238" />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="SwiperSlide">
          <div className="">
            <img src={little} alt="" width="464" height="238" />
          </div>
          <div className="text">
            <div className="rating">
              <p className="uidesign">
                <span className="ux">UI/UX Design</span> <br /> UI/UX Design For
                Beginners
              </p>
              <p className="AiTwotoneStar">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <span className="BiSolidStarHalf">
                  <BiSolidStarHalf />
                </span>
              </p>
            </div>
            <div className="videohours">
              <p className="BsCameraVideo">
                <AiOutlineClockCircle />
                <span className="hrs">22hrs 30mins</span>
              </p>
              <p className="BsCameraVideo">
                <FiVideo />
                <span className="hrs">34 courses</span>
              </p>
              <p className="BsCameraVideo">
                <TbDownload />
                <span className="hrs">250 sales</span>
              </p>
            </div>
            <button className="JoinLive">Join Live</button>
          </div>
        </SwiperSlide>

        {/* ... (more SwiperSlides) */}
      </Swiper>
    </div>
  );
};

export default Tracks;

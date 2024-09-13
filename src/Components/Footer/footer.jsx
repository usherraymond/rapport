import React, {useEffect} from 'react'
import './footer.css'
import { GrLocation } from "react-icons/gr";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import Aos from 'aos'
import 'aos/dist/aos.css'


 const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className='videoDiv'><video src="/video/video1.mp4" controls  autoPlay muted></video> </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
              <div data-aos="fade-up" className='text'>
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
              </div>
              <div className='inputDiv flex'>
                <input data-aos="fade-up" type="text" placeholder='Enter Email Address...'/>
                <button data-aos="fade-up" className='btn flex' type="submit">
                  SEND 
                  <GrLocation className='icon'/>
                </button>
              </div>

             
        </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="#" className='logo flex'>
                <MdTravelExplore className='icon'/><h1><span>air</span>bnb</h1>
              </a>
            </div>
            <div data-aos="fade-up" className='footerParagraph'>
              ENGEH Martin auquelle le airbnb a toujour
                 été pasionné rêvait réaliser un website à 
                 la hauteur des maisons de rêve où profiter 
                 des bons vacances de détention après avoir 
                 passer des moments stressants aux boulots sur 
                 la pression du travail. je voulais permettre 
                 aux gens de s'évader pour profiter des vacances dans 
                 des maisons de rêve au-moins une fois dans la vie
            </div>
            <div data-aos="fade-up" className='footerSocials flex'>
              <MdTravelExplore className='icon'/>
              <MdTravelExplore className='icon'/>
              <MdTravelExplore className='icon'/>
              <MdTravelExplore className='icon'/>
            </div>
          </div>
          <div className='footerLinks grid'>
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span  className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <AiOutlineTwitter  className='icon'/>
                Services
              </li>
              <li className='footerList flex'>
                <AiFillYoutube  className='icon'/>
                Insurance
              </li>
              <li className='footerList flex'>
                <AiFillInstagram  className='icon'/>
                Agency
              </li>
              <li className='footerList flex'>
                <FaTripadvisor className='icon'/>
                Tourism
              </li>
              <li className='footerList flex'>
                <ImAirplane  className='icon'/>
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <AiOutlineTwitter className='icon'/>
                Bookings
              </li>
              <li className='footerList flex'>
                <AiFillYoutube className='icon'/>
                Rentcars
              </li>
              <li className='footerList flex'>
                <AiFillInstagram className='icon'/>
                AirbnbWorld
              </li>
              <li className='footerList flex'>
                <FaTripadvisor className='icon'/>
                Trivago
              </li>
              <li className='footerList flex'>
                <ImAirplane className='icon'/>
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className='footerList flex'>
                <AiOutlineTwitter className='icon'/>
                London
              </li>
              <li className='footerList flex'>
                <AiFillYoutube className='icon'/>
                Nebraska
              </li>
              <li className='footerList flex'>
                <AiFillInstagram className='icon'/>
                Indonesia
              </li>
              <li className='footerList flex'>
                <FaTripadvisor className='icon'/>
                Europe
              </li>
              <li className='footerList flex'>
                <ImAirplane className='icon'/>
                Monréal
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
             <small>BEST AIRBNB WEBSITE THEME</small>
             <small>COPYRIGHTS RESERVED ISRATECH 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Footer
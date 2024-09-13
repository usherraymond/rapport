import React, {useEffect} from 'react'
import './main.css'

import { GrLocation } from "react-icons/gr";
import { BsClipboard2CheckFill } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'


 const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    const Data = [{
        id:1,
        imgSrc:"/Assets/img(1).jpg",
        destTitle:'Nebraska',
        location:'United-State',
        grade:'CUTURAL RELAX',
        fees:'$600',
        description:'the epitome of romance, Nebraska is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },
    
    
    {
        id:2,
        imgSrc:"/Assets/img(2).jpg",
        destTitle:'Bogota',
        location:'Colombie',
        grade:'CUTURAL RELAX',
        fees:'$400',
        description:'the epitome of romance, Bogota is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.' 
    },

    {
        id:3,
        imgSrc:"/Assets/img(3).jpg",
        destTitle:'Paris',
        location:'France',
        grade:'CUTURAL RELAX',
        fees:'$800',
        description:'the epitome of romance, Paris is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:4,
        imgSrc:"/Assets/img(4).jpg",
        destTitle:'Texas',
        location:'United-State',
        grade:'CUTURAL RELAX',
        fees:'$350',
        description:'the epitome of romance, Texas is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:5,
        imgSrc:"/Assets/img(5).avif",
        destTitle:'Roca Roca',
        location:'Island',
        grade:'CUTURAL RELAX',
        fees:'$500',
        description:'the epitome of romance, Roca Roca is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:6,
        imgSrc:"/Assets/img(6).jpg",
        destTitle:'Monréal',
        location:'Canada',
        grade:'CUTURAL RELAX',
        fees:'$650',
        description:'the epitome of romance, Monréal is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:7,
        imgSrc:"/Assets/img(7).jpg",
        destTitle:'Berlin',
        location:'Germany',
        grade:'CUTURAL RELAX',
        fees:'$450',
        description:'the epitome of romance, Berlin is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },

    {   
        id:8,
        imgSrc:"/Assets/img(8).jpg",
        destTitle:'London',
        location:'Angleterre',
        grade:'CUTURAL RELAX',
        fees:'$800',
        description:'the epitome of romance, London is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },
    
    {   
        id:9,
        imgSrc:"/Assets/img(9).jpg",
        destTitle:'New York',
        location:'Etats Unies',
        grade:'CUTURAL RELAX',
        fees:'$650',
        description:'the epitome of romance, New York is one of the best travel destinations in the world. this place is known for its luxurious stays and adventurous activities.'
    },
    
    ]
  return (
    <section className='main container section'>
        <div className='secTitle'>
            <h3 data-aos="fade-right" className='title'>
                Most visited destinations
            </h3>
        </div>
        <div className='secContent grid'>
            {
                Data.map(({id, imgSrc,destTitle,location,grade,fees,description})=>{
                     return(
                        <div key={id} data-aos="fade-up" className='singleDestination'>
                           <div className='imageDiv'>
                              <img src={imgSrc} alt={destTitle} />
                           </div>
                           <div className='cardInfo'>
                             <h4 className='destTitle'>{destTitle}</h4>
                             <span className='continent flex'>
                               <GrLocation className='icon'/>
                               <span className='name'>{location}</span>
                             </span>

                             <div className='fees flex'>
                                <div className='grade'>
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className='price'>
                                    <h5>{fees}</h5>
                                </div>
                             </div>

                             <div className='desc'>
                                <p>{description}</p>
                             </div>

                             <button className='btn flex'>DETAILS
                                <BsClipboard2CheckFill  className='icon'/>
                             </button>
                           </div>
                        </div>

                       
                     )
                })
            }
            
        </div>
           


    </section>
  )
}


export default Main
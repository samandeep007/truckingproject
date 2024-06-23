import React from 'react'
import Navbar from '../components/Navbar'
import Card from './Card'
import Clients from './Clients';
import AboutUs
 from './AboutUs';
import ImageCarousel from './ImageCarousel';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Counter from './counter';
import Services from './Services';
import Careers from './Careers';


const images = [
    '/images/trucks/truck (1).jpeg',
    '/images/trucks/truck (2).jpeg',
    '/images/trucks/truck (5).jpeg',
    '/images/trucks/truck (6).jpeg',
    '/images/trucks/truck 7.jpeg',
  ];


  const servicesData = [
    {
      title: 'LTL',
      
      logoUrl: 'images/ltl.png',
    },
    {
      title: 'Truckload',
      
      logoUrl:'images/ftl2.png',
    },
    {
        title: 'Temperature Controlled',
        
        logoUrl: 'images/temp.png',
      },
      {
        title: 'Dangerous Goods',
       
        logoUrl: 'images/dangerous.png',
      },

      {
        title: 'Warehousing',
        logoUrl: 'images/warehouse.png'
      },
      {
        title: 'Expedited',
        logoUrl: 'images/expedited.png'
      },
     

    ]
const cardData = [
    {
      title: 'Reliability',
      description: 'We understand the significance of deadlines and consistently deliver on our promises. Your trust in our reliability is the bedrock of our success.',
      logoUrl: 'images/features/quality.png',
    },
    {
      title: 'Safety',
      description:  'Safety is not just a policy; it\'s a core value. We prioritize the well-being of our drivers, your cargo, and the communities we serve, ensuring that every journey is safe and secure.',
      logoUrl:'images/features/shield.png',
    },
    {
        title: 'Operational Efficiency',
        description:  'Efficiency is in our DNA. We optimize routes, embrace cutting-edge technology, and minimize delivery times, saving you time and resources.',
        logoUrl: 'images/features/time-management.png',
      },
      {
        title: 'Transparency',
        description: 'Open and clear communication is key. We keep you informed at every step, and our 24/7 team is always here to address your questions and concerns.',
        logoUrl: 'images/features/eyes.png',
      },
      {
        title: 'Customer-Centric Approach',
        description: 'Your success is our mission. We tailor our services to meet your unique needs, and our dedicated customer service team is always ready to assist you.',
        logoUrl: 'images/features/customer.png',
      },
      {
        title: 'Cutting-Edge Fleet',
        description:  'Our contemporary, impeccably maintained fleet is equipped with the latest technology, ensuring the efficient transportation of your goods.',
        logoUrl:'images/features/trucks.png',
      },
      {
          title: 'Flexibility',
          description: 'We adapt to your changing requirements and unforeseen challenges, ensuring your cargo reaches its destination, no matter the circumstances.',
          logoUrl: 'images/features/double-arrow.png',
        },
        {
          title: 'Innovative Technology',
          description: 'Our investments in cutting-edge technology and tracking systems afford you real-time visibility into your shipments, elevating efficiency and security to new heights.',
          logoUrl: 'images/features/technology.png',
        },
    // Add more card data as needed
  ];


export default function Hero() {
  return (
    <>
  
    <section id="heroBackground">
    <Navbar/>
    <div class="glass- ">
        <div class="glass">
        <div className="shine"></div>
            <div id="parent" className=''>
             
           <div id="headerText">
           <h1 id='heroText1'>WE HANDLE</h1>
                <h1 id='heroText2'>YOUR LOGISTICS !</h1>
           </div>
           {/* <div id="headerDesc"><p>"Welcome to our truck freight services – where reliability meets efficiency. Explore our seamless logistics solutions designed to transport your goods safely and swiftly. Experience hassle-free shipping with our expert team today."</p></div>
           */}

        </div>
        
    </div>

    
        </div>
    </section>
     {/* <div className=" bg-[#12172f] mx-auto ">
      <ImageCarousel images={images} />
    </div> */}
    <div className='' style={{backgroundColor: "#12172f"}}>
        <div className="flex flex-wrap">
      {cardData.map((data, index) => (
        <Card size={"w-1/4"} key={index} data={data} />
      ))}
    </div>
    <div id="aboutUs">
    <AboutUs/>
    </div>

    <div className="bg-gray-100 w-3/4 mx-auto h-[0.5px]"></div>

    <div className=' my-2' style={{backgroundColor: "#12172f"}}>
    <h1 className='text-center text-4xl text-white font-bold m-8'>Services</h1>
        <div className="flex flex-wrap">
      {servicesData.map((data, index) => (
        
        <Services size={3} key={index} data={data} />
      ))}
    </div>
    </div>
    
    <div className=" max-w-5xl mx-auto bg-[#12172f] py-8 mb-10">
<h1 className='text-center text-4xl text-white font-bold mt-4 mb-10'>Our Presence</h1>
    <img src="images/northAmerica.png" width="550px"  style={{margin: "0 auto", maxHeight: "600px", position: "relative"}} alt="" />
  
    <h1 className='text-center text-3xl text-white  mt-4'>We have got you covered all over North America</h1>
    </div>

    <div className="bg-gray-100 w-full mx-auto h-[0.5px]"></div>

    <div className="max-w-5xl mx-auto bg-[#12172f] py-8 mb-12">
    <h1 className='text-center text-4xl text-white font-bold m-8 mb-16 '>Just because numbers matter...</h1>
    <div className="flex flex-wrap justify-between">
     
    <Counter upperLimit="30" item="Tractors" margin='36'/>
    <Counter upperLimit="50" item="Trailers" margin='36'/>
    <Counter upperLimit="15" item="Clients" margin='0'/>
    
  
    </div>
 

</div>


  
<div id='contactUs'></div>
    <Clients/>
    

 

<ContactUs/>
<div id='careers'></div>
<Careers/>



<Footer/>
<div className="flex space-x-2 mt-5">
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      <div className="w-16 h-2 bg-white sm:w-24 md:w-32 lg:w-48"></div>
      {/* Add more strips as needed */}
    </div>


   
    </div>

    </>
  )
}

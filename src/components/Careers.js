import React from 'react';

export default function Careers() {
  return (
    <div className='w-full mt-10 h-auto bg-white mx-auto p-8 md:p-16 pt-8 rounded-lg shadow-lg'>
      <h1 className='text-[#12172f] text-4xl font-bold mb-6 text-center'>Careers</h1>
      <h1 className='text-[#12172f] text-2xl md:text-4xl font-bold text-center mb-6'>Creating Better Opportunities... Join Today!!!</h1>
      <h1 className='text-[#12172f] text-lg md:text-xl text-center mt-3'>We are always looking for dedicated professionals to join our ever-growing team.</h1>
      <div className="flex flex-wrap justify-center items-center my-8">
        <img className='w-12 h-12 md:w-16 md:h-16' src="images/driver.png" alt="On-ground Drivers" />
        <h1 className='text-lg md:text-xl mt-2 ml-4 md:ml-8 font-bold'>On-ground Drivers</h1>
        <img className='w-12 h-12 md:w-16 md:h-16 ml-4 md:ml-8' src="images/staff.png" alt="In-office Staff" />
        <h1 className='text-lg md:text-xl mt-2 ml-4 md:ml-8 font-bold'>In-office Staff</h1>
      </div>
      <h1 className='text-[#12172f] text-lg md:text-xl text-center mt-3'>
        Contact us: <a href="tel:+15874424421" className="text-[#12172f] font-bold">+1 (587) 442-4421</a><br />
        or<br />
        Email us your resume: <a href="mailto:your@email.com" className="text-[#12172f] font-bold">info@elevefreightways.com</a>
      </h1>
    </div>
  )
}

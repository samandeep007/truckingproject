import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs'

const ContactUs = () => {
  return (
    <div className="bg-[#12172f] py-3 pb-5">
      <div className=" mx-auto px-8 text-center">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Number */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mr-4">
              <BsFillTelephoneFill className="text-5xl text-[#12172f]" />
            </div>
            <div>
              <p className="text-lg font-semibold">Contact Number</p>
              <p className="text-xl">+1 (587) 442-3232 </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mr-4">
              <FaEnvelope className="text-5xl text-[#12172f]" />
            </div>
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-xl">info@elevefreightways.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="mr-4">
              <FaMapMarker className="text-5xl text-[#12172f]" />
            </div>
            <div>
              <p className="text-lg font-semibold">Address</p>
              <p className="text-xl">
              5208 169 Ave NW <br/>
Edmonton AB T5Y 0R9
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

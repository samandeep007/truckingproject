import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-900 py-8">
      <div className=" mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
        <div className="text-2xl  logo">
            <a to="/" className="flex items-center">
             
             
                <img src="images/logoWhite.png" height="40px" width="40px"  style={{display: "inline-block", marginRight: "10px"}} alt="" />
                <span className="text-gray-400">  <span
                className="text-4xl" style={{color: "white"}}
            
              ><span></span>ELEVE   freightways 
              </span></span>
            </a>
          </div>
          <p className="text-gray-200 text-xl">We handle your Logistics.</p>
        </div>

    

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Eleve Freightways. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

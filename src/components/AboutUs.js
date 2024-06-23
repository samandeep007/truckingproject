import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-20" style={{ background: "#12172f" }}>
      <div className="mx-auto px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-xl mb-6">
              With our unwavering commitment to efficiency, reliability, and customer satisfaction, we have earned our rightful place in the industry. We understand that the smooth movement of goods is the lifeblood of modern commerce, and we take this responsibility to heart. With a fleet of state-of-the-art trucks and a team of highly skilled professionals, we navigate the complexities of the supply chain with finesse and precision. When you entrust your logistics to Eleve Freightways, you're not just a customer, you're part of our extended family.
            </p>
            <p className="text-xl">
              In a world where deadlines are sacred and every shipment matters, Eleve Freightways stands tall as a trusted ally. We don't just transport goods; we deliver peace of mind. So, when you hear the rumble of an Eleve Freightways truck on the road, know that your logistics are in capable hands. With Eleve Freightways, your success is our mission, and "<span style={{ textDecoration: "underline" }}><em>We handle your logistics</em></span>" with complete safety and dedication.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative overflow-hidden">
            <img
              src="/images/1000022777.jpg"
              alt="Team"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-[#12172f] opacity-70"></div>
          </div>
        </div>
      </div>
      <div id="blank"></div>
    </div>
  );
};

export default AboutUs;

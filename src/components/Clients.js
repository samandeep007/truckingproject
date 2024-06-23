import React from 'react';

const clients = [
  { name: 'Client A', logo: 'loblaws-logo.png' },
  { name: 'Client B', logo: 'Amazon_logo.svg' },
  { name: 'Client C', logo: 'Canada_Post_logo_logotype.png' },
  { name: 'Client D', logo: 'OldDutchLogo.svg' },
  // Add more clients as needed
];

const Clients = () => {
  return (
    <section id="clients" className="bg-[white] py-8 mx-4 sm:mx-6 md:mx-8 rounded-lg mt-12 mb-12">
      <div className="mx-auto px-4 sm:px-12 pb-12">
        <h2 className="text-3xl sm:text-4xl mx-auto font-bold text-gray-800 mb-6 sm:mb-12">
          Our Major Clients  <span className="text-lg text-red-700 inline"> + many more....</span>
        </h2>
       
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-16">
          {clients.map((client, index) => (
            <div key={index} className="p-2 flex items-center">
              <img
                src={`/images/clients/${client.logo}`}
                alt={client.name}
                className="max-h-16 mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

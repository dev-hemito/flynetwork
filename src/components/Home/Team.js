import Image from 'next/image';
import React from 'react';

const TeamBoard = () => {
  const executiveTeam = [
    {
      name: 'Sami K Haridas',
      role: 'Startup Mentor | Founder of Fly Network',
      subbrole:'Managing Director of Brand Stories Business Magazine',
      image:'/Image.png',
      description: 'Sami K Haridas is an entrepreneur and startup mentor with a diverse corporate background. With more than 7 years of experience  in the hospitality industry, he has worked in different senior management roles. He has incorporated across top brands such as McDonalads, KFC and 5-star hotels, abroad including locations like  UAE and London. As an NRI businessman, he has developed valuable insights in the fast food and luxury hospitality sectors. In 2016 Sami ventured into entrepreneurship by founding his own brand, unfolding a new chapter in his career.'
    }
  ];

  const boardMembers = [
    { name: 'Dr. Thomas George K', role: 'Director at Lead College', image:'/Image.png' },
    { name: 'Mr. Renjith Raj', role: 'Managing Partner at Paddle Consultants', image:'/Image.png' },
    { name: 'Mr. Mathew Joseph', role: 'Founder - FreshToHome', image:'/Image.png' },
    { name: 'Mr. Jobin S Kottaram', role: 'Founder - Absolute IAS Academy', image:'/Image.png' },
    { name: 'Mr. Prasobh P', role: 'CEO Hemito Digital' , image:'/Image.png'},
    { name: 'Mr. Subilal K', role: 'Automation Coach', image:'/Image.png' },
    { name: 'Mr. Suresh Kumar K', role: 'Founder - Skybertech', image:'/Image.png' },
    { name: 'Mr. Madhu Bhaskaran', role: 'Director Samagra', image:'/Image.png' },
    { name: 'Mr. Shihabudheen', role: 'AI Consultant', image:'/Image.png' },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Executive Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl text-white mb-8 font-light" data-aos="fade-in">Our Executive Team</h2>
        {executiveTeam.map((executive, index) => (
          <div key={index} className=" backdrop-blur-sm rounded-lg p-6 md:flex  md:flex-row gap-6 items-center" data-aos="fade-in">
           <div className='flex justify-center'>
           <div className="w-48 h-48 md:w-56 md:h-56 flex justify-center">
              <Image src={executive.image} className="w-full h-full bg-gray-300 rounded-lg" width={300} height={300} />
            </div>
           </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-1">{executive.name}</h3>
              <p className="text-purple-200 italic ">{executive.role}</p>
              <p className="text-purple-200 italic mb-2">{executive.subbrole}</p>
              <p className="text-gray-300 leading-relaxed md:text-center text-justify">{executive.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Board of Advisors Section */}
      {/* <section>
        <h2 className="text-3xl md:text-4xl text-white mb-8 font-light" data-aos="fade-in">Board of Advisors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {boardMembers.map((member, index) => (
            <div key={index} className=" backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105" data-aos="fade-in">
              <div className="w-32 h-32 md:w-40 md:h-40 mb-4">
                <Image className="w-full h-full bg-gray-300 rounded-lg" src={member.image} width={300} height={300}/>
              </div>
              <h3 className="text-lg text-white font-semibold text-center">{member.name}</h3>
              <p className="text-purple-200 text-sm text-center mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default TeamBoard;
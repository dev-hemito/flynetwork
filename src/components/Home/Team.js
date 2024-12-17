import Image from 'next/image';
import React from 'react';

const TeamBoard = () => {
  const executiveTeam = [
    {
      name: 'Sami K Haridas',
      role: 'Startup Mentor | Founder of Fly Network',
      subbrole: 'Managing Director of Brand Stories Business Magazine',
      image: '/members/sami.jpg',
      description: `Sami K. Haridas is an accomplished entrepreneur and startup mentor with a solid foundation in the hospitality industry. 
      With over seven years in senior management roles, he has worked with globally acclaimed brands, including McDonald’s, KFC, and 
      premier 5-star hotels in the UAE and London. This diverse corporate journey has given him valuable expertise in managing fast-paced 
      environments and delivering exceptional customer experiences.
      As an NRI businessman, Sami has gained deep insights into the fast food and luxury hospitality sectors, enabling him to navigate 
      the complexities of these industries with strategic insights. His ability to adapt to diverse markets has been instrumental in his success,
       shaping his unique perspective as a leader and mentor.
      In 2016, Sami ventured into entrepreneurship by establishing his own brand, marking a significant turning point in his career. 
      This move allowed him to channel his industry knowledge into building a business that reflects his vision and values. 
      Today, he continues to inspire through his intuitive approach, combining operational expertise with a passion for excellence.

`
    }
  ];

  const boardMembers = [
    { name: 'Mr. Renjith Raj', role: 'Founder - Paddle Consultants', image: '/members/renjith.jpg' },
    { name: 'Mr. Rashid K A', role: 'Director - Ajmi Foods', image: '/members/rashid.jpg' },
    { name: 'Dr. Arun Oommen', role: 'Senior Consultant Neurosurgeon - VPS Lakeshore Hospital', image: '/members/arun.jpg' },
    { name: 'Dr. Thomas George K', role: 'Director - LEAD College of Management', image: '/members/thomas.jpg' },
    { name: 'Mr. Sunil Mathai', role: 'Founder - TradeTalks', image: '/members/akhil.jpg' },
    { name: 'Mr. Shihabudheen P K', role: 'CEO & Co-Founder,Hash Future School', image: '/members/shihab.jpg' },
    { name: 'Mr. Prasobh P', role: 'CEO Hemito Digital', image: '/members/prashob.jpg' },
    { name: 'Dr. Ramesh K V', role: 'Public speaking coach', image: '/members/rameshs.jpg' },
    { name: 'Mr. Mujeeb Rahaman', role: 'Influencer ,Teacher My vlog', image: '/members/mujeeb.jpg' },
    { name: 'Mr. Subilal K', role: 'Automation Coach', image: '/members/subilal.jpg' },
    { name: 'Mr. Prabeesh', role: 'COO Padle Group', image: '/members/prabeesh.jpg' },
    { name: 'Mr. Denny Tomy', role: 'Managing Partner - Loanitol', image: '/members/denny.jpg' },

  ];

  return (
    <div className="min-h-screen p-4 md:p-8 text-center">
      {/* <div className=" p-4 md:p-8"> */}
      {/* Executive Team Section */}
      <section className="mb-16">
        {/* <section className=""> */}
        <h2 className="text-3xl md:text-4xl text-white mb-8 font-light" data-aos="fade-in">Our Executive Team</h2>
        {executiveTeam.map((executive, index) => (
          <div key={index} className=" backdrop-blur-sm rounded-lg p-6 md:flex  md:flex-row gap-6 items-center" data-aos="fade-in">
            <div className='flex justify-center'>
              <div className="w-48 h-48 md:w-56 md:h-56 flex justify-center">
                <Image src={executive.image} className="w-full h-full bg-gray-300 rounded-lg object-cover " width={400} height={400} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-1">{executive.name}</h3>
              <p className="text-purple-200 italic ">{executive.role}</p>
              <p className="text-purple-200 italic mb-2">{executive.subbrole}</p>
              <p className="text-gray-300 leading-relaxed  text-justify">{executive.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Board of Advisors Section */}
      <section>
        <h2 className="text-3xl md:text-4xl text-white mb-8 font-light" data-aos="fade-in">Board of Advisors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {boardMembers.map((member, index) => (
            <div key={index} className=" backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105" data-aos="fade-in">
              <div className="w-32 h-32  md:h-52 md:w-52 mb-4">
                <Image className="w-full h-full bg-gray-300 rounded-lg object-cover" src={member.image} width={300} height={300} />
              </div>
              <h3 className="text-lg text-white font-semibold text-center">{member.name}</h3>
              <p className="text-purple-200 text-sm text-center mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamBoard;
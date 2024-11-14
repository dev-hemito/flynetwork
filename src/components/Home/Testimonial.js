import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Frontend Developer at TechCorp",
    image: "/Image.png",
    text: "The platform completely transformed how we handle our development workflow. The intuitive interface made adoption across our team seamless.",
    date: "2024.03.02"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Full Stack Developer at DevFlow",
    image: "/Image.png",
    text: "Finally found a solution that addresses our complex UI building challenges. The workflow is incredibly intuitive and efficient.",
    date: "2024.03.01"
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Senior Developer at CodeCraft",
    image: "/Image.png",
    text: "This tool has significantly improved our development speed. The learning curve is minimal, and the results are outstanding.",
    date: "2024.02.28"
  },
  {
    id: 4,
    name: "James Liu",
    role: "Tech Lead at InnovateLab",
    image: "/Image.png",
    text: "A game-changer for our development team. The integration was smooth, and the productivity boost was immediate.",
    date: "2024.02.27"
  }
];

const TestimonialSection = () => {
  const [activeId, setActiveId] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      setActiveId((prevActiveId) => {
        const nextId = prevActiveId + 1;
        return nextId > testimonials.length ? 1 : nextId;
      });
    }
    if (touchStart - touchEnd < -50) {
      // Swiped right
      setActiveId((prevActiveId) => {
        const nextId = prevActiveId - 1;
        return nextId < 1 ? testimonials.length : nextId;
      });
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="min-h-screen mt-32 p-4 md:p-8 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl md:text-5xl text-white font-bold text-center mb-24">
          Inspiring Success Stories
        </h1>

        <div className="relative h-[32rem]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveId(testimonial.id)}
              className={`
                absolute left-1/2 w-full max-w-xl text-left
                transform transition-all duration-500 ease-in-out cursor-pointer
                ${getPositionClasses(testimonial.id, activeId, testimonials.length)}
              `}
            >
              <div className="bg-white/95 backdrop-blur-lg rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow mx-4">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-purple-100"
                  />
                  <div>
                    <h3 className="text-gray-900 font-semibold">{testimonial.name}</h3>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-4 h-0.5 bg-purple-400" />
                  <span className="text-purple-600 text-sm">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getPositionClasses = (id, activeId, total) => {
  if (id === activeId) {
    return "-translate-x-1/2 scale-100 opacity-100 z-30";
  }

  const offset = id - activeId;

  if (offset === 1) {
    return "-translate-x-1/4 translate-y-8 scale-95 opacity-75 z-20";
  }
  if (offset === -1) {
    return "-translate-x-3/4 translate-y-8 scale-95 opacity-75 z-20";
  }
  if (offset > 1) {
    return "-translate-x-1/4 translate-y-16 scale-90 opacity-50 z-10";
  }
  if (offset < -1) {
    return "-translate-x-3/4 translate-y-16 scale-90 opacity-50 z-10";
  }

  return "-translate-x-1/2 translate-y-24 opacity-0 scale-85 z-0";
};

export default TestimonialSection;
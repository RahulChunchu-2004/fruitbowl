import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "From start to finish, the team was professional, courteous and delivered on time. The Tropical Sunrise bowl is my absolute favorite!",
    name: 'Sarah Chen',
    location: 'San Francisco',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=128&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "Great communication, excellent quality — our weekly fruit bowl subscription feels flawless and well-crafted. The kids love it!",
    name: 'Jason P.',
    location: 'Los Angeles',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "Fruuta's attention to freshness is incredible. The final result is always delicious and beautiful. Satisfied every time!",
    name: 'Priya Sharma',
    location: 'Seattle',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "I was looking for a healthy lunch option and Fruuta exceeded my expectations. The Berry Bliss Bowl is a must-try.",
    name: 'Michael B.',
    location: 'New York',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=128&auto=format&fit=crop',
    rating: 4,
  },
  {
    quote: "The best way to start my morning. The ingredients are always so fresh and the combinations are perfect. Highly recommend!",
    name: 'Jessica Wang',
    location: 'Chicago',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=128&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "Their eco-friendly packaging is a huge plus for me. It's great to enjoy something so tasty while also being mindful of the planet.",
    name: 'Daniel Kim',
    location: 'Austin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&auto=format&fit=crop',
    rating: 5,
  },
];

const testimonialsRow2: Testimonial[] = [
    {
      quote: "The Green Power Bowl is a game-changer for my post-workout routine. So refreshing and energizing!",
      name: 'Emily R.',
      location: 'Miami',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=128&auto=format&fit=crop',
      rating: 5,
    },
    {
      quote: "Customer service is top-notch. They were so helpful with my custom order for a party. It was a huge hit!",
      name: 'David Lee',
      location: 'Boston',
      avatar: 'https://images.unsplash.com/photo-1522529599102-4b320d673c03?q=80&w=128&auto=format&fit=crop',
      rating: 5,
    },
    {
      quote: "An absolute delight! The Citrus Burst Bowl is like sunshine in a bowl. Perfect for a gloomy day.",
      name: 'Olivia Martinez',
      location: 'Denver',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop',
      rating: 5,
    },
    {
      quote: "The quality is consistent every single time. I've been a loyal customer for over a year. Never disappointed.",
      name: 'Alex Johnson',
      location: 'Portland',
      avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=128&auto=format&fit=crop',
      rating: 5,
    },
    {
      quote: "I love that I can get something so healthy that tastes like a treat. The Acai Antioxidant Bowl is my go-to indulgence.",
      name: 'Sophia Garcia',
      location: 'San Diego',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=128&auto=format&fit=crop',
      rating: 5,
    },
    {
        quote: "Perfect for a quick, healthy, and delicious meal on the go. Fruuta has made my busy workdays so much better.",
        name: 'Ben Carter',
        location: 'Atlanta',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=crop',
        rating: 4,
    }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[90vw] max-w-sm bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 relative flex flex-col justify-between min-h-[280px]">
    <div>
      <div className="flex justify-between items-start mb-4">
        <StarRating rating={testimonial.rating} />
        <svg className="w-12 h-12 text-red-100 dark:text-gray-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.333 7h-2.667c-1.473 0-2.667 1.193-2.667 2.667v8c0 1.473 1.193 2.667 2.667 2.667h2.667v-13.333zM25.333 7h-2.667c-1.473 0-2.667 1.193-2.667 2.667v8c0 1.473 1.193 2.667 2.667 2.667h2.667v-13.333z"></path>
        </svg>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
    </div>
    <div className="flex items-center gap-4 mt-auto">
      <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-red-200 dark:border-red-500/50 object-cover" />
      <div>
        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{testimonial.name}</h4>
        <p className="text-gray-500 dark:text-gray-400">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <AnimatedSection id="testimonials" className="bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 dark:text-gray-100">What clients say about us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">Real Stories from Fruit Lovers Who Choose Fruuta for Their Daily Freshness</p>
      </div>
      <div className="flex flex-col gap-8">
        {/* Row 1: Right to Left */}
        <div
          className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {testimonials.map((testimonial, index) => (
              <li key={`r1-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll [animation-play-state:running] group-hover:[animation-play-state:paused]" aria-hidden="true">
             {testimonials.map((testimonial, index) => (
              <li key={`r1-dup-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
        {/* Row 2: Left to Right */}
        <div
          className="group w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll-reverse [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {testimonialsRow2.map((testimonial, index) => (
              <li key={`r2-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-scroll-reverse [animation-play-state:running] group-hover:[animation-play-state:paused]" aria-hidden="true">
             {testimonialsRow2.map((testimonial, index) => (
              <li key={`r2-dup-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
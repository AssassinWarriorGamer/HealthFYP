import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';

interface Event {
  id: number;
  imageSrc: string;
  link: string;
}

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel: React.FC<EventCarouselProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: string) => {
    if (direction === 'LEFT' && currentIndex < events.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (direction === 'RIGHT' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    trackMouse: true,
  });

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000); // Change image every 3 seconds (3000 ms)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [events.length]); // Dependency array ensures the effect runs once

  return (
    <div {...handlers} className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-transform duration-300 ${
            index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <Link href={event.link}>
            <img
              src={event.imageSrc}
              alt={`Event ${event.id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </Link>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to event ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;

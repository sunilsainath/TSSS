import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import all carousel images
import FirstMeetUP from '@/assets/TSSS_teamgathering.jpg';
import educationSupport1 from '@/assets/10thClassAppriceation.jpeg';
import templeEvent1 from '@/assets/Devotional.jpeg';
import communityService1 from '@/assets/fooddonation.jpeg';
import medicalCamp1 from '@/assets/BloodD.jpeg';
import educationSupport2 from '@/assets/pen.jpeg';
import spiritualEvent1 from '@/assets/Kondagattugiripradaskshana.jpeg';
import bloodAwareness1 from '@/assets/TSSS_Song_Release.jpeg';

const carouselImages = [
  { src: FirstMeetUP, alt: 'Telangana Srinivasula Seva Samstha First Anniversary', title: 'TSSS 1st Anniversary' },
  { src: educationSupport1, alt: 'Educational Support', title: 'Appriciation of SSC topper from all GOVT schools' },
  { src: templeEvent1, alt: 'Temple Event', title: 'Spiritual Gathering' },
  { src: communityService1, alt: 'Community Service', title: 'Community Service Initiative' },
  { src: medicalCamp1, alt: 'Medical Camp', title: 'Health Checkup Camp' },
  { src: educationSupport2, alt: 'Education Activities', title: 'Children Learning Program' },
  { src: spiritualEvent1, alt: 'Spiritual Event', title: 'Devotional Activities' },
  { src: bloodAwareness1, alt: 'Blood Awareness', title: 'Blood Donation Awareness' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-xl">
      {/* Carousel Images */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Title */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h3>
              <p className="text-lg opacity-90"></p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
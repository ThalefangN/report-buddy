import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    title: "Welcome to CrowdLink",
    description: "Your community safety companion. Report and stay informed about what's happening in your area.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Real-time Updates",
    description: "Get instant notifications about incidents in your neighborhood and contribute to community safety.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Verified Reports",
    description: "Trust in our verified reporting system. Your contributions make the community safer.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }
];

const OnboardingSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate('/signup');
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const skipToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="onboarding-slide">
      <img 
        src={slides[currentSlide].image} 
        alt={slides[currentSlide].title}
        className="w-full max-w-md h-64 object-cover rounded-2xl mb-8 animate-fade-in"
      />
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
        <p className="text-gray-600">{slides[currentSlide].description}</p>
      </div>
      <div className="flex items-center justify-between w-full max-w-md">
        {currentSlide > 0 ? (
          <Button variant="outline" onClick={prevSlide}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
        ) : (
          <div />
        )}
        {currentSlide < slides.length - 1 ? (
          <>
            <Button variant="ghost" onClick={skipToSignup}>Skip</Button>
            <Button onClick={nextSlide}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </>
        ) : (
          <Button onClick={nextSlide} className="w-full">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingSlides;
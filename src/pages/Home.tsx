import { Droplets, GraduationCap, Heart } from 'lucide-react';
import Carousel from '@/components/Carousel';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="w-full">
        <Carousel />
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Srinivasula Seva Samstha, we are committed to creating positive change in our communities through 
              compassionate service. We focus on three key areas: facilitating life-saving blood donations, 
              empowering underprivileged children through education, and nurturing spiritual growth through 
              Hindu devotional practices. Together, we build a better tomorrow for all.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the three pillars of our charitable work that make a meaningful impact in countless lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <FeatureCard
                icon={<Droplets className="h-8 w-8" />}
                title="Blood Donation Drives"
                description="Organizing regular blood donation camps to ensure hospitals have adequate supply for emergency cases and surgeries. Every drop counts in saving lives."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <FeatureCard
                icon={<GraduationCap className="h-8 w-8" />}
                title="Educational Support"
                description="Providing books, supplies, and tutoring to underprivileged children. Education is the foundation for breaking the cycle of poverty."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <FeatureCard
                icon={<Heart className="h-8 w-8" />}
                title="Spiritual Programs"
                description="Organizing devotional activities, temple events, and spiritual gatherings to promote Hindu values and community bonding."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-hero-gradient text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether through volunteering, donating, or spreading awareness, your contribution helps us 
              continue our mission of serving humanity with love and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Involved</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
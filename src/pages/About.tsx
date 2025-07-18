import { Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Srinivasula Seva Samstha
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to serve humanity through compassionate action, we have been making a 
            positive impact in our communities since 2024.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Srinivasula Seva Samstha was established in 2024 by a group of dedicated individuals 
                  whos names and idealogy matched. we recognized the urgent need for organized community
                  service. What started as small local initiatives has grown into a registered charitable
                  trust making significant impacts across multiple areas of social welfare.
                </p>
                <p>
                  We as a trust, inspired by the principles of seva (selfless service) and the 
                  technological potential of our modern age, combined traditional values with 
                  innovative approaches to create lasting change in our communities.
                </p>
                <p>
                  Today, we proudly serve hundreds of families through our various programs, 
                  have organized many  blood donation camps for thalasemia effected kids, and 
                  have supported many children in their educational journey.
                </p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-warm-bg p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To create a society where compassion drives action, where technology serves humanity, 
                  and where every individual has access to healthcare, education, and spiritual growth.
                </p>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Seva:</strong> Selfless service to humanity</li>
                  <li>• <strong>Compassion:</strong> Acting with empathy and kindness</li>
                  <li>• <strong>Integrity:</strong> Transparent and ethical practices</li>
                  <li>• <strong>Unity:</strong> Bringing communities together</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Users className="h-6 w-6 text-trust-orange" />
                  <span>Community Reach</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Families Served</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Target className="h-6 w-6 text-trust-orange" />
                  <span>Blood Drives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Camps Organized</p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Award className="h-6 w-6 text-trust-orange" />
                  <span>Education Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Children Supported</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Leadership</h2>
          <div className="w-full flex justify-center">
            <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Srinivas Reddy Vootkuri</h3>
                <p className="text-trust-orange font-medium mb-2">Founder & Chairman</p>
                <p className="text-muted-foreground text-sm">
                  Leading the trust with over 2 years of experience in social work and community development.
                </p>
              </CardContent>
            </Card>

           
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
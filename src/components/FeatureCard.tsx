import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardContent className="p-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-4 bg-accent rounded-full group-hover:bg-accent-gradient group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
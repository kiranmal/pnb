import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Calendar, Brain } from 'lucide-react';
import drRitikaMahajan from '@/assets/dr-ritika-mahajan.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-primary-foreground/90 mb-4">
                Our Trusted Medical Team is here for you
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight">
                Get Quality
                <span className="block text-white">Neurological Treatment</span>
                <span className="block">with us</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed max-w-lg">
                At Prana Brain and Nerve Health, we provide compassionate, world-class 
                neurological treatment with innovative care and dedicated expertise.
              </p>
            </div>

            <div className="pt-4 lg:pt-6">
              <div className="text-primary-foreground/90 mb-2 text-sm lg:text-base">Book Your Appointment</div>
              <div className="text-xl lg:text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-2">
                <Calendar className="h-5 w-5 lg:h-6 lg:w-6" />
                (470) 665-6050
              </div>
            </div>

            {/* Stats
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-white/20">
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Award className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white">15+</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white">5000+</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80">Patients Treated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-2">
                  <Calendar className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs lg:text-sm text-primary-foreground/80">Emergency Care</div>
              </div>
            </div>
          </div> */}
          </div>

          {/* Right side - Dr. Ritika Mahajan Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border-4 border-white/20">
                <img 
                  src={drRitikaMahajan} 
                  alt="Dr. Ritika Mahajan - Founder & Managing Director, Prana Brain and Nerve Health Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
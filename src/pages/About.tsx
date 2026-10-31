import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import clinicImage from '@/assets/clinic-interior.jpg';
import drAditiImage from '@/assets/dr-aditi-sharma.jpg';
import drVictorImage from '@/assets/dr-victor-nguyen.jpg';
import drSerenaImage from '@/assets/dr-serena-mitchell.jpg';
import drJulianImage from '@/assets/dr-julian-bennett.jpg';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Heart, Target, Users, Award, Stethoscope } from 'lucide-react';

const About = () => {
  const doctors = [
    {
      name: 'Dr. Aditi Sharma',
      title: 'Founder & Managing Director',
      specialty: 'Neurologist',
      experience: '18+ years',
      description: 'Highly experienced Neurologist with expertise in stroke management, epilepsy, spine disorders, and advanced neuro-rehabilitation.',
      image: drAditiImage
    },
    {
      name: 'Dr. Victor Nguyen',
      title: 'Senior Neurologist',
      specialty: 'Neurologist',
      experience: '15+ years',
      description: 'Specializes in movement disorders, Parkinson\'s disease, and deep brain stimulation procedures.',
      image: drVictorImage
    },
    {
      name: 'Dr. Serena Mitchell',
      title: 'Orthopedic Surgeon',
      specialty: 'Orthopedic Surgeon',
      experience: '12+ years',
      description: 'Expert in spinal surgery and orthopedic interventions for neurological conditions.',
      image: drSerenaImage
    },
    {
      name: 'Dr. Julian Bennett',
      title: 'Cardiologist',
      specialty: 'Cardiologist', 
      experience: '14+ years',
      description: 'Focuses on cardiovascular health as it relates to neurological wellness and stroke prevention.',
      image: drJulianImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-medical/5 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              About Prana Brain & Nerve Health
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
             Dedicated to advancing neurological health through innovative care, compassionate treatment, and a strong commitment to improving patient well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Target className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  To deliver compassionate, affordable, and world-class neurological treatment 
                  through innovative care and dedicated expertise, improving patient well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-medical" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  To be the leading neurology clinic recognized for excellence in patient care, 
                  innovation in treatment, and commitment to advancing neurological health.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                  <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Our Values</h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Compassion, innovation, dedication, and excellence guide everything we do. 
                  We believe in treating each patient with respect and providing personalized care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Clinic */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">About Our Clinic</h2>
              <p className="text-lg text-muted-foreground">
                Prana Brain and Nerve Health has been instrumental in establishing itself as a trusted name 
                in comprehensive neurological care, providing expert treatment for a wide range of conditions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={clinicImage} 
                  alt="Modern neurological clinic interior with advanced medical equipment"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Excellence in Neurological Care</h3>
                <p className="text-muted-foreground">
                Our expertise spans epilepsy and migraine treatment, stroke management, movement and neuromuscular disorders and wide range of other neurological conditions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Board-certified neurologist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <span>Advanced diagnostic equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Multidisciplinary approach</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h4 className="text-xl font-semibold mb-4">Our Commitment</h4>
                <p className="text-muted-foreground mb-4">
                  Driven by a vision to deliver compassionate, affordable, and world-class treatment, 
                  we continue to lead with dedication, innovation, and a strong commitment to 
                  improving patient well-being.
                </p>
                {/* <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Doctors
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Meet Our Doctors</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our team of highly qualified doctors brings together expertise, 
              compassion, and innovation to provide exceptional neurological care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-primary/20"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg lg:text-xl font-bold text-medical mb-1">{doctor.name}</h3>
                      <p className="text-primary font-semibold text-sm lg:text-base mb-1">{doctor.title}</p>
                      <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3">
                        {doctor.specialty} • {doctor.experience}
                      </p>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{doctor.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
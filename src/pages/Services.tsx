import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import consultationImage from '@/assets/consultation.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Activity, HeartPulse, Eye, Stethoscope, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
     {
      icon: Eye,
      title: 'Headache & Migraine',
      description: 'Comprehensive headache treatment including preventive care and advanced therapies.',
      features: ['Migraine prevention', 'Nerve Block Injections','Botulinum toxin injections', 'Trigger identification', 'Lifestyle modification']
    },
    {
      icon: Brain,
      title: 'Stroke Management',
      description: 'Comprehensive stroke prevention, treatment and rehabilitation services with state-of-the-art care.',
      features: ['Stroke treatment', 'Rehabilitation therapy', 'Prevention strategies']
    },
    {
      icon: Zap,
      title: 'Epilepsy Treatment',
      description: 'Advanced epilepsy diagnosis and treatment including medication management and initiating evaluation for non-surgical or surgical options.',
      features: ['EEG monitoring', 'Medication optimization', 'Risk identification', 'Lifestyle counseling']
    },
    {
      icon: Activity,
      title: 'Spine Disorders',
      description: 'Specialized treatment for spinal conditions affecting the nervous system and mobility.',
      features: ['Pain management - Non opioid','Nerve compression','Herniated disc','Spinal stenosis']
    },
    {
      icon: HeartPulse,
      title: 'Movement Disorders',
      description: 'Expert care for Parkinson\'s disease, tremors, and other movement-related conditions.',
      features: ['Parkinson\'s treatment', 'Tremor management', 'Physical therapy']
    },
   
    {
      icon: Stethoscope,
      title: 'Dementia',
      description: 'Expert evaluation for early detection and intervention for memory problems and comprehensive management for advanced cases.',
      features: ['Mild cognitive impairment','Alzheimer’s dementia','⁠Vascular dementia','⁠Medication management','Risk stratification and supportive care']
    }
  ];

  const specializedServices = [
    {
      title: 'Diagnostic Services',
      items: ['EEG','NCS (Nerve conductions studies)','EMG (Electromyography)'
]
    },
    {
      title: 'Treatment Options',
      items: ['Medication Management', ' Botulinum toxin Injections', 'Nerve Blocks', 'Trigger point injections','Steroid injection for Carpal tunnel syndrome']

    },
    {
      title: 'Specialized Care',
      items: ['Memory Disorders', 'Neuropathy Treatment', 'Multiple sclerosis', 'Neuromuscular Disorders']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-medical/5 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={consultationImage} 
            alt="Medical consultation at Prana Brain and Nerve Health Clinic"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Neurological Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive neurological care tailored to your specific needs. 
              We offer advanced treatments and personalized care for a wide range of conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Comprehensive Care Services</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Our expert team provides specialized treatment for various neurological conditions 
              using the latest technology and evidence-based approaches.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3 lg:pb-4">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                    <service.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 lg:space-y-4 pt-0">
                  <p className="text-muted-foreground text-sm lg:text-base">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs lg:text-sm">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-medical rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Additional Services</h2>
            <p className="text-base lg:text-lg text-muted-foreground px-4">
              We offer comprehensive diagnostic and treatment options to ensure complete neurological care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {specializedServices.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-3 lg:pb-4">
                  <CardTitle className="text-lg lg:text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 lg:space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-medical rounded-full flex-shrink-0"></div>
                        <span className="text-xs lg:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Ready to Get Expert Care?</h2>
            <p className="text-base lg:text-xl mb-6 lg:mb-8 opacity-90 px-4">
              Schedule your consultation today and take the first step towards better neurological health.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                    Schedule Consultation
                  </Button>
                </Link>
                <a href="tel:+14706656050">
                  <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                    Call (470) 665-6050
                  </Button>
                </a>
                        </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

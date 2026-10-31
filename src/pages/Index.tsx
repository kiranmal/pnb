import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";
import drRitikaMahajan from "@/assets/dr-ritika-mahajan.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Expert Neurologists",
      description:
        "Board-certified neurologists with decades of combined experience",
    },
    {
      icon: Award,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and treatment equipment",
    },
    {
      icon: Users,
      title: "Comprehensive Care",
      description: "Multidisciplinary approach to neurological health",
    },
    {
      icon: Shield,
      title: "Proven Results",
      description:
        "Very high patient satisfaction rate with excellent outcomes",
    },
  ];

  const services = [
    "Headache and Chronic Migraine Care",
    "Epilepsy Treatment and monitoring",
    "Dementia",
    "Stroke management and prevention",
    "Movement disorders (eg: Parkinson’s disease, tremor etc)",
    "Neuropathy evaluation and treatment",
    "Multiple sclerosis",
    "General Neurology",
    "Neuro diagnostic testing: EEG, Nerve conduction study, EMG",
    "Therapeutic interventions: Botulinum toxin",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              Why Choose Prana Brain & Nerve Health?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We combine expertise, innovation, and compassionate care to
              deliver exceptional neurological treatment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-4 lg:p-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base lg:text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs lg:text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6">
                Comprehensive Neurological Services
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
                Our specialized team provides expert care for a wide range of
                neurological conditions, utilizing the latest treatments and
                technologies to ensure the best outcomes for our patients.
              </p>

              <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-medical flex-shrink-0" />
                    <span className="text-foreground text-sm lg:text-base">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark w-full sm:w-auto"
                >
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </Link>
            </div>

            {
              <div className="space-y-4 lg:space-y-6 order-1 lg:order-2">
                <Card className="bg-medical/5 border-medical/20">
                  <CardHeader className="pb-3 lg:pb-4">
                    <CardTitle className="flex items-center gap-2 text-medical text-base lg:text-lg">
                      <Clock className="h-4 w-4 lg:h-5 lg:w-5" />
                      Same-Day Appointments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm lg:text-base">
                      We understand that neurological concerns can't wait.
                      Same-day appointments available for urgent consultations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-3 lg:pb-4">
                    <CardTitle className="flex items-center gap-2 text-primary text-base lg:text-lg">
                      <Shield className="h-4 w-4 lg:h-5 lg:w-5" />
                      24/7 Emergency Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Emergency neurological consultations available around the
                      clock because your health can't wait.
                    </p>
                  </CardContent>
                </Card>
              </div>
            }
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-medical/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-1">
              Ritika Mahajan, M.D.
            </h2>
            <h5 className="text-2xl lg:text-xl font-bold mb-4 lg:mb-4">
              Founder & Medical Director
              <br />
              Prana Brain and Nerve Health
            </h5>
            <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-4 leading-relaxed px-4">
              Dr. Ritika Mahajan is a board-certified neurologist with extensive
              training and experience in adult neurology and clinical
              neurophysiology. After 20+ years in healthcare, driven by her
              commitment to compassionate, patient-centered, and evidence-based
              care, Dr. Mahajan founded Prana Brain and Nerve Health in 2025.
              She is dedicated to delivering comprehensive neurological care
              tailored to the unique needs of each patient.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-4 px-2">
              Dr. Mahajan earned her medical degree from Government Medical
              College in Amritsar, India, and completed her neurology residency
              and fellowship in Clinical Neurophysiology at the University of
              New Mexico, Albuquerque. Following her fellowship, Dr. Mahajan
              served at Presbyterian Hospital in Albuquerque before relocating
              to the Atlanta metro area, where she joined Piedmont Healthcare in
              2019. She is board certified by the American Board of Psychiatry
              and Neurology and is an active member of the American Academy of
              Neurology.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground mb-4 lg:mb-4 px-2">
              Dr. Mahajan’s clinical expertise includes a wide range of
              neurological conditions such as epilepsy, headaches, stroke,
              neuropathy, dementia, movement disorders, and general neurology.
              She also specializes in neuro-electrodiagnostic procedures and
              therapeutic interventions including Botox treatment for
              neurological conditions.
            </p>{" "}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              What Our Patients Say
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Read testimonials from patients who have experienced exceptional
              neurological care at Prana Brain & Nerve Health
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 lg:mb-4">
                  "Dr. Mahajan is always respectful, can answer any question you
                  ask and she takes the time to listen to whatever you have to
                  say."
                </p>
                <p className="text-xs text-muted-foreground">August 2025</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 lg:mb-4">
                  "Extremely pleasant and knowledgeable in her field. She put my
                  fears to rest. Thanks doc"
                </p>
                <p className="text-xs text-muted-foreground">July 2025</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 lg:mb-4">
                  "Dr Ritika is amazing!!!! She has taken the time to hear what
                  my concerns are and explain everything to me."
                </p>
                <p className="text-xs text-muted-foreground">June 2025</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 lg:p-6">
                <div className="flex mb-3 lg:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current"
                    >
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 lg:mb-4">
                  "She was welcoming with detailed compassion for the pain
                  presented during the test. Calmly preparing me for each step."
                </p>
                <p className="text-xs text-muted-foreground">April 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Resources */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
              Patient Resources
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Everything you need to prepare for your visit and manage your
              neurological health
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  Appointment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm lg:text-base mb-4">
                  Important details about scheduling, what to expect, and how to
                  prepare for your neurological consultation.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>What to bring to your appointment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Insurance and payment information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Preparation instructions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Office policies and procedures</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Users className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  Administrative Forms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm lg:text-base mb-4">
                  Download and complete necessary administrative forms before
                  your visit to save time at check-in.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Patient registration forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Insurance verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Financial responsibility forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>HIPAA authorization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Brain className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg lg:text-xl">
                  Clinical Forms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm lg:text-base mb-4">
                  Medical history and symptom assessment forms to help us
                  provide the best possible care.
                </p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Medical history questionnaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Symptom assessment forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Medication list template</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-medical flex-shrink-0" />
                    <span>Specialist referral forms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 lg:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
              Ready to Take Control of Your Neurological Health?
            </h2>
            <p className="text-base lg:text-xl mb-6 lg:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Don't let neurological concerns affect your quality of life.
              Schedule a consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Schedule Consultation
                </Button>
              </Link>
              <a href="tel:+14706656050">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
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

export default Index;

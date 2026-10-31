import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const Career = () => {
  const jobOpenings = [
    // {
    //   id: 1,
    //   title: "Registered Nurse",
    //   department: "Clinical Care",
    //   location: "Conyers, GA",
    //   type: "Full-time",
    //   description: "Join our dedicated nursing team providing exceptional patient care in neurological health services.",
    //   requirements: [
    //     "Valid RN license in Georgia",
    //     "2+ years clinical experience preferred",
    //     "Strong communication skills",
    //     "Experience with neurological conditions preferred"
    //   ]
    // },
    {
      id: 2,
      title: "Medical Assistant",
      department: "Clinical Support",
      location: "Conyers, GA", 
      type: "Full-time",
      description: "Support our medical team by assisting with patient care, administrative tasks, and clinical procedures.",
      requirements: [
        "Medical Assistant certification",
        "1+ years experience in medical office",
        "Proficient in medical software systems",
        "Excellent organizational skills"
      ]
    },
    {
      id: 3,
      title: "Front Desk Coordinator",
      department: "Administration",
      location: "Conyers, GA",
      type: "Full-time", 
      description: "Be the first point of contact for our patients, managing appointments and providing administrative support.",
      requirements: [
        "High school diploma or equivalent",
        "Strong customer service skills",
        "Experience with scheduling systems",
        "Professional communication skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build a rewarding career with Prana Brain & Nerve Health. We're committed to providing 
            exceptional neurological care and fostering a supportive work environment for our team.
          </p>
        </div>

        {/* Why Work With Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Collaborative Team</h3>
                <p className="text-sm text-muted-foreground">
                  Work alongside experienced professionals in a supportive environment
                </p>
              </CardContent>
            </Card>
              <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible scheduling and supportive policies for personal well-being
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous learning and professional development opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Career
          </h2>
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <a href="mailto:info@pbnhealth.com">
                      <Button variant="default" className="bg-primary hover:bg-primary/90">
                        Apply Now
                      </Button>
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* No Current Opening Section */}
        <section className="text-center bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See the Right Position?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:info@pbnhealth.com">
            <Button variant="outline" size="lg">
              Send Resume
            </Button>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
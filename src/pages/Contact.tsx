import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const emptyForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);

  const update =
    (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          first_name: form.firstName,
          last_name: form.lastName,

          from_name: `${form.firstName} ${form.lastName}`.trim(),
          from_email: form.email,
          phone: form.phone,
          subject: form.subject || "New Contact Enquiry - PBN Health",
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      alert("Your message has been sent successfully!");

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-medical/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team to schedule an appointment or learn
              more about our services. We're here to help with all your
              neurological health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  We're committed to providing you with exceptional neurological
                  care. Contact us today to schedule your consultation or to
                  learn more about our services.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          Phone: (470) 665-6050
                        </p>
                        <p className="text-muted-foreground">
                          Fax: (678) 806-5044
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-medical/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-medical" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          3641 HIGHWAY 20 SE STE B<br />
                          CONYERS GA 30013-3064
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          info@pbnhealth.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-medical/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-medical" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Office Hours
                        </h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          First Name
                        </label>
                        <Input
                          placeholder="John"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Last Name
                        </label>
                        <Input
                          placeholder="Doe"
                          value={form.lastName}
                          onChange={update("lastName")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={update("phone")}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="info@pbnhealth.com"
                        required
                        value={form.email}
                        onChange={update("email")}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        placeholder="Appointment Request"
                        value={form.subject}
                        onChange={update("subject")}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        rows={4}
                        required
                        placeholder="Please describe your symptoms or reason for consultation..."
                        value={form.message}
                        onChange={update("message")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-primary hover:bg-primary-dark"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      For urgent medical concerns, please call us at (470)
                      665-6050
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
            <p className="text-muted-foreground">
              Fast and easy ways to get the care you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Book Appointment</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Schedule your consultation online or by phone
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Schedule Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-medical" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Directly</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak with our staff immediately
                </p>
                <a href="tel:+14706656050">
                  <Button variant="outline" className="w-full">
                    (470) 665-6050
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Find directions to our clinic
                </p>
                <a href="https://maps.app.goo.gl/xpeuvfyhiwLbE7Ur8?g_st=ipc">
                  {" "}
                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

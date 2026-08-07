import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us - FAS Diagnostics | Get in Touch for Medical Testing",
  description:
    "Contact FAS Diagnostics for medical laboratory services. Book appointments, ask questions, or get information about our diagnostic testing services. Multiple locations available.",
  keywords:
    "contact FAS Diagnostics, medical laboratory contact, book appointment, diagnostic testing inquiry, laboratory services contact, medical test booking",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Idi-araba Branch",
    details: ["68 Ishaga Road", "Idi-araba" , "Lagos State, Nigeria"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+234 810 474 0000", "+234 706 779 1560",],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@fasdiagnostics.com", "feedback@fasdiagnostics.com",],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    details: ["Monday - Saturday: 9:00 am - 7:00 pm"],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-muted/10">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Get in touch with FAS Diagnostics for appointments, inquiries, or emergency testing services. We're here to
              help you with all your medical diagnostic needs.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-lg font-semibold text-primary">
                          <info.icon className="h-5 w-5 text-accent mr-3" />
                          {info.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Our Locations</h2>
              {/* Idi-araba Branch Map */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Idi-araba Branch - Ishaga Road</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3567!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0aa755f2c9%3A0x987654321!2s68%20Ishaga%20Rd%2C%20Idi-araba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FASDiagnostics Idi-araba Branch Location"
                  ></iframe>
                </div>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

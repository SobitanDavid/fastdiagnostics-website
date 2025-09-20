import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Microscope,
  TestTube,
  Heart,
  Shield,
  Battery as Bacteria,
  Bug,
  Stethoscope,
  Package,
  Users,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Laboratory Services - FAS Diagnostics | Comprehensive Testing",
  description:
    "FAS Diagnostics offers comprehensive medical laboratory services including clinical chemistry, hematology, histopathology, immunology, microbiology, parasitology, ultrasound scan, health check packages, and home services.",
  keywords:
    "clinical chemistry, hematology, histopathology, immunology, microbiology, parasitology, ultrasound scan, health check packages, outreach services, home services, medical laboratory, diagnostic testing",
}

const services = [
  {
    icon: TestTube,
    title: "Clinical Chemistry",
    description:
      "Comprehensive biochemical analysis including glucose, lipids, liver function, kidney function, cardiac markers, and electrolyte balance testing using advanced automated analyzers.",
  },
  {
    icon: Microscope,
    title: "Hematology",
    description:
      "Complete blood count, blood cell morphology, coagulation studies, and blood disorder diagnosis with state-of-the-art hematology analyzers.",
  },
  {
    icon: Shield,
    title: "Histopathology",
    description:
      "Microscopic examination of tissue samples for accurate disease diagnosis, including cancer detection, inflammatory conditions, and cellular abnormalities.",
  },
  {
    icon: Heart,
    title: "Immunology",
    description:
      "Immune system function testing, autoimmune disease markers, allergy testing, and infectious disease serology with precise immunoassay techniques.",
  },
  {
    icon: Bacteria,
    title: "Microbiology",
    description:
      "Bacterial, viral, and fungal infection identification, antibiotic sensitivity testing, and comprehensive culture-based diagnostics.",
  },
  {
    icon: Bug,
    title: "Parasitology",
    description:
      "Expert detection and identification of parasitic infections through advanced microscopic examination and specialized diagnostic methods.",
  },
  {
    icon: Stethoscope,
    title: "Ultrasound Scan",
    description:
      "High-resolution ultrasound imaging services for abdominal, pelvic, obstetric, and vascular examinations with experienced sonographers.",
  },
  {
    icon: Package,
    title: "Health Check Packages",
    description:
      "Comprehensive health screening packages tailored for different age groups and health concerns, providing complete wellness assessments.",
  },
  {
    icon: Users,
    title: "Outreach Services",
    description:
      "Community health programs and mobile laboratory services bringing quality diagnostic testing to underserved areas and organizations.",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Convenient at-home sample collection and testing services for patients who prefer the comfort and privacy of their own homes.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-muted/10">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Medical Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              FAS Diagnostics provides a comprehensive range of medical laboratory services using state-of-the-art
              equipment and advanced testing methodologies. From traditional laboratory services to modern ultrasound
              imaging and convenient home services, we ensure accurate, reliable results across all diagnostic
              specialties.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-pretty leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Services Highlight */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Core Laboratory Services</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our comprehensive laboratory testing covers all major diagnostic areas with exceptional accuracy and
                reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <TestTube className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Clinical Chemistry</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <Microscope className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Hematology</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Histopathology</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Immunology</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <Bacteria className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Microbiology</div>
              </div>
              <div className="text-center p-4 bg-accent/20 rounded-lg border">
                <Bug className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Parasitology</div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose FASDiagnostics?</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our commitment to excellence ensures you receive the highest quality diagnostic services available.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">Expert Team</div>
                <div className="text-sm font-medium text-primary mb-2">Professionals</div>
                <p className="text-xs text-muted-foreground">Skilled specialists ensuring accurate and dependable results.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm font-medium text-primary mb-2">Accuracy Rate</div>
                <p className="text-xs text-muted-foreground">Exceptional precision in all our diagnostic procedures</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2-24h</div>
                <div className="text-sm font-medium text-primary mb-2">Turnaround Time</div>
                <p className="text-xs text-muted-foreground">Fast results without compromising quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm font-medium text-primary mb-2">Trusted by Thousands</div>
                <p className="text-xs text-muted-foreground">Proven track record of delivering reliable diagnostics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need a Specific Test?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Can't find the service you're looking for? Contact us to discuss your specific testing requirements. Our
              team can help you find the right diagnostic solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Us Today
              </a>
              <a
                href="/packages"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                View Packages
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Clinical Chemistry", href: "/services" },
  { name: "Hematology", href: "/services" },
  { name: "Histopathology", href: "/services" },
  { name: "Immunology", href: "/services" },
  { name: "Microbiology", href: "/services" },
  { name: "Parasitology", href: "/services" },
  { name: "Home Services", href: "/services" },
]

const socialLinks = [
  //{ name: "Facebook", href: "https://facebook.com/fasdiagnostics", icon: Facebook },//
  { name: "Instagram", href: "https://instagram.com/fasdiagnostics", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/company/fasdiagnostics", icon: Linkedin },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-foreground border-t" style={{ backgroundColor: "#e4fee6" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">FAS Diagnostics</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Your trusted partner in medical diagnostics. We provide comprehensive laboratory testing services with a
              commitment to accuracy, speed, and professional excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Idi-araba Branch</p>
                  <p>68 Ishaga Road</p>
                  <p>Idi-araba, Surulere, Lagos State</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+234 810 474 0000</p>
                  <p>+234 706 779 1560</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>info@fasdiagnostics.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Monday - Saturday: 9:00am to 7:00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>&copy; {currentYear} FASDiagnostics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

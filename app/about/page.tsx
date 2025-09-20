import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us - FAS Diagnostics | Professional Medical Laboratory",
  description:
    "Learn about FAS Diagnostics, a leading medical laboratory providing comprehensive diagnostic services. Our experienced team and state-of-the-art facilities ensure accurate, reliable results for healthcare professionals and patients.",
  keywords:
    "about FAS Diagnostics, medical laboratory team, diagnostic services, healthcare professionals, laboratory expertise, medical testing facility, clinical laboratory services",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-muted/20">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">About FAS Diagnostics</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              FAS Diagnostics stands as a beacon of excellence in medical laboratory services, combining cutting-edge
              technology with unwavering commitment to accuracy and reliability. Our mission is to provide healthcare
              professionals and patients with the most precise diagnostic information, enabling better health outcomes
              and informed medical decisions.
            </p>
          </div>
        </section>

        {/* Main Content with Image Text Wrapping */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* First Section - Image Left */}
            <div className="mb-16">
              <div className="float-left mr-8 mb-6 w-full sm:w-80 lg:w-96">
                <Image
                  src="https://res.cloudinary.com/djulyfaml/image/upload/v1758102043/front-view-medical-control-covid19-concept_sxvliy.jpg"
                  alt="Professional medical laboratory staff working with advanced diagnostic equipment"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-72"
                  priority
                />
              </div>
              <div className="text-foreground leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Our Professional Team</h2>
                <p className="mb-4 text-pretty">
                  At the heart of FASDiagnostics lies our exceptional team of medical professionals, laboratory
                  technicians, and support staff. Each member brings years of specialized experience and dedication to
                  maintaining the highest standards of laboratory practice. Our pathologists, clinical laboratory
                  scientists, and medical technologists work collaboratively to ensure every test result meets our
                  rigorous quality standards.
                </p>
                <p className="mb-4 text-pretty">
                  We believe that excellence in diagnostics begins with excellence in people. Our team undergoes
                  continuous professional development and training to stay current with the latest advances in
                  laboratory medicine. This commitment to ongoing education ensures that we can offer the most advanced
                  testing methodologies and maintain our position at the forefront of diagnostic innovation.
                </p>
                <p className="text-pretty">
                  From routine blood work to complex molecular diagnostics, our professionals approach each test with
                  the same level of precision and care. We understand that behind every sample is a person seeking
                  answers, and we take that responsibility seriously in everything we do.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>

            {/* Second Section - Image Right */}
            <div className="mb-16">
              <div className="float-right ml-8 mb-6 w-full sm:w-80 lg:w-96">
                <Image
                  src="https://res.cloudinary.com/djulyfaml/image/upload/v1758179602/medical-microbiology-hospital-laboratory-equipped-with-medicine-biological-micropipette_nthw8o.jpg"
                  alt="State-of-the-art medical laboratory facility with modern equipment and clean environment"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-72"
                />
              </div>
              <div className="text-foreground leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">State-of-the-Art Facilities</h2>
                <p className="mb-4 text-pretty">
                  Our laboratory facilities represent the pinnacle of modern diagnostic infrastructure. Designed with
                  both efficiency and safety in mind, our spaces incorporate the latest in laboratory design principles,
                  ensuring optimal workflow and maintaining the highest standards of biosafety and quality control.
                </p>
                <p className="mb-4 text-pretty">
                  Every aspect of our facility has been carefully planned to support accurate testing and reliable
                  results. We maintain an environment that preserves sample integrity and enables precise analysis. Our laboratories
                  are equipped with advanced automation systems that reduce human error while increasing throughput and
                  consistency.
                </p>
                <p className="text-pretty">
                  We maintain multiple specialized departments including clinical chemistry, hematology, histopathology,
                  immunology, microbiology, and parasitology. Each department is equipped with cutting-edge
                  instrumentation and staffed by specialists who understand the unique requirements of their respective
                  fields.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>

            {/* Third Section - Image Left */}
            <div>
              <div className="float-left mr-8 mb-6 w-full sm:w-80 lg:w-96">
                <Image
                  src="https://res.cloudinary.com/djulyfaml/image/upload/v1758181064/front-view-medical-control-covid19-concept_1_ohvlsj.jpg"
                  alt="Quality control processes in medical laboratory testing with precision instruments"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-72"
                />
              </div>
              <div className="text-foreground leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Commitment to Quality</h2>
                <p className="mb-4 text-pretty">
                  Quality is not just a goal at FAS Diagnostics, it is the foundation upon which we build every aspect of
                  our operations. Our comprehensive quality management system encompasses every step of the testing
                  process, from sample collection and handling to result reporting and follow-up.
                </p>
                <p className="mb-4 text-pretty">
                  We participate in rigorous external quality assurance programs and maintain accreditation with leading
                  laboratory standards organizations. Our internal quality control measures include regular calibration
                  of equipment, proficiency testing, and continuous monitoring of all analytical processes. This
                  multi-layered approach to quality ensures that our results are not only accurate but also reproducible
                  and reliable.
                </p>
                <p className="text-pretty">
                  Our commitment extends beyond technical excellence to encompass customer service, turnaround times,
                  and clear communication. We understand that timely, accurate results can be critical to patient care,
                  and we work diligently to deliver the information healthcare providers need when they need it most.
                </p>
              </div>
              <div className="clear-both"></div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Mission</h3>
                <p className="text-muted-foreground text-pretty">
                  To provide exceptional diagnostic services that empower healthcare professionals with accurate,
                  timely, and reliable laboratory results, ultimately contributing to improved patient outcomes and
                  community health.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Excellence in every test, every time</li>
                  <li>• Integrity in all our professional relationships</li>
                  <li>• Innovation through continuous improvement</li>
                  <li>• Compassion for those we serve</li>
                  <li>• Reliability you can trust</li>
                  <li>• We bring quality diagnostics closer to the people, physically and financially.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

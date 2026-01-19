import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Heart, Brain, Shield, Baby, Users, Zap, Activity, TestTube, Stethoscope } from "lucide-react"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Healthcare Packages - FASDiagnostics | Comprehensive Testing Packages",
  description:
    "Explore FASDiagnostics comprehensive healthcare packages including basic, standard, and gold health checks, hormone profiles, STD screenings, and specialized diagnostic packages.",
  keywords:
    "healthcare packages, health check packages, medical test packages, hormone profile, STD screening, pre-employment screening, cardiovascular wellness, FASDiagnostics packages",
}

const packages = [
  {
    icon: Shield,
    name: "Basic Health Check",
    description: "Essential health screening for male & female",
    price: "₦73,000",
    featured: true,
    tests: [
      "Full Blood Count",
      "ESR",
      "Fasting Plasma Glucose",
      "Physical Examination",
      "Stool Analysis",
      "H.pylori (Stool)",
      "Liver Function Tests (SGPT, SGOT, ALP, Bilirubin)",
      "Lipid Profile (Total Cholesterol, Triglycerides)",
      "Renal Function Test (Urea, Creatinine, eGFR)",
      "Urine Microscopy & Urinalysis",
      "Hepatitis B & C Viral Antigen",
      "HIV I & II",
      "Thyroid Function Tests (Free T4, TSH)",
    ],
  },
  {
    icon: Heart,
    name: "Standard Health Check",
    description: "Comprehensive health assessment for male & female",
    price: "₦100,000",
    featured: true,
    tests: [
      "Full Blood Count & ESR",
      "Fasting Plasma Glucose",
      "Physical Examination",
      "Stool Analysis & H.pylori",
      "Complete Liver Function Tests",
      "Extended Lipid Profile (LDL-C, HDL-C, HDL/LDL Ratio)",
      "Complete Renal Function Test (Sodium, Chloride, Potassium)",
      "Urine Microscopy & Urinalysis",
      "Hepatitis B & C, HIV I & II",
      "VDRL (Syphilis Test)",
    ],
  },
  {
    icon: Brain,
    name: "Gold Health Check (Male)",
    description: "Premium comprehensive health screening for men",
    price: "₦175,000",
    featured: true,
    tests: [
      "Full Blood Count & ESR",
      "Fasting & 2Hr Post Prandial Glucose",
      "HbA1C",
      "Complete Liver Function Tests (including Total Protein, Albumin)",
      "Complete Lipid Profile",
      "Complete Renal Function Test",
      "Thyroid Function Tests (Free T3, T4, TSH)",
      "PSA - Prostate Specific Antigen",
      "Phosphorus, Calcium, Uric Acid",
      "Physical Examination",
      "Stool Analysis & H.pylori",
      "Urine MCS & Urinalysis",
      "Hepatitis B & C, HIV I & II, VDRL",
    ],
  },
  {
    icon: Users,
    name: "Gold Health Check (Female)",
    description: "Premium comprehensive health screening for women",
    price: "₦190,000",
    featured: true,
    tests: [
      "Full Blood Count & ESR",
      "Fasting & 2Hr Post Prandial Glucose",
      "HbA1C",
      "Complete Liver Function Tests",
      "Complete Lipid Profile",
      "Complete Renal Function Test",
      "Thyroid Function Tests (Free T3, T4, TSH)",
      "Phosphorus, Calcium, Uric Acid",
      "Physical Examination",
      "Stool Analysis & H.pylori",
      "Urine MCS & Urinalysis",
      "Hepatitis B & C, HIV I & II, VDRL",
      "CA-125 (Ovarian Cancer Marker)",
      "HVS MCS (Special)",
      "Pap Smear (Special)",
    ],
  },
  {
    icon: TestTube,
    name: "Female Hormone Profile 1",
    description: "Basic female hormone assessment",
    price: "₦35,000",
    featured: false,
    tests: ["LH (Luteinizing Hormone)", "FSH (Follicle Stimulating Hormone)", "PROLACTIN"],
  },
  {
    icon: TestTube,
    name: "Female Hormone Profile 2",
    description: "Extended female hormone assessment",
    price: "₦45,000",
    featured: false,
    tests: ["LH (Luteinizing Hormone)", "FSH (Follicle Stimulating Hormone)", "PROLACTIN", "PROGESTERONE"],
  },
  {
    icon: TestTube,
    name: "Female Hormone Profile 3",
    description: "Comprehensive female hormone assessment",
    price: "₦57,000",
    featured: false,
    tests: ["LH (Luteinizing Hormone)", "FSH (Follicle Stimulating Hormone)", "PROLACTIN", "THYROXINE T4"],
  },
  {
    icon: Activity,
    name: "Male Hormone Profile",
    description: "Comprehensive male hormone assessment",
    price: "₦45,000",
    featured: false,
    tests: ["LH (Luteinizing Hormone)", "FSH (Follicle Stimulating Hormone)", "PROLACTIN", "TESTOSTERONE"],
  },
  {
    icon: Heart,
    name: "Cardiovascular Wellness",
    description: "Basic cardiovascular health assessment",
    price: "₦40,000",
    featured: false,
    tests: [
      "HDL-C (Good Cholesterol)",
      "HbA1C (Diabetes Marker)",
      "Triglycerides Serum",
      "LDL-C (Bad Cholesterol)",
      "C-Reactive Protein (CRP)",
    ],
  },
  {
    icon: Heart,
    name: "Cardiovascular Wellness Plus",
    description: "Comprehensive cardiovascular health assessment",
    price: "₦45,000",
    featured: false,
    tests: [
      "HDL-C (Good Cholesterol)",
      "HbA1C (Diabetes Marker)",
      "Triglycerides Serum",
      "LDL-C (Bad Cholesterol)",
      "C-Reactive Protein (CRP)",
      "Total Cholesterol",
      "HDL/LDL Ratio",
    ],
  },
  {
    icon: Shield,
    name: "Basic STD Screening",
    description: "Essential sexually transmitted disease screening",
    price: "₦16,000",
    featured: false,
    tests: ["HIV Testing", "VDRL (Syphilis Check)", "HBsAg (Hepatitis B Check)", "Hepatitis C Check"],
  },
  {
    icon: Shield,
    name: "Standard STD Screening",
    description: "Comprehensive sexually transmitted disease screening",
    price: "₦70,000",
    featured: false,
    tests: [
      "HIV Testing",
      "VDRL (Syphilis Check)",
      "HBsAg (Hepatitis B Check)",
      "Hepatitis C Check",
      "Urinalysis/Urine MCS",
      "Chlamydia Antigen Test",
      "Gonorrhea Test",
      "HVS Microscopy (Special)",
    ],
  },
  {
    icon: Baby,
    name: "Basic Pre-Wedding Check",
    description: "Essential pre-marital health screening",
    price: "₦24,000",
    featured: false,
    tests: [
      "Pregnancy Test (Special)",
      "HIV Testing",
      "Glucose (Random)",
      "VDRL (Syphilis Check)",
      "ESR",
      "HBsAg (Hepatitis B Check)",
      "Hepatitis C",
      "Urinalysis",
      "Physical Examination",
    ],
  },
  {
    icon: Baby,
    name: "Standard Pre-Wedding Check",
    description: "Comprehensive pre-marital health screening",
    price: "₦45,000",
    featured: false,
    tests: [
      "HIV Testing",
      "VDRL (Syphilis Check)",
      "HBsAg (Hepatitis B Check)",
      "Hepatitis C Check",
      "Urinalysis/Urine MCS",
      "Chlamydia Antigen Test",
      "Gonorrhea Test",
      "HVS Microscopy (Special)",
      "Pregnancy Test (Special)",
    ],
  },
  {
    icon: Stethoscope,
    name: "Pre-Employment Screening",
    description: "Standard employment health screening",
    price: "₦18,000",
    featured: false,
    tests: [
      "HIV Testing",
      "HBsAg (Hepatitis B Test)",
      "Drug of Abuse Testing (Optional)",
      "Blood Group",
      "Genotype Test",
      "Urinalysis",
      "Physical Examination",
    ],
  },
  {
    icon: Stethoscope,
    name: "Driver/Security Personnel Screening",
    description: "Specialized screening for drivers and security staff",
    price: "₦18,000",
    featured: false,
    tests: [
      "HIV Testing",
      "HBsAg (Hepatitis B Test)",
      "Drug of Abuse Testing (Optional)",
      "Blood Group",
      "Genotype",
      "Physical Examination",
      "Urinalysis",
      "Pregnancy Test (Special)",
    ],
  },
  {
    icon: Users,
    name: "Nanny/Domestic Staff Screening",
    description: "Health screening for domestic workers",
    price: "₦23,000",
    featured: false,
    tests: [
      "Full Blood Count",
      "HIV 1 & 2 (Rapid)",
      "Hepatitis B Surface Antigen",
      "Blood Glucose",
      "Blood Group",
      "Blood Genotype",
      "Hepatitis C Viral Antigen",
      "Pregnancy Test (Special)",
    ],
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="bg-muted/10">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">FAS Healthcare Packages</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed mb-4">
              Choose from our comprehensive healthcare packages designed to meet your specific health needs. Each
              package combines multiple tests at an affordable price, providing complete diagnostic coverage for optimal
              health monitoring.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    pkg.featured ? "ring-2 ring-accent shadow-lg" : "shadow-md"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                      <pkg.icon className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-primary mb-2">{pkg.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <Collapsible>
                      <div className="space-y-2 mb-4">
                        {pkg.tests.slice(0, 4).map((test, testIndex) => (
                          <div key={testIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                            {test}
                          </div>
                        ))}
                      </div>
                      {pkg.tests.length > 4 && (
                        <>
                          <CollapsibleContent className="space-y-2 mb-4">
                            {pkg.tests.slice(4).map((test, testIndex) => (
                              <div key={testIndex + 4} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                                {test}
                              </div>
                            ))}
                          </CollapsibleContent>
                          <CollapsibleTrigger className="flex items-center justify-center w-full text-sm text-accent hover:text-accent/80 font-medium">
                            <span className="mr-1">
                              {pkg.tests.length > 4 ? `View ${pkg.tests.length - 4} more tests` : "Show less"}
                            </span>
                            <ChevronDown className="h-4 w-4" />
                          </CollapsibleTrigger>
                        </>
                      )}
                    </Collapsible>
                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Book This Package
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Package Benefits</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our healthcare packages offer significant savings compared to individual tests while providing
                comprehensive health insights. <strong>Prices do not include optional/special tests.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive packages at affordable prices with transparent pricing
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Comprehensive</h3>
                <p className="text-sm text-muted-foreground">
                  Complete health assessment covering all major health parameters
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Professional</h3>
                <p className="text-sm text-muted-foreground">
                  RC NUMBER: 7149300 - Licensed and certified diagnostic center
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need a Custom Package?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Don't see a package that fits your needs? Contact us to create a personalized healthcare package tailored
              to your specific requirements and health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                View Individual Tests
              </a>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                <strong>Contact Information:</strong>
              </p>
              <p>📞 +234 810 474 0000 | +234 706 779 1560</p>
              <p>🌐 fasdiagnostics.com | 📧 info@fasdiagnostics.com</p>
              <p>📍 28, Awanatu Street, Papa Ajao, Mushin, Lagos State
                <br></br>
                68, Ishaga road, Idi-araba, Surulere, Lagos State
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

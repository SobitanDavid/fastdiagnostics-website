import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Quality Testing",
    description: "State-of-the-art equipment and rigorous quality control ensure accurate results every time.",
  },
  {
    icon: Clock,
    title: "Quick Results",
    description: "Fast turnaround times without compromising accuracy. Get your results when you need them.",
  },
  {
    icon: Users,
    title: "Trusted Professionals",
    description: "Our experienced team of medical professionals provides reliable diagnostic services you can trust.",
  },
]

export default function QuickIntro() {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">Welcome to FAS Diagnostics</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Your trusted partner in medical diagnostics. We provide comprehensive laboratory testing services with a
            commitment to accuracy, speed, and professional excellence. Our advanced facilities and experienced team
            ensure you receive the highest quality diagnostic services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <highlight.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground text-pretty">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

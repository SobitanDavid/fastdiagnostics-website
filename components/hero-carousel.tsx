"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/djulyfaml/image/upload/v1751966775/Lab_Home_Page_wpq52h.jpg",
    title: "Advanced Medical Diagnostics",
    subtitle: "Precision Testing for Better Health Outcomes",
    cta: "Book a Test",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/djulyfaml/image/upload/v1752046643/diabetic-woman-wearing-glucose-patch-sensor-min_g3xybe.jpg",
    title: "Home Sample Collection",
    subtitle: "Healthcare that comes to you",
    cta: "Learn More",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/djulyfaml/image/upload/v1752046981/black-woman-doing-fitness-home-min_mvq5a2.jpg",
    title: "Fast & Accurate Results",
    subtitle: "Get Your Test Results Quickly and Reliably",
    cta: "View Services",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white max-w-2xl mx-auto px-4 py-6 bg-black/40 rounded-lg backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6 text-pretty opacity-90 drop-shadow-md">{slide.subtitle}</p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
              >
                <Link href="/contact">{slide.cta}</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white border border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

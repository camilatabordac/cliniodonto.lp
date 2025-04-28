"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  isVale?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Funcionária Vale",
    content:
      "Excelente atendimento! Fiz tratamento de canal e foi muito menos doloroso do que eu esperava. A equipe é muito atenciosa e o ambiente é super acolhedor.",
    rating: 5,
    isVale: true,
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Paciente",
    content:
      "Minha experiência com o clareamento dental foi incrível. Resultado muito natural e o procedimento foi super tranquilo. Recomendo a todos!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariana Santos",
    role: "Dependente Vale",
    content:
      "Meus filhos adoram ir à CliniOdonto. Os profissionais são muito pacientes e carinhosos com as crianças. O ambiente é leve e descontraído.",
    rating: 4,
    isVale: true,
  },
  {
    id: 4,
    name: "Roberto Almeida",
    role: "Funcionário Vale",
    content:
      "Estou fazendo ortodontia e estou muito satisfeito com o acompanhamento. Os profissionais são muito qualificados e o preço com desconto Vale é excelente.",
    rating: 5,
    isVale: true,
  },
  {
    id: 5,
    name: "Rafael Chaves",
    role: "Paciente",
    content:
      "Super recomendo, são grandes profissionais tanto o Dr. Gustavo como a Dr. Ivana",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg bg-white p-8 shadow-sm border">
        {testimonials[current].isVale && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Convênio Vale
          </div>
        )}
        <div className="flex justify-center mb-4">
          {Array(testimonials[current].rating)
            .fill(0)
            .map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
        </div>
        <blockquote className="text-lg italic text-gray-700 mb-6">"{testimonials[current].content}"</blockquote>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
            <div className="text-sm text-gray-500">{testimonials[current].role}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        {testimonials.map((_, i) => (
          <Button
            key={i}
            variant="outline"
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${i === current ? "bg-blue-600 border-blue-600" : ""}`}
            onClick={() => {
              setCurrent(i)
              setAutoplay(false)
            }}
          >
            <span className="sr-only">Depoimento {i + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próximo</span>
        </Button>
      </div>
    </div>
  )
}

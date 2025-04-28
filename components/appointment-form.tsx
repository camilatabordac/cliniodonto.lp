"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, CheckCircle2 } from "lucide-react"

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulação de envio do formulário
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Agendamento Recebido!</h3>
        <p className="text-gray-500">
          Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve para confirmar sua consulta.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
          Fazer novo agendamento
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" placeholder="Digite seu nome completo" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" placeholder="(00) 00000-0000" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="procedure">Procedimento de Interesse</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um procedimento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="canal">Tratamento de Canal</SelectItem>
            <SelectItem value="limpeza">Limpeza</SelectItem>
            <SelectItem value="clareamento">Clareamento</SelectItem>
            <SelectItem value="ortodontia">Ortodontia</SelectItem>
            <SelectItem value="clinico">Clínico Geral</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Data Preferencial</Label>
        <div className="flex items-center border rounded-md">
          <Input id="date" type="date" className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" required />
          <Calendar className="h-4 w-4 mr-3 text-gray-400" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem (opcional)</Label>
        <Textarea id="message" placeholder="Descreva sua necessidade ou dúvida" />
      </div>
      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="vale" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="vale" className="text-sm font-medium leading-none">
            Sou funcionário ou dependente da Vale
          </Label>
        </div>
      </div>
      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
        Solicitar Agendamento
      </Button>
    </form>
  )
}

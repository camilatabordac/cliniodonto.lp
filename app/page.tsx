"use client"

import Link from "next/link"
import {
  ChevronRight,
  Phone,
  MapPin,
  CheckCircle2,
  Users,
  Sparkles,
  SmileIcon as Tooth,
  Stethoscope,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProcedureCard from "@/components/procedure-card"
import ValeHighlight from "@/components/vale-highlight"
import TestimonialSlider from "@/components/testimonial-slider"

const whatsappLink =
  "https://wa.me/+5594981067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img src="/cliniodonto-logo.png" alt="Logo CliniOdonto" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-teal-600">CliniOdonto</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#sobre" className="text-sm font-bold hover:text-teal-600 transition-colors">
              Sobre
            </Link>
            <Link href="#procedimentos" className="text-sm font-bold hover:text-teal-600 transition-colors">
              Procedimentos
            </Link>
            <Link href="#vale" className="text-sm font-bold hover:text-teal-600 transition-colors">
              Vale
            </Link>
            <Link href="#depoimentos" className="text-sm font-bold hover:text-teal-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#contato" className="text-sm font-bold hover:text-teal-600 transition-colors">
              Contato
            </Link>
          </nav>
          <Button className="bg-teal-600 hover:bg-teal-700" onClick={() => window.open(whatsappLink, "_blank")}>
            <Phone className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Redesenhada para ser mais atraente */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-800/90 z-10"></div>
          

          <div className="container relative z-20 px-4 py-10 md:py-16 lg:py-20 md:px-6 text-white">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium border border-blue-400/30">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-visible">
                    <img src="/vale-logo-new.png" alt="Vale" className="h-5 w-auto" />
                  </div>
                  Parceiro Oficial Vale
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Seu sorriso merece o melhor cuidado
                </h1>
                <p className="max-w-[600px] text-white/80 text-lg md:text-xl">
                  A CliniOdonto oferece tratamentos odontológicos de excelência com condições especiais para
                  <span className="font-bold text-blue-300"> funcionários e dependentes da Vale</span> além 
                  de atendimento para pacientes particulares.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                  >
                    Benefícios Vale <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Consulta
                  </Button>
                </div>

                <div className="flex items-center pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=${i}`}
                          alt={`Paciente ${i}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-white/80">Mais de 500 pacientes satisfeitos</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 opacity-70 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden bg-white p-1">
                  <img src="/equipe-cliniodonto.png" alt="Equipe CliniOdonto" className="w-full h-auto rounded-lg" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-bold">Convênio Vale</p>
                  <p className="text-sm">Benefícios exclusivos</p>
                </div>

                {/* Logo Vale em destaque */}
                <div className="absolute -top-8 -left-8 h-28 w-28 rounded-full bg-white shadow-xl flex items-center justify-center p-3 overflow-visible">
                  <img src="/vale-logo-new.png" alt="Vale" className="h-18 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vale Highlight - Nova seção com grande destaque */}
        <section id="vale" className="w-full py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <ValeHighlight />
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Sobre Nós</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Conheça a CliniOdonto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos uma clínica odontológica completa, focada em oferecer tratamentos de qualidade com profissionais
                  altamente qualificados. Nossa missão é proporcionar saúde bucal e sorrisos bonitos para todos os
                  nossos pacientes.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50 hover:shadow-md transition-shadow">
                  <Users className="h-10 w-10 text-teal-600" />
                  <h3 className="text-xl font-bold">Equipe Especializada</h3>
                  <p className="text-gray-500 text-center">
                    Profissionais com ampla experiência e formação nas melhores instituições.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50 hover:shadow-md transition-shadow">
                  <Sparkles className="h-10 w-10 text-teal-600" />
                  <h3 className="text-xl font-bold">Tecnologia Avançada</h3>
                  <p className="text-gray-500 text-center">
                    Equipamentos modernos para diagnósticos precisos e tratamentos eficientes.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="h-10 w-10 text-teal-600" />
                  <h3 className="text-xl font-bold">Atendimento Humanizado</h3>
                  <p className="text-gray-500 text-center">
                    Cuidado personalizado para garantir conforto e satisfação dos pacientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedimentos Section */}
        <section id="procedimentos" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Procedimentos Odontológicos
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da sua saúde bucal.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <ProcedureCard
                  title="Tratamento de Canal"
                  description="Procedimento para remover a infecção da polpa do dente e preservar a estrutura dental."
                  icon={<Tooth className="h-10 w-10 text-teal-600" />}
                />
                <ProcedureCard
                  title="Limpeza"
                  description="Remoção de placa bacteriana e tártaro para prevenir cáries e doenças gengivais."
                  icon={<Sparkles className="h-10 w-10 text-teal-600" />}
                />
                <ProcedureCard
                  title="Clareamento"
                  description="Técnicas avançadas para deixar seus dentes mais brancos e seu sorriso mais bonito."
                  icon={<Sparkles className="h-10 w-10 text-teal-600" />}
                />
                <ProcedureCard
                  title="Ortodontia"
                  description="Correção do posicionamento dos dentes e maxilares para melhorar a função e estética."
                  icon={<Tooth className="h-10 w-10 text-teal-600" />}
                />
                <ProcedureCard
                  title="Clínico Geral"
                  description="Diagnóstico, prevenção e tratamento das principais doenças bucais."
                  icon={<Stethoscope className="h-10 w-10 text-teal-600" />}
                />
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors relative overflow-hidden">
                  {/* Logo Vale em destaque no card */}
                  <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-white flex items-center justify-center p-2 overflow-visible">
                    <img src="/vale-logo-new.png" alt="Vale" className="h-11 w-auto ml-1 mb-1" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">Funcionário Vale?</h3>
                  <p className="text-white/90 mb-4">Você tem benefícios especiais em todos os procedimentos!</p>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-blue-600 text-black border-0"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  O que nossos pacientes dizem
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira a experiência de quem já passou pela CliniOdonto.
                </p>
              </div>
              <div className="w-full max-w-4xl mt-8">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Destaque para Vale */}
        <section className="w-full py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Funcionário ou dependente Vale?
                  </h2>
                </div>
                <p className="text-white/90 md:text-xl">
                  Agende sua consulta hoje mesmo e aproveite todos os benefícios exclusivos do nosso convênio.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Agendar Consulta <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 relative">
                  <div className="absolute -top-8 -right-8 h-20 w-20 rounded-full bg-white shadow-xl flex items-center justify-center p-2 overflow-visible">
                    <img src="/vale-logo-new.png" alt="Vale" className="h-14 w-auto" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Parceria Oficial</h3>
                      <p className="text-white/80">Convênio exclusivo para você</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                      <span>Benefícios especiais em todos os procedimentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                      <span>Primeira avaliação gratuita</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                      <span>Condições especiais de pagamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-300 mt-0.5" />
                      <span>Atendimento prioritário</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="w-full border-t bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/vale-logo-blue.png" alt="Logo Vale" className="h-10 w-auto" />
                <h3 className="text-xl font-bold">CliniOdonto</h3>
              </div>
              <p className="text-gray-400">Cuidando do seu sorriso com excelência e tecnologia.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tratamento de Canal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Limpeza
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Clareamento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Ortodontia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Clínico Geral
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Links Úteis</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Convênios
                  </Link>
                </li>
                <li>
                  <Link href="#vale" className="text-gray-400 hover:text-white">
                    Parceria Vale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                  <span className="text-gray-400">Rua F, número 108 - Bairro União, Parauapebas - PA</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                  <span className="text-gray-400">(94) 98106-7623</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span>Parceria oficial</span>
              <div className="h-8 w-8 rounded-full bg-white shadow-xl flex items-center justify-center p-1 overflow-visible">
                <img src="/vale-logo-blue.png" alt="Vale" className="h-6 w-auto" />
              </div>
            </div>
            <p>© 2025 CliniOdonto. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

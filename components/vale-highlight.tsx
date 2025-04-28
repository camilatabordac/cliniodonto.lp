"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/+5594981067623?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"

export default function ValeHighlight() {
  return (
    <div className="container px-4 md:px-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-800 to-blue-900 p-1">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

        <div className="relative rounded-xl overflow-hidden bg-blue-900/50 p-8 md:p-12">
          <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 border border-blue-500/30">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Parceria Exclusiva
              </div>

              <div className="flex items-center gap-4">
                <div className="h-32 w-32 rounded-full bg-white shadow-xl flex items-center justify-center p-4 overflow-visible">
                  <img src="/vale-logo-new.png" alt="Vale" className="h-22 w-auto" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Convênio Vale</h2>
              </div>

              <p className="text-xl text-blue-100">
                A CliniOdonto tem orgulho de ser parceira oficial da Vale, oferecendo condições especiais para
                funcionários e dependentes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700">
                  <h3 className="font-bold text-xl mb-2 text-blue-100">Benefícios Exclusivos</h3>
                  <p className="text-blue-200">Vantagens especiais nos procedimentos odontológicos.</p>
                </div>
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700">
                  <h3 className="font-bold text-xl mb-2 text-blue-100">Atendimento Personalizado</h3>
                  <p className="text-blue-200">Agendamento facilitado e horários exclusivos.</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Agendar com benefício Vale
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-70 blur-sm"></div>
              <div className="relative bg-blue-800/50 rounded-xl p-6 border border-blue-600/50">
                <h3 className="text-2xl font-bold mb-4 text-center text-white">Benefícios Exclusivos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Primeira Avaliação Gratuita</h4>
                      <p className="text-blue-200">Consulta inicial sem custo para diagnóstico completo.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Benefícios em Todos os Procedimentos</h4>
                      <p className="text-blue-200">Vantagens especiais em todos os tratamentos odontológicos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Condições Especiais de Pagamento</h4>
                      <p className="text-blue-200">
                        Parcelamento facilitado e opções exclusivas para funcionários Vale.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Extensivo a Dependentes</h4>
                      <p className="text-blue-200">Todos os benefícios são válidos para familiares diretos.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-700/50 rounded-lg border border-blue-600/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">Limpeza</span>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-200">Canal</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-200">Clareamento Dental</span>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-200">Clínico Geral</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Ortodontia (Aparelho)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-200"></span>
                    </div>
                  </div>
                </div>

                {/* Logo Vale em destaque */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center p-3 overflow-visible">
                  <img src="/vale-logo-new.png" alt="Vale" className="h-16 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

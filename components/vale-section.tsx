import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ValeSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Parceria Vale</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Condições especiais para funcionários e dependentes da Vale
          </h2>
          <p className="text-white/90 md:text-xl">
            A CliniOdonto tem orgulho de ser parceira da Vale, oferecendo benefícios exclusivos para você e sua família.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5" />
              <span>Descontos especiais em todos os procedimentos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5" />
              <span>Facilidade de pagamento e parcelamento</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5" />
              <span>Prioridade no agendamento de consultas</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-blue-200 mt-0.5" />
              <span>Primeira avaliação gratuita</span>
            </li>
          </ul>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Saiba mais sobre a parceria
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-700">Funcionário Vale</h3>
              <p className="text-gray-500">Apresente sua identificação e aproveite os benefícios</p>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Limpeza + Avaliação</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 line-through">R$ 150,00</span>
                  <span className="text-2xl font-bold text-blue-700">R$ 99,00</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Clareamento Dental</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 line-through">R$ 600,00</span>
                  <span className="text-2xl font-bold text-blue-700">R$ 450,00</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Ortodontia (Aparelho)</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 line-through">R$ 250,00/mês</span>
                  <span className="text-2xl font-bold text-blue-700">R$ 180,00/mês</span>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-blue-700 hover:bg-blue-800">Agendar com desconto Vale</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

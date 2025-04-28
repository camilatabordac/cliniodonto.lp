import type { ReactNode } from "react"

interface ProcedureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function ProcedureCard({ title, description, icon }: ProcedureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
      <div className="mb-4 bg-teal-50 p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}

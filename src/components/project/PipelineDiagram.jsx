import { ArrowRight, ArrowDown } from 'lucide-react'
import { DiagramNode } from './DiagramNode'

export function PipelineDiagram({ nodes }) {
  return (
    <div
      className="flex flex-col items-center gap-2 overflow-x-auto rounded-2xl border border-border bg-bg/60 p-6 sm:flex-row sm:flex-wrap sm:justify-center"
      role="img"
      aria-label={`Architecture flow: ${nodes.map((n) => n.label).join(' to ')}`}
    >
      {nodes.map((node, i) => (
        <div key={node.id} className="flex flex-col items-center gap-2 sm:flex-row">
          <DiagramNode node={node} index={i} />
          {i < nodes.length - 1 && (
            <span className="text-border" aria-hidden="true">
              <ArrowDown size={18} className="sm:hidden" />
              <ArrowRight size={18} className="hidden sm:block" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

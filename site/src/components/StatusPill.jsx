export default function StatusPill({ color = 'blue', children }) {
  const variants = {
    blue:   'bg-is-primary/10 text-is-primary border-is-primary/30',
    coral:  'bg-is-alert/10 text-is-alert border-is-alert/30',
    gold:   'bg-is-warning/10 text-is-warning border-is-warning/30',
    dim:    'bg-transparent text-is-dim border-is-border',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs uppercase tracking-widest ${variants[color] ?? variants.dim}`}>
      {color !== 'dim' && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          color === 'blue'  ? 'bg-is-primary' :
          color === 'coral' ? 'bg-is-alert'   :
                              'bg-is-warning'
        }`} />
      )}
      {children}
    </span>
  )
}

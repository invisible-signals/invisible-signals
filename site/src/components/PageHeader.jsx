import StatusPill from './StatusPill.jsx'

export default function PageHeader({ navLabel, pillColor, pillText, title, description, children }) {
  return (
    <div className="border-b border-is-border pb-10 mb-12">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="is-label">{navLabel}</span>
        <StatusPill color={pillColor}>{pillText}</StatusPill>
      </div>
      <h1 className="font-mono text-4xl md:text-5xl font-semibold uppercase text-is-text mb-4">
        {title}
      </h1>
      <p className="font-body text-base text-is-secondary leading-relaxed max-w-2xl">
        {description}
      </p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}

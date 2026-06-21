export default function TagChip({ tag }) {
  return (
    <span className="border border-is-border px-2 py-0.5 font-mono text-xs text-is-secondary">
      {tag.toUpperCase().replace(/-/g, '_')}
    </span>
  )
}

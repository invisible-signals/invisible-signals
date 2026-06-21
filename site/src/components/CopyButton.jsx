import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ text, clarityEvent }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      if (clarityEvent) window.clarity?.('event', clarityEvent)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-is-border text-is-secondary hover:border-is-primary hover:text-is-primary transition-all"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'COPIED' : 'COPY'}
    </button>
  )
}

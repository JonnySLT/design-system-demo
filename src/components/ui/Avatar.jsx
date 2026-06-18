import { useState } from 'react'
import './Avatar.css'

const COLORS = [
  '#4F46E5', '#7C3AED', '#0891B2', '#059669', '#D97706', '#DC2626',
]

function getColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash)
  return COLORS[Math.abs(hash) % COLORS.length]
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase()
}

export default function Avatar({ name = '', src, size = 'md' }) {
  const [imgError, setImgError] = useState(false)
  const showImage = src && !imgError

  return (
    <div
      className={`avatar avatar--${size}`}
      style={showImage ? {} : { background: getColor(name) }}
      aria-label={name}
      role="img"
      title={name}
    >
      {showImage
        ? <img src={src} alt={name} onError={() => setImgError(true)} />
        : <span className="avatar__initials">{getInitials(name)}</span>
      }
    </div>
  )
}

import './Card.css'

export function CardHeader({ title, description, action }) {
  return (
    <div className="card-header">
      <div className="card-header-text">
        <div className="card-title">{title}</div>
        {description && <div className="card-description">{description}</div>}
      </div>
      {action && <div className="card-header-action">{action}</div>}
    </div>
  )
}

export function CardFooter({ children }) {
  return <div className="card-footer">{children}</div>
}

export default function Card({ children, padding = true, hoverable = false, className = '' }) {
  return (
    <div className={`card ${hoverable ? 'card--hoverable' : ''} ${!padding ? 'card--no-padding' : ''} ${className}`}>
      {children}
    </div>
  )
}

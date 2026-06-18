import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Toast.css'

function ToastItem({ id, message, type = 'default', duration = 3000, onDismiss }) {
  useEffect(() => {
    const t = setTimeout(() => onDismiss(id), duration)
    return () => clearTimeout(t)
  }, [id, duration, onDismiss])

  const icons = {
    success: <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    error:   <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v3M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    warning: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2L14 13H2L8 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 7v2M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    default: null,
  }

  return (
    <div className={`toast toast--${type}`} role="status" aria-live="polite">
      {icons[type] && <span className="toast-icon">{icons[type]}</span>}
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={() => onDismiss(id)} aria-label="Dismiss">
        <svg viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </div>
  )
}

export function ToastContainer({ toasts, onDismiss }) {
  return createPortal(
    <div className="toast-container">
      {toasts.map(t => (
        <ToastItem key={t.id} {...t} onDismiss={onDismiss} />
      ))}
    </div>,
    document.body
  )
}

export function useToast() {
  const [toasts, setToasts] = useState([])
  const add = (message, type = 'default', duration = 3000) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type, duration }])
  }
  const dismiss = (id) => setToasts(prev => prev.filter(t => t.id !== id))
  return { toasts, dismiss, toast: add }
}

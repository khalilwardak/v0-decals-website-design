"use client"

import { useState } from "react"
import { Mail, Phone, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

// Obfuscated contact info - decoded at runtime only when user clicks
const emailParts = ["ah", ".", "omer", ".", "wa", "@", "gmail", ".", "com"]
const phoneParts = ["+1", " ", "(720)", " ", "290", "-", "0037"]

function decodeEmail(): string {
  return emailParts.join("")
}

function decodePhone(): string {
  return phoneParts.join("")
}

function getPhoneForTel(): string {
  return "+17202900037"
}

interface ContactRevealButtonProps {
  type: "email" | "phone"
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  showIcon?: boolean
  fullWidth?: boolean
}

export function ContactRevealButton({ 
  type, 
  className = "",
  variant = "default",
  size = "default",
  showIcon = true,
  fullWidth = false
}: ContactRevealButtonProps) {
  const [revealed, setRevealed] = useState(false)
  const [contactInfo, setContactInfo] = useState<string | null>(null)

  const handleReveal = () => {
    if (!revealed) {
      if (type === "email") {
        setContactInfo(decodeEmail())
      } else {
        setContactInfo(decodePhone())
      }
      setRevealed(true)
    }
  }

  const handleAction = () => {
    if (type === "email") {
      window.location.href = `mailto:${decodeEmail()}`
    } else {
      window.location.href = `tel:${getPhoneForTel()}`
    }
  }

  if (!revealed) {
    return (
      <Button 
        variant={variant}
        size={size}
        onClick={handleReveal}
        className={`${fullWidth ? "w-full" : ""} ${variant === "outline" ? "bg-transparent" : ""} ${className}`}
      >
        {showIcon && <Eye className="mr-2 h-4 w-4" />}
        {type === "email" ? "Click to Reveal Email" : "Click to Reveal Phone"}
      </Button>
    )
  }

  return (
    <Button 
      variant={variant}
      size={size}
      onClick={handleAction}
      className={`${fullWidth ? "w-full" : ""} ${variant === "outline" ? "bg-transparent" : ""} ${className}`}
    >
      {showIcon && (type === "email" ? <Mail className="mr-2 h-4 w-4" /> : <Phone className="mr-2 h-4 w-4" />)}
      {contactInfo}
    </Button>
  )
}

interface ContactRevealInlineProps {
  type: "email" | "phone"
  label?: string
  className?: string
}

export function ContactRevealInline({ type, label, className = "" }: ContactRevealInlineProps) {
  const [revealed, setRevealed] = useState(false)
  const [contactInfo, setContactInfo] = useState<string | null>(null)

  const handleReveal = () => {
    if (!revealed) {
      if (type === "email") {
        setContactInfo(decodeEmail())
      } else {
        setContactInfo(decodePhone())
      }
      setRevealed(true)
    }
  }

  const handleAction = () => {
    if (type === "email") {
      window.location.href = `mailto:${decodeEmail()}`
    } else {
      window.location.href = `tel:${getPhoneForTel()}`
    }
  }

  if (!revealed) {
    return (
      <button 
        onClick={handleReveal}
        className={`flex items-center gap-2 text-sm hover:opacity-80 transition-opacity cursor-pointer ${className}`}
      >
        {type === "email" ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
        <span className="underline underline-offset-2">
          {label || (type === "email" ? "Click to reveal email" : "Click to reveal phone")}
        </span>
      </button>
    )
  }

  return (
    <button 
      onClick={handleAction}
      className={`flex items-center gap-2 text-sm hover:opacity-80 transition-opacity cursor-pointer ${className}`}
    >
      {type === "email" ? <Mail className="h-4 w-4" /> : <Phone className="h-4 w-4" />}
      <span className="underline underline-offset-2">{contactInfo}</span>
    </button>
  )
}

interface ContactRevealCardProps {
  type: "email" | "phone"
  title: string
  subtitle: string
}

export function ContactRevealCard({ type, title, subtitle }: ContactRevealCardProps) {
  const [revealed, setRevealed] = useState(false)
  const [contactInfo, setContactInfo] = useState<string | null>(null)

  const handleReveal = () => {
    if (!revealed) {
      if (type === "email") {
        setContactInfo(decodeEmail())
      } else {
        setContactInfo(decodePhone())
      }
      setRevealed(true)
    }
  }

  const handleAction = () => {
    if (type === "email") {
      window.location.href = `mailto:${decodeEmail()}`
    } else {
      window.location.href = `tel:${getPhoneForTel()}`
    }
  }

  return (
    <button 
      onClick={revealed ? handleAction : handleReveal}
      className="flex items-center gap-4 group text-left w-full"
    >
      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
        {type === "email" ? (
          <Mail className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
        ) : (
          <Phone className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
        )}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <p className="text-foreground group-hover:text-accent transition-colors font-medium">
          {revealed ? contactInfo : title}
        </p>
      </div>
    </button>
  )
}

// Helper to generate obfuscated mailto link at runtime
export function getMailtoLink(subject?: string, body?: string): string {
  const email = decodeEmail()
  let link = `mailto:${email}`
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  if (params.length > 0) link += `?${params.join("&")}`
  return link
}

export function getTelLink(): string {
  return `tel:${getPhoneForTel()}`
}

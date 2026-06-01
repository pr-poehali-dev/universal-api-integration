import type { ReactNode } from "react"

export interface SectionCard {
  icon: string
  title: string
  text: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  cards?: SectionCard[]
}

export interface SectionProps extends Section {
  isActive: boolean
}

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MONTHS_FR = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
]

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return `${date.getUTCDate()} ${MONTHS_FR[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

const CHECKLIST_KEY = 'crunchy_progress'
const PANTRY_KEY = 'crunchy_pantry'

export function getProgress(key = CHECKLIST_KEY): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function toggleItem(id: string, key = CHECKLIST_KEY): Record<string, boolean> {
  const progress = getProgress(key)
  if (progress[id]) {
    delete progress[id]
  } else {
    progress[id] = true
  }
  localStorage.setItem(key, JSON.stringify(progress))
  return { ...progress }
}

export function getPantryProgress(): Record<string, boolean> {
  return getProgress(PANTRY_KEY)
}

export function togglePantryItem(id: string): Record<string, boolean> {
  return toggleItem(id, PANTRY_KEY)
}

export function getCategoryProgress(
  progress: Record<string, boolean>,
  ids: string[]
): { completed: number; total: number; percent: number } {
  const completed = ids.filter((id) => progress[id]).length
  const total = ids.length
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0
  return { completed, total, percent }
}

export function getCrunchyLevel(score: number): { level: number; name: string } {
  if (score < 20) return { level: 1, name: 'Baby Crunchy' }
  if (score < 40) return { level: 2, name: 'Getting Crunchy' }
  if (score < 60) return { level: 3, name: 'Mostly Crunchy' }
  if (score < 80) return { level: 4, name: 'Pretty Crunchy' }
  return { level: 5, name: 'Full Crunchy' }
}

import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const entries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => entries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = entries.find(d => d.id === id)
  if (entry !== null) {
    const { ...remainingEntry } = entry
    return remainingEntry
  }
  return undefined
}

export const getEntriesWithoutSensitiveData = (): NonSensitiveInfoDiaryEntry[] => {
  return entries.map(({ id, date, visibility, weather }) => {
    return {
      id,
      date,
      visibility,
      weather
    }
  })
}

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...entries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  entries.push(newEntry)
  return newEntry
}

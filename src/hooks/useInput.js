import { useState } from "react"
/**
 * Hook
 * @param {string} initialValue
 */
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  return {value, onChange, setValue}
}
/**
 * Hook
 * @param {string} initialValue
 */
export const useInputFile = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.files[0])
  return {value, onChange, setValue}
}
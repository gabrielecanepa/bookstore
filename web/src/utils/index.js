export { apiGetBooks, apiRequest } from './requests'

export const truncateString = (string, length) => {
  if (string.length <= length) return string

  return `${string.substr(0, length)}...`
}

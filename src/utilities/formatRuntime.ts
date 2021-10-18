export function formatRuntime (time:number) {
  const minutes = time % 60
  const hours = Math.floor(time / 60)
  return `${hours ? hours + 'h' : ''} ${minutes}min`
}
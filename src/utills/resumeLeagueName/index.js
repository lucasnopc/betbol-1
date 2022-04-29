export default function resumeLeagueName (name) {
  if(name.match(/CONMEBOL/)) return name.replace('CONMEBOL', '')
  return name
}
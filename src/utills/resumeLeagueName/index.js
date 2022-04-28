export default function resumeLeagueName (name) {
  console.log('name ', name)
  if(name.match(/CONMEBOL/)) return name.replace('CONMEBOL', '')
  return name
}
export default function withoutAccountButtom() {
  return <div className="group relative w-full ">
  <button className="w-full bg-primary-ligth cursor-not-allowed font-semibold text-md text-white uppercase p-3 disabled:opacity-50" disabled>Fazer Aposta <ValorFinal /><br />
  </button>
  <span className="absolute text-center text-white w-full bottom-0 left-0 select-none cursor-not-allowed group-hover:opacity-100 opacity-0 text-xs">Faça Login para apostar</span>

</div>
}
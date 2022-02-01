export default function Hamburguer({ toggle, setToggle }) {

  return <div className=" flex items-center" onClick={() => setToggle(!toggle)}>
    <div className="inline-block w-5 h-6 pt-1 pl-1">
      <span className={`${toggle ? 'rotate-45 translate-y-2' : ''} block w-full mb-1 h-0.5 bg-white transition-transform`}></span>
      <span className={`${toggle ? 'bg-transparent ':''} block w-full h-0.5 bg-white transition-transform`}></span>
      <span className={`${toggle ? '-rotate-45 -translate-y-1':''} block w-full mt-1 h-0.5 bg-white transition-transform`}></span>
    </div>
    <span className="px-3 text-white">Menu</span>
</div>
}
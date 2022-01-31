import { useState } from "react";
import useFetch from "../../utills/useFetch";
import FullLoading from "../fullloading";
import ItemListTicket from "./itemlistticket";

export default function AllTickets() {
  const [statusSearch , setStatusSearch] = useState()
  const { data, error } = useFetch(`/api/adm/getticket`);
  if (!data) <FullLoading />;
  if (error) console.log("err", error)
  const changeStatusSearch = e => {
    setStatusSearch(e.target.value == "true")
  }
  console.log('statusSearch ',typeof statusSearch, Boolean(statusSearch))
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xs uppercase">Bilhetes</h2>
      <form>
      Status: <select name="selectstatus" onChange={(e) => changeStatusSearch(e)}>
          <option value="true" selected>Ganhou</option>
          <option value="false">Perdeu</option>
        </select>
      </form>
      <div className="bg-gray-100 flex justify-between px-2 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Apostou
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Status
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Ticket
        </span>
      </div>
      <div className="h-36 overflow-auto">
        {data &&
          data.bilhete.reverse().map((bi) => {
            return <ItemListTicket key={bi._id} bi={bi} statusSearch={statusSearch} />;
          })}
      </div>
    </div>
  );
}

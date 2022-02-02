import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../../utills/useFetch";
import FullLoading from "../fullloading";
import ItemListTicket from "./itemlistticket";

export default function AllTickets() {
  const [statusSearch, setStatusSearch] = useState(false);
  const { data, error } = useFetch(`/api/adm/getticket`);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  if (!data) <FullLoading />;
  if (error) console.log("err", error);
  const changeStatusSearch = (e) => {
    console.log(e.target.value == "true", e.target);
  };
  console.log("statusSearch ", typeof statusSearch, Boolean(statusSearch));
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xs uppercase">Bilhetes</h2>
      <form>
        <select {...register} onChange={() => handleSubmit(onSubmit)}>
          <option value="true">Ganhou</option>
          <option value="false">Perdeu</option>
        </select>

      </form>
      <div className="bg-gray-100 flex justify-between px-2 border-b border-gray-200">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Data | Hora
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Escolhas
        </span>
        <span className="text-xs font-semibold text-gray-500 uppercase">
          Status
        </span>
      </div>
      <div className="h-36 overflow-auto">
        {data &&
          data.bilhete.reverse().map((bi) => {
            return (
              <ItemListTicket
                key={bi._id}
                bi={bi}
                statusSearch={statusSearch}
              />
            );
          })}
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { useStore } from "../../context/store";

function useUser(userString) {
  const { setUser, user } = useStore()
  useEffect(() => {
    if(userString) {
      setUser(JSON.parse(userString))
    }
  }, [userString])
  return user
}
export default useUser
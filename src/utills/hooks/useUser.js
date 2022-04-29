import axios from "axios";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useStore } from "../../context/store";

function useUser() {
  const { setUser, user } = useStore()
  const [session] = useSession()


  useEffect(() => {
    const getsession = async () => {
        const userSession = await axios.get(`/api/adm/getusers?email=${session.user.email}`)
        const userData = userSession.data.accounts[0]
        setUser(userData)
      }
      
      if (session && session != 'undefined' && Object.keys(user).length === 0) {
        console.log('get session')
        getsession()
    }
  }, [session])

  return
}
export default useUser
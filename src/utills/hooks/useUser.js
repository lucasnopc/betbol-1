import axios from "axios";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStore } from "../../context/store";

function useUser(userString) {
  const { setUser, user } = useStore()
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    const getsession = async () => {
      const userLocal = localStorage.getItem('betbol@user')
      if (userLocal && userLocal.length > 0 && JSON.parse(userLocal).email == session.user.email) {
        setUser(JSON.parse(userLocal))
      }else {
        const user = await axios.get(`/api/adm/getusers?email=${session.user.email}`)
        const userString = JSON.stringify(user.data.accounts[0])
        localStorage.setItem('betbol@user', userString)
        setUser(JSON.parse(userString))
        if (typeof user.user == 'undefined') {
          router.push(`/user/register`)
        }
      }
    }

    if (session && session != 'undefined') {
      getsession()
    }
  }, [session])

  return user
}
export default useUser
import { getSession } from "next-auth/client"
import getUser from "./getUser"

export default async function serverSidePropsClient(context) {
  const session = await getSession(context)
  if (session) {
    const user = await getUser(session.user.email)
    const userString = JSON.stringify(user)
    if (typeof user.user == 'undefined') {
      return {
        redirect: {
          destination: '/register',
          permanent: false,
        },
      }
    } 
    // if (user.nivel == 5) {
    //   return {
    //     redirect: {
    //       destination: '/adm/dash',
    //       permanent: false,
    //     },
    //   }
    // }
    return {
      props: { userString },
    }
  } else {
    return {
      props: {},
    }
  }
}
import { getSession } from "next-auth/client"
import isAdmin from "./isAdmin"

export default async function serverSidePropsAdmin(context, permission = 5) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const userIsdmin = await isAdmin(session.user.email, permission)
  if (userIsdmin == false) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
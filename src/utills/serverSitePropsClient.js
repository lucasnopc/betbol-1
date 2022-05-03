import { getSession } from "next-auth/client"

export default async function serverSidePropsClient(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: {}}
}
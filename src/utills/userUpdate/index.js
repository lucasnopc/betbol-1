import axios from "axios"

export default async function userUpdate(email) {
  const user = await axios.get(`/api/adm/getusers?email=${email}`)
  const userString = JSON.stringify(user.data.accounts[0])
  // localStorage.setItem('betbol@user', userString)
}
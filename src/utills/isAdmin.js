import getUser from '../utills/getUser'
export default async function IsAdmin(email) {
    const user = await getUser(email)
    if(typeof user.nivel == 'undefined') return false
    if (user.nivel == 5) {
        return true
    }
    return false
}
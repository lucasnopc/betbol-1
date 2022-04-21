import getUser from '../utills/getUser'
export default async function isAdmin(email, permission) {
    const user = await getUser(email)
    // if(typeof user.nivel == 'undefined') return false
    if (user?.nivel >= permission) {
        return true
    }
    return false
}
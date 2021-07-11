import compareAsc from 'date-fns/compareAsc'
import isAfter from 'date-fns/isAfter'

export function compareDateFuture(date) {
    const dateFix = new Date(date)
    const hoje = new Date()
    
    const FutureFiveDays = new Date()
    FutureFiveDays.setDate(FutureFiveDays.getDate() + 5);
    if(compareAsc(dateFix, FutureFiveDays) <=0 && isAfter(dateFix, hoje)) {
       return true
   }

   return false
}

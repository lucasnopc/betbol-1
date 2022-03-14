import axios from "axios"

export default async function getCountries(setCountries) {
  const countriesLocal = await JSON.parse(localStorage.getItem('betbol@countries'))
  if (countriesLocal && countriesLocal.length > 0) {
      setCountries(countriesLocal)
  } else {
      const urlGetCountries = `/api/getCountryes`
      const data = await axios.get(urlGetCountries)
      const countriesData = await data.data
      setCountries(countriesData.countries)
  }
}
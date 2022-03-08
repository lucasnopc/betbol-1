import useSWR from "swr";

export default function useFetch(url, options) {
    const { data, error } = useSWR(url, async url => {
        const response = await fetch(url)
        const data = await response.json()

        return data
    }, options ? options : {})

    return { data, error }
}
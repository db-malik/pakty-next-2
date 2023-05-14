import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function useFetcher(id) {
  const { data, error, isLoading } = useSWR(`http://pm.basketofart.net:3000/detProducts`, fetcher)

  return {
    data: data,
    isLoading,
    isError: error,
  }
}
export default useFetcher

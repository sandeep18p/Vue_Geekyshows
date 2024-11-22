// Composable Function with Argument
import { ref } from 'vue'
// using Async Await
export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const getData = async () => {
    try {
      const res = await fetch(url)
      const resData = await res.json()
      data.value = resData
    } catch (err) {
      error.value = err
    }
  }
  getData()
  return { data, error }
}

// // using Promise then
// export function useFetch(url) {
//   const data = ref(null)
//   const error = ref(null)

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err))

//   return { data, error }
// }
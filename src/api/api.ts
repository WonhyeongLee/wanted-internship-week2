import axios from 'axios'
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'
const instance = axios.create({
  headers: { 'Content-Type': 'application/json' }
})
export const getSearchKeyword = async (keyword: string) => {
  try {
    const response = await instance.get(
      `${PROXY}/api/v1/search-conditions/?name=${keyword}`
    )
    console.log(`api called`)

    return response
  } catch (error) {
    throw error
  }
}

import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async url => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '359318cfacmsh1cab9c7fa4c8cb1p131151jsn1a0fda3d9595',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  })
  return data
}

import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    try {

        const { data } = await axios.get((url), {
            headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY
            }
        })

        return data;
    } catch(err) {
        console.log(err)
    }
}

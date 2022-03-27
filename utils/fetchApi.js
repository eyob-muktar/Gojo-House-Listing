import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'
// const options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/agencies/list',
//     params: {hitsPerPage: '25', page: '0', lang: 'en'},
//     headers: {
//       'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//       'X-RapidAPI-Key': 'fe66b584a0msh37c69ea12c4cdb9p14e6efjsn75a9265a123e'
//     }
//   };

export const fetchApi = async (url) => {
    try {

        const { data } = await axios.get((url), {
            headers: {
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': 'fe66b584a0msh37c69ea12c4cdb9p14e6efjsn75a9265a123e'
            }
        })

        return data;
    } catch(err) {
        console.log(err)
    }
}

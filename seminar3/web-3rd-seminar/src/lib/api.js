import axios from "axios"

const client = axios.create({ // url을 통해 데이터 받아오기
    baseURL : "https://api.github.com/users/"
  })

const getUserAPI = async (username) => {
    const {data} = await client.get(username);
    return data;
}

export default getUserAPI;
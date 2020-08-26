const axios = require('axios');

export const get = async (url) => {
    try {
        return await axios.get(url)

    } catch (error) {
        console("err on url", url)
    }

}

export const post = async (url, body) => {

}
import axios from 'axios'

const xhr = async (url, method, data, headers,) => {
    const options = {
        method: method,
        headers: headers || {'Content-Type': 'application/json'},
        data: data,
        url: url,
    };
    try {
        const response = await axios(options);
        return response;
    } catch (e) {
        //console.log(e);
        throw e;
    }
};

export default xhr;
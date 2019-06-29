import axios from 'axios'

const xhr = async (url, method, data, headers,) => {
    const options = {
        method: method,
        headers: headers || {'Content-Type': 'application/json'},
        data: data,
        url: url,
    };
    try {
        return await axios(options);
    } catch (e) {
        throw e;
    }
};

export default xhr;
import axios from 'axios';
// const url = 'http://localhost:3001';
const url = 'http://shorturl-env.kwncuxdbyk.us-west-2.elasticbeanstalk.com:3001';
export default axios.create({
    baseURL: url
});
import axios from 'axios';

const KEY = "AIzaSyC3GS64r0TP2MmifuWzJMLb84WPU6VpHHA";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});
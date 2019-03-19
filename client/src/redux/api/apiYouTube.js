import axios from 'axios';

export function getVideoList(param){
    return (axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${param ? param : 'news'}&key=AIzaSyDEMcUM0qLC6x1-i8iPxRQW1e6dEzIIOrw`));
};
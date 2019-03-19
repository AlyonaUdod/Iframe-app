import axios from 'axios';

export function getVideoList() {
    return (axios.get('http://localhost:8000/api/video'))
}

export function addVideo(obj) {
    return axios.post('http://localhost:8000/api/video', obj, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
}

export function deleteVideo(id){
    return axios.delete(`http://localhost:8000/api/video/${id}`)
}
import axios from 'axios';

export function getVideoList() {
    return (axios.get('/api/video'))
}

export function addVideo(obj) {
    return axios.post('/api/video', obj, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
}

export function deleteVideo(id){
    return axios.delete(`/api/video/${id}`)
}
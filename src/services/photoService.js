import axios from "axios";
import environment from "../environments/environment";

const API_URL = `${environment.apiUrl}/photos`;

export function getPhotos() {
    return axios.get(API_URL + "?_limit=10").then((response) => response.data);
}

export function addPhoto(photo) {
    return axios.post(API_URL, photo).then((response) => response.data);
}

export function updatePhoto(id, updatedPhoto) {
    return axios.put(`${API_URL}/${id}`, updatedPhoto).then((response) => response.data);
}

export function deletePhoto(id) {
    return axios.delete(`${API_URL}/${id}`).then(() => id);
}
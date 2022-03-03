import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5001/api/'
})

const project = {
    getAll: async() => {
        const response = await api.get('projects')
        return response.data
    },
    getById: async(projectId) => {
        const response = await api.get(`projects/${projectId}`)
        return response.data
    },
    add: async(project) => {
        const response = await api.post('projects', project)
        return response.data
    },
    update: async(projectId, project) => {
        const response = await api.put(`projects/${projectId}`, project)
        return response.data
    },
    delete: async(projectId) => {
        const response = await api.delete(`projects/${projectId}`)
        return response.data
    },
}

const column = {
    getAll: async(projectId) => {
        const response = await api.get(`projects/${projectId}/columns`);
        return response.data
    },
    
    add: async(projectId, column) => {
        const response = await api.post(`projects/${projectId}/columns`, column);
        return response.data;
    },
    delete: async(projectId, columnId) => {
        const response = await api.delete(`projects/${projectId}/columns/${columnId}`);
        return response.data
    },
    update: async(projectId, columnId, column) => {
        const response = await api.put(`projects/${projectId}/columns/${columnId}`, column)
        return response.data
    }
}

const task = {
    getAll: async(projectId, columnId) => {
        const response = await api.get(`projects/${projectId}/columns/${columnId}/cards`);
        return response.data
    },
    delete: async(projectId, columnId, taskId) => {
        const response = await api.delete(`projects/${projectId}/columns/${columnId}/cards/${taskId}`);
        return response.data
    },
    add: async(projectId, columnId, task) => {
        const response = await api.post(`projects/${projectId}/columns/${columnId}/cards`, task);
        return response.data
    },
    update: async(projectId, columnId, taskId, task) => {
        const response = await api.put(`projects/${projectId}/columns/${columnId}/cards/${taskId}`, task);
        return response.data
    },
    getById: async(projectId, columnId, taskId) => {
        const response = await api.get(`projects/${projectId}/columns/${columnId}/cards/${taskId}`);
        return response.data
    }
}


const agent = {
    project,
    column,
    task
}

export default agent;
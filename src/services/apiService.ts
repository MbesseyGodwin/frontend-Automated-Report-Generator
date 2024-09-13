// src/services/apiService.ts

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const getUserReports = async (userId: number) => {
    const response = await axios.get(`${API_BASE_URL}/user-reports/${userId}`);
    return response.data;
};

export const getReportFiles = async (reportId: number) => {
    const response = await axios.get(`${API_BASE_URL}/report-files/${reportId}`);
    return response.data;
};

export const uploadReportFile = async (reportId: number, file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_BASE_URL}/report-files?report_id=${reportId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const getReportMetadata = async (reportId: number) => {
    const response = await axios.get(`${API_BASE_URL}/reports/${reportId}`);
    return response.data;
};

export const downloadReport = async (reportId: number, format: string) => {
    const response = await axios.get(`${API_BASE_URL}/reports/${reportId}/download`, {
        params: { format },
        responseType: 'blob', // To handle file download
    });
    return response.data;
};

export const createReport = async (title: string, description: string, userId: number) => {
    const response = await axios.post(`${API_BASE_URL}/reports`, {
        title,
        description,
        user_id: userId,
    });
    return response.data;
};

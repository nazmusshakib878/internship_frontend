const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export interface ApplicationPayload {
  fullName: string;
  email: string;
  reason: string;
  programLevel?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const api = {
  // Submit an internship application
  async submitApplication(data: ApplicationPayload) {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit application');
    }
    return result;
  },

  // Submit contact message
  async submitContact(data: ContactPayload) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send message');
    }
    return result;
  },

  // Fetch programs
  async getPrograms() {
    const response = await fetch(`${API_BASE_URL}/content/programs`);
    if (!response.ok) throw new Error('Failed to fetch programs');
    return response.json();
  },

  // Fetch services
  async getServices() {
    const response = await fetch(`${API_BASE_URL}/content/services`);
    if (!response.ok) throw new Error('Failed to fetch services');
    return response.json();
  },

  // Fetch projects
  async getProjects() {
    const response = await fetch(`${API_BASE_URL}/content/projects`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },
};


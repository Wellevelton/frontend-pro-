// API Service for Planner Pro
// Centralized API calls to backend

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://seu-backend-supabase.vercel.app/api'  // Será atualizado após deploy
  : 'http://localhost:3000/api';

// Token management
const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

// Authenticated request helper
const authenticatedRequest = async (url, options = {}) => {
  const token = getToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${url}`, config);
  
  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
    return null;
  }

  return response;
};

// API Objects
export const apiService = {
  setToken,
  getToken,
  
  // Auth API
  auth: {
    login: async (credentials) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      return response.json();
    },

    register: async (userData) => {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.json();
    },

    googleLogin: () => {
      window.location.href = `${API_BASE_URL}/auth/google`;
    },
  },

  // Projects API
  projects: {
    getAll: async () => {
      const response = await authenticatedRequest('/projects');
      return response ? response.json() : [];
    },

    create: async (project) => {
      const response = await authenticatedRequest('/projects', {
        method: 'POST',
        body: JSON.stringify(project),
      });
      return response ? response.json() : null;
    },

    update: async (id, project) => {
      const response = await authenticatedRequest(`/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(project),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/projects/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Goals API
  goals: {
    getAll: async () => {
      const response = await authenticatedRequest('/goals');
      return response ? response.json() : [];
    },

    create: async (goal) => {
      const response = await authenticatedRequest('/goals', {
        method: 'POST',
        body: JSON.stringify(goal),
      });
      return response ? response.json() : null;
    },

    update: async (id, goal) => {
      const response = await authenticatedRequest(`/goals/${id}`, {
        method: 'PUT',
        body: JSON.stringify(goal),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/goals/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Finances API
  finances: {
    getAll: async () => {
      const response = await authenticatedRequest('/finances');
      return response ? response.json() : [];
    },

    create: async (finance) => {
      const response = await authenticatedRequest('/finances', {
        method: 'POST',
        body: JSON.stringify(finance),
      });
      return response ? response.json() : null;
    },

    update: async (id, finance) => {
      const response = await authenticatedRequest(`/finances/${id}`, {
        method: 'PUT',
        body: JSON.stringify(finance),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/finances/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Financial Planning API
  financialPlanning: {
    getAll: async () => {
      const response = await authenticatedRequest('/financial-planning');
      return response ? response.json() : [];
    },

    create: async (planning) => {
      const response = await authenticatedRequest('/financial-planning', {
        method: 'POST',
        body: JSON.stringify(planning),
      });
      return response ? response.json() : null;
    },

    update: async (id, planning) => {
      const response = await authenticatedRequest(`/financial-planning/${id}`, {
        method: 'PUT',
        body: JSON.stringify(planning),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/financial-planning/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Travels API
  travels: {
    getAll: async () => {
      const response = await authenticatedRequest('/travels');
      return response ? response.json() : [];
    },

    create: async (travel) => {
      const response = await authenticatedRequest('/travels', {
        method: 'POST',
        body: JSON.stringify(travel),
      });
      return response ? response.json() : null;
    },

    update: async (id, travel) => {
      const response = await authenticatedRequest(`/travels/${id}`, {
        method: 'PUT',
        body: JSON.stringify(travel),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/travels/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Career API
  career: {
    getAll: async () => {
      const response = await authenticatedRequest('/career');
      return response ? response.json() : [];
    },

    create: async (careerItem) => {
      const response = await authenticatedRequest('/career', {
        method: 'POST',
        body: JSON.stringify(careerItem),
      });
      return response ? response.json() : null;
    },

    update: async (id, careerItem) => {
      const response = await authenticatedRequest(`/career/${id}`, {
        method: 'PUT',
        body: JSON.stringify(careerItem),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/career/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // Calendar API
  calendar: {
    getAll: async () => {
      const response = await authenticatedRequest('/calendar');
      return response ? response.json() : [];
    },

    create: async (event) => {
      const response = await authenticatedRequest('/calendar', {
        method: 'POST',
        body: JSON.stringify(event),
      });
      return response ? response.json() : null;
    },

    update: async (id, event) => {
      const response = await authenticatedRequest(`/calendar/${id}`, {
        method: 'PUT',
        body: JSON.stringify(event),
      });
      return response ? response.json() : null;
    },

    delete: async (id) => {
      const response = await authenticatedRequest(`/calendar/${id}`, {
        method: 'DELETE',
      });
      return response ? response.ok : false;
    },
  },

  // User API
  user: {
    getProfile: async () => {
      const response = await authenticatedRequest('/user/profile');
      return response ? response.json() : null;
    },

    updateProfile: async (profile) => {
      const response = await authenticatedRequest('/user/profile', {
        method: 'PUT',
        body: JSON.stringify(profile),
      });
      return response ? response.json() : null;
    },
  },
};

export default apiService;

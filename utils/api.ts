// src/utils/api.ts

export const api = {
    get: async (url: string) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  
    post: async (url: string, data: any) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
      } catch (error) {
        console.error('Error posting data:', error);
        throw error;
      }
    },
  
    put: async (url: string, data: any) => {
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
      } catch (error) {
        console.error('Error updating data:', error);
        throw error;
      }
    },
  
    delete: async (url: string) => {
      try {
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
      } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
      }
    },
  };
  
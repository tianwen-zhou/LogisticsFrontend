export const fetchTaskData = async (taskId: string) => {
  const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;  
  try {
      const response = await fetch(`${apiUrl}/route/getTaskRoute/${taskId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch task data: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching task data:', error);
      throw error;
    }
  };
  
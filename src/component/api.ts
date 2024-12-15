export const fetchTaskData = async (taskId: string) => {
    try {
      console.log(`/api/route/getTaskRoute/${taskId}`);
      const response = await fetch(`http://localhost:5137/api/route/getTaskRoute/${taskId}`);
      console.log('@response',response);
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
  
import { mockTaskData } from "./mockTaskData";

export const fetchTaskData = async (taskId: string) => {
    try {
      return mockTaskData;
      const response = await fetch(`/api/tasks/${taskId}`);
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
  
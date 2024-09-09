// Define the Task type used in the App component
export type Task = {
    id: number; // Task ID as a number
    task: string; // Task description as a string
  }
  
  // Define a type for navigation parameters, if you plan to navigate between screens
  export type RootParamList = {
    ViewScreen: undefined;
    AddTaskScreen: undefined;
  }
  
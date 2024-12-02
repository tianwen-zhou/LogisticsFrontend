import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username }) => {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem("username");
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem("username");
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return localStorage.getItem("username")
          ? Promise.resolve()
          : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;

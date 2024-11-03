import axios from "axios";

/**
 * Utility function to handle Axios errors and return a user-friendly message.
 * @param error - The error object caught in a catch block.
 * @returns A user-friendly error message.
 */
export const handleAxiosError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    // If it's an AxiosError, extract the message from the response
    return (
      error.response?.data?.message || "An error occurred during the request."
    );
  } else {
    // For other types of errors
    return "An unexpected error occurred.";
  }
};

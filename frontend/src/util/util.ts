export const ANIMATION_DELAY = 100; /**in milliseconds */
export const ITEMS_PER_PAGE = 8;
export const MAX_FILE_UPLOAD_SIZE = 10 * 1024 * 1024; /**in megabyte */
// export const BACKEND_URL = 'https://get-hired-server.vercel.app/api/v1';
export const BACKEND_URL = "http://localhost:3000/api/v1";

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

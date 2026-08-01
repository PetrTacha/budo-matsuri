/**
 * Fetches HTML content from a file path
 * @param {string} path - Path to the HTML file
 * @returns {Promise<string>} HTML content as string
 */
export const fetchHtmlContent = async (path) => {
  try {
    const response = await fetch(path);
    
    if (response.status === 404) {
      console.error(`Error loading data from: ${path}`);
      return "";
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching HTML content: ${error}`);
    return "";
  }
};

// /**
//  * Sanitizes HTML content (requires DOMPurify)
//  * @param {string} html - HTML string to sanitize
//  * @returns {string} Sanitized HTML
//  */
// export const sanitizeHtml = (html) => {
//   if (typeof window === "undefined") return html;
  
//   // This will be used with DOMPurify in components
//   return html;
// };

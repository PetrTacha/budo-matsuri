/**
 * Removes custom line break markers from text
 * @param {string} text - Text with {/n} markers
 * @returns {string} Text with markers replaced by spaces
 */
export const removeNewSpace = (text) => {
  return text?.replaceAll("{/n}", " ") || "";
};

// /**
//  * Splits text by custom line break markers
//  * @param {string} text - Text with {/n} markers
//  * @returns {string[]} Array of text segments
//  */
// export const formatTextWithBreaks = (text) => {
//   return text?.split("{/n}") || [];
// };

// /**
//  * Truncates text to a specified length
//  * @param {string} text - Text to truncate
//  * @param {number} maxLength - Maximum length
//  * @returns {string} Truncated text with ellipsis if needed
//  */
// export const truncateText = (text, maxLength = 100) => {
//   if (!text || text.length <= maxLength) return text;
//   return text.slice(0, maxLength).trim() + "...";
// };

/**
 * @typedef Culture
 * @param {String} title 
 */

const DEFAULT_CULTURES = [
    {title: 'African American', numInsights: 10},
    {title: 'American Indian', numInsights: 12},
    {title: 'Asian', numInsights: 5},
    {title: 'Hindu', numInsights: 5},
    {title: 'Male', numInsights: 5},
];

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getCultures() {
    return new Promise((resolve, reject) => {
        resolve(DEFAULT_CULTURES); // Put firebase code here to get cultures
    });
}
/**
 * @typedef Culture
 * @param {String} id
 * @param {String} title 
 * @param {Number} numInsights
 * @param {String} categoryId
 */

 /**
  * @typedef CultureCategory
  * @param {String} id
  * @param {String} title
  */

const DEFAULT_CULTURES = [
    {id: '1', title: 'African American', numInsights: 10, categoryId: '1'},
    {id: '2', title: 'American Indian', numInsights: 12, categoryId: '1'},
    {id: '3', title: 'Asian', numInsights: 5, categoryId: '1'},
    {id: '4', title: 'Hindu', numInsights: 5, categoryId: '2'},
    {id: '5', title: 'Male', numInsights: 5, categoryId: '3'},
];

const DEFAULT_CATEGORIES = [
    {id: '1', title: 'Ethnicity'},
    {id: '2', title: 'Religion'},
    {id: '3', title: 'Gender Identity'},
];

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getCultures() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DEFAULT_CULTURES); // Put firebase code here to get cultures
        }, 500); // test delay
    });
}

/**
 * Get the list of all culture categories
 */
export function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DEFAULT_CATEGORIES); // Put firebase code here to get categories
        }, 500); // test delay
    });
}
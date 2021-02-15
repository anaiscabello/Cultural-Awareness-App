/**
 * @typedef Culture
 * @param {String} title 
 */

const SOME_SELECTED_CULTURE = {
    title: 'African American',
    key_insights = [
        {
            title: 'Something',
            desc: 'Something else'
        }
    ]
};

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getInsight(_id) {
    return new Promise((resolve, reject) => {
        resolve(SOME_SELECTED_CULTURE); // Put firebase code here to get insight
    });
}
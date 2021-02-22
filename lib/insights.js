// Libraries
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

/**
 * @typedef ConfidenceScore
 * @param {String} id
 * @param {String} title
 * @param {String} color
 */

/**
 * @typedef Insight
 * @param {String} id
 * @param {String} title
 * @param {String} description
 * @param {ConfidenceScore} confidenceScore
 */

export const CONFIDENCE_SCORES = {
    ACCURATE: { id: 'accurate', title: 'Accurate', color: '#34C759' },
    RELIABLE: { id: 'reliable', title: 'Reliable', color: '#5AC8FA' },
    QUESTIONABLE: { id: 'questionable', title: 'Questionable', color: '#FFCC00' },
}

let ids = 0;

function createTestInsights(cultureId) {
    return Object.keys(CONFIDENCE_SCORES).map((confidenceScore) => {
        return {
            id: ++ids,
            title: lorem.generateSentences(1),
            description: lorem.generateParagraphs(3),
            confidenceScore: CONFIDENCE_SCORES[confidenceScore],
        };
    });
}

/**
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getInsightsForCulture(cultureId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(createTestInsights(cultureId)); // Put firebase code here to get cultures
        }, 500); // test delay
    });
}

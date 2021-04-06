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
 * Get the list of cultures from database
 * @returns {Promise<Array<Culture>>}
 */
export function getInsights(cultureId, categoryIdd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                lorem.generateWords(10),
                lorem.generateWords(5),
                lorem.generateParagraphs(1),
            ]); // Put firebase code here to get cultures
        }, 500); // test delay
    });
}
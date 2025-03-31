let cachedWordList = null;

async function getWordList() {
  if (cachedWordList) return cachedWordList;

  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
    );

    if (!response.ok) throw new Error("Failed to fetch word list");

    const data = await response.json();
    cachedWordList = Object.keys(data);
    return cachedWordList;
  } catch (error) {
    console.error("Error fetching word list:", error);
    throw error;
  }
}

module.exports = {
    getWordList
  };

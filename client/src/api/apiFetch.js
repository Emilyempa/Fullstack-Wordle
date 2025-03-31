export const fetchApiData = async (endpoint, options = {}) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  try {
    const res = await fetch(endpoint, { ...options, signal });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  } finally {
    abortController.abort();
  }
};

export const fetchWords = async (length, allowRepeats) => {
  const data = await fetchApiData(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
  );
  const wordArray = Object.keys(data);
  return wordArray.filter((w) => {
    const hasRepeats = new Set(w).size !== w.length;
    return w.length === length && (allowRepeats || !hasRepeats);
  });
};

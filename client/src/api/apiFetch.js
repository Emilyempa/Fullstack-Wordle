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
      `/api/random-word?length=${length}&allowRepeats=${allowRepeats}`
    );
    return data.word;
  };

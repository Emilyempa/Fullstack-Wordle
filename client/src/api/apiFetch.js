export const fetchApiData = async (endpoint, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  const signal = controller.signal;

  try {
    const res = await fetch(endpoint, { ...options, signal });

    clearTimeout(timeout);
    
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  } 
};

export const fetchWords = async (length, allowRepeats) => {
    const data = await fetchApiData(
      `/api/random-word?length=${length}&allowRepeats=${allowRepeats}`
    );
    return data.word;
  };

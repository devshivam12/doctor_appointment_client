

const getOrSavedFromStorage = ({ key, value, get }) => {
    if (get) {
        const storedValue = localStorage.getItem(key);

        if (storedValue) {
            try {
                return JSON.parse(storedValue)
            } catch (error) {
                console.log(`Error parsing JSON from localStorage for key ${key}:`, error)
                return null
            }
        }
        else {
            return null
        }
    }
    else {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export { getOrSavedFromStorage }
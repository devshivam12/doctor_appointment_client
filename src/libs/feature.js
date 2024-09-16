

const getOrSavedFromStorage = ({ key, value, get }) => {
    if (get) {
        const storedValue = localStorage.getItem(key);
        console.log(storedValue)
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
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting value in localStorage for key ${key}:`, error);
        }
    }
}

export { getOrSavedFromStorage }
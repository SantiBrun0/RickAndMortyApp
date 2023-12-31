
export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const clearLocalStorage = (key: string) => {
    return localStorage.removeItem(key)
}
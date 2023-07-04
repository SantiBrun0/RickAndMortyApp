
export const randomize = (length: number) => {
    const randomArray = []

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 826) + 1
        randomArray.push(randomNumber)
    }

    const stringOfNumbers = randomArray.join(',')

    return stringOfNumbers
}
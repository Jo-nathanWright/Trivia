// @ts-ignore Ctrl .
export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean',
    timeout: 4000
})
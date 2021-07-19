import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "../Services/AxiosService.js"

class QuestionsService {
    async getAllQuestions() {
        const res = await api.get()
        console.log(res.data.results)

        let question = res.data.results.map(q => new Question(q))
        ProxyState.questions = question
    }
    async getButton(correct, result) {
        if (correct === result) {
            console.log("Correct Answer!")
        } else {
            console.log("Wrong Answer!")
        }
    }
}

export const questionsService = new QuestionsService()
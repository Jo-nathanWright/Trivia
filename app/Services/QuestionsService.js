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
    async getButton(correct, name, result) {
        let template = `
                <button type = "button" class="btn btn-primary mr-2" disabled >True</button >
                <button type="button" class="btn btn-primary" disabled>False</button>
            `
        if (correct === result) {
            document.getElementById(name).innerText = "Correct Answer"
            document.getElementById(`buttons-${name}`).innerHTML = template
        } else {
            document.getElementById(name).innerText = "Incorrect Answer"
            document.getElementById(`buttons-${name}`).innerHTML = template
        }
    }
}

export const questionsService = new QuestionsService()
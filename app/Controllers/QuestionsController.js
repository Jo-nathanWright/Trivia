import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function _draw() {
    let template = ''
    ProxyState.questions.forEach(q => {
        template += q.Template
    })
    document.getElementById("questions").innerHTML = template
}

export default class QuestionsController {
    constructor() {
        ProxyState.on('questions', _draw)
        this.getQuestions()
    }

    async getQuestions() {
        try {
            await questionsService.getAllQuestions()
        } catch (error) {
            window.alert("Something went wrong: " + error)
        }
    }
    async getButton(correct, name, result) {
        try {
            await questionsService.getButton(correct, name, result)
        } catch (error) {
            window.alert("Something went wrong: " + error)
        }
    }
}
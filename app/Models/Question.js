export default class Question {
    constructor({ category, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.question = question
        this.correct_answer = correct_answer
        this.incorrect_answers = incorrect_answers
    }

    get Template() {
        return `
            <div class="col-12 text-left mb-3">
                <h3>${this.category}</h3>
                <p><b>${this.question}</b></p>
                <div class="row">
                    <div class="col-3 d-flex flex-row justify-content-start">
                        <button type="button" class="btn btn-primary mr-2" onclick="app.questionsController.getButton('${this.correct_answer}' ,'True')" >True</button>
                        <button type="button" class="btn btn-primary" onclick="app.questionsController.getButton('${this.correct_answer}' ,'False')" >False</button>
                    </div>
                </div>
            </div>
        `
    }
}
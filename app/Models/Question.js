export default class Question {
    constructor({ catagory, question, correct_answer, incorrect_answers }) {
        this.catagory = catagory
        this.question = question
        this.correcy_answer = correct_answer
        this.incorrect_answers = incorrect_answers
    }

    get Template() {
        return `
        <div class="col-12 text-left">
                <h2>${this.catagory}</h2>
                <p><b>${this.question}</b></p>
                <div class="row">
                    <div class="col-3 d-flex flex-row justify-content-start">
                        <button type="button" class="btn btn-primary onclick="answer(true)" mr-2">True</button>
                        <button type="button" class="btn btn-primary" onclick="answer(false)" >False</button>
                    </div>
                </div>
            </div>
        `
    }
}
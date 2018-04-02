/// <reference path="utils/web/Terminal.ts" />

class Application {
    private terminal: Terminal;

    constructor() {
        this.terminal = Terminal.DEFAULT;
    }

    init() {
        this.askForName();
    }

    submitName() {
        let terminal:Terminal = this.terminal;
        let buttonFunction:Function = PageObject.SUBMIT_BUTTON.getClickEvent();
        let userInput:string = buttonFunction();

        terminal.println("");
        terminal.println(this.evaluateName(userInput, "Alice", "Bob"));
        terminal.println("");
        this.askForName();
    }

    evaluateName(nameToEvaluate:String, ...validNames:String[]) {
        for (let name of validNames) {
            let lCaseNameToEvaluate:string = nameToEvaluate.toLowerCase();
            let lCaseName:string = name.toLowerCase();

            if(lCaseNameToEvaluate == lCaseName) {
                return "Hey there, " + nameToEvaluate + "!";
            }
        } return nameToEvaluate + "? Stranger Danger!!";
    }


    askForName() {
        this.terminal.println("What is yer name?");
    }
}

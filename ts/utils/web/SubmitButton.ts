/// <reference path="./Button.ts" />

class SubmitButton extends Button {
    constructor() {
        super("submit");
    }

    getClickEvent(): Function {
        return function():string{
            let terminal: Terminal = Terminal.DEFAULT;
            let userInput: string = terminal.getStringInput();
            return userInput;
        };
    }
}
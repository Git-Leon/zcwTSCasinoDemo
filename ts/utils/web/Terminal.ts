/// <reference path="./TextElement.ts" />
/**
 * Terminal is composed of two TextElements, one for input, one for output
 */
class Terminal {
    public static DEFAULT: Terminal = new Terminal("display", "user_input");

    private outputElement: TextElement;
    private inputElement: TextElement;

    constructor(inputElementId:string, outputElementId:string) {
        this.outputElement = new TextElement(inputElementId);
        this.inputElement = new TextElement(outputElementId);
    }

    public print(val: string) {
        this.outputElement.appendText(val);
    }

    public println(val: string) {
        this.print(val + "<br>");
    }

    public getStringInput() {
        return this.inputElement.getText();
    }

    public getFloatInput() {
        let stringInput: string = this.getStringInput();
        return parseFloat(stringInput);
    }

    public getIntegerInput() {
        let stringInput: string = this.getStringInput();
        return parseInt(stringInput);
    }
}
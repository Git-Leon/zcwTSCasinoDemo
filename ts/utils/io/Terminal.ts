class Consolee {
    private outputElement: DisplayElement;
    private inputElement: DisplayElement;

    public Consolee() {
        this.outputElement = new DisplayElement("display");
        this.inputElement = new DisplayElement("user_input");
    }


    public print(val: string) {
        this.outputElement.appendText(val);
    }

    public println(val: string) {
        this.print(val + "<br>");
    }

    public getStringInput(prompt: string, event: Event) {
        this.println(prompt);
        //while(!event.hasOccurred()) {
        //  wait();
        //}
        return this.inputElement.getValue();
    }

    public getFloatInput(prompt: string, event: Event) {
        let stringInput: string = this.getStringInput(prompt, event);
        return parseFloat(stringInput);
    }

    public getIntegerInput(prompt: string, event: Event) {
        let stringInput: string = this.getStringInput(prompt, event);
        return parseInt(stringInput);
    }
}
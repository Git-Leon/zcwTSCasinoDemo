var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * An object representation of a text-field on a web-page
 */
var TextElement = (function () {
    function TextElement(id) {
        this.displayEle = document.getElementById(id);
    }
    TextElement.prototype.appendText = function (textToAppend) {
        this.displayEle.innerHTML += textToAppend;
        console.log("appended text to display element...\n\n" + textToAppend);
    };
    TextElement.prototype.getText = function () {
        return this.displayEle.value;
    };
    TextElement.prototype.setText = function (text) {
        this.displayEle.innerHTML = text;
    };
    TextElement.prototype.clearText = function () {
        this.setText("");
    };
    return TextElement;
}());
/// <reference path="./TextElement.ts" />
/**
 * Terminal is composed of two TextElements, one for input, one for output
 */
var Terminal = (function () {
    function Terminal(inputElementId, outputElementId) {
        this.outputElement = new TextElement(inputElementId);
        this.inputElement = new TextElement(outputElementId);
    }
    Terminal.prototype.print = function (val) {
        this.outputElement.appendText(val);
    };
    Terminal.prototype.println = function (val) {
        this.print(val + "<br>");
    };
    Terminal.prototype.getStringInput = function () {
        return this.inputElement.getText();
    };
    Terminal.prototype.getFloatInput = function () {
        var stringInput = this.getStringInput();
        return parseFloat(stringInput);
    };
    Terminal.prototype.getIntegerInput = function () {
        var stringInput = this.getStringInput();
        return parseInt(stringInput);
    };
    return Terminal;
}());
Terminal.DEFAULT = new Terminal("display", "user_input");
/// <reference path="utils/web/Terminal.ts" />
var Application = (function () {
    function Application() {
        this.terminal = Terminal.DEFAULT;
    }
    Application.prototype.init = function () {
        this.askForName();
    };
    Application.prototype.submitName = function () {
        var terminal = this.terminal;
        var buttonFunction = PageObject.SUBMIT_BUTTON.getClickEvent();
        var userInput = buttonFunction();
        terminal.println("");
        terminal.println(this.evaluateName(userInput, "Alice", "Bob"));
        terminal.println("");
        this.askForName();
    };
    Application.prototype.evaluateName = function (nameToEvaluate) {
        var validNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            validNames[_i - 1] = arguments[_i];
        }
        for (var _a = 0, validNames_1 = validNames; _a < validNames_1.length; _a++) {
            var name_1 = validNames_1[_a];
            var lCaseNameToEvaluate = nameToEvaluate.toLowerCase();
            var lCaseName = name_1.toLowerCase();
            if (lCaseNameToEvaluate == lCaseName) {
                return "Hey there, " + nameToEvaluate + "!";
            }
        }
        return nameToEvaluate + "? Stranger Danger!!";
    };
    Application.prototype.askForName = function () {
        this.terminal.println("What is yer name?");
    };
    return Application;
}());
/// <reference path="Application.ts" />
var aliceBob = new Application();
aliceBob.init();
var Profile = (function () {
    function Profile(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (value) {
            this._balance = value;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
var Player = (function () {
    function Player(profile) {
        this.profile = profile;
    }
    Player.prototype.getProfile = function () {
        return this.profile;
    };
    Player.prototype.getName = function () {
        return this.profile.name;
    };
    Player.prototype.getId = function () {
        throw this.profile.id;
    };
    return Player;
}());
var GameEngine = (function () {
    function GameEngine(game) {
        this.game = game;
    }
    GameEngine.prototype.getGame = function () {
        return this.game;
    };
    return GameEngine;
}());
/**
 * An object representation of a button on a web-page
 */
var Button = (function () {
    function Button(id) {
        this.button = document.getElementById(id);
    }
    Button.prototype.click = function () {
        var clickEvent = this.getClickEvent();
        clickEvent();
        this.button.click();
    };
    return Button;
}());
/// <reference path="./Button.ts" />
var SubmitButton = (function (_super) {
    __extends(SubmitButton, _super);
    function SubmitButton() {
        return _super.call(this, "submit") || this;
    }
    SubmitButton.prototype.getClickEvent = function () {
        return function () {
            var terminal = Terminal.DEFAULT;
            var userInput = terminal.getStringInput();
            return userInput;
        };
    };
    return SubmitButton;
}(Button));
/// <reference path="./SubmitButton.ts" />
var PageObject = (function () {
    function PageObject() {
    }
    return PageObject;
}());
PageObject.TERMINAL = Terminal.DEFAULT;
PageObject.SUBMIT_BUTTON = new SubmitButton();
//# sourceMappingURL=app.js.map
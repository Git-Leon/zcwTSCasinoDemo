var AliceBob = (function () {
    function AliceBob() {
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    AliceBob.prototype.init = function () {
        this.askForName();
    };
    AliceBob.prototype.submitName = function () {
        this.displayEle.innerHTML += "<br/>";
        if (this.userInputEle.value.toLowerCase() == "bob" || this.userInputEle.value.toLowerCase() == "alice") {
            this.displayEle.innerHTML += "Greetings, " + this.userInputEle.value + "!";
        }
        else {
            this.displayEle.innerHTML += this.userInputEle.value + "? " + "Stranger Danger!!!";
        }
        this.displayEle.innerHTML += "<br/><br/>";
        this.askForName();
    };
    AliceBob.prototype.askForName = function () {
        this.displayEle.innerHTML += "What is your name?";
    };
    return AliceBob;
}());
/// <reference path="AliceBob.ts" />
var aliceBob = new AliceBob();
aliceBob.init();
var DisplayElement = (function () {
    function DisplayElement(id) {
        this.displayEle = document.getElementById(id);
    }
    DisplayElement.prototype.appendText = function (text) {
        this.displayEle.innerHTML += text;
    };
    DisplayElement.prototype.getValue = function () {
        return this.displayEle.value;
    };
    return DisplayElement;
}());
var Consolee = (function () {
    function Consolee() {
    }
    Consolee.prototype.Consolee = function () {
        this.outputElement = new DisplayElement("display");
        this.inputElement = new DisplayElement("user_input");
    };
    Consolee.prototype.print = function (val) {
        this.outputElement.appendText(val);
    };
    Consolee.prototype.println = function (val) {
        this.print(val + "<br>");
    };
    Consolee.prototype.getStringInput = function (prompt, event) {
        this.println(prompt);
        //while(!event.hasOccurred()) {
        //  wait();
        //}
        return this.inputElement.getValue();
    };
    Consolee.prototype.getFloatInput = function (prompt, event) {
        var stringInput = this.getStringInput(prompt, event);
        return parseFloat(stringInput);
    };
    Consolee.prototype.getIntegerInput = function (prompt, event) {
        var stringInput = this.getStringInput(prompt, event);
        return parseInt(stringInput);
    };
    return Consolee;
}());
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
//# sourceMappingURL=app.js.map
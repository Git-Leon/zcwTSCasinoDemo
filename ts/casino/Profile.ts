class Profile {
    private _id: number;
    private _name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }
}
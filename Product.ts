export class Product {
    constructor(
        private _productId: number,
        private _productName: string,
        private _category: string,
        private _manufacturer: string,
        private _description: string,
        private _price: number
    ){}

    public get ProductId(): number {
        return this._productId;
    }
    public set ProductId(value: number) {
        this._productId = value;
    }
    public get Price(): number {
        return this._price;
    }
    public set Price(value: number) {
        this._price = value;
    }
    public get Description(): string {
        return this._description;
    }
    public set Description(value: string) {
        this._description = value;
    }
    public get Manufacturer(): string {
        return this._manufacturer;
    }
    public set Manufacturer(value: string) {
        this._manufacturer = value;
    }
    public get Category(): string {
        return this._category;
    }
    public set Category(value: string) {
        this._category = value;
    }
    public get ProductName(): string {
        return this._productName;
    }
    public set ProductName(value: string) {
        this._productName = value;
    }
}
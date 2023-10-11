export class InductionComponent{
    material: string;
    uom?: string | any;
    materialDesc: string;
    materialQty: number;
    upperLimit: number;
    theoreticQuantity: number;
    totalQuantity:number;
    tolerance: number;
    sumQty: number;
    userDefQty: number;
    userDeleteQty: number;
    valueState: string;
    valueMessage: string;
    valueDeleteState: string;
    valueDeleteMessage: string
    constructor() {
        this.material = "";
        this.uom = "";
        this.materialDesc = "";
        this.materialQty = 0;
        this.upperLimit = 0;
        this.theoreticQuantity = 0;
        this.totalQuantity = 0;
        this.tolerance = 0;
        this.sumQty = 0;
        this.userDefQty = 0;
        this.userDeleteQty = 0;
        this.valueState = "Information";
        this.valueMessage = "";
        this.valueDeleteState = "Information";
        this.valueDeleteMessage = "";
    }
}
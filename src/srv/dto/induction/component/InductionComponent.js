"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InductionComponent = void 0;
class InductionComponent {
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
exports.InductionComponent = InductionComponent;

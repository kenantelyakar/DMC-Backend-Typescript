import {InductionComponent} from "./InductionComponent";

export class ComponentEntry {
    order: string;
    orderQuantity: number;
    bomQuantity: number;
    components : InductionComponent[];
    constructor() {
        this.order ="";
        this.orderQuantity = 0;
        this.bomQuantity = 0;
        this.components = [];
    }
}
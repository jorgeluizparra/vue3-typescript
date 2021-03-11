export type orderType = "sell" | "buy";

export interface newOrderInterface {
    productCode: string;
    orderType: orderType;
    volume: string;
};

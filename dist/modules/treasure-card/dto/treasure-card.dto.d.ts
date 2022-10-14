declare enum SLOT {
    ONE_HAND = "one_hand",
    TWO_HAND = "two_hand",
    HEAD = "head",
    FEET = "feet",
    BODY = "body",
    FREE = "free",
    DECK = "deck"
}
export declare class TreasureCardDTO {
    readonly forWho: string;
    name: string;
    description: string;
    cost: number;
    bonus: string;
    isBig: boolean;
    readonly slot: SLOT;
    readonly extraAction: string;
    readonly extraAdditionId: number;
}
export {};

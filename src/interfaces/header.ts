// Touple type is a fixes lenght array with pre defined data types
// const rgbColor: [ number, number, number] = [768, 895, 200];

// Enum type enable you to set friendly names to a set of values
// enum directions {
//     Up = 1,
//     Down = 2,
//     Left = 3,
//     Right = 4
// }

type fontColor = "primary" | "success" | "error";

export interface headerInterface {
    text: string;
    color: fontColor;
}
import * as namesFemale from "./names-female.json";
import * as namesMale from "./names-male.json";
import uniqueRandomArray = require("unique-random-array");

type Gender = "male" | "female";

const names = namesMale.concat(namesFemale);
const namesRnd = uniqueRandomArray(names);
const namesFemaleRnd = uniqueRandomArray(namesFemale);
const namesMaleRnd = uniqueRandomArray(namesMale);

export default function rndName(gender?: Gender): string {
    if (gender === "male") {
        return namesMaleRnd();
    }
    if (gender === "female") {
        return namesFemaleRnd();
    }
    return namesRnd();
}

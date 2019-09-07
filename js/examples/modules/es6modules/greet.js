//Individual export
const ninja = 'yoshi';
export const message = 'hello';

export function sayHi() {
    return message + ' ' + ninja;
}

//Grouped export
const samurai = 'maxy';
const swingIt = function() {
    return 'swing it ' + samurai;
}

export { swingIt, samurai };

//Named export
const personName = 'joshua';
export { personName as pii };

//Default export
export default function heyAll() {
    return `${ninja} and ${samurai} say hello`;
}


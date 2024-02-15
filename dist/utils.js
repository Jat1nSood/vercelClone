"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_id = void 0;
const maxLen = 5;
function generate_id() {
    let ans = "";
    const alphaNum = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 7, 8, 9, 0, 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        1, 2, 3, 4, 5, 6,];
    for (let i = 0; i < maxLen; i++) {
        ans += alphaNum[Math.floor(Math.random() * alphaNum.length)];
    }
    console.log(ans);
    return ans;
}
exports.generate_id = generate_id;

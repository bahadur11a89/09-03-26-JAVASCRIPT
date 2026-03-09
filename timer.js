function abcd() {
    let a = 12;
    return function () {
        console.log(a);
    };
}

let fnc = abcd();
fnc(); // Output: 12
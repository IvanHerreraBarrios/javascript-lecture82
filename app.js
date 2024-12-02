var romanToInt = function(s) {
    const double = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0
    let current_decimal = 0
    for(let i = 0; i < s.length; i++){
        let next = i < s.length - 1 ? s[i+1] : "B"
        let current_decimal = double[s[i] + next]

        if(!current_decimal){
            current_decimal = symbols[s[i]]
        } else {
            i += 1
        }

        result += current_decimal
    }

    return result
};

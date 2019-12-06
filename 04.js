let input_min = 265275;
let input_max = 781584;

let count = 0;

for (let i = input_min; i <= input_max; i++) {
    let digits = i.toString().split('')
    let flag = true
    let dbl_flag = false
    let j = 0
    while (flag && j < 6) {
        if (digits[j + 1] < digits[j]) flag = false
        if (!dbl_flag && digits[j + 1] === digits[j]) dbl_flag = true
        j++
    }
    if (dbl_flag && flag) {
        // console.log(i);
        count += 1
    }
}

console.log(count); // 960

// part ii
let count2 = 0
for (let i = input_min; i <= input_max; i++) {
    let digits = i.toString().split('')
    numbers = digits.map(d => {
        return Number(d)
    })
    let incr_flag = true
    let dbl_flag = false
    let j = 0
    while (incr_flag && j < 6) {
        if (numbers[j + 1] < numbers[j]) incr_flag = false
        if (!dbl_flag && numbers[j + 1] === numbers[j]) dbl_flag = true
        j++
    }
    if (incr_flag && dbl_flag) {
        let h = {}
        numbers.forEach(d => {
            !h[d] ? h[d] = 1 : h[d] += 1
        })
        let valid_flag = false
        for (key in h) {
            if (h[key] == 2) valid_flag = true
        }
        if (valid_flag) {
            count2 += 1
            console.log(i);
        }
    }
}

console.log(count2);  // 626
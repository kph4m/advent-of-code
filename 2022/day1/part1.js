const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    const lines = data.split('\r');

    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace('\n', '');
    }

    let max = 0
    let curSum = 0

    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === '') {
            if (curSum > max) {
                max = curSum
            }
            curSum = 0
        } else {
            curSum += parseInt(lines[i])
        }
    }

    console.log(max)
})

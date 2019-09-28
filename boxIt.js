const drawLine = function (string) {
    let num = string.length;
    let line = '━';
    for (i = 0; i < num; i++){
        string = string.concat(line)
    }
    return string;
}

const drawTopBorder = function (string) {
    let num = string.length;
    let corners = '┏┓';
    let line = '━';
    let newLine = ''

    newLine = corners.slice(0, 1) + line.repeat(num) + corners.slice(1);

    return newLine;
}


const drawMiddleBorder = function (string) {
    let num = string.length;
    let corners = '┣┫';
    let line = '━';
    let newLine = ''

    newLine = corners.slice(0, 1) + line.repeat(num) + corners.slice(1);

    return newLine;
}

const drawBottomBorder = function (string) {
    let num = string.length;
    let corners = '┗┛';
    let line = '━';
    let newLine = ''

    newLine = corners.slice(0, 1) + line.repeat(num) + corners.slice(1);

    return newLine;
}

const barsAround = function (string) {
    let bar = '┃';
    let newString = '';
    
    
    newString = bar + string;
    return newString;
}

const boxIt = function (string) {
    let box = '';
    let paddedString = '';
    

        if (typeof string === 'string') {
        box = `${drawTopBorder(string)}\n${barsAround(string)}┃\n${drawBottomBorder(string)}`;
        }

        else if (Array.isArray(string)) {
            const longest = string.reduce(function (a, b) {return a.length > b.length ? a : b;});
        

            for (i = 0; i < string.length; i++) {

                let padThis = barsAround(string[i]);
                
                
                    if (string === longest) {
                    paddedString = padthis + '┃'
                }
                
                    else if (string != longest) {
                    paddedString = padThis.padEnd(longest.length +1) + '┃';
                }
        
                if (string[i] == string[0]) {
                box = box + box.concat(`${drawTopBorder(longest)}\n${paddedString}\n${drawMiddleBorder(longest)}\n`)
                }
                else if (string[i] == string[string.length - 1]) {
                    box = box + `${paddedString}\n${drawBottomBorder(longest)}`
                }

                else {
                box = box + `${paddedString}\n${drawMiddleBorder(longest)}\n`;
        }

        } 
       return box;
    }
    
    return box;
    
}

let printBox = process.argv.slice(2);
console.log(boxIt(printBox))
function whatNumber(n) {
    let str = '';
    number = n;
    n += '';

    if (n == '0')
        return str += '';
    if (n == '1')
        return str += 'one';
    if (n == '2')
        return str += 'two';
    if (n == '3')
        return str += 'three';
    if (n == '4')
        return str += 'four';
    if (n == '5')
        return str += 'five';
    if (n == '6')
        return str += 'six';
    if (n == '7')
        return str += 'seven';
    if (n == '8')
        return str += 'eight';
    if (n == '9')
        return str += 'nine';
    if (n == '10')
        return str += 'ten';



    if (number > 99)
        return str += whatNumber(Math.trunc(number / 100)) + ' hundred';

    if (number < 100 && number > 19) {
        if (number >= 30 && number < 40)
            return str += 'thirty';
        else
            if (number >= 20 && number < 30)
                return str += 'twenty';
        else
            if (number >= 40 && number < 50)
                return str += 'forty';
        else
            if (number >= 50 && number < 60)
                return str += 'fifty';
        else
            if (number >= 80 && number < 90)
                return str += 'eighty';
        else
            return str += whatNumber(Math.trunc(number / 10)) + 'ty'
    }

    if (number > 10 && number < 20) {
        if (number == 11)
            return str += 'eleven';
        else
            if (number == 12)
                return str += 'twelve';
        else
            if (number == 13)
                return str += 'thirteen';
        else
            if (number == 15)
                return str += 'fifteen';
        else
            if (number == 18)
                return str += 'eighteen';
        else
            return str += whatNumber(number % 10) + 'teen';

    }       
}

module.exports = function toReadable(number) {
    if (number == 0)
        return 'zero';
    n = number;
    n += '';
    let temp = [];
    for (let i = 0; i < n.length; i++)
        temp[i] = (n[i] - '') * 10**(n.length - i - 1);

    let final = '';

    if (number % 100 < 20 && number % 100 > 10) {
        if (number < 100) {
            temp[0] += temp[1];
            temp[1] = 0;
        }
        else {
            temp[1] += temp[2];
            temp[2] = 0;
        }
        

    }

    for (let i = 0; i < n.length; i++) {
        final += whatNumber(temp[i]);
        if (i != n.length - 1 && temp[i + 1] != 0)
            final += ' ';
    }

    return final;
}

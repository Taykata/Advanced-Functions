function solution() {
    return {
        string: '',
        append(str) {
            this.string += str;
        },
        removeStart(n) {
            let strAsArr = this.string.split('');
            for (let i = 1; i <= n; i++) {
                let empty = strAsArr.shift();
            }
            this.string = strAsArr.join('');
        },
        removeEnd(n) {
            let strAsArr = this.string.split('');
            for (let i = 1; i <= n; i++) {
                let empty = strAsArr.pop();
            }
            this.string = strAsArr.join('');
        },
        print() {
            console.log(this.string);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
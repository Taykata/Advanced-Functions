function listProcessor(arr) {
    let result = [];

    const obj = {
        add(string) {
            result.push(string);
        },
        remove(string) {
            while(result.includes(string)) {
                let index = result.indexOf(string);
                result.splice(index, 1);
            }
        },
        print() {
            console.log(result.join(','));
        }
    }

    for (let token of arr) {
        const [command, str] = token.split(' ');
        obj[command](str);
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
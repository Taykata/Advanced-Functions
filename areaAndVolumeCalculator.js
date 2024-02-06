function solve(area, vol, input) {
    const data = JSON.parse(input);
    const result = [];
    const obj = {};
    
    for (let fig of data) {
        result.push({
            area: area.call(fig),
            volume: vol.call(fig)
        });
    }

    return result;
}

const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`;

console.log(solve(area, vol, data));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
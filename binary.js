document.addEventListener('DOMContentLoaded', () => {
    
    function getCurrentTimeAsArray() {    
        const now = new Date();
        return [
            now.getHours().toString().padStart(2, "0"),
            now.getMinutes().toString().padStart(2, "0"),
            now.getSeconds().toString().padStart(2, "0")
        ].join('').split('');
    }

    function convert() {
        const time_array = getCurrentTimeAsArray();   
        const divMapping = ['H8', 'H4', 'H2', 'H1', 'M8', 'M4', 'M2', 'M1', 'S8', 'S4', 'S2', 'S1'];

        for (let i = 0; i < time_array.length; i++) {
            let binaryString = parseInt(time_array[i]).toString(2).padStart(4, "0");
            for (let bit = 0; bit < 4; bit++) {
                const divKey = divMapping[bit + 4 * Math.floor(i / 2)] + (i % 2 + 1);
                const div = document.querySelector(`.${divKey}`);
                if (binaryString[bit] === '1') {
                    div.classList.add("on");
                } else {
                    div.classList.remove("on");
                }
            }
        }
    }

    setInterval(convert, 1000);
});

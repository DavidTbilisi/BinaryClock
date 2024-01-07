document.addEventListener('DOMContentLoaded', () => {
    
    function getCurrentTimeAsArray() {    
        // get current time 
        var d = new Date(); 

        // get hours, minutes, seconds  
        var h = d.getHours();
        var m = d.getMinutes();   
        var s = d.getSeconds();
    
        // separate each digit to array 
        h = h.toString().padStart(2, "0").split(""); 
        m = m.toString().padStart(2, "0").split("");
        s = s.toString().padStart(2, "0").split("");   
    
        // flatten h, m, s to one array   
        return h.concat(m, s);
    }

    function convert() {
        let time_array = getCurrentTimeAsArray();   

        // get each digit element
        let divs = {
            H81: document.querySelector(".H81"),
            H82: document.querySelector(".H82"),
            M81: document.querySelector(".M81"),
            M82: document.querySelector(".M82"),
            S81: document.querySelector(".S81"),
            S82: document.querySelector(".S82"),
            H41: document.querySelector(".H41"),
            H42: document.querySelector(".H42"),
            M41: document.querySelector(".M41"),
            M42: document.querySelector(".M42"),
            S41: document.querySelector(".S41"),
            S42: document.querySelector(".S42"),
            H21: document.querySelector(".H21"),
            H22: document.querySelector(".H22"),
            M21: document.querySelector(".M21"),
            M22: document.querySelector(".M22"),
            S21: document.querySelector(".S21"),
            S22: document.querySelector(".S22"),
            H11: document.querySelector(".H11"),
            H12: document.querySelector(".H12"),
            M11: document.querySelector(".M11"),
            M12: document.querySelector(".M12"),
            S11: document.querySelector(".S11"),
            S12: document.querySelector(".S12"),
        };

        const binaryWeights = ['8', '4', '2', '1'];
        const positions = ['1', '2'];
        let timeIndex = 0;

        ['H', 'M', 'S'].forEach((unit) => {
            positions.forEach((position) => {
                let binaryString = parseInt(time_array[timeIndex]).toString(2).padStart(4, "0");
                binaryWeights.forEach((weight, index) => {
                    let divKey = unit + weight + position;
                    if (binaryString[index] === '1') {
                        divs[divKey].classList.add("on");
                    } else {
                        divs[divKey].classList.remove("on");
                    }
                });
                timeIndex++;
            });
        });
    }

    setInterval(convert, 1000);
});

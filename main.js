// shortcut to document.querySelectorAll  
const get = (selector) => document.querySelectorAll(selector);      

// helper function to convert decimal to binary with padding 4 digits
const toBinary = (num) => parseInt(num).toString(2).padStart(4, "0");  

// time to percentage
const timeToPercent = (time) => (time / 9) * 100;  


function binaryStringToCircle(string) {
    return string.replace(/0/g, "○").replace(/1/g, "●");
}

function getCurrentTimeAsArray() {    
        // get current time 
        var d = new Date(); 

        // get hours, minutes, seconds  
        var h = d.getHours();
        var m = d.getMinutes();   
        var s = d.getSeconds();
    
        // seperate each digit to array 
        h = h.toString().padStart(2, "0").split("") 
        m = m.toString().padStart(2, "0").split("")
        s = s.toString().padStart(2, "0").split("")   
    
        // flatten h, m, s to one array   
        return h.concat(m, s)
}

function convert() {

    let time_array = getCurrentTimeAsArray();   

    // get each digit element
    let standardView = get(".s");
    let binaryView = get(".b");
    let circle = get(".c");    
    let percents = get(".p");    


    // set each digit element to current time
    for (let i = 0; i < time_array.length; i++) {
      let binaryString = toBinary(time_array[i]);

      standardView[i].innerHTML = time_array[i];
      binaryView[i].innerHTML = binaryString;
      circle[i].innerHTML = binaryStringToCircle(binaryString); 
      
    }
}


convert();  

setInterval(convert, 1000);
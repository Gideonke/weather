document.getElementById('fahrenheit').addEventListener("input",function(e){
let fahrenheit=parseFloat(e.target.value)
document.getElementById('celcius').value= ((fahrenheit - 32) *5/9).toFixed(2);
document.getElementById('kelvin').value= ((fahrenheit + 459.67) *5/9).toFixed(2);

})
document.getElementById('kelvin').addEventListener("input",function(e){
    let kelvin=parseFloat(e.target.value)
    document.getElementById('fahrenheit').value= (kelvin - 273.15).toFixed(2);
    document.getElementById('celcius').value= (kelvin * 9/5 - 459.67).toFixed(2);
    
    })
    document.getElementById('celcius').addEventListener("input",function(e){
        let celcius=parseFloat(e.target.value)
        document.getElementById('fahrenheit').value= (celcius * 9/5 + 32).toFixed(2);
        document.getElementById('kelvin').value= (celcius +273.15).toFixed(2);
        
        })
        
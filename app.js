
document.getElementById('btn').addEventListener('click', function() {
    
    //criar numero HEX e transformar em String com # na frente
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let colorSelect = '#' + randomColor;
    let nameColor = ntc.name(colorSelect)[1];

    if (window.location.pathname.includes("hexad.html")) {
        document.getElementsByTagName('span')[0].innerText = (colorSelect);
        document.getElementById('main-color').style.backgroundColor = colorSelect;


    }else if (window.location.pathname.includes("index.html")) {
        document.getElementsByTagName('span')[0].innerText = (nameColor);
        document.getElementById('main-color').style.backgroundColor = colorSelect;
    }
})


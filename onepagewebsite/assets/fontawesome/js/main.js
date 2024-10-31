// Dark mode
function darkmode() {
    document.getElementById('theme').setAttribute('href', '../assets/css/dark.css'); 
    document.getElementById('toggle').className='fa-solid fa-toggle-off toggleon';
    document.getElementById('topwhite').src='../assets/images/shape-top-black-80.png';
    document.getElementById('bottomwhite').src='../assets/images/shape-bottom-black-80.png';
    document.getElementById('topgrey').src='../assets/images/shape-top-dark-grey-80.png';
    document.getElementById('bottomgrey').src='../assets/images/shape-bottom-dark-grey-80.png';
    document.getElementById('topgrey2').src='../assets/images/shape-top-dark-grey-80.png';
    document.getElementById('bottomgrey2').src='../assets/images/shape-bottom-dark-grey-80.png';
}

// Light Mode
function lightmode() {
    document.getElementById('theme').setAttribute('href', '../assets/css/light.css'); 
    document.getElementById('toggle').className='fa-solid fa-toggle-on toggleon';
    document.getElementById('topwhite').src='../assets/images/shape-top-white-80.png'
    document.getElementById('bottomwhite').src='../assets/images/shape-bottom-white-80.png'
    document.getElementById('topgrey').src='../assets/images/shape-top-grey-80.png'
    document.getElementById('bottomgrey').src='../assets/images/shape-bottom-grey-80.png'
    document.getElementById('topgrey2').src='../assets/images/shape-top-grey-80.png'
    document.getElementById('bottomgrey2').src='../assets/images/shape-bottom-grey-80.png'
}
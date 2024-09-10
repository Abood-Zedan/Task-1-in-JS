
function increaseFont() {
    document.querySelector('h2').style.fontSize = '35px';
    document.querySelector('p').style.fontSize = '25px';
}
function decreaseFont() {
    document.querySelector('h2').style.fontSize = '20px';
    document.querySelector('p').style.fontSize = '12px';
}
function resetFont() {
    document.querySelector('h2').style.fontSize = '24px';
    document.querySelector('p').style.fontSize = '16px';
}
document.querySelector('.addBut').onclick = increaseFont;
document.querySelector('.subBut').onclick = decreaseFont;
document.querySelector('.resetBut').onclick = resetFont;
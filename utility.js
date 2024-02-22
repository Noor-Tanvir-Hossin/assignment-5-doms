function getbyid(id){
    const element=document.getElementById(id)    
    return element;
}
function setElment(id){
    const adde=document.getElementById(id)
        adde.classList.add('text-[#1DD100]')
}
function convertedVlue(id){
    const value=document.getElementById(id).innerText
    const convert=parseInt(value)
    return convert;
}
function disabledBtn(id) {
    document.getElementById(id).disabled = true;

}
function enableBtn(id) {
    document.getElementById(id).disabled = false;

}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
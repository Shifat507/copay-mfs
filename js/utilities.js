function moveToOtherPage (path){
    
        window.location.href = path;
    
}

function getInputFieldById (id){
    const inputVAlue = Number(document.getElementById(id).value);
    return inputVAlue;
}

function getTextFieldValueById (id){
    const textValue = Number(document.getElementById(id).innerText);
    return textValue;
}

function resetInputField(id){
    document.getElementById(id).value = '';
}


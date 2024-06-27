
//Encription camp
const encriptionMap = {
    'a': 'z', 'b': 'y', 'c': 'x', 'd': 'w', 'e': 'v', 'f': 'u', 'g': 't', 'h': 's', 'i': 'r', 'j': 'q',
    'k': 'p', 'l': 'o', 'm': 'n', 'n': 'm', 'o': 'l', 'p': 'k', 'q': 'j', 'r': 'i', 's': 'h', 't': 'g',
    'u': 'f', 'v': 'e', 'w': 'd', 'x': 'c', 'y': 'b', 'z': 'a'
};

const decriptionMap = Object.fromEntries(
    Object.entries(encriptionMap).map(([key, value]) => [value, key])
);

//End encription camp

//Before start function
function beforeStart() {
    //delete the encripted message area
    document.querySelector('#textArea_response').value='';
    document.querySelector('#textArea_response').style.display = 'none';
    //Clean the ingrese texto aqui area
    document.querySelector('#textArea_query').value='';
    //Hide the copy button
    document.querySelector('#copyEncriptedButton').style.display='none';
}


//Main function that encript a valid text or tell the user that the inserted text is not valid.

function encriptText(normalText) {
    let textFromTextArea=copyTextFromTextArea();
    document.querySelector('#copyEncriptedButton').value='Copiar';
    if (checkRules(textFromTextArea)){
        //Function that gives the encripted text
        let encriptedText=encripter(textFromTextArea);
        //Function that show the encripted text in screen
        showEncriptedMessage(encriptedText);
    }else{
        alert('Mensaje no valido.Solo letras minisculas y sin acento, max 500 caracteres');
        document.querySelector('#textArea_query').value='';
    }
}

//Function that encript the text
function encripter(validTextToEncript) {
        // Paso 1: Separar las palabras en un array
        const wordsArray = validTextToEncript.split(' ');

        // Paso 2: Encriptar cada palabra

        const transformedArray = wordsArray.map(word => {
            return word.split('').map(char => encriptionMap[char] || char).join('');
        });
    
        // Paso 3: Concatenar nuevamente todo usando el delimitador como espacio
        const resultText = transformedArray.join(' ');
    
        return resultText;

}



//Function that unencript the text
function unEncriptText(encriptedText) {
    let textFromTextArea=copyTextFromTextArea();
    console.log("copiado"+textFromTextArea);
    document.querySelector('#encriptButton').value='Encriptar';
    document.querySelector('#copyEncriptedButton').value='Copiar';
    if (checkRules(textFromTextArea)){
        //Function that gives the encripted text
        let unEncriptedText=unEncripter(textFromTextArea);
        //Function that show the encripted text in screen
        showEncriptedMessage(unEncriptedText);
    } else{
        alert('Mensaje no valido.Solo letras minisculas y sin acento, max 500 caracteres');
        document.querySelector('#textArea_query').value='';
    }
}

//Funcion that encript the text
function unEncripter(encryptedText) {
        // Paso 1: Separar las palabras en un array
        const encryptedArray = encryptedText.split(' ');

        // Paso 2: Desencriptar cada palabra (por ejemplo, revertir la transformación)
        const decryptedArray = encryptedArray.map(word => {
            return word.split('').map(char => decriptionMap[char] || char).join('');
        });
        
        // Paso 3: Concatenar nuevamente todo usando el delimitador como espacio
        const resultText = decryptedArray.join(' ');
    
        return resultText;
}

//Function that check if the text has special characters, uppercase and commas. If the text is not valid also trows an alarm
function checkRules(textToCheck) {
    // Verifica si la cadena contiene solo minúsculas y no tiene comas, tildes ni caracteres especiales
    if (/^[a-z\s]+$/.test(textToCheck) && !/,/.test(textToCheck) && !/[^\w\s]/.test(textToCheck)) {
        //alert("La cadena es válida: solo contiene minúsculas y no tiene comas, tildes ni caracteres especiales.");
        return true;
    } else {
        //alert("La cadena no es válida: debe contener solo minúsculas y no tener comas, tildes ni caracteres especiales.");
        document.querySelector('#textArea_query').value='';
        return false;
    }
}

//Function that copy the text from the text area of the user input
function copyTextFromTextArea() {
    return document.querySelector('#textArea_query').value;
};

//Function to copy text to clipboard
function copyTextFromEncriptedArea() {
        const texto = document.querySelector('#textArea_response').value;
    try {
        navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
        document.querySelector('#copyEncriptedButton').value='Contenido copiado al portapapeles';
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

//Function that show the encripted message in the encripted message text area
function showEncriptedMessage(encriptedMessage) {
    //First i have to hide the image of the muneco and message in the encripted area
    document.querySelector("#muneco_con_lupa").style.display = "none";
    document.querySelector("#first_message_encripted").style.display = "none";
    document.querySelector("#second_message_encripted").style.display = "none";
    document.querySelector("#textArea_response").style.display='';
    document.querySelector("#textArea_response").value=encriptedMessage;
    //Enable the copy button
    document.querySelector("#copyEncriptedButton").style.display="";
};

//Run before start the page
beforeStart();



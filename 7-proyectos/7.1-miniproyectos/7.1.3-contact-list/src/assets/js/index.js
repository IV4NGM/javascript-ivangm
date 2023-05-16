// const ulElement = document.getElementById("contacts-ul");
const ulElement = document.querySelector('#contacts-ul');
let contacts = [];
const searchingInput = document.querySelector('#studentInput');

function renderContacts(contactsArray) {
    let i = 0;
    while(i<contactsArray.length){
        const li = document.createElement('li');
        const cardDiv = document.createElement('li');
        const photoDiv = document.createElement('div');
        const img = document.createElement('img');
        const textDiv = document.createElement('div');


        cardDiv.classList.add('card');
        photoDiv.classList.add('photo');

        let photo = 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-512.png';
        if(contactsArray[i].photo){
            photo = contactsArray[i].photo
        }
        img.setAttribute('src', photo);

        textDiv.classList.add('text');
        textDiv.textContent = contactsArray[i].name;

        ulElement.appendChild(li);
        li.appendChild(cardDiv);
        cardDiv.appendChild(photoDiv);
        cardDiv.appendChild(textDiv);
        photoDiv.appendChild(img);

        i++;
    }
}

function getDataFromJson() {
    fetch('../api/characters.json')
    .then(response => response.json())
    .then(data => normalizeData(data))
    .then(cleanData => renderContacts(cleanData))
    console.log("Data from JSON")
}

function normalizeData(data) {
    for(let i = 0; i < data.length; i++){
        const newContact = {
            name : data[i].name,
            photo : data[i].image
        }
        contacts.push(newContact);
    }
    return contacts
}

function catchEvent(event){
    const inputText = event?.target?.value.toLocaleLowerCase() || '';
    let contactsSearch = [];
    function normalizeDataInput(data) {
        for(let i = 0; i < data.length; i++){
            if(data[i].name.toLocaleLowerCase().includes(inputText)){
                const newContact = {
                    name : data[i].name,
                    photo : data[i].image
                }
                contactsSearch.push(newContact);
            }
        }
        return contactsSearch
    }
    // Elimina todos los hijos de ulElement para luego crear solo los necesarios
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
    fetch('../api/characters.json')
    .then(response => response.json())
    .then(data => normalizeDataInput(data))
    .then(cleanData => renderContacts(cleanData))
}

searchingInput.addEventListener('keyup', catchEvent);

getDataFromJson();
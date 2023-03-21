function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function cancelPlayerButton() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

// function confirmPlayerButton() {}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Username invalid!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    cancelPlayerButton();
    
}

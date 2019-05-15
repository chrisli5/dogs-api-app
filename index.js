function displayImg(arr) {
    for(var i = 0; i < arr.length; i++) {
        $('#images').append(`<img src=${arr[i]} alt="dog image" />`)
    }
}

function getDogs(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => {
            displayImg(responseJson.message);
        })
        .catch(e => {
            alert(`Error getting dog by breed!`);
        });
}

function getDogBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            $('#images').append(`<img src=${responseJson.message} alt="dog image" />`)
        });
}

function mainApp() {
    $('#dogForm').submit(function(event) {
        event.preventDefault();
        $('#images').empty();
        const num = $('#number').val();
        getDogs(num);
    })

    $('#breedForm').submit(function(event) {
        event.preventDefault();
        $('#images').empty();
        const breed = $('#text').val();
        getDogBreed(breed);
    })
}

$(mainApp);
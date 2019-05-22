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
            alert('Error fetching images!');
        });
}

function getDogBreed(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.status === "success") {
                $('#images').append(`<img src=${responseJson.message} alt="dog image" />`)
            } else {
                alert('Breed not found!');
            }
        })
        .catch(e => {
            alert('Error fetching images!');
        })
}

function mainApp() {
    $('#dogForm').submit(function(event) {
        event.preventDefault();
        $('#images').empty();
        const num = $('#number').val();
        
        if(num >= 3 && num <= 50) {
            getDogs(num);
        } else {
            alert('Value must be between 3 and 50.');
        };
    })

    $('#breedForm').submit(function(event) {
        event.preventDefault();
        $('#images').empty();
        const breed = $('#text').val();
        getDogBreed(breed);
    })
}

$(mainApp);
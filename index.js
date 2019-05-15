function displayImg(arr) {
    for(var i = 0; i < arr.length; i++) {
        $('#images').append(`<img src=${arr[i]} alt="dog image" />`)
    }
}

function getDogs(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson.message);
            displayImg(responseJson.message);
        })
        .catch(e => {
            alert(`Error getting dogs!`);
        });
}

function mainApp() {
    $('form').submit(function(event) {
        event.preventDefault();
        const num = $('#text').val();
        getDogs(num);
    })
}

$(mainApp);
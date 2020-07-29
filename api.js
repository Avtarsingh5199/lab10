//Selecting the elemets by id and class name
var buttonlast = document.getElementById('button')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

var inputValue = document.querySelector('.inputValue')
//adding a event listner to perform a fetching function on clicking a button

buttonlast.addEventListener('click', function () {
    // Call the fetch function passing the url of the API as a parameter
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=651e85f7100681b2b4f6104f4bacc8c1')
        //code for handling the data you get from the API
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            desc.innerHTML = 'Description-: ' + descValue;
            temp.innerHTML = 'Temperature-: ' + parseInt(tempValue - 273.15) + ' C`';

        })
        // if the server returns any errors, it will show this msg.
        .catch(err => alert("Please fill Correct Name!"))
})
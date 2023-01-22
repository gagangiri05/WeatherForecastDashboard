$(document).ready(function() {
    $('#btn1').on('click', function(event) {
        
        navigator.geolocation.getCurrentPosition((position) => {
            
            let cityInput = position.coords.latitude +","+ position.coords.longitude;
        clearcells();
        displayWeather(cityInput);
        });
    });
    // function to get user input
    $('#btn').on('click', function(event) {
        // Prevents default action
        event.preventDefault();
        
        // input
    
            let cityInput = $('#input').val();
            // Calling in function
        if (cityInput.length !=0) { 
            clearcells();
            displayWeather(cityInput);
        } else {
            alert("Please enter city name or use the device location button to get forecast for the current location");
        }
    });
    function displayWeather(cityInput) {


        // Api call weather / cityInput / units / my api key / currentDay variable
        let currentDay = 'https://weatherdbi.herokuapp.com/data/weather/'
        + cityInput;

        $.ajax({
            url: currentDay,
            method: 'GET',
        }).then(function(weatherResponse) {
            
            if (weatherResponse.status==='fail')
            {
                alert("invalid query");
            }else{
            // Weather icon variable / from api weather url
            let weatherIcon = weatherResponse.currentConditions.iconURL;

            //
            let weatherIcond1 = weatherResponse.next_days[0].iconURL;
            let weatherIcond2 = weatherResponse.next_days[1].iconURL;
            let weatherIcond3 = weatherResponse.next_days[2].iconURL;
            let weatherIcond4 = weatherResponse.next_days[3].iconURL;
            let weatherIcond5 = weatherResponse.next_days[4].iconURL;
            let weatherIcond6 = weatherResponse.next_days[5].iconURL;
            let weatherIcond7 = weatherResponse.next_days[6].iconURL;

            // Appending daily weather details to HTML / icon, temperature, humidity, and wind speed
            $('#daily-weather').append(
                "<div class='col s12 m6'>" 
                + "<h2 class='daily'>" + weatherResponse.region + "&nbsp"+ "</h2>"
                +"<ul class='daily'>"+"<img src='"+ weatherIcon+"'>" +"</ul>"
                + "<ul class='daily'>" + "Temperature: " + weatherResponse.currentConditions.temp.f + " °F" + "</ul>" 
                + "<ul class='daily'>" + "Humidity: " + weatherResponse.currentConditions.humidity + "</ul>" 
                + "<ul class='daily'>" + "Wind Speed: " + weatherResponse.currentConditions.wind.mile +" mph" + "</ul>" 
                + "<ul class='daily'>" + "Condition: " + weatherResponse.currentConditions.comment + "</ul>"
                + "</div>"
            );

            $('#seven-days').append(
                "<div class='col-md-12'>" + "<h2>" + "7-Day Forecast:" + "</h2>"
            );

            // Appending day one weather card
            $('#day-1').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[0].day + "</div" 
                + "<div class='card-info'>" + "<img src='" + weatherIcond1 + "'>" + "</div>" 
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[0].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[0].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[0].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-2').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[1].day + "</div" 
                + "<div class='card-info'>" + "<img src='" + weatherIcond2 + "'>" + "</div>" 
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[1].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[1].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[1].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-3').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[2].day + "</div"
                + "<div class='card-info'>" + "<img src='" + weatherIcond3 + "'>" + "</div>"  
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[2].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[2].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[2].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-4').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[3].day + "</div"
                + "<div class='card-info'>" + "<img src='" + weatherIcond4 + "'>" + "</div>"   
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[3].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[3].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[3].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-5').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[4].day + "</div"
                + "<div class='card-info'>" + "<img src='" + weatherIcond5 + "'>" + "</div>"   
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[4].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[4].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[4].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-6').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[5].day + "</div"
                + "<div class='card-info'>" + "<img src='" + weatherIcond6 + "'>" + "</div>"   
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[5].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[5].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[5].min_temp.f+"°F"+"</div>"
                + "</div>"
            );
            $('#day-7').append(
                "<div class='card col-s12-m6'>" 
                + "<div class='card-body'>" 
                + "<div class='card-header'>" + weatherResponse.next_days[6].day + "</div"
                + "<div class='card-info'>" + "<img src='" + weatherIcond7 + "'>" + "</div>"   
                + "<div class='card-info'>" + "Condition: " 
                + weatherResponse.next_days[6].comment + "</div>" 
                + "<div class='card-info'>" + "Max Temp:" 
                + weatherResponse.next_days[6].max_temp.f+"°F" +"</div>" 
                +"<div class='card-info'>" + "Min Temp:"
                + weatherResponse.next_days[6].min_temp.f+"°F"+"</div>"
                + "</div>"
            );


            } 
        });
        
    }
    function clearcells(){// Emptying previous data
        $('#daily-weather').empty();
        $('#seven-days').empty();
        $('#day-1').empty();
        $('#day-2').empty();
        $('#day-3').empty();
        $('#day-4').empty();
        $('#day-5').empty();
        $('#day-6').empty();
        $('#day-7').empty();
        };

    });

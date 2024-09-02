$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
        headers: {
            'x-rapidapi-key': '83616e7747msh25ce7a293f805ccp13f8adjsn56dbecb0af22',
            'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
        },
        dataType: "json",
        success: function (response) {
            $.each(response, function (name, value) { 
                let option = `<option value="${value.symbol}">${value.name}</option>`
                $("#usd").append(option)
                $("#dollar").append(option)
               
                 
            });
            
        }
    });
    
});

$("button").click(function(){
    let text = $("input").val()
    let from = $("#dollar").val()
    let to = $("#usd").val()

    $.ajax({
        type: "get",
        url: `https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from}&to=${to}&amount=${text}`,
        headers: {
            'x-rapidapi-key': '83616e7747msh25ce7a293f805ccp13f8adjsn56dbecb0af22',
            'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
        },
        dataType: "json",
       
        success: function (response) {
            $("h3").text(response.result.amountToConvert);
            
        },
        error: function(err){
            console.log(err);
            
        }
    });
})
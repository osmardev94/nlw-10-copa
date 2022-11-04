function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}


let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}                      
            </ul>
        </div>
    `
}


document.querySelector('#cards').innerHTML = 
        
    createCard('24/11', 'quinta', createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'southKorea') + createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +

    createCard('28/11', 'segunda', createGame('cameroon', '07:00', 'serbia') + createGame('southKorea', '10:00', 'ghana') + createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay')) +

    createCard('02/12', 'sexta', createGame('southKorea', '12:00', 'portugal') + createGame('ghana', '12:00', 'uruguay') + createGame('serbia', '16:00', 'switzerland') + createGame('brazil', '16:00', 'cameroon'))


$(".colors").find("div").each(function() {
    $(this).on("click", function() {
    var color = $(this).attr("class");
    var select = $(this).attr("select", true);
    var cards = $('#cards').html(); 
    var header = $(this).attr("data-header") ? $(this).attr("data-header") : 'header';
    
    $(".colors").find("div").removeAttr("select");
    $(this).attr("select", true);
    $("body").removeAttr("class").addClass(color);
    $("#cards").html(cards);
    $("header img").attr("src", './assets/'+header+'.svg').attr("style", "width: 9rem;");
    
    localStorage.setItem('color', `${color}`);
    localStorage.setItem('header', `${header}`);
    
    })
});
    
$(document).ready(function() {
    var color = localStorage.getItem('color');
    var header = localStorage.getItem('header');
    var headImg = header ? ''+header+'' : 'header';
    
    $(".colors").find("div[class='yellow']").attr("select", true);
    $("body").removeAttr("class").addClass(color);
    $("header img").attr("src", './assets/'+headImg+'.svg').attr("style", "width: 9rem;");
        
    if(color == color) {
        $(".colors").find("div").removeAttr("select");
        $(".colors").find("div[class='"+color+"']").attr("select", true)
    }
})
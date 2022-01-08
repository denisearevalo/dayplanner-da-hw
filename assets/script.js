
var timeDisplayEl = $('#time-display')
var saveBtn =

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}
displayTime();

// $( function() {
//     $( "#progressbar" ).progressbar({
//       value: 
//     });
// } );

function renderLastInput(){
    var task = localStorage.getitem('.taskInput')
}
renderLastInput;


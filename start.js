function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vQgDFPpnHxQzQ44Jo9LtAea4AiACKOixhwg9Zop2auH1TgtEAp5--ugcEllU03XzHPaSiXHwsRA1Vtl/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

const RoccatVulcan = require('roccatvulcan');
const FruitSalat = require('./fruitsalad')


//Init Fruit Salad Game
var game = new FruitSalat();

//Init Keyboard
var keyboard = new RoccatVulcan({
  'layout': 'ch-de',
  onData: data => {
    if(data.state === 0)
      return

    game.keyPress(data.key)
  },
  ready: () => {
    console.log("ready")

    //Set Keyboard to Game
    game.setKeyboard(keyboard);

    //Remove every LED
    keyboard.fillAll('#000000')

    //Start continuous rendering
    keyboard.renderStart(50);
  }
});
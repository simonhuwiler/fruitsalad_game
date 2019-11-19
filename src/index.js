const RoccatVulcan = require('roccatvulcan');
const FruitSalat = require('./fruitsalad')
var readline = require('readline');


//Init Fruit Salad Game
var game = new FruitSalat();

//Init Keyboard
var keyboard = new RoccatVulcan({
  'layout': 'ch-de',
  onData: data => {
    if(data.state === 0)
      return

    game.keyPress(data.key);
    
    var score = game.getScore();

    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)

    process.stdout.write(`Points:                ${score.points}\n`);
    process.stdout.write(`Tomatoes smashed:      ${score.tomatoesSmashed}\n`);
    process.stdout.write(`Healthy fruits KILLED: ${score.fruitsSmashed}\n`);
  },
  ready: () => {
    console.log("ready")

    //Set Keyboard to Game
    game.setKeyboard(keyboard);

    //Remove every LED
    keyboard.fillAll('#000000')

    //Start continuous rendering
    keyboard.renderStart(50);

    //Start Game
    game.start();
    
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
    process.stdout.write("GAME STARTED! LETS SMASH!");

  }
});
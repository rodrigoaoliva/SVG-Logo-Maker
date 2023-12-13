const { getUserInput } = require('./lib/userInterface');
const { writeToFile } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');

const generateLogo = async () => {
    const userInput = await getUserInput();
  
    let shape;
    switch (userInput.shape) {
      case 'Circle':
        shape = new Circle();
        break;
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        console.error('Invalid shape');
        return;
    }

    shape.setColor(userInput.shapeColor);
    shape.setText(userInput.text);

    const svgContent = shape.render();

};
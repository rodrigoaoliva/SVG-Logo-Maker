const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
    const shape = new Triangle(); 
    shape.setColor("blue");       
    shape.setText("Test");        
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white" xml:space="preserve">Test</text></svg>');
  });

  test('Circle renders correctly', () => {
    const shape = new Circle();   
    shape.setColor("red");        
    shape.setText("Hello");       
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white" xml:space="preserve">Hello</text></svg>');
  });

  test('Square renders correctly', () => {
    const shape = new Square();   
    shape.setColor("green");      
    shape.setText("World");       
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white" xml:space="preserve">World</text></svg>');
  });
  
class Shape {
    constructor() {
      this.color = "";
      this.text = "";
    }
  
    setColor(color) {
      this.color = color;
    }


    setText(text) {
        this.text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    render() {
    }


}

class Triangle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="140" font-size="45" text-anchor="middle" fill="white">${this.text}</text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}" />
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
      </svg>`;
    }
  }

  module.exports = { Shape, Triangle, Circle, Square };

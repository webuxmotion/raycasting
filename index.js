let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 1000;

function setup() {
  createCanvas(innerWidth, innerHeight);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls.push(new Boundary(x1, y1, x2, y2));
  }
  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));
  
  particle = new Particle();
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.show();
  //particle.update(mouseX, mouseY);
  particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
  
  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let intersectionPoint = ray.getIntersectionPoint(wall);

  // if (intersectionPoint) {
  //   fill(255);
  //   ellipse(intersectionPoint.x, intersectionPoint.y, 8, 8);
  // }

  text(floor(frameRate()), 100, 100);
}
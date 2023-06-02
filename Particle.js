class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for (let i = 0; i < 360; i += 1) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;

      for (let wall of walls) {
        const point = ray.getIntersectionPoint(wall);
        
        if (point) {
          const dist = p5.Vector.dist(this.pos, point);
          if (dist < record) {
            record = dist;
            closest = point;
          }
        }
      }
      if (closest) {
        stroke(255, 50);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 10);

    for (let ray of this.rays) {
      ray.show();
    }
  }
}
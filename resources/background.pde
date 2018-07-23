ArrayList arr;
boolean flag=true;
int distance=125;
void setup()
{
  size(1280,720);
  smooth();
  arr = new ArrayList();
  for (int i=0;i<50;i++)
  {
    Particle P = new Particle();
    arr.add(P);
  }
  frameRate(15);
}
void mousePressed()
{
}
void draw()
{
  background(0,0,0,0);
  for (int i=0;i<arr.size();i++)
  {
    Particle Pn1 = (Particle) arr.get(i);
    Pn1.display();
    Pn1.update();
    for (int j = i + 1; j < arr.size(); j++) {
      Particle Pn2 = (Particle) arr.get(j);
      Pn2.update();
      if (dist(Pn1.x, Pn1.y, Pn2.x, Pn2.y)< distance)
      {
        for (int k = j + 1; k < arr.size(); k++) {
          Particle Pn3 = (Particle) arr.get(k);
          if (dist(Pn3.x, Pn3.y, Pn2.x, Pn2.y)< distance) {
            if (flag) {
              stroke(255, 10);
              fill(Pn3.c, 95); // method to access the class property
            }
            else {
              noFill();
              strokeWeight(1);
              stroke(0, 20);
            }
            beginShape(LINES);
            stroke(255,255,255,50)
            vertex(Pn1.x, Pn1.y);
            vertex(Pn2.x, Pn2.y);
            vertex(Pn3.x, Pn3.y);
            endShape();
          }

          Pn3.update();
        }
      }
    }
  }
}

class Particle {
  float x, y, r;
  color c;
  int i=1, j=1;
  Particle( )
  {
    x = random(0, width);
    y = random(0, height);
    r = random(1,3);
    c = color(255,255,255,100);
  }

  void display()
  {
    pushStyle();
    noStroke();
    fill(c);
    ellipse(x, y, r, r);
    popStyle();
  }

  void update()
  {
    x = x + j*0.005;
    y = y + i*0.005;
    if (y > height-r) i=-1;
    if (y < 0+r) i=1;
    if (x > width-r) j=-1;
    if (x < 0+r) j=1;
  }
}

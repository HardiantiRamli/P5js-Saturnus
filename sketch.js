// Contoh dasar pembuatan objek 3D dengan p5.js
function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}
 
function draw() {
  // Mengatur background
  background(200);
 
  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);
 
  // Mengatur rotasi objek berdasarkan waktu
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
 
  // Menambahkan kotak 3D
  push();
  fill(245, 245, 223); // Warna ungu
  ellipsoid(40); // Membuat kotak berukuran 100x100x100
  pop();
 
  // Menambahkan bola 3D
  push();
  translate(0, 0, 0); // Menggeser posisi bola ke kanan
  fill(169, 169, 169); // Warna hijau
  torus(60); // Membuat bola dengan radius 50
  pop();
}
 
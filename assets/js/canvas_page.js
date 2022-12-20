var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');

var width = 20;
var height = 20;

ctx.fillStyle = 'rgb(71, 67, 67, 0.3)';
ctx.fillRect(210, 90, 100, 100);
ctx.beginPath();
ctx.fillStyle = 'rgb(15, 59, 217)';
ctx.fillRect(220, 110, width, height);
ctx.fillStyle = 'rgb(15, 59, 217';
ctx.fillRect(280, 110, width, height);
ctx.fillStyle = 'brown';
ctx.fillRect(245, 145, 30, 45);
ctx.fill();
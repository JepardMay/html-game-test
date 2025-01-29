const canvas = document.querySelector('#canvas');
const moveBtn = document.querySelector('#move-btn');

const ctx = canvas.getContext('2d');

canvas.width = 980;
canvas.height = 630;

const bgImage = new Image();
bgImage.src = 'img/game-map.png';

const player = new Player();

function animate() {
  requestAnimationFrame(animate);
  ctx.drawImage(bgImage, 0, 0);
  player.update();
}

bgImage.onload = () => {
  animate();
};

moveBtn.addEventListener('click', () => {
  if (!player.isMoving && player.waypointIndex < waypoints.length - 1) {
    player.waypointIndex++;
    player.isMoving = true;
  }
});

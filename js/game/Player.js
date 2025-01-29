class Player {
  constructor() {
    this.waypointIndex = 0;
    this.position = {
      x: waypoints[this.waypointIndex].x,
      y: waypoints[this.waypointIndex].y
    }
    this.image = new Image();
    this.image.src = 'img/player-icon.png';
    this.offset = { x: -11, y: -65 };
    this.isMoving = false;
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x + this.offset.x,
      this.position.y + this.offset.y,
      this.image.width,
      this.image.height
    );
  }

  update() {
    this.draw();
    if (this.isMoving && this.waypointIndex < waypoints.length) {
      const waypoint = waypoints[this.waypointIndex];
      const yDistance = waypoint.y - this.position.y;
      const xDistance = waypoint.x - this.position.x;
      const angle = Math.atan2(yDistance, xDistance);

      const speed = 3;
      this.velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      };

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      const distanceToWaypoint = Math.hypot(waypoint.x - this.position.x, waypoint.y - this.position.y);

      if (distanceToWaypoint < speed) {
        this.position.x = waypoint.x;
        this.position.y = waypoint.y;
        this.velocity = { x: 0, y: 0 };
        this.isMoving = false;
      }
    }
  }
}

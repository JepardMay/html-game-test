class Player {
  static SPEED = 2.5;

  constructor() {
    this.waypointIndex = 0;
    this.checkpointIndex = 0;

    this.position = {
      x: waypoints[this.waypointIndex].x,
      y: waypoints[this.waypointIndex].y
    };

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

      if (waypoint.checkpoints && this.checkpointIndex < waypoint.checkpoints.length) {
        this.moveTowardsCheckpoints(waypoint);
      } else {
        this.moveTowardsWaypoint(waypoint);
      }
    }
  }

  moveTowardsCheckpoints(waypoint) {
    const checkpointX = waypoint.checkpoints[this.checkpointIndex];
    const checkpointY = waypoint.checkpoints[this.checkpointIndex + 1];

    if (this.moveTowards(checkpointX, checkpointY)) {
      this.checkpointIndex += 2;
    }
  }

  moveTowardsWaypoint(waypoint) {
    const { x, y } = waypoint;
    if (this.moveTowards(x, y)) {
      this.isMoving = false;
      this.checkpointIndex = 0;
    }
  }

  moveTowards(targetX, targetY) {
    const yDistance = targetY - this.position.y;
    const xDistance = targetX - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);

    this.velocity = {
      x: Math.cos(angle) * Player.SPEED,
      y: Math.sin(angle) * Player.SPEED
    };

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    const distance = Math.hypot(targetX - this.position.x, targetY - this.position.y);

    if (distance < Player.SPEED) {
      this.position.x = targetX;
      this.position.y = targetY;
      return true;
    }

    return false;
  }
}

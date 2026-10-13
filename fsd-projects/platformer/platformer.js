$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 450, 40, 420, "blue");
    createPlatform(650, 400, 40, 700, "red");
    createPlatform(200, 230, 40, 700, "black");
    createPlatform(350, 400, 40, 700, "white");
    createPlatform(55, 240, 40, 700, "yellow");
    createPlatform(800, 350, 40, 700, "black");
    createPlatform(950, 300, 40, 700, "white");
    createPlatform(1100, 650, 40, 700, "blue");
    createPlatform(1250, 600, 40, 700, "red");

    createPlatform(400, 300, 200, 20, "blue", 300, 500, 1, 100, 400, 1);

    // TODO 3 - Create Collectables
    createCollectable("steve", 950, 250);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("max", 650, 200, 0.7, 0.8);
    createCollectable("gem", 200, 100, 0, 1, 100, 300, 2);
    // TODO 4 - Create Cannons
    createCannon("left", 575, 600);
    createCannon("right", 130, 800);
    createCannon("top", 650, 750);
    createCannon("top", 200, 2000, 20, 10, 100, 400, 2);

    //createProjectile("left", 100, 1000, 10, 5);

    //createProjectile("left", 100, 1000, 10, 5);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

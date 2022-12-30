(function () {
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var ctx1 = c1.getContext("2d");
    var ctx2 = c2.getContext("2d");
    c1.height = 300;
    c1.width = 300;
    c2.height = 300;
    c2.width = 300;
  
    ctx1.fillStyle = "white";
    ctx2.fillStyle = "white";
    var c1Flakes = [];
    var c2Flakes = [];
  
    function Flake(r) {
      this.x = Math.random() * 300;
      this.y = Math.random() * 250;
      this.r = r;
    }
  
    for (var i = 0; i <= 80; i++) {
      var flake = new Flake(2);
      c1Flakes.push(flake);
    }
  
    for (var i = 0; i <= 80; i++) {
      var flake = new Flake(3);
      c2Flakes.push(flake);
    }
  
    function render() {
      ctx1.clearRect(0, 0, 300, 300);
      ctx2.clearRect(0, 0, 300, 300);
      for (var i = 0; i < c1Flakes.length; i++) {
        ctx1.beginPath();
        ctx1.arc(c1Flakes[i].x, c1Flakes[i].y, c1Flakes[i].r, 0, Math.PI * 2);
        ctx1.fill();
        if (c1Flakes[i].y <= 245) {
          c1Flakes[i].y += 0.3;
        } else {
          c1Flakes[i].y = 0;
        }
      }
  
      for (var i = 0; i < c2Flakes.length; i++) {
        ctx2.beginPath();
        ctx2.arc(c2Flakes[i].x, c2Flakes[i].y, c2Flakes[i].r, 0, Math.PI * 2);
        ctx2.fill();
        if (c2Flakes[i].y <= 245) {
          c2Flakes[i].y += 0.6;
        } else {
          c2Flakes[i].y = 0;
        }
      }
      requestAnimationFrame(render);
    }
    render();
  })();
  
  function toggleText() {
      
    const giftIdeas = [
      "С Новым годом, любимый преподаватель.",
      "Вы достойны любви, уваженья.",
      "И сейчас во время каникул",
      "Набирайтесь побольше терпенья.",
      "Я желаю, чтоб год наступающий",
      "Был для вас он самый счастливый.",
      "Я желаю студентов понимающих,",
      "С Новым годом, преподаватель любимый!",
    ];
    
    let randomGift = giftIdeas[Math.floor(Math.random()*giftIdeas.length)];
    document.getElementById("gift").innerHTML = randomGift;
    
    var text = document.getElementById("gift");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
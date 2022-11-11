canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=100;
backgroundimage="mars.jpg";
roverImage="rover.png";
roverX=10;
roverY=10;
function add(){
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundimage

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;
}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadrover(){
        ctx.drawImage(roverImgTag, roverX, roverY, roverwidth, roverheight);
        }
        window.addEventListener("keydown", myKeyDown);
        function myKeyDown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed)
        if(keyPressed == '38'){
            up();
            
            console.log("cima");
        }
        if(keyPressed == '37'){
            
           left();
            console.log("esquerda");
        }
        if(keyPressed == '39'){
            right();
            
            console.log("direita");
        }
            if(keyPressed == '40'){
                down();
                console.log("baixo");
            }
            }
        function up(){
            if(roverY >= 0  ){
                uploadBackground();
                uploadrover();
                roverY = roverY-10;
            }
        }
        function down(){
            if(roverY <= 500  ){
                uploadBackground();
                uploadrover();
                roverY = roverY +10;
            }
        }
        function left(){
            if(roverX >= 0  ){
                uploadBackground();
                uploadrover();
                roverX = roverX-10;
            }
        }
        function right(){
            if(roverX <= 700  ){
                uploadBackground();
                uploadrover();
                roverX = roverX +10;
            }
        }
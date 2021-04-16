Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car2.jpg";
car1_X = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img = "car1.png";
car2_X = 10;
car2_y = 100;

background_img = "racing.jpg"

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadbackground;
    background_img_tag.src = background_img;

    car1_img_tag = new Image();
    car1_img_tag.onload = uploadcar;
    car1_img_tag.src = car1_img;

    car2_img_tag = new Image();
    car2_img_tag.onload = uploadcar1;
    car2_img_tag.src = car2_img;

}

function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,Canvas.width,Canvas.height);
}

function uploadcar(){
    ctx.drawImage(car1_img_tag,car1_X,car1_y,car1_width,car1_height);

}
function uploadcar1(){
    ctx.drawImage(car2_img_tag,car2_X,car2_y,car2_width,car2_height);

}





window.addEventListener("keydown",my_key_down)

function my_key_down(e){
    keypresed = e.keyCode;
    console.log(keypresed);

    if(keypresed == '37'){
        car1_left();
        console.log("left arrow key");

    }
    if(keypresed == '38'){
        car1_up();
        console.log("up arrow key")
    }
    if(keypresed == '39'){
        car1_right();
        console.log("right arrow key");
    }
    if(keypresed == '40'){
       car1_down();
        console.log("down arrow key");
    }


    if(keypresed == '65'){
        car2_left();
        console.log("key a");

    }
    if(keypresed == '87'){
        car2_up();
        console.log("key w")
    }
    if(keypresed == '68'){
        car2_right();
        console.log("key d");
    }
    if(keypresed == '83'){
       car2_down();
        console.log("key s");
    }


    
    
    
    
    
    
    
    

    
}



function up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = "+ car1_X + " y = "+ car1_y);
        uploadbackground();
        uploadcar();
    }
    
}

function down(){
    if(car1_y <=500){
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x = "+ car1_X  + " y = "+ car1_y);
        uploadbackground();
        uploadcar();


    }
}

function left(){
    if(car1_X >= 0){
        car1_X = car1_X - 10;
        console.log("when left arrow is pressed, x = "+ car1_X  + " y = "+ car1_y);
        uploadbackground();
        uploadcar();

    }
}

function right(){
    if(car1_X <=700){
        car1_X = car1_X + 10;
        console.log("when right arrow is pressed, x = "+ car1_X  + " y = "+ car1_y);
        uploadbackground();
        uploadcar();

    }
}



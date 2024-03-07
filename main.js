function preload(){
    img=loadImage("bed room.jpg");
    }
    
    function setup(){
        canvas = createCanvas(640,420);
        canvas.center();
       
    
    }
    
    function draw(){
        image( img ,0 ,0 ,640 ,420);
        fill("#FF0000");
        text("bed", 90 ,240);
        noFill();
        stroke('#FF0000')
        rect(90, 225, 450, 500);
    
    
    }
    
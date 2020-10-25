class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic:true
        }
        this.image= loadImage("umbrellaguy.jpeg")
        this.body= Bodies.circle(x,y,50,options);
        this.radius=300;
        World.add(world,this.body)
    }

    display(){
        imageMode (CENTER)
        image (this.image,this.body.position.x,this.body.position.y,this.radius)

    }




}

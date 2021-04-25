class Iron{
	constructor(x,y,width,height){
        var options = {
            'density':30,
            'friction': 3,
            'restitution':0.8
          };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
            rect(0, 0, this.width, this.height);
			pop()
	}

}
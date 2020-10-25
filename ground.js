class groundC{
constructor (){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(200,350,400,50,options)
    this.width=400
    this.height=50
    World.add(world,this.body)

}
display(){
    var pos = this.body.position;
    rectMode(CENTER)
    fill ("red")
    rect(pos.x,pos.y,this.width,this.height)
}  
}
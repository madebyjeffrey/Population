window.onload = function() 
{
    Crafty.init();
    Crafty.background("grey");
    
    var name = Crafty.e("2D, DOM, Text").attr(
            {x: 5, 
             y: 5, 
             w: Crafty.viewport.width, 
             h: 50}).text("Population Simulation");
             
    Crafty.c("Triangle", 
    {
        _direction: 0, // 0 up, 1 down
        _x: 0, // triangle actual grid location
        _y: 0,
        _i: 0,
        
        init: function() 
        {
            this.origin("center");
            this.x = 320;
            this.y = 240;
            this.z = 1;
            
            this.css("border-color", "red transparent transparent transparent");
            this.css("border-style", "solid");
            this.css("border-width", "20px");
            this.css("width", "40");
            this.css("height", "40");
            
            this.bind("Click", function() {

                this._i++;
                
                name.text("Population Simulation "+ this._i);
            });
        }
        
        
    });
    
    var Triangle = Crafty.e("2D, DOM, Mouse, Triangle");
        
}
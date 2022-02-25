class MyScene extends Phaser.Scene {

            preload ()
            {
                this.load.image('background', 'assets/sprites/Background.png');
                this.load.audio('audio','assets/sprites/Cheerful_Annoyance.mp3');
                this.load.image('l1','assets/sprites/blue_button07.png');
                this.load.image('r2','assets/sprites/yellow_button07.png');
                this.load.image('r3','assets/sprites/red_button07.png');
                this.load.image('r4','assets/sprites/green_button07.png');
                this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

            }

            create (data)
            {
                this.background = this.add.image(400, 300, 'background');
                var l11=this.add.image(200,140,'l1').setInteractive();
                var l12=this.add.image(280,140,'l1').setInteractive();
                this.l13=this.add.image(360,140,'l1');
                this.l14=this.add.image(440,140,'l1');
                this.l15=this.add.image(520,140,'l1');
                this.l16=this.add.image(600,140,'l1');

                this.r2=this.add.image(200,220,'r2');
                this.r2=this.add.image(280,220,'r2');
                this.r2=this.add.image(360,220,'r2');
                this.r2=this.add.image(440,220,'r2');
                this.r2=this.add.image(520,220,'r2');
                this.r2=this.add.image(600,220,'r2');

                this.r3=this.add.image(200,300,'r3');
                this.r3=this.add.image(280,300,'r3');
                this.r3=this.add.image(360,300,'r3');
                this.r3=this.add.image(440,300,'r3');
                this.r3=this.add.image(520,300,'r3');
                this.r3=this.add.image(600,300,'r3');

                this.r4=this.add.image(200,380,'r4');
                this.r4=this.add.image(280,380,'r4');
                this.r4=this.add.image(360,380,'r4');
                this.r4=this.add.image(440,380,'r4');
                this.r4=this.add.image(520,380,'r4');
                this.r4=this.add.image(600,380,'r4');


                var music = this.sound.add('audio');
                music.loop=true;

                music.play();

        
                        l11.on('clicked', this.clickHandler11, this);
                        this.input.on('gameobjectup', function (pointer, gameObject)
                                {
                                     gameObject.emit('clicked', gameObject);
                                }, this);
                        l12.on('clicked', this.clickHandler12, this);
                        this.input.on('gameobjectup', function (pointer, gameObject)
                                {
                                     gameObject.emit('clicked', gameObject);
                                }, this);

                        var add = this.add;
                        var input = this.input;

                WebFont.load({
                                google: {
                                            families: [ 'Freckle Face', 'Finger Paint', 'Nosifer' ]
                                        },
                                active: function () {
                                                        add.text(190, 110, '1', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(270,110,'2', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(350, 110, '3', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(430,110,'4', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(510, 110, '5', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(590,110,'6', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

                                                        add.text(190, 190, '7', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(270,190,'8', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(350, 190, '9', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(420,190,'10', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(500, 190, '11', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(580,190,'12', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

                                                        add.text(180, 270, '13', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(260,270,'14', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(340, 270, '15', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(420,270,'16', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(500, 270, '17', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(580,270,'18', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

                                                        add.text(180, 350, '19', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(260,350,'20', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(340, 350, '21', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(420,350,'22', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(500, 350, '23', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                                                        add.text(580,350,'24', { fontFamily: 'Freckle Face', fontSize: 45, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);

                                                    }
                            });


            }


            clickHandler11 (l11)
            {

                l11.on('clicked', this.clickHandler11);
                this.input.once('pointerdown',function() {
                        this.scene.add('myScene1',MyScene1,true,{x:400, y:300});
                },this);
        
            }

            clickHandler12 (l12)
            {

                l12.on('clicked', this.clickHandler12);
                this.input.once('pointerdown',function(){
                        this.scene.add('myScene2',MyScene2,true,{x:400, y:300});
                 },this);
        
            }

}

class BootScene extends Phaser.Scene {

            preload ()
            {
                this.load.image('buttonBG', 'assets/sprites/butt.png');
                this.load.image('background', 'assets/sprites/Background.png');
            }

            create (data )
            {
        
                 var back=this.add.image(400,300,'background');
                 
                 var bg = this.add.image(400, 280, 'buttonBG').setInteractive();
                 


                 this.input.once('pointerdown', function () {
        
                 this.scene.add('myScene', MyScene, true, { x: 400, y: 300 });

                }, this);

                 bg.on('pointerover', function () {

                    bg.setTint(0xF5CBA7 );

                });

                bg.on('pointerout', function () {

                    bg.clearTint();

                });

            }

    

        }

class MyScene1 extends Phaser.Scene {

            preload ()
            {
                this.load.image('background', 'assets/sprites/Background.png');
                this.load.audio('audio','assets/sprites/music.mp3');
                this.load.image('truck','assets/sprites/Webp.net-resizeimage.png');
                this.load.image('truck1','assets/sprites/Webp4.net-resizeimage.png');
                this.load.image('trash','assets/sprites/trash_can1.png');
                this.load.image('trash1','assets/sprites/trash_can2.png');
                this.load.image('green','assets/sprites/arrow_up.png'); 
                this.load.image('arrowDown','assets/sprites/arrow_down.png'); 
                this.load.image('arrowRight','assets/sprites/arrow_right.png'); 
                this.load.image('arrowLeft','assets/sprites/arrow_left.png');
                this.load.image('func','assets/sprites/function.png');
                this.load.image('l','assets/sprites/loop.png'); 
                this.load.image('pick','assets/sprites/pick.png'); 
                this.load.image('start','assets/sprites/red_button11.png');              


            }

            create (data)
            {
                this.background = this.add.image(400, 300, 'background');
               
                
                this.anims.create({
                                     key: 'snooze',
                                     frames: [
                                                { key: 'truck' },
                                                { key: 'truck1', duration:80 }
                
                                            ],
                                     frameRate: 5,
                                     repeat: -1
                                });

                var truck=this.add.sprite(170, 110, 'truck').play('snooze');

                this.anims.create({
                                     key: 'snooze1',
                                     frames: [
                                                { key: 'trash' },
                                                { key: 'trash1', duration:80 }
                
                                            ],
                                     frameRate: 5,
                                     repeat: -1
                                });

                this.add.sprite(170, 420, 'trash').play('snooze1');
                this.add.sprite(260, 420, 'trash').play('snooze1');
                this.add.sprite(350, 420, 'trash').play('snooze1');
                this.add.sprite(440, 420, 'trash').play('snooze1');
                this.add.sprite(530, 420, 'trash').play('snooze1');
                this.add.sprite(620, 420, 'trash').play('snooze1');

                this.add.sprite(170, 330, 'trash').play('snooze1');
                this.add.sprite(170, 240, 'trash').play('snooze1');


               var start=this.add.image(400,45,'start').setInteractive();
               start.on('pointerover', function () {

                    start.setTint(0xF5CBA7 );

                });

                start.on('pointerout', function () {

                    start.clearTint();
                });

               start.on('pointerdown',function(){

                    for (var i = 0 ; i <= brojac; i++) {

                        if(niza[i]=="arrowRight"){
                            truck.x+=100;
                        }
                        else if(niza[i]=="arrowDown"){
                            truck.y+=100;
                        }
                        else if(niza[i]=="arrowUp"){
                            truck.y-=100;
                        }
                        else if(niza[i]=="arrowLeft"){
                            truck.x-=100;
                        }

                        else if(niza[i]=="pick"){
                            if(truck.x>=170 && truck.x<=700 && truck.y>=150 && truck.y<=500){
                                score++;
                                
                            }
                            
                        }

                    }

                    if(score>=5){
                        window.alert("Браво, успеа да собереш поголем број на кантички и и помогна на планетата Земја! ");
                    }
                    else{
                        window.alert("Обиди се повторно, останаа уште многу кантички!");
                    }


               });


               


              

                var arrowUp1 = this.add.image(150, 550,'green'); 
                var arrowUp2=this.add.image(150,550,'green');
                var arrowUp3 = this.add.image(150, 550,'green'); 
                var arrowUp4=this.add.image(150,550,'green');
                var arrowUp5=this.add.image(150,550,'green');

                arrowUp1.setInteractive();
                arrowUp2.setInteractive();
                arrowUp3.setInteractive();
                arrowUp4.setInteractive();
                arrowUp5.setInteractive();
               

                this.input.setDraggable(arrowUp1);
                this.input.setDraggable(arrowUp2);
                this.input.setDraggable(arrowUp3);
                this.input.setDraggable(arrowUp4);
                this.input.setDraggable(arrowUp5);

                arrowUp1.on('pointerdown', function () {

                  niza[brojac]="arrowUp";
                  brojac++;

                });

                arrowUp2.on('pointerdown', function () {

                  niza[brojac]="arrowUp";
                  brojac++;

                });
                arrowUp3.on('pointerdown', function () {

                  niza[brojac]="arrowUp";
                  brojac++;

                });

                arrowUp4.on('pointerdown', function () {

                  niza[brojac]="arrowUp";
                  brojac++;

                });
                arrowUp5.on('pointerdown', function () {

                  niza[brojac]="arrowUp";
                  brojac++;

                });

               


                var arrowDown1 = this.add.image(230, 550,'arrowDown'); 
                var arrowDown2=this.add.image(230,550,'arrowDown');
                var arrowDown3 = this.add.image(230, 550,'arrowDown'); 
                var arrowDown4=this.add.image(230,550,'arrowDown');
                var arrowDown5=this.add.image(230,550,'arrowDown');

                arrowDown1.setInteractive();
                arrowDown2.setInteractive();
                arrowDown3.setInteractive();
                arrowDown4.setInteractive();
                arrowDown5.setInteractive();
               

                this.input.setDraggable(arrowDown1);
                this.input.setDraggable(arrowDown2);
                this.input.setDraggable(arrowDown3);
                this.input.setDraggable(arrowDown4);
                this.input.setDraggable(arrowDown5);



                arrowDown1.on('pointerdown', function () {

                  niza[brojac]="arrowDown";
                  brojac++;

                });

                arrowDown2.on('pointerdown', function () {

                  niza[brojac]="arrowDown";
                  brojac++;

                });

                arrowDown3.on('pointerdown', function () {

                  niza[brojac]="arrowDown";
                  brojac++;

                });

                arrowDown4.on('pointerdown', function () {

                  niza[brojac]="arrowDown";
                  brojac++;

                });

                arrowDown5.on('pointerdown', function () {

                  niza[brojac]="arrowDown";
                  brojac++;

                });

                

                var arrowRight1 = this.add.image(310, 550,'arrowRight'); 
                var arrowRight2=this.add.image(310,550,'arrowRight');
                var arrowRight3 = this.add.image(310, 550,'arrowRight'); 
                var arrowRight4=this.add.image(310,550,'arrowRight');
                var arrowRight5=this.add.image(310,550,'arrowRight');

                arrowRight1.setInteractive();
                arrowRight2.setInteractive();
                arrowRight3.setInteractive();
                arrowRight4.setInteractive();
                arrowRight5.setInteractive();
               

                this.input.setDraggable(arrowRight1);
                this.input.setDraggable(arrowRight2);
                this.input.setDraggable(arrowRight3);
                this.input.setDraggable(arrowRight4);
                this.input.setDraggable(arrowRight5);

                arrowRight1.on('pointerdown', function () {

                  niza[brojac]="arrowRight";
                  brojac++;

                });

                arrowRight2.on('pointerdown', function () {

                  niza[brojac]="arrowRight";
                  brojac++;

                });

                arrowRight3.on('pointerdown', function () {

                  niza[brojac]="arrowRight";
                  brojac++;

                });

                arrowRight4.on('pointerdown', function () {

                  niza[brojac]="arrowRight";
                  brojac++;

                });

                arrowRight5.on('pointerdown', function () {

                  niza[brojac]="arrowRight";
                  brojac++;

                });



                var arrowLeft1 = this.add.image(390, 550,'arrowLeft'); 
                var arrowLeft2=this.add.image(390,550,'arrowLeft');
                var arrowLeft3 = this.add.image(390, 550,'arrowLeft'); 
                var arrowLeft4=this.add.image(390,550,'arrowLeft');
                var arrowLeft5=this.add.image(390,550,'arrowLeft');

                arrowLeft1.setInteractive();
                arrowLeft2.setInteractive();
                arrowLeft3.setInteractive();
                arrowLeft4.setInteractive();
                arrowLeft5.setInteractive();
               

                this.input.setDraggable(arrowLeft1);
                this.input.setDraggable(arrowLeft2);
                this.input.setDraggable(arrowLeft3);
                this.input.setDraggable(arrowLeft4);
                this.input.setDraggable(arrowLeft5);

                arrowLeft1.on('pointerdown', function () {

                  niza[brojac]="arrowLeft";
                  brojac++;

                });

                arrowLeft2.on('pointerdown', function () {

                  niza[brojac]="arrowLeft";
                  brojac++;

                });

                arrowLeft3.on('pointerdown', function () {

                  niza[brojac]="arrowLeft";
                  brojac++;

                });

                arrowLeft4.on('pointerdown', function () {

                  niza[brojac]="arrowLeft";
                  brojac++;

                });

                arrowLeft5.on('pointerdown', function () {

                  niza[brojac]="arrowLeft";
                  brojac++;

                });

                var l1 = this.add.image(470, 550,'l'); 
                var l2=this.add.image(470,550,'l');
                var l3 = this.add.image(470, 550,'l'); 
                var l4=this.add.image(470,550,'l');
                var l5=this.add.image(470,550,'l');

                l1.setInteractive();
                l2.setInteractive();
                l3.setInteractive();
                l4.setInteractive();
                l5.setInteractive();
               

                this.input.setDraggable(l1);
                this.input.setDraggable(l2);
                this.input.setDraggable(l3);
                this.input.setDraggable(l4);
                this.input.setDraggable(l5);

                l1.on('pointerdown', function() {

                    niza[brojac]="loop";
                    brojac++;

                });

                l2.on('pointerdown', function() {

                    niza[brojac]="loop";
                    brojac++;

                });

                l3.on('pointerdown', function() {

                    niza[brojac]="loop";
                    brojac++;

                });

                l4.on('pointerdown', function() {

                    niza[brojac]="loop";
                    brojac++;

                });

                l5.on('pointerdown', function() {

                    niza[brojac]="loop";
                    brojac++;

                });

                var func1 = this.add.image(550, 550,'func'); 
                var func2=this.add.image(550,550,'func');
                var func3 = this.add.image(550, 550,'func'); 
                var func4=this.add.image(550,550,'func');
                var func5=this.add.image(550,550,'func');

                func1.setInteractive();
                func2.setInteractive();
                func3.setInteractive();
                func4.setInteractive();
                func5.setInteractive();
               

                this.input.setDraggable(func1);
                this.input.setDraggable(func2);
                this.input.setDraggable(func3);
                this.input.setDraggable(func4);
                this.input.setDraggable(func5);

                func1.on('pointerdown', function() {

                    niza[brojac]="func";
                    brojac++;

                });

                func2.on('pointerdown', function() {

                    niza[brojac]="func";
                    brojac++;

                });

                func3.on('pointerdown', function() {

                    niza[brojac]="func";
                    brojac++;

                });

                func4.on('pointerdown', function() {

                    niza[brojac]="func";
                    brojac++;

                });

                func5.on('pointerdown', function() {

                    niza[brojac]="func";
                    brojac++;

                });

                var pick1 = this.add.image(630, 550,'pick'); 
                var pick2=this.add.image(630,550,'pick');
                var pick3 = this.add.image(630, 550,'pick'); 
                var pick4=this.add.image(630,550,'pick');
                var pick5=this.add.image(630,550,'pick');

                pick1.setInteractive();
                pick2.setInteractive();
                pick3.setInteractive();
                pick4.setInteractive();
                pick5.setInteractive();
               

                this.input.setDraggable(pick1);
                this.input.setDraggable(pick2);
                this.input.setDraggable(pick3);
                this.input.setDraggable(pick4);
                this.input.setDraggable(pick5);

                pick1.on('pointerdown', function() {

                    niza[brojac]="pick";
                    brojac++;

                });

                pick2.on('pointerdown', function() {

                    niza[brojac]="pick";
                    brojac++;

                });

                pick3.on('pointerdown', function() {

                    niza[brojac]="pick";
                    brojac++;

                });

                pick4.on('pointerdown', function() {

                    niza[brojac]="pick";
                    brojac++;

                });  

                pick5.on('pointerdown', function() {

                    niza[brojac]="pick";
                    brojac++;

                });          

                     
                
                this.input.on('drag', function (pointer, container1, dragX, dragY) {

                    container1.x = dragX;
                    container1.y = dragY;
                    

                });

                var zone = this.add.zone(750,300, 90, 580).setRectangleDropZone(90, 580);
                var graphics = this.add.graphics();
                graphics.lineStyle(2, 0xffff00);

                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
               
              
                
                
            }

             
              

        }

        

          

class MyScene2 extends Phaser.Scene {

            preload ()
            {
                this.load.image('background1', 'assets/sprites/Background.png');
                this.load.audio('audio','assets/sprites/music.mp3');
                this.load.image('truck','assets/sprites/Webp.net-resizeimage.png');
                this.load.image('truck1','assets/sprites/Webp4.net-resizeimage.png');
                this.load.image('trash','assets/sprites/trash_can1.png');
                this.load.image('trash1','assets/sprites/trash_can2.png');
                this.load.image('green','assets/sprites/arrow_up.png'); 
                this.load.image('arrowDown','assets/sprites/arrow_down.png'); 
                this.load.image('arrowRight','assets/sprites/arrow_right.png'); 
                this.load.image('arrowLeft','assets/sprites/arrow_left.png');
                this.load.image('func','assets/sprites/function.png');
                this.load.image('l','assets/sprites/loop.png'); 
                this.load.image('pick','assets/sprites/pick.png'); 
                this.load.image('start','assets/sprites/red_button11.png');                


            }

            create (data)
            {
                this.background = this.add.image(400, 300, 'background1');
                this.anims.create({
                                     key: 'snooze',
                                     frames: [
                                                { key: 'truck' },
                                                { key: 'truck1', duration:80 }
                
                                            ],
                                     frameRate: 5,
                                     repeat: -1
                                });

                var truck=this.add.sprite(170, 110, 'truck').play('snooze');

                this.anims.create({
                                     key: 'snooze1',
                                     frames: [
                                                { key: 'trash' },
                                                { key: 'trash1', duration:80 }
                
                                            ],
                                     frameRate: 5,
                                     repeat: -1
                                });

                this.add.sprite(170, 420, 'trash').play('snooze1');
                this.add.sprite(260, 420, 'trash').play('snooze1');
                this.add.sprite(350, 420, 'trash').play('snooze1');
                this.add.sprite(170, 330, 'trash').play('snooze1');
                this.add.sprite(260, 330, 'trash').play('snooze1');
                this.add.sprite(350, 330, 'trash').play('snooze1');

               
                var start1=this.add.image(400,45,'start').setInteractive();

                start1.on('pointerover', function () {

                    start1.setTint(0xF5CBA7 );

                });

                start1.on('pointerout', function () {

                    start1.clearTint();

                });

               start1.on('pointerdown',function(){

                    for (var i = 0 ; i <= brojac1; i++) {

                        if(niza1[i]=="arrowRight"){
                            truck.x+=100;
                        }
                        else if(niza1[i]=="arrowDown"){
                            truck.y+=100;
                        }
                        else if(niza1[i]=="arrowUp"){
                            truck.y-=100;
                        }
                        else if(niza1[i]=="arrowLeft"){
                            truck.x-=100;
                        }

                        else if(niza1[i]=="pick"){
                            if(truck.x>=170 && truck.x<=420 && truck.y>=250 && truck.y<=500){
                                score1++;
                                
                            }
                            
                        }

                    }

                    if(score1>=5){
                        window.alert("Браво, успеа да собереш поголем број на кантички и и помогна на планетата Земја! ");
                    }
                    else{
                        window.alert("Обиди се повторно, останаа уште многу кантички!");
                    }
               });


               


              

                var arrowUp1 = this.add.image(150, 550,'green'); 
                var arrowUp2=this.add.image(150,550,'green');
                var arrowUp3 = this.add.image(150, 550,'green'); 
                var arrowUp4=this.add.image(150,550,'green');
                var arrowUp5=this.add.image(150,550,'green');

                arrowUp1.setInteractive();
                arrowUp2.setInteractive();
                arrowUp3.setInteractive();
                arrowUp4.setInteractive();
                arrowUp5.setInteractive();
               

                this.input.setDraggable(arrowUp1);
                this.input.setDraggable(arrowUp2);
                this.input.setDraggable(arrowUp3);
                this.input.setDraggable(arrowUp4);
                this.input.setDraggable(arrowUp5);

                arrowUp1.on('pointerdown', function () {

                  niza1[brojac1]="arrowUp";
                  brojac1++;

                });

                arrowUp2.on('pointerdown', function () {

                  niza1[brojac1]="arrowUp";
                  brojac1++;

                });
                arrowUp3.on('pointerdown', function () {

                  niza1[brojac1]="arrowUp";
                  brojac1++;

                });

                arrowUp4.on('pointerdown', function () {

                  niza1[brojac1]="arrowUp";
                  brojac1++;

                });
                arrowUp5.on('pointerdown', function () {

                  niza1[brojac1]="arrowUp";
                  brojac1++;

                });

               


                var arrowDown1 = this.add.image(230, 550,'arrowDown'); 
                var arrowDown2=this.add.image(230,550,'arrowDown');
                var arrowDown3 = this.add.image(230, 550,'arrowDown'); 
                var arrowDown4=this.add.image(230,550,'arrowDown');
                var arrowDown5=this.add.image(230,550,'arrowDown');

                arrowDown1.setInteractive();
                arrowDown2.setInteractive();
                arrowDown3.setInteractive();
                arrowDown4.setInteractive();
                arrowDown5.setInteractive();
               

                this.input.setDraggable(arrowDown1);
                this.input.setDraggable(arrowDown2);
                this.input.setDraggable(arrowDown3);
                this.input.setDraggable(arrowDown4);
                this.input.setDraggable(arrowDown5);



                arrowDown1.on('pointerdown', function () {

                  niza1[brojac1]="arrowDown";
                  brojac1++;

                });

                arrowDown2.on('pointerdown', function () {

                  niza1[brojac1]="arrowDown";
                  brojac1++;

                });

                arrowDown3.on('pointerdown', function () {

                  niza1[brojac1]="arrowDown";
                  brojac1++;

                });

                arrowDown4.on('pointerdown', function () {

                  niza1[brojac1]="arrowDown";
                  brojac1++;

                });

                arrowDown5.on('pointerdown', function () {

                  niza1[brojac1]="arrowDown";
                  brojac1++;

                });

                

                var arrowRight1 = this.add.image(310, 550,'arrowRight'); 
                var arrowRight2=this.add.image(310,550,'arrowRight');
                var arrowRight3 = this.add.image(310, 550,'arrowRight'); 
                var arrowRight4=this.add.image(310,550,'arrowRight');
                var arrowRight5=this.add.image(310,550,'arrowRight');

                arrowRight1.setInteractive();
                arrowRight2.setInteractive();
                arrowRight3.setInteractive();
                arrowRight4.setInteractive();
                arrowRight5.setInteractive();
               

                this.input.setDraggable(arrowRight1);
                this.input.setDraggable(arrowRight2);
                this.input.setDraggable(arrowRight3);
                this.input.setDraggable(arrowRight4);
                this.input.setDraggable(arrowRight5);

                arrowRight1.on('pointerdown', function () {

                  niza1[brojac1]="arrowRight";
                  brojac1++;

                });

                arrowRight2.on('pointerdown', function () {

                  niza1[brojac1]="arrowRight";
                  brojac1++;

                });

                arrowRight3.on('pointerdown', function () {

                  niza1[brojac1]="arrowRight";
                  brojac1++;

                });

                arrowRight4.on('pointerdown', function () {

                  niza1[brojac1]="arrowRight";
                  brojac1++;

                });

                arrowRight5.on('pointerdown', function () {

                  niza1[brojac1]="arrowRight";
                  brojac1++;

                });



                var arrowLeft1 = this.add.image(390, 550,'arrowLeft'); 
                var arrowLeft2=this.add.image(390,550,'arrowLeft');
                var arrowLeft3 = this.add.image(390, 550,'arrowLeft'); 
                var arrowLeft4=this.add.image(390,550,'arrowLeft');
                var arrowLeft5=this.add.image(390,550,'arrowLeft');

                arrowLeft1.setInteractive();
                arrowLeft2.setInteractive();
                arrowLeft3.setInteractive();
                arrowLeft4.setInteractive();
                arrowLeft5.setInteractive();
               

                this.input.setDraggable(arrowLeft1);
                this.input.setDraggable(arrowLeft2);
                this.input.setDraggable(arrowLeft3);
                this.input.setDraggable(arrowLeft4);
                this.input.setDraggable(arrowLeft5);

                arrowLeft1.on('pointerdown', function () {

                  niza1[brojac1]="arrowLeft";
                  brojac1++;

                });

                arrowLeft2.on('pointerdown', function () {

                  niza1[brojac1]="arrowLeft";
                  brojac1++;

                });

                arrowLeft3.on('pointerdown', function () {

                  niza1[brojac1]="arrowLeft";
                  brojac1++;

                });

                arrowLeft4.on('pointerdown', function () {

                  niza1[brojac1]="arrowLeft";
                  brojac1++;

                });

                arrowLeft5.on('pointerdown', function () {

                  niza1[brojac1]="arrowLeft";
                  brojac1++;

                });

                var l1 = this.add.image(470, 550,'l'); 
                var l2=this.add.image(470,550,'l');
                var l3 = this.add.image(470, 550,'l'); 
                var l4=this.add.image(470,550,'l');
                var l5=this.add.image(470,550,'l');

                l1.setInteractive();
                l2.setInteractive();
                l3.setInteractive();
                l4.setInteractive();
                l5.setInteractive();
               

                this.input.setDraggable(l1);
                this.input.setDraggable(l2);
                this.input.setDraggable(l3);
                this.input.setDraggable(l4);
                this.input.setDraggable(l5);

                l1.on('pointerdown', function() {

                    niza1[brojac1]="loop";
                    brojac1++;

                });

                l2.on('pointerdown', function() {

                    niza1[brojac1]="loop";
                    brojac1++;

                });

                l3.on('pointerdown', function() {

                    niza1[brojac1]="loop";
                    brojac1++;

                });

                l4.on('pointerdown', function() {

                    niza1[brojac1]="loop";
                    brojac1++;

                });

                l5.on('pointerdown', function() {

                    niza1[brojac1]="loop";
                    brojac1++;

                });

                var func1 = this.add.image(550, 550,'func'); 
                var func2=this.add.image(550,550,'func');
                var func3 = this.add.image(550, 550,'func'); 
                var func4=this.add.image(550,550,'func');
                var func5=this.add.image(550,550,'func');

                func1.setInteractive();
                func2.setInteractive();
                func3.setInteractive();
                func4.setInteractive();
                func5.setInteractive();
               

                this.input.setDraggable(func1);
                this.input.setDraggable(func2);
                this.input.setDraggable(func3);
                this.input.setDraggable(func4);
                this.input.setDraggable(func5);

                func1.on('pointerdown', function() {

                    niza1[brojac1]="func";
                    brojac1++;

                });

                func2.on('pointerdown', function() {

                    niza1[brojac1]="func";
                    brojac1++;

                });

                func3.on('pointerdown', function() {

                    niza1[brojac1]="func";
                    brojac1++;

                });

                func4.on('pointerdown', function() {

                    niza1[brojac1]="func";
                    brojac1++;

                });

                func5.on('pointerdown', function() {

                    niza1[brojac1]="func";
                    brojac1++;

                });

                var pick1 = this.add.image(630, 550,'pick'); 
                var pick2=this.add.image(630,550,'pick');
                var pick3 = this.add.image(630, 550,'pick'); 
                var pick4=this.add.image(630,550,'pick');
                var pick5=this.add.image(630,550,'pick');

                pick1.setInteractive();
                pick2.setInteractive();
                pick3.setInteractive();
                pick4.setInteractive();
                pick5.setInteractive();
               

                this.input.setDraggable(pick1);
                this.input.setDraggable(pick2);
                this.input.setDraggable(pick3);
                this.input.setDraggable(pick4);
                this.input.setDraggable(pick5);

                pick1.on('pointerdown', function() {

                    niza1[brojac1]="pick";
                    brojac1++;

                });

                pick2.on('pointerdown', function() {

                    niza1[brojac1]="pick";
                    brojac1++;

                });

                pick3.on('pointerdown', function() {

                    niza1[brojac1]="pick";
                    brojac1++;

                });

                pick4.on('pointerdown', function() {

                    niza1[brojac1]="pick";
                    brojac1++;

                });  

                pick5.on('pointerdown', function() {

                    niza1[brojac1]="pick";
                    brojac1++;

                });          

                     
                
                this.input.on('drag', function (pointer, container1, dragX, dragY) {

                    container1.x = dragX;
                    container1.y = dragY;
                    

                });

                var zone = this.add.zone(750,300, 90, 580).setRectangleDropZone(90, 580);
                var graphics = this.add.graphics();
                graphics.lineStyle(2, 0xffff00);

                graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);
               
                


                
            }

} 

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent:'phaser-example',
        physic:{
            default:'arcade',
            arcade:{
                gravity:{y:300},
                debug:true
            }
        },
        scene: BootScene
    };
 
    var  niza=[];
    var niza1=[];

    var brojac=0;
    var brojac1=0;

    var score=0;
    var score1=0;
    var game = new Phaser.Game(config);
    
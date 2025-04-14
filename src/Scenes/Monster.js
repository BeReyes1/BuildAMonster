class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    
    
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arma = this.add.sprite(400, 400, "monsterParts", "arm_blueA.png");
        my.sprite.armb = this.add.sprite(200, 400, "monsterParts", "arm_blueA.png");
        my.sprite.armb.flipX = true;
        my.sprite.lega = this.add.sprite(360, 490, "monsterParts", "leg_yellowE.png");
        my.sprite.legb = this.add.sprite(270, 490, "monsterParts", "leg_yellowD.png");
        my.sprite.legb.flipX = true;
        my.sprite.eye = this.add.sprite(300, 300, "monsterParts", "eye_psycho_light.png");
        my.sprite.anten = this.add.sprite(290, 240, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.horn = this.add.sprite(310, 260, "monsterParts", "detail_blue_horn_small.png");
        my.sprite.smile = this.add.sprite(310, 400, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fang = this.add.sprite(310, 400, "monsterParts", "mouthC.png");

        my.sprite.fang.visible = false;

        this.input.keyboard.on("keydown-A", this.MoveLeft, this);
        this.input.keyboard.on("keydown-D", this.MoveRight, this);
        this.input.keyboard.on("keydown-S", this.Smile, this);
        this.input.keyboard.on("keydown-F", this.Fangs, this);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    }

    MoveLeft() {
        let my = this.my;
        for (var i in my.sprite) {
            my.sprite[i].x -= 3;
        }
    }

    MoveRight() {
        let my = this.my;
        for (var i in my.sprite) {
            my.sprite[i].x += 3;
        }
    }

    Smile() {
        let my = this.my;
        this.my.sprite.fang.visible = false;
        this.my.sprite.smile.visible = true;
    }

    Fangs() {
        let my = this.my;
        this.my.sprite.fang.visible = true;
        this.my.sprite.smile.visible = false;
    }

}
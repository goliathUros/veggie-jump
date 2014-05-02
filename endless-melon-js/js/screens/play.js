/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global game: true, debugPanel:true, me:true*/

game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
        // load a level
		// me.levelDirector.loadLevel("area01");
        
		// reset the score
		game.data.score = 0;

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
        
        var wasRunning = me.state.isRunning();
        if (wasRunning) {
            me.state.stop();
        }
        me.game.reset();
        if (wasRunning) {
            me.state.restart.defer();
        }
        me.game.collisionMap = new game.NullCollisionLayer(640, 480);

        game.Kitchenbkg = new me.ImageLayer(
            'background',
            640,
            480,
            'kitchen',
            -1,
            1);
        game.Snowbkg = new me.ImageLayer(
            'background',
            640,
            480,
            'snow',
            -1,
            1);
        game.Saiyanbkg = new me.ImageLayer(
            'background',
            640,
            480,
            'dragonball',
            -1,
            1);
        me.game.world.addChild(game.Kitchenbkg);
        me.game.world.addChild(game.Snowbkg);
        me.game.world.addChild(game.Saiyanbkg);
        game.Snowbkg.visible = false;
        game.Saiyanbkg.visible=false;
        /*game.Kitchenbkg.visible = false;*/
        
        var player = me.entityPool.newInstanceOf("mainPlayer", 150, 100, {});
        me.game.world.addChild(player);
        me.game.world.addChild(new game.PlatformGenerator());
        // play the audio track
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});

/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global game: true, debugPanel:true, me:true*/

game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
    // our level tileset
	{name: "area01_level_tiles",  type:"image",	src: "data/img/map/area01_level_tiles.png"},
    // the main player spritesheet
	{name: "Potato", type:"image", src: "data/img/sprite/spritesheet.png"},
	// the parallax background
	{name: "area01_bkg0",         type:"image",	src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1",         type:"image",	src: "data/img/area01_bkg1.png"},
    {name:"kitchen", type:"image", src:"data/img/kitchen.png"},
    {name:"snow", type:"image", src:"data/img/snow.jpg"},
    {name:"dragonball", type:"image", src:"data/img/dragonball.png"},
	// the spinning coin spritesheet
	{name: "spinning_coin_gold",  type:"image",	src: "data/img/sprite/spinning_coin_gold.png"},
	// our enemty entity
	{name: "wheelie_right",       type:"image",	src: "data/img/sprite/wheelie_right.png"},
	// game font
	{name: "32x32_font",          type:"image",	src: "data/img/font/32x32_font.png"},
    // title screen
    {name: "title_screen",        type:"image", src: "data/img/sprite/titlescreen.png"},
    /* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
     */
    {name: "area01", type: "tmx", src: "data/map/area01.tmx"},

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
	{name: "cling", type: "audio", src: "data/sfx/", channel : 2},
	{name: "stomp", type: "audio", src: "data/sfx/", channel : 1},
	{name: "jump",  type: "audio", src: "data/sfx/", channel : 1},
    {name: "die", type:"audio", src: "data/sfx/", channel : 2},
    {name:"9000", type:"audio", src:"data/sfx/", channel: 1},
];

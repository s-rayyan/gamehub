// List of game names and their URLs
let favorites = localStorage.getItem("favorites");
const games = [
    { name: '1v1.LOL', url: '1v1.lol' },
    { name: '10 Minutes Till Dawn', url: '10minutestilldawn' },
    { name: '2048', url: '2048' },
    { name: 'A Dance of Fire And Ice', url: 'adanceoffireandice' },
    { name: 'A Dark Room', url: 'adarkroom' },
    { name: 'Adrenaline Challenge', url: 'adrenalinechallenge' },
    { name: 'Adventure Drivers', url: 'adventuredrivers' },
    { name: 'Asteroids', url: 'asteroids' },
    { name: 'Astray', url: 'astray' },
    { name: 'Backcountry', url: 'backcountry' },
    { name: 'Bad Ice Cream 2', url: 'badicecream2' },
    { name: 'Basket Random', url: 'basketrandom' },
    { name: 'BitLife', url: 'bitlife' },
    { name: 'Bounceback', url: 'bounceback' },
    { name: 'Boxing Random', url: 'boxingrandom' },
    { name: 'BreakLock', url: 'breaklock' },
    { name: 'Breakout', url: 'breakout' },
    { name: 'Chess', url: 'chess' },
    { name: 'Chrome Dino', url: 'chromedino' },
    { name: 'Connect 3', url: 'connect3' },
    { name: 'Cookie Clicker', url: 'cookieclicker' },
    { name: 'CrazyCattle3D', url: 'crazycattle3d' },
    { name: 'Cubefield', url: 'cubefield' },
    { name: 'Doodle Jump', url: 'doodlejump' },
    { name: 'Duck Life', url: 'ducklife' },
    { name: 'Duck Life 2', url: 'ducklife2' },
    { name: 'Duck Life 3', url: 'ducklife3' },
    { name: 'Duck Life 4', url: 'ducklife4' },
    { name: 'Edge Surf', url: 'edgesurf' },
    { name: 'Evil Glitch', url: 'evilglitch' },
    { name: 'Factory Balls Forever', url: 'factoryballsforever' },
    { name: 'Fireboy and Watergirl in the Forest Temple', url: 'fireboyandwatergirlintheforesttemple' },
    { name: 'Flappy Bird', url: 'flappybird' },
    { name: 'Friendly Fire', url: 'friendlyfire' },
    { name: 'Geometry Dash', url: 'geometrydash' },
    { name: 'Gopher Kart', url: 'gopherkart' },
    { name: 'Hextris', url: 'hextris' },
    { name: 'Ice Age Baby Adventure', url: 'iceagebabyadventure' },
    { name: 'Jumping frogs puzzle', url: 'jumpingfrogspuzzle' },
    { name: 'Konnekt', url: 'konnekt' },
    { name: 'Minecraft 0.30', url: 'minecraft0.30' },
    { name: 'Minecraft 1.3', url: 'minecraft1.3' },
    { name: 'Minecraft 1.5.2', url: 'minecraft1.5.2' },
    { name: 'Moto X3M 2', url: 'motox3m2' },
    { name: 'OvO', url: 'ovo' },
    { name: 'Pac-Man', url: 'pacman' },
    { name: 'Pushback', url: 'pushback' },
    { name: 'Racer', url: 'racer' },
    { name: 'Radius Raid', url: 'radiusraid' },
    { name: 'Retro Bowl', url: 'retrobowl' },
    { name: 'Retrohaunt', url: 'retrohaunt' },
    { name: 'Riddle School', url: 'riddleschool' },
    { name: 'Riddle School 2', url: 'riddleschool2' },
    { name: 'Riddle School 3', url: 'riddleschool3' },
    { name: 'Riddle School 4', url: 'riddleschool4' },
    { name: 'Riddle School 5', url: 'riddleschool5' },
    { name: 'Roadblocks', url: 'roadblocks' },
    { name: 'Sleeping Beauty', url: 'sleepingbeauty' },
    { name: 'Slope', url: 'slope' },
    { name: 'Snake', url: 'snake' },
    { name: 'Snow Rider 3D', url: 'snowrider3d' },
    { name: 'Soccer Random', url: 'soccerrandom' },
    { name: 'Space Company', url: 'spacecompany' },
    { name: 'Space Invaders', url: 'spaceinvaders' },
    { name: 'Tetris', url: 'tetris' },
    { name: 'The Chroma Incident', url: 'thechromaincident' },
    { name: 'THERE IS NO GAME!', url: 'thereisnogame' },
    { name: 'Tower Master', url: 'towermaster' },
    { name: 'Tunnel Rush', url: 'tunnelrush' },
    { name: 'Under Run', url: 'underrun' },
    { name: 'Vex 3', url: 'vex3' },
    { name: 'Vex 4', url: 'vex4' },
    { name: 'Vex 5', url: 'vex5' },
    { name: 'Vex 6', url: 'vex6' },
    { name: 'Vex 7', url: 'vex7' },
    { name: 'Volley Random', url: 'volleyrandom' },
    { name: 'Webretro (retro console emulator)', url: 'webretro' },
    { name: 'World\'s Hardest Game', url: 'worldshardestgame' },
    { name: 'World\'s Hardest Game 2', url: 'worldshardestgame2' },
    { name: 'xx142-b2.exe', url: 'xx142b2.exe' }
];

// Function to create the game links dynamically
function generateGameLinks(fadeIn = true) {
    const container = document.getElementById('game-links');
    container.replaceChildren();
    games.forEach(game => {
        const link = document.createElement('button');
        let clickTimer = null;
        link.addEventListener("click", () => {
            clickTimer && clearTimeout(clickTimer);
            clickTimer = setTimeout(() => window.open(game.url), 300);
        });

        link.addEventListener("dblclick", () => {
            clearTimeout(clickTimer);
            const favorites = localStorage.getItem('favorites') ?? "";
            const updatedFavorites = favorites ? favorites.split(',') : [];
            if (!favorites.includes(game.name)) updatedFavorites.push(game.name);
            else updatedFavorites.splice(updatedFavorites.indexOf(game.name), 1);
            localStorage.setItem('favorites', updatedFavorites.join(','));
            generateGameLinks(false);
        });
        link.textContent = game.name;
        link.className = "game-link border-0 text-white" + ((localStorage.getItem('favorites')??"").includes(game.name) ? " favorite" : "");
        link.type = "button"
        container.appendChild(link);
    });
    if (fadeIn) {
        $("#game-links").hide();
        $("#game-links").fadeIn(1000);
    }



}

window.onload = generateGameLinks;
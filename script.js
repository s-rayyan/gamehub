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
    { name: 'Basketball Stars', url: 'basketballstars' },
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
    { name: 'Funny Shooter 2', url: 'funnyshooter' },
    { name: 'Friendly Fire', url: 'friendlyfire' },
    { name: 'Geometry Dash', url: 'geometrydash' },
    { name: 'Gopher Kart', url: 'gopherkart' },
    { name: 'HexGL', url: 'hexgl' },
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
    { name: 'Rooftop Snipers', url: 'rooftopsnipers' },
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
    { name: 'Webretro', url: 'webretro' },
    { name: 'World\'s Hardest Game', url: 'worldshardestgame' },
    { name: 'World\'s Hardest Game 2', url: 'worldshardestgame2' },
    { name: 'xx142-b2.exe', url: 'xx142b2.exe' }
];

var buttonSize = 2

document.getElementById("search").addEventListener("input", () => {
    const query = document.getElementById("search").value.toLowerCase();
    const gameLinks = document.querySelectorAll("#game-links .game-link");
    gameLinks.forEach((el, i) => {
        const gameName = games[i].name.toLowerCase();
        if (!gameName.includes(query)) {
            $(el).fadeOut();
            $(el).css("order", 4);
        } else {
            $(el).css("order", 2);
            $(el).fadeIn();
        }
    });
});

function generateGameLinks(fadeIn = true) {
    const bg = localStorage.getItem("bg-color");
    const sec = localStorage.getItem("secondary-color");
    if (bg !== null) {
        const jbg = JSON.parse(bg);
        const jsec = JSON.parse(sec);
        document.documentElement.style.setProperty('--bg-color', HSLToHex(jbg.h, jbg.s, jbg.l));
        document.documentElement.style.setProperty('--secondary-color', HSLToHex(jsec.h, jsec.s, jsec.l));
    }
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
            $(link).addClass("new-favorite");
            setTimeout(() => { generateGameLinks(false) }, 1000);
        });
        link.textContent = game.name;
        link.className = "game-link border-0 text-white p-" + buttonSize + ((localStorage.getItem('favorites') ?? "").includes(game.name) ? " favorite" : "");
        link.type = "button"
        link.style.order = 3;
        link.id = game.url;
        container.appendChild(link);
    });
    if (fadeIn) {
        $("#game-links").hide();
        $("#game-links").fadeIn(1000);
    }
}

function hexToHSL(hex) {
    let [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;
    if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = {
            [r]: (g - b) / d + (g < b ? 6 : 0),
            [g]: (b - r) / d + 2,
            [b]: (r - g) / d + 4
        }[max] / 6;
    } else s = 0;
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function HSLToHex(h, s, l) {
    s /= 100; l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let [r, g, b] = [[c, x, 0], [x, c, 0], [0, c, x], [0, x, c], [x, 0, c], [c, 0, x]][Math.floor(h / 60) % 6];
    [r, g, b] = [r, g, b].map(v => Math.round((v + m) * 255));
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

function updateColors(h) {
    let base = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();
    let hsl = hexToHSL(base);
    if (h !== undefined) hsl.h = h;
    let sec = { ...hsl, l: Math.min(hsl.l + 10, 100) };
    document.documentElement.style.setProperty('--bg-color', HSLToHex(hsl.h, hsl.s, hsl.l));
    document.documentElement.style.setProperty('--secondary-color', HSLToHex(sec.h, sec.s, sec.l));
    localStorage.setItem("bg-color", JSON.stringify(hsl));
    localStorage.setItem("secondary-color", JSON.stringify(sec));
}

$('#color-slider').on('input', function () {
    updateColors($(this).val() * 3.6 + 30);
});

$('#button-slider').on('input', function () {
    let oldButtonSize = buttonSize;
    buttonSize = $(this).val();
    generateGameLinks(false);
    $("#game-links").removeClass("gap-" + oldButtonSize).addClass("gap-" + (Number(buttonSize) + 1));
    $("#game-links").removeClass("fs-" + oldButtonSize).addClass("fs-" + 5 - (Number(buttonSize) * 2));


});

$(document).ready(function () {
    $('#settings-toggle').on('click', function () {
        $('#settings-panel').slideToggle(300);
    });

    $('#close-settings').on('click', function () {
        $('#settings-panel').fadeOut(300);
    });
});

window.onload = generateGameLinks;
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857'
		];

    var quotes = [
    ["An insincere friend is more to be feared than a wild beast; a wild beast may wound your body, but an insincere friend will wound your mind.","Teachings of the Buddha"],
    ["With our thoughts we make the world.","Teachings of the Buddha"],
    [" As a water bead on a lotus leaf, as water on a red lily, does not adhere, so the sage does not adhere to the seen, the heard, or the sensed.","The Buddha, Jara Sutta of the Sutta Nipata"],
    [" There is no fear for one whose mind is not filled with desires.","Teachings of the Buddha"]
    ["The world is afflicted by death and decay. But the wise do not grieve, having realized the nature of the world.","Buddha, Sutta Nipata"],
    ["Unity can only be manifested by the Binary. Unity itself and the idea of Unity are already two.","Teachings of the Buddha"],
    ["You yourself must strive. The Buddhas only point the way.","Teachings of the Buddha"],
    ["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
    ["Better it is to live one day wise and meditative than to live a hundred years foolish and uncontrolled.","Buddha, Dhammapada, v. 111"],
    ["A jug fills drop by drop.","Gautama Buddha"]
    ["Be a lamp unto yourself. Work out your liberation with diligence.","Teachings of the Buddha"]
    ["A man does not become a Brahmana by his platted hair, by his family, or by birth;in whom there is truth and righteousness, he is blessed, he is a Brahmana.","Buddha, Dhammapada, v. 393"]
    ["A wise man adapts himself to circumstances, as water shapes itself to the vessel containing it.","Chinese Proverb"]
    ["An insincere friend is more to be feared than a wild beast; a wild beast may wound your body, but an insincere friend will wound your mind.","Teachings of the Buddha"]
    ["With our thoughts we make the world.","Teachings of the Buddha"]
    ["Not by birth does one become an outcaste.Not by birth does one become a Brahman.By one's action one becomes an outcaste By one's action  one becomes a Brahman.","Buddha, Sutta Nipata, 136"]
    ];
 

var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
    $('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        }
    });
});

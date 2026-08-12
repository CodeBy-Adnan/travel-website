const destinations = {

    Maldives:{
        hero:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900",
            "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=900",
            "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900"
        ],
        description:"Experience crystal-clear turquoise waters, luxurious overwater villas, white sand beaches and breathtaking sunsets. The Maldives is one of the world's most beautiful tropical destinations.",
        price:"₹1,29,999",
        duration:"5 Nights / 6 Days",
        season:"November - April"
    },

    Paris:{
        hero:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900",
            "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=900",
            "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=900"
        ],
        description:"Discover the Eiffel Tower, romantic cafés, world-famous museums and charming streets. Paris offers history, fashion and unforgettable experiences.",
        price:"₹98,999",
        duration:"6 Nights / 7 Days",
        season:"April - June"
    },

    Dubai:{
        hero:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=900",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900"
        ],
        description:"Enjoy luxury shopping, futuristic skyscrapers, desert safaris and premium resorts in one of the world's fastest-growing cities.",
        price:"₹1,15,000",
        duration:"4 Nights / 5 Days",
        season:"November - March"
    },

    Switzerland:{
        hero:"https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
        ],
        description:"Snow-capped Alps, scenic train journeys, crystal-clear lakes and picturesque villages make Switzerland a dream destination.",
        price:"₹1,85,000",
        duration:"7 Nights / 8 Days",
        season:"December - February"
    },

    Singapore:{
        hero:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900",
            "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=900",
            "https://images.unsplash.com/photo-1526481280695-3c4691fdf0d5?w=900"
        ],
        description:"Explore Marina Bay Sands, Gardens by the Bay, Sentosa Island and one of Asia's cleanest and most vibrant cities.",
        price:"₹1,09,999",
        duration:"5 Nights / 6 Days",
        season:"February - April"
    },

    Bali:{
        hero:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=900",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900"
        ],
        description:"Relax on tropical beaches, visit ancient temples and enjoy breathtaking waterfalls surrounded by lush greenery.",
        price:"₹94,999",
        duration:"5 Nights / 6 Days",
        season:"April - October"
    },

    Italy:{
        hero:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900",
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900"
        ],
        description:"Discover Rome, Venice and Florence while enjoying rich history, incredible architecture and world-famous Italian cuisine.",
        price:"₹1,49,999",
        duration:"7 Nights / 8 Days",
        season:"May - September"
    },

    Canada:{
        hero:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900",
            "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900"
        ],
        description:"Experience magnificent national parks, Niagara Falls, mountain adventures and vibrant multicultural cities.",
        price:"₹1,75,000",
        duration:"8 Nights / 9 Days",
        season:"June - September"
    },

    Japan:{
        hero:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900",
            "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=900",
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=900"
        ],
        description:"From Tokyo's modern skyline to Kyoto's ancient temples, Japan blends innovation, tradition and breathtaking landscapes.",
        price:"₹1,68,000",
        duration:"7 Nights / 8 Days",
        season:"March - April"
    },

    Thailand:{
        hero:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
        gallery:[
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900",
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
        ],
        description:"Beautiful islands, lively nightlife, floating markets and delicious street food make Thailand a favorite destination.",
        price:"₹79,999",
        duration:"5 Nights / 6 Days",
        season:"November - February"
    }

};


const selected = (localStorage.getItem("selectedDestination") || "Maldives").trim();

const data = destinations[selected];

if (!data) {
    window.location.href = "index.html";
}

document.getElementById("destinationName").textContent = selected;
document.getElementById("destinationTag").textContent = "Explore " + selected;

document.getElementById("heroImage").src = data.hero;

document.getElementById("description").textContent = data.description;

document.getElementById("price").textContent = data.price;

document.getElementById("duration").textContent = data.duration;

document.getElementById("season").textContent = data.season;

document.getElementById("img1").src = data.gallery[0];

document.getElementById("img2").src = data.gallery[1];

document.getElementById("img3").src = data.gallery[2];

document.title = selected + " | TravelX";
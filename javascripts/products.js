let products = [
	{
		name: "Glasses1",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses0.jpg"
	},
	{
		name: "Glasses2",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses1.jpg"
	},
	{
		name: "Glasses3",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses2.jpg"
	},
	{
		name: "Glasses4",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses0.jpg"
	},
	{
		name: "Glasses5",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses1.jpg"
	},
	{
		name: "Glasses6",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses2.jpg"
	},
	{
		name: "Glasses7",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses0.jpg"

	},
	{
		name: "Glasses8",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses1.jpg"
	},
	{
		name: "Glasses9",
		description: "The Elliot is a modern take on the iconic 1950’s Browline style. Crafted from premium acetate and sporting sleek arms, silver accents and a retro monel bridge, this frame exudes a classic cool.",
		price: "12.88",
		url: "./images/glasses2.jpg"
	}
];

let parentContainer = document.querySelector('.container');
let info = '';

products.forEach(function (item) {
	info += `
	<article class="card">
        <header class="card-header">
			<h2>${item.name}</h2>
		</header>
                <section>
                    <div class="card-img">
                        <img src="${item.url}" alt="Spectacle image">
                    </div>
                    <div class="card-description">
                        <p>
                            ${item.description}
                        </p>
                    </div>
					<header class="pricing">
						<div class="price-content">
                        <h3>Pricing</h3>
						<p>${item.price}</p>
						</div>
                    </header>
                </section>
            </article>
	`;
});

parentContainer.innerHTML = info;





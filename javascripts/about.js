let products = [
	{
		name: "Daniel",
		description: "Daniel really likes maple trees.",
		url: "./images/daniel.jpg"
	},
	{
		name: "product2",
		description: "maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "10.00",
		url: "./images/maple1.jpg"
	},
	{
		name: "product3",
		description: "maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "2Mil",
		url: "./images/maple2.jpg"
	},
	{
		name: "product4",
		description: "maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "4.99",
		url: "./images/maple3.jpg"
	},
];

let parentContainer = document.querySelector('.aboutcontainer');
let info = '';

products.forEach(function (item) {
	info += `
	<article class="about">
        <header class="about-header">
			<h2>${item.name}</h2>
		</header>
                <section>
                    <div class="about-img">
                        <img src="${item.url}" alt="malplesyrup">
                    </div>
                    <div class="about-description">
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
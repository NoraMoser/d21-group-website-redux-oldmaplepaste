let products = [
	{
		name: "Organic Maple Syrup<br><br>",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "8.99",
		url: "./images/maple0.jpg"
	},
	{
		name: "Maple Joe<br><br><br><br>",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "10.00",
		url: "./images/maple1.jpg"
	},
	{
		name: "Great Northern Maple Syrup",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "2Mil",
		url: "./images/maple2.jpg"
	},
	{
		name: "Pure Maple Syrup",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "4.99",
		url: "./images/maple3.jpg"
	},
	{
		name: "Maple Joe 2.0 Maple Syrup",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "7.25",
		url: "./images/maple1.jpg"
	},
	{
		name: "Kallas Maple Syrup",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "10.00",
		url: "./images/maple6.jpg"
	},
	{
		name: "The Most Canadian of all Maple Syrups",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "12.99",
		url: "./images/maple4.jpg"

	},
	{
		name: "Hidden Springs Maple Syrup<br><br>",
		description: "Maple syrup is the sap from the xylem of sugar maple or various other species of maple trees.",
		price: "10.00",
		url: "./images/maple8.jpg"
	},
	
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
                        <img src="${item.url}" alt="malplesyrup">
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





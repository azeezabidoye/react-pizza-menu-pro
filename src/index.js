// Import React Modules
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

// Import React Component for rendering
// import App from "./App";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{numPizzas > 0 ? (
				<ul className="pizzas">
					{pizzas.map((pizzaEl) => (
						<Pizza pizzaObj={pizzaEl} key={pizzaEl.name} />
					))}
				</ul>
			) : (
				<p>
					We are currently working on our menu. Kindly check back
					later!
				</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// if (pizzaObj.soldOut) return null;

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<span>
					<h3>{pizzaObj.name}</h3>
				</span>
				<span>
					<p>{pizzaObj.ingredients}</p>
				</span>
				<span>{pizzaObj.soldOut ? "SOLD-OUT" : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);
	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<p>
					Our opening hours is between {openHour}:00 and {closeHour}
					:00
				</p>
			)}
		</footer>
	);
}

function Order({ closeHour }) {
	return (
		<div className="order">
			<p>
				We are currently open until {closeHour}:00, come visit us or
				order online.
			</p>
			<button className="btn">Order now</button>
		</div>
	);
}

// Create variable to save the div-element provided in the HTML file for rendition
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the div-element save by inserting intended Components
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

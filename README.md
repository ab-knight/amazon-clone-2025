🛒 Amazon Clone (React)

A fully functional Amazon-style e-commerce web application built with React, featuring product listings, cart management, quantity control, subtotal calculation, and global state management using Context API.

🚀 Features

🏠 Home page with product categories

🛍️ Product listing using FakeStore API

➕ Add products to cart

➖ Increase / decrease product quantity

🗑️ Remove product when quantity reaches zero

🧮 Dynamic subtotal calculation

🛒 Cart item count updates in header

🌐 Client-side routing with React Router

🎨 Responsive UI with CSS Modules

🧰 Tech Stack

React

React Router DOM

Context API + Reducer

FakeStore API

CSS Modules

React Icons

📁 Project Structure
src/
│
├── Components/
│   ├── Header/
│   ├── LowerHeader/
│   ├── Layout/
│   ├── Product/
│   ├── CurrencyFormat/
│   └── DataProvider/
│
├── Pages/
│   ├── Home/
│   ├── Cart/
│   └── Auth/
│
├── Utility/
│   ├── reducer.js
│   └── action.type.js
│
└── App.js

🔁 State Management

Global state is handled using React Context API with a reducer.

Actions

ADD_TO_BASKET

REMOVE_FROM_BASKET

Example Reducer Logic

Adds item if not in cart

Increases quantity if item exists

Decreases quantity or removes item when count reaches zero

🌐 API Used

FakeStore API

https://fakestoreapi.com/products
https://fakestoreapi.com/products/category/:category


Product images are loaded directly from the API response (product.image).

🧮 Cart Logic

Cart count in header = sum of item quantities

Subtotal = price × amount

Quantity updates instantly using reducer logic

▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/ab-kinight/amazon-clone.git

2️⃣ Install dependencies
npm install

3️⃣ Run the app
npm start


App runs on:

http://localhost:3000

📌 Future Improvements

🔐 Authentication (Firebase/Auth)

💳 Payment integration

📦 Orders history

❤️ Wishlist

🔍 Search & filter

📱 Better mobile responsiveness

🧠 Learning Outcomes

Deep understanding of Context API

Real-world reducer logic

Handling quantities in cart

React component architecture

API data handling

👤 Author

Abel
Built as a learning & portfolio project 🚀
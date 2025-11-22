
---

## 📄 Frontend README – `product-frontend-react/README.md`

```markdown
# Aahaas Store Frontend (React + Vite)

This is the **frontend** for the Aahaas product list web application.  
It is built with **React** and **Vite** and communicates with the Laravel API.

The main goal is to display products in a nice layout  
and show how a React app can talk to a Laravel backend.

---

## 1. What this App Does

- Shows a **home page** with:

  - Top navigation bar (logo, search box, "Home" and "Products" links, cart icon)
  - Hero / banner section with title, description and **"Shop Now"** button
  - **Featured Products** section with product cards loaded from the API
  - Footer with copyright text and social media icons

- Loads products from the **Laravel API** at `/api/products`.
- Lets the user **search** products by name or description.
- Has an **Add to Cart** button on each product card.
- Increases the **cart count** in the header when items are added.
- Shows a **loading message** while data is loading and an **error message** if something fails.

---

## 2. Technology Used

- React
- Vite (build tool)
- Axios (for HTTP requests)
- CSS (custom styling in `App.css`)

---

## 3. Prerequisites

Please install:

- **Node.js** (version 18 or newer recommended)
- **npm** (comes with Node.js)
- A running **Laravel backend** from this same project  
  (see backend README for how to start it)

Make sure the API is running on something like:

```text
http://127.0.0.1:8000/api

### 4. How to Set Up the Project

## 4.1 Clone or download the project
git clone <https://github.com/Manulji123/product-frontend-react.git>
cd product-frontend-react

## 4.2 Install dependencies
npm install

### 5. How to Run the App
start the React app (Fromtenf folder terminal))
npm run dev

Vite will show a local URL, usually: http://localhost:5173
Open that URL in your browser.
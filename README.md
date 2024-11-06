# Blu Gadgets E-commerce Platform

Welcome to Blu Gadgets! This is an e-commerce platform designed to help users discover, explore, and purchase the latest gadgets and accessories. Built using React and Tailwind CSS, Blu Gadgets offers a seamless and responsive shopping experience.

---

## 🔗 Links

- *Live Website*: [Blu Gadgets Live Site](https://blugadgets-akashsaha02.netlify.app)

---

## 🚀 React Fundamentals Used

In this project, we utilized several core React concepts to enhance performance, maintainability, and user experience:

1. *Components*: Reusable components like Navbar, Footer, ProductCard, and Modal for consistency across pages.
2. *React Router*: For navigating between pages and handling routes, including a custom 404 page.
3. *Hooks*: Utilized useState, useEffect, useContext, useNavigate, and useLocation for state management and navigation.
4. *Context API*: Managed global state for cart and wishlist to ensure efficient data flow.
5. *Conditional Rendering*: Showed specific components based on user actions, like showing toast messages when items are added to the cart or wishlist.

---

## 🛠 Data Management

We used *Context API* to manage data flow, such as handling cart and wishlist items across components. For persistence, *LocalStorage* was implemented to ensure cart and wishlist data remains available even after page reloads.

---

## 🌟 Key Features

1. *Dynamic Shopping Cart and Wishlist*  
   - Users can add items to their cart and wishlist, with badges indicating the number of items. Persistent data storage ensures items remain saved across sessions.

2. *Product Categories and Filtering*  
   - Sidebar categories and product filtering allow users to browse gadgets based on categories like computers, phones, and accessories.

3. *Detailed Product Pages*  
   - Each product page displays comprehensive details, including price, specifications, availability, and ratings, along with add-to-cart and wishlist options.

4. *Dashboard with Sorting Options*  
   - The dashboard features "Cart" and "Wishlist" tabs, with options to sort items by price. Users can also see the total cost of cart items and purchase them with a confirmation modal.

5. *Responsive Design and Smooth Navigation*  
   - Fully responsive layout built with Tailwind CSS for mobile and desktop. Use of useNavigate and useLocation for smooth navigation and a distinct background for the homepage.

---

## 📈 Challenge Features (Optional)

1. *Price Limit on Cart*: Prevent adding items if the total cart value exceeds $1000.
2. *Purchase Confirmation Modal*: After purchase, users see a confirmation and are redirected to the homepage.
3. *Dynamic Page Titles and Favicon*: Each page has a unique title, enhancing the browsing experience.

---

Thank you for exploring Blu Gadgets! Feel free to clone the repository and run it locally or explore the live version linked above.
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=740" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicNTUf65IigoJ0kX1iYs-TySL1mBXwMcNvA&s" />
            <h3>Dominos</h3>
            <h4>Pizza, Pasta</h4>
            <h4>4.1 stars</h4>
            <h4>38 mins</h4>

        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

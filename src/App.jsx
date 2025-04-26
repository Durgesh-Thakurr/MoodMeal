
import React, { useState, useRef, useEffect } from 'react';
import LogoHeader from './components/LogoHeader';
import MoodSelector from './components/MoodSelector';
import FoodSuggestion from './components/FoodSuggestion';
import FooterQuote from './components/FooterQuote';



const mockData = {
  "Happy": [
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Ice Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream" },
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" },
    { name: "Milkshake", link: "https://www.youtube.com/results?search_query=how+to+make+Milkshake" },
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Chocolate Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Cake" },
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+&+Cheese" },
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
  ],
  "Sad": [
    { name: "Coffee", link: "https://www.youtube.com/results?search_query=how+to+make+Coffee" },
    { name: "Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Sandwich" },
    { name: "Energy Bar", link: "https://www.youtube.com/results?search_query=how+to+make+Energy+Bar" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" },
    { name: "Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Rice" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" },
  ],
  "Tired": [
    { name: "Fruit Punch", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Punch" },
    { name: "Green Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Green+Tea" },
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Soup" },
    { name: "Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Salad" },
    { name: "Spicy Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Spicy+Noodles" },
    { name: "Hot Wings", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Wings" },
    { name: "BBQ Ribs", link: "https://www.youtube.com/results?search_query=how+to+make+BBQ+Ribs" },
    { name: "Loaded Fries", link: "https://www.youtube.com/results?search_query=how+to+make+Loaded+Fries" },
    { name: "Fusion Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Fusion+Pasta" },
  ],
  "Stressed": [
    { name: "Mix Veg", link: "https://www.youtube.com/results?search_query=how+to+make+Mix+Veg" },
    { name: "Paneer Roll", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Roll" },
    { name: "Quesadilla", link: "https://www.youtube.com/results?search_query=how+to+make+Quesadilla" },
    { name: "Instant Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Instant+Noodles" },
    { name: "Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Pancakes" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
    { name: "Fried Snacks", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Snacks" },
    { name: "Fruit Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Salad" },
    { name: "Lassi", link: "https://www.youtube.com/results?search_query=how+to+make+Lassi" },
    { name: "Paneer Curry", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Curry" },
  ],
  "Excited": [
    { name: "Jelly", link: "https://www.youtube.com/results?search_query=how+to+make+Jelly" },
    { name: "Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Candy" },
    { name: "Popsicles", link: "https://www.youtube.com/results?search_query=how+to+make+Popsicles" },
    { name: "Funny Shaped Sandwiches", link: "https://www.youtube.com/results?search_query=how+to+make+Funny+Shaped+Sandwiches" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Boiled Eggs", link: "https://www.youtube.com/results?search_query=how+to+make+Boiled+Eggs" },
    { name: "Grilled Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Chicken" },
    { name: "Veg Wrap", link: "https://www.youtube.com/results?search_query=how+to+make+Veg+Wrap" },
    { name: "Strawberries & Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberries+&+Cream" },
    { name: "Heart Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Heart+Cookies" },
  ],
  "Calm": [
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Romantic Dinner", link: "https://www.youtube.com/results?search_query=how+to+make+Romantic+Dinner" },
    { name: "Cup Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Cup+Noodles" },
    { name: "Mini Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Mini+Pancakes" },
    { name: "Toast with Jam", link: "https://www.youtube.com/results?search_query=how+to+make+Toast+with+Jam" },
    { name: "Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Cookies" },
    { name: "Hot Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Chocolate" },
    { name: "Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Porridge" },
    { name: "Rice Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Bowl" },
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
  ],
  "Angry": [
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Falafel", link: "https://www.youtube.com/results?search_query=how+to+make+Falafel" },
    { name: "Stuffed Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Paratha" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Chia Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Chia+Pudding" },
    { name: "Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Muffins" },
    { name: "Hummus", link: "https://www.youtube.com/results?search_query=how+to+make+Hummus" },
    { name: "Bruschetta", link: "https://www.youtube.com/results?search_query=how+to+make+Bruschetta" },
    { name: "Egg Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Egg+Salad" },
    { name: "Spring Rolls", link: "https://www.youtube.com/results?search_query=how+to+make+Spring+Rolls" },
  ],
  "Confused": [
    { name: "French Toast", link: "https://www.youtube.com/results?search_query=how+to+make+French+Toast" },
    { name: "Gnocchi", link: "https://www.youtube.com/results?search_query=how+to+make+Gnocchi" },
    { name: "Crepes", link: "https://www.youtube.com/results?search_query=how+to+make+Crepes" },
    { name: "Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Tiramisu" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Ice Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream" },
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" },
    { name: "Milkshake", link: "https://www.youtube.com/results?search_query=how+to+make+Milkshake" },
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Chocolate Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Cake" },
  ],
  "Bored": [
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+&+Cheese" },
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
    { name: "Coffee", link: "https://www.youtube.com/results?search_query=how+to+make+Coffee" },
    { name: "Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Sandwich" },
    { name: "Energy Bar", link: "https://www.youtube.com/results?search_query=how+to+make+Energy+Bar" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" },
    { name: "Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Rice" },
  ],
  "Grateful": [
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" },
    { name: "Fruit Punch", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Punch" },
    { name: "Green Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Green+Tea" },
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Soup" },
    { name: "Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Salad" },
    { name: "Spicy Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Spicy+Noodles" },
  ],
  "Silly": [
    { name: "Hot Wings", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Wings" },
    { name: "BBQ Ribs", link: "https://www.youtube.com/results?search_query=how+to+make+BBQ+Ribs" },
    { name: "Loaded Fries", link: "https://www.youtube.com/results?search_query=how+to+make+Loaded+Fries" },
    { name: "Fusion Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Fusion+Pasta" },
    { name: "Mix Veg", link: "https://www.youtube.com/results?search_query=how+to+make+Mix+Veg" },
    { name: "Paneer Roll", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Roll" },
    { name: "Quesadilla", link: "https://www.youtube.com/results?search_query=how+to+make+Quesadilla" },
    { name: "Instant Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Instant+Noodles" },
    { name: "Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Pancakes" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
  ],
  "Motivated": [
    { name: "Fried Snacks", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Snacks" },
    { name: "Fruit Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Salad" },
    { name: "Lassi", link: "https://www.youtube.com/results?search_query=how+to+make+Lassi" },
    { name: "Paneer Curry", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Curry" },
    { name: "Jelly", link: "https://www.youtube.com/results?search_query=how+to+make+Jelly" },
    { name: "Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Candy" },
    { name: "Popsicles", link: "https://www.youtube.com/results?search_query=how+to+make+Popsicles" },
    { name: "Funny Shaped Sandwiches", link: "https://www.youtube.com/results?search_query=how+to+make+Funny+Shaped+Sandwiches" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Boiled Eggs", link: "https://www.youtube.com/results?search_query=how+to+make+Boiled+Eggs" },
  ],
  "Love": [
    { name: "Grilled Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Chicken" },
    { name: "Veg Wrap", link: "https://www.youtube.com/results?search_query=how+to+make+Veg+Wrap" },
    { name: "Strawberries & Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberries+&+Cream" },
    { name: "Heart Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Heart+Cookies" },
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Romantic Dinner", link: "https://www.youtube.com/results?search_query=how+to+make+Romantic+Dinner" },
    { name: "Cup Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Cup+Noodles" },
    { name: "Mini Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Mini+Pancakes" },
    { name: "Toast with Jam", link: "https://www.youtube.com/results?search_query=how+to+make+Toast+with+Jam" },
    { name: "Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Cookies" },
  ],
  "Shy": [
    { name: "Hot Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Chocolate" },
    { name: "Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Porridge" },
    { name: "Rice Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Bowl" },
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Falafel", link: "https://www.youtube.com/results?search_query=how+to+make+Falafel" },
    { name: "Stuffed Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Paratha" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Chia Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Chia+Pudding" },
    { name: "Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Muffins" },
  ],
  "Scared": [
    { name: "Hummus", link: "https://www.youtube.com/results?search_query=how+to+make+Hummus" },
    { name: "Bruschetta", link: "https://www.youtube.com/results?search_query=how+to+make+Bruschetta" },
    { name: "Egg Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Egg+Salad" },
    { name: "Spring Rolls", link: "https://www.youtube.com/results?search_query=how+to+make+Spring+Rolls" },
    { name: "French Toast", link: "https://www.youtube.com/results?search_query=how+to+make+French+Toast" },
    { name: "Gnocchi", link: "https://www.youtube.com/results?search_query=how+to+make+Gnocchi" },
    { name: "Crepes", link: "https://www.youtube.com/results?search_query=how+to+make+Crepes" },
    { name: "Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Tiramisu" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Ice Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream" },
  ],
  "Proud": [
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" },
    { name: "Milkshake", link: "https://www.youtube.com/results?search_query=how+to+make+Milkshake" },
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Chocolate Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Cake" },
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+&+Cheese" },
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
    { name: "Coffee", link: "https://www.youtube.com/results?search_query=how+to+make+Coffee" },
    { name: "Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Sandwich" },
  ],
  "Relaxed": [
    { name: "Energy Bar", link: "https://www.youtube.com/results?search_query=how+to+make+Energy+Bar" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" },
    { name: "Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Rice" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" },
    { name: "Fruit Punch", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Punch" },
    { name: "Green Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Green+Tea" },
  ],
  "Energetic": [
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Soup" },
    { name: "Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Salad" },
    { name: "Spicy Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Spicy+Noodles" },
    { name: "Hot Wings", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Wings" },
    { name: "BBQ Ribs", link: "https://www.youtube.com/results?search_query=how+to+make+BBQ+Ribs" },
    { name: "Loaded Fries", link: "https://www.youtube.com/results?search_query=how+to+make+Loaded+Fries" },
    { name: "Fusion Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Fusion+Pasta" },
    { name: "Mix Veg", link: "https://www.youtube.com/results?search_query=how+to+make+Mix+Veg" },
    { name: "Paneer Roll", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Roll" },
  ],
  "Lonely": [
    { name: "Quesadilla", link: "https://www.youtube.com/results?search_query=how+to+make+Quesadilla" },
    { name: "Instant Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Instant+Noodles" },
    { name: "Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Pancakes" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
    { name: "Fried Snacks", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Snacks" },
    { name: "Fruit Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Salad" },
    { name: "Lassi", link: "https://www.youtube.com/results?search_query=how+to+make+Lassi" },
    { name: "Paneer Curry", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Curry" },
    { name: "Jelly", link: "https://www.youtube.com/results?search_query=how+to+make+Jelly" },
    { name: "Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Candy" },
  ],
  "Cheerful": [
    { name: "Popsicles", link: "https://www.youtube.com/results?search_query=how+to+make+Popsicles" },
    { name: "Funny Shaped Sandwiches", link: "https://www.youtube.com/results?search_query=how+to+make+Funny+Shaped+Sandwiches" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Boiled Eggs", link: "https://www.youtube.com/results?search_query=how+to+make+Boiled+Eggs" },
    { name: "Grilled Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Chicken" },
    { name: "Veg Wrap", link: "https://www.youtube.com/results?search_query=how+to+make+Veg+Wrap" },
    { name: "Strawberries & Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberries+&+Cream" },
    { name: "Heart Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Heart+Cookies" },
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Romantic Dinner", link: "https://www.youtube.com/results?search_query=how+to+make+Romantic+Dinner" },
  ],
  "Nostalgic": [
    { name: "Cup Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Cup+Noodles" },
    { name: "Mini Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Mini+Pancakes" },
    { name: "Toast with Jam", link: "https://www.youtube.com/results?search_query=how+to+make+Toast+with+Jam" },
    { name: "Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Cookies" },
    { name: "Hot Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Chocolate" },
    { name: "Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Porridge" },
    { name: "Rice Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Bowl" },
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Falafel", link: "https://www.youtube.com/results?search_query=how+to+make+Falafel" },
  ],
  "Hopeful": [
    { name: "Stuffed Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Paratha" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Chia Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Chia+Pudding" },
    { name: "Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Muffins" },
    { name: "Hummus", link: "https://www.youtube.com/results?search_query=how+to+make+Hummus" },
    { name: "Bruschetta", link: "https://www.youtube.com/results?search_query=how+to+make+Bruschetta" },
    { name: "Egg Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Egg+Salad" },
    { name: "Spring Rolls", link: "https://www.youtube.com/results?search_query=how+to+make+Spring+Rolls" },
    { name: "French Toast", link: "https://www.youtube.com/results?search_query=how+to+make+French+Toast" },
    { name: "Gnocchi", link: "https://www.youtube.com/results?search_query=how+to+make+Gnocchi" },
  ],
  "Lazy": [
    { name: "Crepes", link: "https://www.youtube.com/results?search_query=how+to+make+Crepes" },
    { name: "Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Tiramisu" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Ice Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream" },
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" },
    { name: "Milkshake", link: "https://www.youtube.com/results?search_query=how+to+make+Milkshake" },
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Chocolate Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Cake" },
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
  ],
  "Adventurous": [
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+&+Cheese" },
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
    { name: "Coffee", link: "https://www.youtube.com/results?search_query=how+to+make+Coffee" },
    { name: "Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Sandwich" },
    { name: "Energy Bar", link: "https://www.youtube.com/results?search_query=how+to+make+Energy+Bar" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" },
    { name: "Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Rice" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
  ],
  "Curious": [
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" },
    { name: "Fruit Punch", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Punch" },
    { name: "Green Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Green+Tea" },
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Soup" },
    { name: "Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Salad" },
    { name: "Spicy Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Spicy+Noodles" },
    { name: "Hot Wings", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Wings" },
    { name: "BBQ Ribs", link: "https://www.youtube.com/results?search_query=how+to+make+BBQ+Ribs" },
  ],
  "Romantic": [
    { name: "Loaded Fries", link: "https://www.youtube.com/results?search_query=how+to+make+Loaded+Fries" },
    { name: "Fusion Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Fusion+Pasta" },
    { name: "Mix Veg", link: "https://www.youtube.com/results?search_query=how+to+make+Mix+Veg" },
    { name: "Paneer Roll", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Roll" },
    { name: "Quesadilla", link: "https://www.youtube.com/results?search_query=how+to+make+Quesadilla" },
    { name: "Instant Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Instant+Noodles" },
    { name: "Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Pancakes" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
    { name: "Fried Snacks", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Snacks" },
    { name: "Fruit Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Salad" },
  ],
  "Focused": [
    { name: "Lassi", link: "https://www.youtube.com/results?search_query=how+to+make+Lassi" },
    { name: "Paneer Curry", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Curry" },
    { name: "Jelly", link: "https://www.youtube.com/results?search_query=how+to+make+Jelly" },
    { name: "Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Candy" },
    { name: "Popsicles", link: "https://www.youtube.com/results?search_query=how+to+make+Popsicles" },
    { name: "Funny Shaped Sandwiches", link: "https://www.youtube.com/results?search_query=how+to+make+Funny+Shaped+Sandwiches" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Boiled Eggs", link: "https://www.youtube.com/results?search_query=how+to+make+Boiled+Eggs" },
    { name: "Grilled Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Chicken" },
    { name: "Veg Wrap", link: "https://www.youtube.com/results?search_query=how+to+make+Veg+Wrap" },
  ],
  "Sleepy": [
    { name: "Strawberries & Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberries+&+Cream" },
    { name: "Heart Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Heart+Cookies" },
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Romantic Dinner", link: "https://www.youtube.com/results?search_query=how+to+make+Romantic+Dinner" },
    { name: "Cup Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Cup+Noodles" },
    { name: "Mini Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Mini+Pancakes" },
    { name: "Toast with Jam", link: "https://www.youtube.com/results?search_query=how+to+make+Toast+with+Jam" },
    { name: "Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Cookies" },
    { name: "Hot Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Chocolate" },
    { name: "Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Porridge" },
  ],
  "Hungry": [
    { name: "Rice Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Bowl" },
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Falafel", link: "https://www.youtube.com/results?search_query=how+to+make+Falafel" },
    { name: "Stuffed Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Paratha" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Chia Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Chia+Pudding" },
    { name: "Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Muffins" },
    { name: "Hummus", link: "https://www.youtube.com/results?search_query=how+to+make+Hummus" },
    { name: "Bruschetta", link: "https://www.youtube.com/results?search_query=how+to+make+Bruschetta" },
  ],
  "Creative": [
    { name: "Egg Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Egg+Salad" },
    { name: "Spring Rolls", link: "https://www.youtube.com/results?search_query=how+to+make+Spring+Rolls" },
    { name: "French Toast", link: "https://www.youtube.com/results?search_query=how+to+make+French+Toast" },
    { name: "Gnocchi", link: "https://www.youtube.com/results?search_query=how+to+make+Gnocchi" },
    { name: "Crepes", link: "https://www.youtube.com/results?search_query=how+to+make+Crepes" },
    { name: "Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Tiramisu" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Ice Cream", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream" },
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" },
    { name: "Milkshake", link: "https://www.youtube.com/results?search_query=how+to+make+Milkshake" },
  ],
  "Craving": [
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Chocolate Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Cake" },
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+&+Cheese" },
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
    { name: "Coffee", link: "https://www.youtube.com/results?search_query=how+to+make+Coffee" },
    { name: "Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Sandwich" },
    { name: "Energy Bar", link: "https://www.youtube.com/results?search_query=how+to+make+Energy+Bar" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
  ],
  "Determined": [
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" },
    { name: "Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Fried+Rice" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" },
    { name: "Fruit Punch", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Punch" },
    { name: "Green Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Green+Tea" },
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Soup" },
  ],

  Peaceful: [
    { name: 'Chamomile Tea', link: 'https://www.youtube.com/watch?v=fxLynmHjF3g' },
    { name: 'Avocado Toast', link: 'https://www.youtube.com/watch?v=7H8zmT2d6bs' },
    { name: 'Miso Soup', link: 'https://www.youtube.com/watch?v=4P7CklQw1sU' },
    { name: 'Sushi Rolls', link: 'https://www.youtube.com/watch?v=I1UDS2kgqY8' },
    { name: 'Matcha Latte', link: 'https://www.youtube.com/watch?v=RU6QGy2KMZ0' },
    { name: 'Zen Buddha Bowl', link: 'https://www.youtube.com/watch?v=fcG7SI2OY3s' },
    { name: 'Herbal Smoothie', link: 'https://www.youtube.com/watch?v=4abup3QIWgM' },
    { name: 'Steamed Dumplings', link: 'https://www.youtube.com/watch?v=86Mo9YZCmFA' },
    { name: 'Mediterranean Quinoa', link: 'https://www.youtube.com/watch?v=jxZSGVWZ3MQ' },
    { name: 'Oatmeal with Berries', link: 'https://www.youtube.com/watch?v=FZLT_hqJ0VE' }
  ],
  Thankful: [
    { name: 'Roast Turkey', link: 'https://www.youtube.com/watch?v=3tY7rZxT3RY' },
    { name: 'Pumpkin Pie', link: 'https://www.youtube.com/watch?v=7XeH6UJNlXc' },
    { name: 'Stuffing', link: 'https://www.youtube.com/watch?v=kQ1Q17wIuIQ' },
    { name: 'Cranberry Sauce', link: 'https://www.youtube.com/watch?v=_MO3ptTsmZs' },
    { name: 'Sweet Potato Casserole', link: 'https://www.youtube.com/watch?v=PGa3K6wzKjE' },
    { name: 'Apple Pie', link: 'https://www.youtube.com/watch?v=G-TGxfpV5kI' },
    { name: 'Mashed Potatoes', link: 'https://www.youtube.com/watch?v=1jG9J4rjDTA' },
    { name: 'Cornbread', link: 'https://www.youtube.com/watch?v=u6XLx6SvvgQ' },
    { name: 'Gravy', link: 'https://www.youtube.com/watch?v=QpztF77uKVo' },
    { name: 'Green Bean Casserole', link: 'https://www.youtube.com/watch?v=-NiU3Zgjh44' }
  ],
  Playful: [
    { name: 'Mini Pizzas', link: 'https://www.youtube.com/watch?v=-T1FN5SpoD8' },
    { name: 'Rainbow Cupcakes', link: 'https://www.youtube.com/watch?v=5nH_XBlR8EM' },
    { name: 'Loaded Nachos', link: 'https://www.youtube.com/watch?v=R3DbyV4iSN4' },
    { name: 'Cheesy Fries', link: 'https://www.youtube.com/watch?v=rWQExz-2dZk' },
    { name: 'Popcorn Chicken', link: 'https://www.youtube.com/watch?v=6CyoJdMTfdQ' },
    { name: 'DIY Tacos', link: 'https://www.youtube.com/watch?v=PL9YXWJ9BlI' },
    { name: 'Colorful Smoothies', link: 'https://www.youtube.com/watch?v=srJ1Bky34Gs' },
    { name: 'Fruit Kabobs', link: 'https://www.youtube.com/watch?v=9uj9sTfBpuM' },
    { name: 'Sliders', link: 'https://www.youtube.com/watch?v=4IojVTPIjC4' },
    { name: 'Ice Cream Sundaes', link: 'https://www.youtube.com/watch?v=TxZYszvYt20' }
  ],
  Optimistic: [
    { name: 'Sunshine Smoothie', link: 'https://www.youtube.com/watch?v=9IX1TYhK9CQ' },
    { name: 'Avocado Egg Toast', link: 'https://www.youtube.com/watch?v=yBkDFej5p-Q' },
    { name: 'Lemon Chicken', link: 'https://www.youtube.com/watch?v=YeIUrMQaMXs' },
    { name: 'Fruit Salad', link: 'https://www.youtube.com/watch?v=f8VdpxGQbBw' },
    { name: 'Veggie Stir Fry', link: 'https://www.youtube.com/watch?v=r3d0Lg4K6Kg' },
    { name: 'Orange Glazed Salmon', link: 'https://www.youtube.com/watch?v=AN3SLs9ZwIE' },
    { name: 'Strawberry Yogurt Parfait', link: 'https://www.youtube.com/watch?v=jqQxq5VdiMQ' },
    { name: 'Stuffed Peppers', link: 'https://www.youtube.com/watch?v=0jP46GQJQIo' },
    { name: 'Blueberry Pancakes', link: 'https://www.youtube.com/watch?v=ExZyccHo_7c' },
    { name: 'Chicken Caesar Wraps', link: 'https://www.youtube.com/watch?v=wAF02FBtkGU' }
  ],
  Anxious: [
    { name: 'Banana Bread', link: 'https://www.youtube.com/watch?v=ZRzS5n5c6aM' },
    { name: 'Peanut Butter Smoothie', link: 'https://www.youtube.com/watch?v=vhtIt4gxL5w' },
    { name: 'Oatmeal Cookies', link: 'https://www.youtube.com/watch?v=qYocOXcC7gI' },
    { name: 'Chamomile Tea', link: 'https://www.youtube.com/watch?v=fxLynmHjF3g' },
    { name: 'Mac and Cheese', link: 'https://www.youtube.com/watch?v=4fHuADnV3vU' },
    { name: 'Chocolate Muffins', link: 'https://www.youtube.com/watch?v=GvNHbM1Llyw' },
    { name: 'Veggie Soup', link: 'https://www.youtube.com/watch?v=4E3Y_4FQF1M' },
    { name: 'Rice Pudding', link: 'https://www.youtube.com/watch?v=dH8sZyk_VxM' },
    { name: 'Herbal Tea Blend', link: 'https://www.youtube.com/watch?v=g2bEv08TmA4' },
    { name: 'Toast with Honey', link: 'https://www.youtube.com/watch?v=wM7SnQMR5Fs' } 
  ],
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mood, setMood] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef(null);

  // Toggle dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setSuggestions(mockData[selectedMood] || []);
    setTimeout(() => {
      suggestionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

 
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300 p-4 sm:p-6 flex flex-col items-center">
  
      {/* Dark Mode Toggle */}
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={toggleDarkMode}
          className="bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-yellow-200 dark:hover:bg-gray-700 transition text-sm sm:text-base"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
  
      {/* Logo Header */}
      <LogoHeader />
  
      {/* Mood Selector */}
      <div className="w-full max-w-5xl">
        <MoodSelector onSelect={handleMoodSelect} />
      </div>
  
      {/* Food Suggestions */}
      {mood && (
        <div
          ref={suggestionRef}
          className="w-full max-w-3xl mt-10 h-[70vh] overflow-y-auto"
        >
          <FoodSuggestion mood={mood} suggestions={suggestions} />
        </div>
      )}
  
      {/* Footer Quote - visible only if mood is selected */}
      {mood && (
        <div className="fixed bottom-4 left-4 right-4 sm:right-8 sm:left-auto max-w-xs p-4 bg-white dark:bg-gray-900 text-xs sm:text-sm text-gray-700 dark:text-gray-200 rounded-xl shadow-lg z-50">
          <FooterQuote mood={mood} />
        </div>
      )}
    </div>
  );
  
}

export default App;




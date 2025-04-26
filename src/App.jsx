
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
  Determined: [
    { name: "Fruit Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Smoothie" },
    { name: "Egg Fried Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Egg+Fried+Rice" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" }, // Indian
    { name: "Veg Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Veg+Biryani" }, // Indian
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" }, // Indian
    { name: "Pav Bhaji", link: "https://www.youtube.com/results?search_query=how+to+make+Pav+Bhaji" }, // Indian
    { name: "Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cupcakes" },
    { name: "Popcorn", link: "https://www.youtube.com/results?search_query=how+to+make+Popcorn" }
  ],

  Peaceful: [
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Miso Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Miso+Soup" },
    { name: "Masala Dosa", link: "https://www.youtube.com/results?search_query=how+to+make+Masala+Dosa" }, // Indian
    { name: "Idli Sambar", link: "https://www.youtube.com/results?search_query=how+to+make+Idli+Sambar" }, // Indian
    { name: "Mediterranean Quinoa", link: "https://www.youtube.com/results?search_query=how+to+make+Mediterranean+Quinoa" },
    { name: "Sushi Rolls", link: "https://www.youtube.com/results?search_query=how+to+make+Sushi+Rolls" },
    { name: "Palak Paneer", link: "https://www.youtube.com/results?search_query=how+to+make+Palak+Paneer" }, // Indian
    { name: "Herbal Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Herbal+Smoothie" },
    { name: "Aloo Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Paratha" } // Indian
  ],

  Thankful: [
    { name: "Butter Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Butter+Chicken" }, // Indian
    { name: "Pumpkin Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Pumpkin+Pie" },
    { name: "Stuffing", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffing" },
    { name: "Cranberry Sauce", link: "https://www.youtube.com/results?search_query=how+to+make+Cranberry+Sauce" },
    { name: "Sweet Potato Casserole", link: "https://www.youtube.com/results?search_query=how+to+make+Sweet+Potato+Casserole" },
    { name: "Apple Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Apple+Pie" },
    { name: "Mashed Potatoes", link: "https://www.youtube.com/results?search_query=how+to+make+Mashed+Potatoes" },
    { name: "Cornbread", link: "https://www.youtube.com/results?search_query=how+to+make+Cornbread" },
    { name: "Gravy", link: "https://www.youtube.com/results?search_query=how+to+make+Gravy" },
    { name: "Dal Makhani", link: "https://www.youtube.com/results?search_query=how+to+make+Dal+Makhani" } // Indian
  ],

  Playful: [
    { name: "Mini Pizzas", link: "https://www.youtube.com/results?search_query=how+to+make+Mini+Pizzas" },
    { name: "Rainbow Cupcakes", link: "https://www.youtube.com/results?search_query=how+to+make+Rainbow+Cupcakes" },
    { name: "Loaded Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Loaded+Nachos" },
    { name: "Cheesy Fries", link: "https://www.youtube.com/results?search_query=how+to+make+Cheesy+Fries" },
    { name: "Vada Pav", link: "https://www.youtube.com/results?search_query=how+to+make+Vada+Pav" }, // Indian
    { name: "Bhel Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Bhel+Puri" }, // Indian
    { name: "Ice Cream Sundaes", link: "https://www.youtube.com/results?search_query=how+to+make+Ice+Cream+Sundaes" },
    { name: "Fruit Kabobs", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Kabobs" },
    { name: "Pani Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Pani+Puri" }, // Indian
    { name: "Sliders", link: "https://www.youtube.com/results?search_query=how+to+make+Sliders" }
  ],

  Optimistic: [
    { name: "Sunshine Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Sunshine+Smoothie" },
    { name: "Poha", link: "https://www.youtube.com/results?search_query=how+to+make+Poha" }, // Indian
    { name: "Lemon Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Lemon+Chicken" },
    { name: "Fruit Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Salad" },
    { name: "Chole Bhature", link: "https://www.youtube.com/results?search_query=how+to+make+Chole+Bhature" }, // Indian
    { name: "Veggie Stir Fry", link: "https://www.youtube.com/results?search_query=how+to+make+Veggie+Stir+Fry" },
    { name: "Orange Glazed Salmon", link: "https://www.youtube.com/results?search_query=how+to+make+Orange+Glazed+Salmon" },
    { name: "Blueberry Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Blueberry+Pancakes" },
    { name: "Chicken Caesar Wraps", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+Caesar+Wraps" },
    { name: "Rajma Chawal", link: "https://www.youtube.com/results?search_query=how+to+make+Rajma+Chawal" } // Indian
  ],

  Anxious: [
    { name: "Banana Bread", link: "https://www.youtube.com/results?search_query=how+to+make+Banana+Bread" },
    { name: "Peanut Butter Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Peanut+Butter+Smoothie" },
    { name: "Oatmeal Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal+Cookies" },
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Mac and Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+and+Cheese" },
    { name: "Chocolate Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Muffins" },
    { name: "Upma", link: "https://www.youtube.com/results?search_query=how+to+make+Upma" }, // Indian
    { name: "Veggie Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Veggie+Soup" },
    { name: "Rice Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Pudding" },
    { name: "Toast with Honey", link: "https://www.youtube.com/results?search_query=how+to+make+Toast+with+Honey" }
  ]
};




function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mood, setMood] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef(null);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Apply dark mode to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Detect mood from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedMood = params.get('mood');
    if (sharedMood) {
      setMood(sharedMood);
      setSuggestions(mockData[sharedMood] || []);
    }
  }, []);

  // When user manually selects a mood
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

      {/* Food Suggestions with Animation */}
      {mood && (
        <div
          ref={suggestionRef}
          className="w-full max-w-3xl mt-10 h-[70vh] overflow-y-auto
          transition-all duration-700 ease-out transform animate-slide-in"
        >
          <FoodSuggestion mood={mood} suggestions={suggestions} />
        </div>
      )}

      {/* Footer Quote with Animation */}
      {mood && (
        <div className="fixed bottom-4 left-4 right-4 sm:right-8 sm:left-auto max-w-xs p-4
        bg-white dark:bg-gray-900 text-xs sm:text-sm text-gray-700 dark:text-gray-200
        rounded-xl shadow-lg z-50 transition-all duration-500 ease-in animate-fade-in">
          <FooterQuote mood={mood} />
        </div>
      )}
    </div>
  );
}

export default App;

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [mood, setMood] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const suggestionRef = useRef(null);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const handleMoodSelect = (selectedMood) => {
//     setMood(selectedMood);
//     setSuggestions(mockData[selectedMood] || []);
//     setTimeout(() => {
//       suggestionRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, 100);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300 p-4 sm:p-6 flex flex-col items-center">
      
//       {/* Dark Mode Toggle */}
//       <div className="w-full flex justify-end mb-4">
//         <button
//           onClick={toggleDarkMode}
//           className="bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-yellow-200 dark:hover:bg-gray-700 transition text-sm sm:text-base"
//         >
//           {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
//         </button>
//       </div>

//       {/* Logo Header */}
//       <LogoHeader />

//       {/* Mood Selector */}
//       <div className="w-full max-w-5xl">
//         <MoodSelector onSelect={handleMoodSelect} />
//       </div>

//       {/* Food Suggestions */}
//       {mood && (
//         <div
//           ref={suggestionRef}
//           className="w-full max-w-3xl mt-10 h-[70vh] overflow-y-auto"
//         >
//           <FoodSuggestion mood={mood} suggestions={suggestions} />
//         </div>
//       )}

//       {/* Footer Quote */}
//       {mood && (
//         <div className="fixed bottom-4 left-4 right-4 sm:right-8 sm:left-auto max-w-xs p-4 bg-white dark:bg-gray-900 text-xs sm:text-sm text-gray-700 dark:text-gray-200 rounded-xl shadow-lg z-50">
//           <FooterQuote mood={mood} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




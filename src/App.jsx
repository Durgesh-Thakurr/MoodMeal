
import React, { useState, useRef, useEffect } from 'react';
import LogoHeader from './components/LogoHeader';
import MoodSelector from './components/MoodSelector';
import FoodSuggestion from './components/FoodSuggestion';
import FooterQuote from './components/FooterQuote';






const mockData = {
  "Happy": [
    { name: "Butter Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Butter+Chicken" },
    { name: "Palak Paneer", link: "https://www.youtube.com/results?search_query=how+to+make+Palak+Paneer" },
    { name: "Chole Bhature", link: "https://www.youtube.com/results?search_query=how+to+make+Chole+Bhature" },
    { name: "Masala Dosa", link: "https://www.youtube.com/results?search_query=how+to+make+Masala+Dosa" },
    { name: "Gulab Jamun", link: "https://www.youtube.com/results?search_query=how+to+make+Gulab+Jamun" },
    { name: "Sushi", link: "https://www.youtube.com/results?search_query=how+to+make+Sushi" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" },
    { name: "Pad Thai", link: "https://www.youtube.com/results?search_query=how+to+make+Pad+Thai" },
    { name: "Croissant", link: "https://www.youtube.com/results?search_query=how+to+make+Croissant" }
  ],
  "Sad": [
    { name: "Dal Tadka", link: "https://www.youtube.com/results?search_query=how+to+make+Dal+Tadka" },
    { name: "Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Khichdi" },
    { name: "Aloo Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Paratha" },
    { name: "Curd Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Curd+Rice" },
    { name: "Gajar Halwa", link: "https://www.youtube.com/results?search_query=how+to+make+Gajar+Halwa" },
    { name: "Ramen", link: "https://www.youtube.com/results?search_query=how+to+make+Ramen" },
    { name: "Mac & Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Mac+and+Cheese" },
    { name: "Mashed Potatoes", link: "https://www.youtube.com/results?search_query=how+to+make+Mashed+Potatoes" },
    { name: "Hot Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Hot+Chocolate" },
    { name: "Apple Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Apple+Pie" }
  ],
  "Tired": [
    { name: "Poha", link: "https://www.youtube.com/results?search_query=how+to+make+Poha" },
    { name: "Upma", link: "https://www.youtube.com/results?search_query=how+to+make+Upma" },
    { name: "Sabudana Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Sabudana+Khichdi" },
    { name: "Masala Chai", link: "https://www.youtube.com/results?search_query=how+to+make+Masala+Chai" },
    { name: "Besan Chilla", link: "https://www.youtube.com/results?search_query=how+to+make+Besan+Chilla" },
    { name: "Miso Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Miso+Soup" },
    { name: "Pancakes", link: "https://www.youtube.com/results?search_query=how+to+make+Pancakes" },
    { name: "French Toast", link: "https://www.youtube.com/results?search_query=how+to+make+French+Toast" },
    { name: "Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Porridge" },
    { name: "Smoothie Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie+Bowl" }
  ],
  "Stressed": [
    { name: "Samosa", link: "https://www.youtube.com/results?search_query=how+to+make+Samosa" },
    { name: "Pakora", link: "https://www.youtube.com/results?search_query=how+to+make+Pakora" },
    { name: "Bhel Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Bhel+Puri" },
    { name: "Pani Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Pani+Puri" },
    { name: "Aloo Tikki", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Tikki" },
    { name: "Tempura", link: "https://www.youtube.com/results?search_query=how+to+make+Tempura" },
    { name: "Nachos", link: "https://www.youtube.com/results?search_query=how+to+make+Nachos" },
    { name: "Cheesecake", link: "https://www.youtube.com/results?search_query=how+to+make+Cheesecake" },
    { name: "Brownies", link: "https://www.youtube.com/results?search_query=how+to+make+Brownies" },
    { name: "Churros", link: "https://www.youtube.com/results?search_query=how+to+make+Churros" }
  ],
  "Excited": [
    { name: "Chicken Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+Tikka" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Tandoori Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Tandoori+Chicken" },
    { name: "Malai Kofta", link: "https://www.youtube.com/results?search_query=how+to+make+Malai+Kofta" },
    { name: "Dal Makhani", link: "https://www.youtube.com/results?search_query=how+to+make+Dal+Makhani" },
    { name: "Takoyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Takoyaki" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Lasagna", link: "https://www.youtube.com/results?search_query=how+to+make+Lasagna" },
    { name: "Paella", link: "https://www.youtube.com/results?search_query=how+to+make+Paella" },
    { name: "Pho", link: "https://www.youtube.com/results?search_query=how+to+make+Pho" }
  ],
  "Calm": [
    { name: "Kheer", link: "https://www.youtube.com/results?search_query=how+to+make+Kheer" },
    { name: "Phirni", link: "https://www.youtube.com/results?search_query=how+to+make+Phirni" },
    { name: "Halwa", link: "https://www.youtube.com/results?search_query=how+to+make+Halwa" },
    { name: "Sheera", link: "https://www.youtube.com/results?search_query=how+to+make+Sheera" },
    { name: "Shrikhand", link: "https://www.youtube.com/results?search_query=how+to+make+Shrikhand" },
    { name: "Matcha Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Matcha+Tea" },
    { name: "Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Tiramisu" },
    { name: "Crepes", link: "https://www.youtube.com/results?search_query=how+to+make+Crepes" },
    { name: "Panna Cotta", link: "https://www.youtube.com/results?search_query=how+to+make+Panna+Cotta" },
    { name: "Gelato", link: "https://www.youtube.com/results?search_query=how+to+make+Gelato" }
  ],
  "Angry": [
    { name: "Vindaloo", link: "https://www.youtube.com/results?search_query=how+to+make+Vindaloo" },
    { name: "Laal Maas", link: "https://www.youtube.com/results?search_query=how+to+make+Laal+Maas" },
    { name: "Chettinad Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Chettinad+Chicken" },
    { name: "Andhra Curry", link: "https://www.youtube.com/results?search_query=how+to+make+Andhra+Curry" },
    { name: "Kolhapuri Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Kolhapuri+Chicken" },
    { name: "Wasabi Peas", link: "https://www.youtube.com/results?search_query=how+to+make+Wasabi+Peas" },
    { name: "Buffalo Wings", link: "https://www.youtube.com/results?search_query=how+to+make+Buffalo+Wings" },
    { name: "Kimchi", link: "https://www.youtube.com/results?search_query=how+to+make+Kimchi" },
    { name: "Jalapeño Poppers", link: "https://www.youtube.com/results?search_query=how+to+make+Jalapeno+Poppers" },
    { name: "Sichuan Hot Pot", link: "https://www.youtube.com/results?search_query=how+to+make+Sichuan+Hot+Pot" }
  ],
  "Confused": [
    { name: "Idli", link: "https://www.youtube.com/results?search_query=how+to+make+Idli" },
    { name: "Dosa", link: "https://www.youtube.com/results?search_query=how+to+make+Dosa" },
    { name: "Vada", link: "https://www.youtube.com/results?search_query=how+to+make+Vada" },
    { name: "Uttapam", link: "https://www.youtube.com/results?search_query=how+to+make+Uttapam" },
    { name: "Appam", link: "https://www.youtube.com/results?search_query=how+to+make+Appam" },
    { name: "Okonomiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Okonomiyaki" },
    { name: "Falafel", link: "https://www.youtube.com/results?search_query=how+to+make+Falafel" },
    { name: "Quiche", link: "https://www.youtube.com/results?search_query=how+to+make+Quiche" },
    { name: "Goulash", link: "https://www.youtube.com/results?search_query=how+to+make+Goulash" },
    { name: "Bibimbap", link: "https://www.youtube.com/results?search_query=how+to+make+Bibimbap" }
  ],
  "Bored": [
    { name: "Frankie", link: "https://www.youtube.com/results?search_query=how+to+make+Frankie" },
    { name: "Kathi Roll", link: "https://www.youtube.com/results?search_query=how+to+make+Kathi+Roll" },
    { name: "Pav Bhaji", link: "https://www.youtube.com/results?search_query=how+to+make+Pav+Bhaji" },
    { name: "Dabeli", link: "https://www.youtube.com/results?search_query=how+to+make+Dabeli" },
    { name: "Misal Pav", link: "https://www.youtube.com/results?search_query=how+to+make+Misal+Pav" },
    { name: "Onigiri", link: "https://www.youtube.com/results?search_query=how+to+make+Onigiri" },
    { name: "Taco", link: "https://www.youtube.com/results?search_query=how+to+make+Taco" },
    { name: "Burrito", link: "https://www.youtube.com/results?search_query=how+to+make+Burrito" },
    { name: "Gyro", link: "https://www.youtube.com/results?search_query=how+to+make+Gyro" },
    { name: "Shawarma", link: "https://www.youtube.com/results?search_query=how+to+make+Shawarma" }
  ],
  "Grateful": [
    { name: "Modak", link: "https://www.youtube.com/results?search_query=how+to+make+Modak" },
    { name: "Puran Poli", link: "https://www.youtube.com/results?search_query=how+to+make+Puran+Poli" },
    { name: "Basundi", link: "https://www.youtube.com/results?search_query=how+to+make+Basundi" },
    { name: "Malpua", link: "https://www.youtube.com/results?search_query=how+to+make+Malpua" },
    { name: "Karanji", link: "https://www.youtube.com/results?search_query=how+to+make+Karanji" },
    { name: "Mochi", link: "https://www.youtube.com/results?search_query=how+to+make+Mochi" },
    { name: "Baklava", link: "https://www.youtube.com/results?search_query=how+to+make+Baklava" },
    { name: "Cannoli", link: "https://www.youtube.com/results?search_query=how+to+make+Cannoli" },
    { name: "Churros", link: "https://www.youtube.com/results?search_query=how+to+make+Churros" },
    { name: "Strudel", link: "https://www.youtube.com/results?search_query=how+to+make+Strudel" }
  ],
  "Silly": [
    { name: "Bhel Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Bhel+Puri" },
    { name: "Pani Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Pani+Puri" },
    { name: "Sev Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Sev+Puri" },
    { name: "Dahi Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Dahi+Puri" },
    { name: "Papdi Chaat", link: "https://www.youtube.com/results?search_query=how+to+make+Papdi+Chaat" },
    { name: "Dorayaki", link: "https://www.youtube.com/results?search_query=how+to+make+Dorayaki" },
    { name: "Cotton Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Cotton+Candy" },
    { name: "Bubble Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Bubble+Tea" },
    { name: "Fairy Bread", link: "https://www.youtube.com/results?search_query=how+to+make+Fairy+Bread" },
    { name: "Rainbow Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Rainbow+Cake" }
  ],
  "Motivated": [
    { name: "Rajma Chawal", link: "https://www.youtube.com/results?search_query=how+to+make+Rajma+Chawal" },
    { name: "Sambar Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Sambar+Rice" },
    { name: "Methi Thepla", link: "https://www.youtube.com/results?search_query=how+to+make+Methi+Thepla" },
    { name: "Pongal", link: "https://www.youtube.com/results?search_query=how+to+make+Pongal" },
    { name: "Moong Dal Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Moong+Dal+Khichdi" },
    { name: "Yakitori", link: "https://www.youtube.com/results?search_query=how+to+make+Yakitori" },
    { name: "Burrito Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Burrito+Bowl" },
    { name: "Quinoa Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Quinoa+Salad" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Granola", link: "https://www.youtube.com/results?search_query=how+to+make+Granola" }
  ],
  "Love": [
    { name: "Rasmalai", link: "https://www.youtube.com/results?search_query=how+to+make+Rasmalai" },
    { name: "Kaju Katli", link: "https://www.youtube.com/results?search_query=how+to+make+Kaju+Katli" },
    { name: "Barfi", link: "https://www.youtube.com/results?search_query=how+to+make+Barfi" },
    { name: "Laddu", link: "https://www.youtube.com/results?search_query=how+to+make+Laddu" },
    { name: "Peda", link: "https://www.youtube.com/results?search_query=how+to+make+Peda" },
    { name: "Daifuku", link: "https://www.youtube.com/results?search_query=how+to+make+Daifuku" },
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Red Velvet Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Red+Velvet+Cake" },
    { name: "Crème Brûlée", link: "https://www.youtube.com/results?search_query=how+to+make+Creme+Brulee" },
    { name: "Strawberry Shortcake", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberry+Shortcake" }
  ],
  "Shy": [
    { name: "Pesarattu", link: "https://www.youtube.com/results?search_query=how+to+make+Pesarattu" },
    { name: "Rava Dosa", link: "https://www.youtube.com/results?search_query=how+to+make+Rava+Dosa" },
    { name: "Neer Dosa", link: "https://www.youtube.com/results?search_query=how+to+make+Neer+Dosa" },
    { name: "Puttu", link: "https://www.youtube.com/results?search_query=how+to+make+Puttu" },
    { name: "Idiyappam", link: "https://www.youtube.com/results?search_query=how+to+make+Idiyappam" },
    { name: "Tamagoyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Tamagoyaki" },
    { name: "Muffins", link: "https://www.youtube.com/results?search_query=how+to+make+Muffins" },
    { name: "Waffles", link: "https://www.youtube.com/results?search_query=how+to+make+Waffles" },
    { name: "Scones", link: "https://www.youtube.com/results?search_query=how+to+make+Scones" },
    { name: "Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Donuts" }
  ],
  "Scared": [
    { name: "Sabudana Vada", link: "https://www.youtube.com/results?search_query=how+to+make+Sabudana+Vada" },
    { name: "Batata Vada", link: "https://www.youtube.com/results?search_query=how+to+make+Batata+Vada" },
    { name: "Kachori", link: "https://www.youtube.com/results?search_query=how+to+make+Kachori" },
    { name: "Pattice", link: "https://www.youtube.com/results?search_query=how+to+make+Pattice" },
    { name: "Bread Pakora", link: "https://www.youtube.com/results?search_query=how+to+make+Bread+Pakora" },
    { name: "Natto", link: "https://www.youtube.com/results?search_query=how+to+make+Natto" },
    { name: "Escargot", link: "https://www.youtube.com/results?search_query=how+to+make+Escargot" },
    { name: "Haggis", link: "https://www.youtube.com/results?search_query=how+to+make+Haggis" },
    { name: "Surströmming", link: "https://www.youtube.com/results?search_query=how+to+make+Surstromming" },
    { name: "Balut", link: "https://www.youtube.com/results?search_query=how+to+make+Balut" }
  ],
  "Proud": [
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
    { name: "Pulao", link: "https://www.youtube.com/results?search_query=how+to+make+Pulao" },
    { name: "Jeera Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Jeera+Rice" },
    { name: "Ghee Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Ghee+Rice" },
    { name: "Lemon Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Lemon+Rice" },
    { name: "Unagi", link: "https://www.youtube.com/results?search_query=how+to+make+Unagi" },
    { name: "Risotto", link: "https://www.youtube.com/results?search_query=how+to+make+Risotto" },
    { name: "Paella", link: "https://www.youtube.com/results?search_query=how+to+make+Paella" },
    { name: "Jambalaya", link: "https://www.youtube.com/results?search_query=how+to+make+Jambalaya" },
    { name: "Pilaf", link: "https://www.youtube.com/results?search_query=how+to+make+Pilaf" }
  ],
  "Relaxed": [
    { name: "Badam Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Badam+Milk" },
    { name: "Thandai", link: "https://www.youtube.com/results?search_query=how+to+make+Thandai" },
    { name: "Falooda", link: "https://www.youtube.com/results?search_query=how+to+make+Falooda" },
    { name: "Kesar Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Kesar+Milk" },
    { name: "Rose Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Rose+Milk" },
    { name: "Genmaicha Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Genmaicha+Tea" },
    { name: "Lavender Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Lavender+Tea" },
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Mint Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Mint+Tea" },
    { name: "Herbal Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Herbal+Tea" }
  ],
  "Energetic": [
    { name: "Chicken 65", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+65" },
    { name: "Gobi Manchurian", link: "https://www.youtube.com/results?search_query=how+to+make+Gobi+Manchurian" },
    { name: "Paneer 65", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+65" },
    { name: "Chilli Paneer", link: "https://www.youtube.com/results?search_query=how+to+make+Chilli+Paneer" },
    { name: "Chicken Lollipop", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+Lollipop" },
    { name: "Yakisoba", link: "https://www.youtube.com/results?search_query=how+to+make+Yakisoba" },
    { name: "Enchiladas", link: "https://www.youtube.com/results?search_query=how+to+make+Enchiladas" },
    { name: "Jerk Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Jerk+Chicken" },
    { name: "Satay", link: "https://www.youtube.com/results?search_query=how+to+make+Satay" },
    { name: "Fajitas", link: "https://www.youtube.com/results?search_query=how+to+make+Fajitas" }
  ],
  "Lonely": [
    { name: "Kadhi Pakora", link: "https://www.youtube.com/results?search_query=how+to+make+Kadhi+Pakora" },
    { name: "Aloo Gobi", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Gobi" },
    { name: "Baingan Bharta", link: "https://www.youtube.com/results?search_query=how+to+make+Baingan+Bharta" },
    { name: "Methi Malai Mutter", link: "https://www.youtube.com/results?search_query=how+to+make+Methi+Malai+Mutter" },
    { name: "Dum Aloo", link: "https://www.youtube.com/results?search_query=how+to+make+Dum+Aloo" },
    { name: "Sukiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Sukiyaki" },
    { name: "Shepherd's Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Shepherds+Pie" },
    { name: "Pot Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Pot+Pie" },
    { name: "Ratatouille", link: "https://www.youtube.com/results?search_query=how+to+make+Ratatouille" },
    { name: "Stuffed Peppers", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Peppers" }
  ],
  "Cheerful": [
    { name: "Jalebi", link: "https://www.youtube.com/results?search_query=how+to+make+Jalebi" },
    { name: "Imarti", link: "https://www.youtube.com/results?search_query=how+to+make+Imarti" },
    { name: "Balushahi", link: "https://www.youtube.com/results?search_query=how+to+make+Balushahi" },
    { name: "Chhena Poda", link: "https://www.youtube.com/results?search_query=how+to+make+Chhena+Poda" },
    { name: "Ghevar", link: "https://www.youtube.com/results?search_query=how+to+make+Ghevar" },
    { name: "Taiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Taiyaki" },
    { name: "Churros", link: "https://www.youtube.com/results?search_query=how+to+make+Churros" },
    { name: "Beignets", link: "https://www.youtube.com/results?search_query=how+to+make+Beignets" },
    { name: "Funnel Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Funnel+Cake" },
    { name: "Zeppole", link: "https://www.youtube.com/results?search_query=how+to+make+Zeppole" }
  ],
  "Nostalgic": [
    { name: "Poha", link: "https://www.youtube.com/results?search_query=how+to+make+Poha" },
    { name: "Upma", link: "https://www.youtube.com/results?search_query=how+to+make+Upma" },
    { name: "Dalia", link: "https://www.youtube.com/results?search_query=how+to+make+Dalia" },
    { name: "Besan Chilla", link: "https://www.youtube.com/results?search_query=how+to+make+Besan+Chilla" },
    { name: "Ragi Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Ragi+Porridge" },
    { name: "Omurice", link: "https://www.youtube.com/results?search_query=how+to+make+Omurice" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
    { name: "Tomato Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Tomato+Soup" },
    { name: "Milk Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Milk+Toast" },
    { name: "Eggs & Soldiers", link: "https://www.youtube.com/results?search_query=how+to+make+Eggs+and+Soldiers" }
  ],
  "Hopeful": [
    { name: "Modak", link: "https://www.youtube.com/results?search_query=how+to+make+Modak" },
    { name: "Puran Poli", link: "https://www.youtube.com/results?search_query=how+to+make+Puran+Poli" },
    { name: "Basundi", link: "https://www.youtube.com/results?search_query=how+to+make+Basundi" },
    { name: "Shankarpali", link: "https://www.youtube.com/results?search_query=how+to+make+Shankarpali" },
    { name: "Karanji", link: "https://www.youtube.com/results?search_query=how+to+make+Karanji" },
    { name: "Sakura Mochi", link: "https://www.youtube.com/results?search_query=how+to+make+Sakura+Mochi" },
    { name: "Panna Cotta", link: "https://www.youtube.com/results?search_query=how+to+make+Panna+Cotta" },
    { name: "Crème Caramel", link: "https://www.youtube.com/results?search_query=how+to+make+Creme+Caramel" },
    { name: "Pavlova", link: "https://www.youtube.com/results?search_query=how+to+make+Pavlova" },
    { name: "Chocolate Soufflé", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Souffle" }
  ],

  "Lazy": [
    { name: "Maggi", link: "https://www.youtube.com/results?search_query=how+to+make+Maggi" },
    { name: "Instant Noodles", link: "https://www.youtube.com/results?search_query=how+to+make+Instant+Noodles" },
    { name: "Bread Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Bread+Toast" },
    { name: "Cornflakes", link: "https://www.youtube.com/results?search_query=how+to+make+Cornflakes" },
    { name: "Boiled Eggs", link: "https://www.youtube.com/results?search_query=how+to+make+Boiled+Eggs" },
    { name: "Onigiri", link: "https://www.youtube.com/results?search_query=how+to+make+Onigiri" },
    { name: "Grilled Cheese", link: "https://www.youtube.com/results?search_query=how+to+make+Grilled+Cheese" },
    { name: "Avocado Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Avocado+Toast" },
    { name: "Cereal", link: "https://www.youtube.com/results?search_query=how+to+make+Cereal" },
    { name: "Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Smoothie" }
  ],
  
  "Hungry": [
    { name: "Biryani", link: "https://www.youtube.com/results?search_query=how+to+make+Biryani" },
    { name: "Butter Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Butter+Chicken" },
    { name: "Paneer Tikka", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+Tikka" },
    { name: "Dal Tadka", link: "https://www.youtube.com/results?search_query=how+to+make+Dal+Tadka" },
    { name: "Aloo Paratha", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Paratha" },
    { name: "Ramen", link: "https://www.youtube.com/results?search_query=how+to+make+Ramen" },
    { name: "Burger", link: "https://www.youtube.com/results?search_query=how+to+make+Burger" },
    { name: "Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Pizza" },
    { name: "Pasta", link: "https://www.youtube.com/results?search_query=how+to+make+Pasta" },
    { name: "Tacos", link: "https://www.youtube.com/results?search_query=how+to+make+Tacos" }
  ],
  "Energetic": [
    { name: "Chicken 65", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+65" },
    { name: "Gobi Manchurian", link: "https://www.youtube.com/results?search_query=how+to+make+Gobi+Manchurian" },
    { name: "Paneer 65", link: "https://www.youtube.com/results?search_query=how+to+make+Paneer+65" },
    { name: "Chilli Paneer", link: "https://www.youtube.com/results?search_query=how+to+make+Chilli+Paneer" },
    { name: "Chicken Lollipop", link: "https://www.youtube.com/results?search_query=how+to+make+Chicken+Lollipop" },
    { name: "Yakisoba", link: "https://www.youtube.com/results?search_query=how+to+make+Yakisoba" },
    { name: "Enchiladas", link: "https://www.youtube.com/results?search_query=how+to+make+Enchiladas" },
    { name: "Jerk Chicken", link: "https://www.youtube.com/results?search_query=how+to+make+Jerk+Chicken" },
    { name: "Satay", link: "https://www.youtube.com/results?search_query=how+to+make+Satay" },
    { name: "Fajitas", link: "https://www.youtube.com/results?search_query=how+to+make+Fajitas" }
  ],
  "Lonely": [
    { name: "Kadhi Pakora", link: "https://www.youtube.com/results?search_query=how+to+make+Kadhi+Pakora" },
    { name: "Aloo Gobi", link: "https://www.youtube.com/results?search_query=how+to+make+Aloo+Gobi" },
    { name: "Baingan Bharta", link: "https://www.youtube.com/results?search_query=how+to+make+Baingan+Bharta" },
    { name: "Methi Malai Mutter", link: "https://www.youtube.com/results?search_query=how+to+make+Methi+Malai+Mutter" },
    { name: "Dum Aloo", link: "https://www.youtube.com/results?search_query=how+to+make+Dum+Aloo" },
    { name: "Sukiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Sukiyaki" },
    { name: "Shepherd's Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Shepherds+Pie" },
    { name: "Pot Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Pot+Pie" },
    { name: "Ratatouille", link: "https://www.youtube.com/results?search_query=how+to+make+Ratatouille" },
    { name: "Stuffed Peppers", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffed+Peppers" }
  ],
  "Creative": [
    { name: "Dahi Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Dahi+Puri" },
    { name: "Bhel Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Bhel+Puri" },
    { name: "Pani Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Pani+Puri" },
    { name: "Sev Puri", link: "https://www.youtube.com/results?search_query=how+to+make+Sev+Puri" },
    { name: "Papdi Chaat", link: "https://www.youtube.com/results?search_query=how+to+make+Papdi+Chaat" },
    { name: "Dorayaki", link: "https://www.youtube.com/results?search_query=how+to+make+Dorayaki" },
    { name: "Rainbow Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Rainbow+Cake" },
    { name: "Sushi Burrito", link: "https://www.youtube.com/results?search_query=how+to+make+Sushi+Burrito" },
    { name: "Galaxy Donuts", link: "https://www.youtube.com/results?search_query=how+to+make+Galaxy+Donuts" },
    { name: "Mille Crepe Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Mille+Crepe+Cake" }
  ],
  "Nostalgic": [
    { name: "Poha", link: "https://www.youtube.com/results?search_query=how+to+make+Poha" },
    { name: "Upma", link: "https://www.youtube.com/results?search_query=how+to+make+Upma" },
    { name: "Dalia", link: "https://www.youtube.com/results?search_query=how+to+make+Dalia" },
    { name: "Besan Chilla", link: "https://www.youtube.com/results?search_query=how+to+make+Besan+Chilla" },
    { name: "Ragi Porridge", link: "https://www.youtube.com/results?search_query=how+to+make+Ragi+Porridge" },
    { name: "Omurice", link: "https://www.youtube.com/results?search_query=how+to+make+Omurice" },
    { name: "Tomato Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Tomato+Soup" },
    { name: "Milk Toast", link: "https://www.youtube.com/results?search_query=how+to+make+Milk+Toast" },
    { name: "Eggs & Soldiers", link: "https://www.youtube.com/results?search_query=how+to+make+Eggs+and+Soldiers" },
    { name: "Rice Pudding", link: "https://www.youtube.com/results?search_query=how+to+make+Rice+Pudding" }
  ],
  "Anxious": [
    { name: "Sabudana Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Sabudana+Khichdi" },
    { name: "Curd Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Curd+Rice" },
    { name: "Moong Dal Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Moong+Dal+Khichdi" },
    { name: "Pongal", link: "https://www.youtube.com/results?search_query=how+to+make+Pongal" },
    { name: "Methi Thepla", link: "https://www.youtube.com/results?search_query=how+to+make+Methi+Thepla" },
    { name: "Miso Soup", link: "https://www.youtube.com/results?search_query=how+to+make+Miso+Soup" },
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Oatmeal", link: "https://www.youtube.com/results?search_query=how+to+make+Oatmeal" },
    { name: "Banana Bread", link: "https://www.youtube.com/results?search_query=how+to+make+Banana+Bread" },
    { name: "Herbal Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Herbal+Tea" }
  ],
  "Optimistic": [
    { name: "Gulab Jamun", link: "https://www.youtube.com/results?search_query=how+to+make+Gulab+Jamun" },
    { name: "Rasmalai", link: "https://www.youtube.com/results?search_query=how+to+make+Rasmalai" },
    { name: "Jalebi", link: "https://www.youtube.com/results?search_query=how+to+make+Jalebi" },
    { name: "Kaju Katli", link: "https://www.youtube.com/results?search_query=how+to+make+Kaju+Katli" },
    { name: "Barfi", link: "https://www.youtube.com/results?search_query=how+to+make+Barfi" },
    { name: "Taiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Taiyaki" },
    { name: "Rainbow Cookies", link: "https://www.youtube.com/results?search_query=how+to+make+Rainbow+Cookies" },
    { name: "Sunshine Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Sunshine+Cake" },
    { name: "Fruit Tart", link: "https://www.youtube.com/results?search_query=how+to+make+Fruit+Tart" },
    { name: "Lemon Bars", link: "https://www.youtube.com/results?search_query=how+to+make+Lemon+Bars" }
  ],
  "Playful": [
    { name: "Dabeli", link: "https://www.youtube.com/results?search_query=how+to+make+Dabeli" },
    { name: "Pav Bhaji", link: "https://www.youtube.com/results?search_query=how+to+make+Pav+Bhaji" },
    { name: "Sev Usal", link: "https://www.youtube.com/results?search_query=how+to+make+Sev+Usal" },
    { name: "Misal", link: "https://www.youtube.com/results?search_query=how+to+make+Misal" },
    { name: "Sabudana Vada", link: "https://www.youtube.com/results?search_query=how+to+make+Sabudana+Vada" },
    { name: "Takoyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Takoyaki" },
    { name: "Cotton Candy", link: "https://www.youtube.com/results?search_query=how+to+make+Cotton+Candy" },
    { name: "Bubble Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Bubble+Tea" },
    { name: "Fairy Bread", link: "https://www.youtube.com/results?search_query=how+to+make+Fairy+Bread" },
    { name: "Pop Rocks Chocolate", link: "https://www.youtube.com/results?search_query=how+to+make+Pop+Rocks+Chocolate" }
  ],
  "Curious": [
    { name: "Khandvi", link: "https://www.youtube.com/results?search_query=how+to+make+Khandvi" },
    { name: "Dhokla", link: "https://www.youtube.com/results?search_query=how+to+make+Dhokla" },
    { name: "Handvo", link: "https://www.youtube.com/results?search_query=how+to+make+Handvo" },
    { name: "Patra", link: "https://www.youtube.com/results?search_query=how+to+make+Patra" },
    { name: "Thepla", link: "https://www.youtube.com/results?search_query=how+to+make+Thepla" },
    { name: "Okonomiyaki", link: "https://www.youtube.com/results?search_query=how+to+make+Okonomiyaki" },
    { name: "Molecular Gastronomy Dessert", link: "https://www.youtube.com/results?search_query=how+to+make+Molecular+Gastronomy+Dessert" },
    { name: "Sous Vide Dish", link: "https://www.youtube.com/results?search_query=how+to+make+Sous+Vide+Dish" },
    { name: "Fermented Foods", link: "https://www.youtube.com/results?search_query=how+to+make+Fermented+Foods" },
    { name: "Deconstructed Dish", link: "https://www.youtube.com/results?search_query=how+to+make+Deconstructed+Dish" }
  ],
  "Romantic": [
    { name: "Shahi Tukda", link: "https://www.youtube.com/results?search_query=how+to+make+Shahi+Tukda" },
    { name: "Phirni", link: "https://www.youtube.com/results?search_query=how+to+make+Phirni" },
    { name: "Kheer", link: "https://www.youtube.com/results?search_query=how+to+make+Kheer" },
    { name: "Rabri", link: "https://www.youtube.com/results?search_query=how+to+make+Rabri" },
    { name: "Malai Sandwich", link: "https://www.youtube.com/results?search_query=how+to+make+Malai+Sandwich" },
    { name: "Matcha Tiramisu", link: "https://www.youtube.com/results?search_query=how+to+make+Matcha+Tiramisu" },
    { name: "Chocolate Fondue", link: "https://www.youtube.com/results?search_query=how+to+make+Chocolate+Fondue" },
    { name: "Strawberry Cheesecake", link: "https://www.youtube.com/results?search_query=how+to+make+Strawberry+Cheesecake" },
    { name: "Heart-shaped Pizza", link: "https://www.youtube.com/results?search_query=how+to+make+Heart+shaped+Pizza" },
    { name: "Red Velvet Cake", link: "https://www.youtube.com/results?search_query=how+to+make+Red+Velvet+Cake" }
  ],
  "Sleepy": [
    { name: "Warm Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Warm+Milk" },
    { name: "Badam Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Badam+Milk" },
    { name: "Turmeric Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Turmeric+Milk" },
    { name: "Saffron Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Saffron+Milk" },
    { name: "Rose Milk", link: "https://www.youtube.com/results?search_query=how+to+make+Rose+Milk" },
    { name: "Genmaicha Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Genmaicha+Tea" },
    { name: "Lavender Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Lavender+Tea" },
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Sleepy Time Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Sleepy+Time+Tea" },
    { name: "Banana Smoothie", link: "https://www.youtube.com/results?search_query=how+to+make+Banana+Smoothie" }
  ],
  "Determined": [
    { name: "Rajma Chawal", link: "https://www.youtube.com/results?search_query=how+to+make+Rajma+Chawal" },
    { name: "Sambar Rice", link: "https://www.youtube.com/results?search_query=how+to+make+Sambar+Rice" },
    { name: "Methi Thepla", link: "https://www.youtube.com/results?search_query=how+to+make+Methi+Thepla" },
    { name: "Pongal", link: "https://www.youtube.com/results?search_query=how+to+make+Pongal" },
    { name: "Moong Dal Khichdi", link: "https://www.youtube.com/results?search_query=how+to+make+Moong+Dal+Khichdi" },
    { name: "Yakitori", link: "https://www.youtube.com/results?search_query=how+to+make+Yakitori" },
    { name: "Burrito Bowl", link: "https://www.youtube.com/results?search_query=how+to+make+Burrito+Bowl" },
    { name: "Quinoa Salad", link: "https://www.youtube.com/results?search_query=how+to+make+Quinoa+Salad" },
    { name: "Protein Shake", link: "https://www.youtube.com/results?search_query=how+to+make+Protein+Shake" },
    { name: "Granola", link: "https://www.youtube.com/results?search_query=how+to+make+Granola" }
  ],
  "Thankful": [
    { name: "Puran Poli", link: "https://www.youtube.com/results?search_query=how+to+make+Puran+Poli" },
    { name: "Basundi", link: "https://www.youtube.com/results?search_query=how+to+make+Basundi" },
    { name: "Shankarpali", link: "https://www.youtube.com/results?search_query=how+to+make+Shankarpali" },
    { name: "Karanji", link: "https://www.youtube.com/results?search_query=how+to+make+Karanji" },
    { name: "Anarsa", link: "https://www.youtube.com/results?search_query=how+to+make+Anarsa" },
    { name: "Mochi", link: "https://www.youtube.com/results?search_query=how+to+make+Mochi" },
    { name: "Pumpkin Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Pumpkin+Pie" },
    { name: "Apple Pie", link: "https://www.youtube.com/results?search_query=how+to+make+Apple+Pie" },
    { name: "Cornbread", link: "https://www.youtube.com/results?search_query=how+to+make+Cornbread" },
    { name: "Stuffing", link: "https://www.youtube.com/results?search_query=how+to+make+Stuffing" }
  ],
  "Peaceful": [
    { name: "Kheer", link: "https://www.youtube.com/results?search_query=how+to+make+Kheer" },
    { name: "Phirni", link: "https://www.youtube.com/results?search_query=how+to+make+Phirni" },
    { name: "Halwa", link: "https://www.youtube.com/results?search_query=how+to+make+Halwa" },
    { name: "Sheera", link: "https://www.youtube.com/results?search_query=how+to+make+Sheera" },
    { name: "Shrikhand", link: "https://www.youtube.com/results?search_query=how+to+make+Shrikhand" },
    { name: "Matcha Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Matcha+Tea" },
    { name: "Lavender Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Lavender+Tea" },
    { name: "Chamomile Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Chamomile+Tea" },
    { name: "Mint Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Mint+Tea" },
    { name: "Herbal Tea", link: "https://www.youtube.com/results?search_query=how+to+make+Herbal+Tea" }
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






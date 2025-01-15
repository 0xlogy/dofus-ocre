// App.js
import React, { useState } from 'react';

// Données des monstres directement intégrées
const monstersData = [
  { Zone: "Aerdala", Monstre: "Fangshu", Etape: 8 },
  { Zone: "Aerdala", Monstre: "Ino-Naru", Etape: 9 },
  { Zone: "Aerdala", Monstre: "Kurookin", Etape: 11 },
  { Zone: "Aerdala", Monstre: "Lichangoro", Etape: 15 },
  { Zone: "Akwadala", Monstre: "Akakwa", Etape: 7 },
  { Zone: "Akwadala", Monstre: "Sarkapwane", Etape: 9 },
  { Zone: "Akwadala", Monstre: "Betto", Etape: 10 },
  { Zone: "Akwadala", Monstre: "Kokom", Etape: 12 },
  { Zone: "Amakna - Campagne", Monstre: "Moskito", Etape: 1 },
  { Zone: "Amakna - Campagne", Monstre: "Arakne", Etape: 1 },
  { Zone: "Amakna - Campagne", Monstre: "Champ Champ", Etape: 2 },
  { Zone: "Amakna - Château (Souterrains)", Monstre: "Ramane d'Egoutant", Etape: 8 },
  { Zone: "Amakna - Château (Souterrains)", Monstre: "Rat d'Egoutant", Etape: 9 },
  { Zone: "Arche d'Otomai", Monstre: "Sparo", Etape: 10 },
  { Zone: "Arche d'Otomai", Monstre: "Barbroussa", Etape: 11 },
  { Zone: "Arche d'Otomai", Monstre: "Le Flib", Etape: 11 },
  { Zone: "Astrub - Calanques", Monstre: "Etoile de la Mer d'Asse", Etape: 4 },
  { Zone: "Astrub - Calanques", Monstre: "Pichon Blanc", Etape: 4 },
  { Zone: "Astrub - Calanques", Monstre: "Pichon Bleu", Etape: 4 },
  { Zone: "Astrub - Calanques", Monstre: "Pichon Orange", Etape: 4 },
  { Zone: "Astrub - Calanques", Monstre: "Pichon Vert", Etape: 4 },
  { Zone: "Astrub - Cimetière", Monstre: "Gargrouille", Etape: 5 },
  { Zone: "Astrub - Cimetière", Monstre: "Le Ouassingue", Etape: 8 },
  { Zone: "Astrub - Cimetière", Monstre: "La Ouassingue", Etape: 8 },
  { Zone: "Astrub - Égouts", Monstre: "Arakne des Égouts", Etape: 2 },
  { Zone: "Astrub - Égouts", Monstre: "Milirat Strubien", Etape: 3 },
  { Zone: "Astrub - Égouts", Monstre: "Scélérat Strubien", Etape: 6 },
  { Zone: "Bambusaie de Damadrya", Monstre: "Bulbiflore", Etape: 4 },
  { Zone: "Baie de Cania / Village des Dopeuls", Monstre: "Amlub", Etape: 7 },
  { Zone: "Baie de Cania / Village des Dopeuls", Monstre: "Codem", Etape: 7 },
  { Zone: "Baie de Cania / Village des Dopeuls", Monstre: "Kirevam", Etape: 7 },
  { Zone: "Baie de Cania / Village des Dopeuls", Monstre: "Let Emoliug", Etape: 7 },
  { Zone: "Baie de Cania / Village des Dopeuls", Monstre: "Susej", Etape: 8 },
  { Zone: "Bois de Litneg", Monstre: "Chafer Invisible", Etape: 5 },
  { Zone: "Bois de Litneg", Monstre: "Chafer Fantassin", Etape: 6 },
  { Zone: "Bois de Litneg", Monstre: "Chafer", Etape: 6 },
  { Zone: "Bois de Litneg", Monstre: "Chafer Archer", Etape: 8 },
  { Zone: "Bois de Litneg", Monstre: "Chafer Lancier", Etape: 8 },
  { Zone: "Bois de Litneg", Monstre: "Troollaraj", Etape: 14 },
  { Zone: "Bonta/Brâkmar - Égouts", Monstre: "Ramane d'Egoutant", Etape: 8 },
  { Zone: "Bonta/Brâkmar - Égouts", Monstre: "Rat d'Egoutant", Etape: 9 },
  { Zone: "Bonta/Brâkmar - Égouts", Monstre: "Rat d'Hyoactif", Etape: 10 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Moskito", Etape: 1 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Larve Bleue", Etape: 1 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Larve Verte", Etape: 2 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Larve Orange", Etape: 2 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Sanglier", Etape: 3 },
  { Zone: "Bord de la Forêt Maléfique", Monstre: "Prespic", Etape: 3 },
  { Zone: "Bordure de Brâkmar", Monstre: "Croc Gland Enragé", Etape: 4 },
  { Zone: "Bordure de Brâkmar", Monstre: "Fantôme Apero", Etape: 11 },
  { Zone: "Bordure de Brâkmar", Monstre: "Fantôme aux Plates", Etape: 11 },
  { Zone: "Bordure de Brâkmar", Monstre: "Fantôme Hicide", Etape: 11 },
  { Zone: "Bordure de Brâkmar", Monstre: "Fantôme Égérie", Etape: 11 },
  { Zone: "Canyon Sauvage", Monstre: "DoK Alako", Etape: 8 },
  { Zone: "Canyon Sauvage", Monstre: "Koalak Coco", Etape: 10 },
  { Zone: "Canyon Sauvage", Monstre: "Koalak Griotte", Etape: 10 },
  { Zone: "Canyon Sauvage", Monstre: "Koalak Indigo", Etape: 10 },
  { Zone: "Canyon Sauvage", Monstre: "Koalak Reinette", Etape: 10 },
  { Zone: "Canyon Sauvage", Monstre: "Mama Koalak", Etape: 13 },
  { Zone: "Canyon Sauvage", Monstre: "Drakoalak", Etape: 14 },
  { Zone: "Caverne des Fungus", Monstre: "Champodonte", Etape: 15 },
  { Zone: "Caverne des Fungus", Monstre: "Champbis", Etape: 15 },
  { Zone: "Caverne des Fungus", Monstre: "Champ à Gnons", Etape: 15 },
  { Zone: "Caverne des Fungus", Monstre: "Champmane", Etape: 15 },
  { Zone: "Champs de Cania", Monstre: "Serpentin", Etape: 11 },
  { Zone: "Champs de Cania", Monstre: "Larve Champêtre", Etape: 11 },
  { Zone: "Champs de Cania", Monstre: "Bourdard", Etape: 12 },
  { Zone: "Champs des Ingalsse", Monstre: "Tofu", Etape: 1 },
  { Zone: "Chemin du Crâne", Monstre: "Boomba", Etape: 6 },
  { Zone: "Chemin du Crâne", Monstre: "Canondorf", Etape: 10 },
  { Zone: "Chemin du Crâne", Monstre: "Nakunbra", Etape: 10 },
  { Zone: "Cimetière d'Amakna", Monstre: "Kwoan", Etape: 2 },
  { Zone: "Cimetière d'Amakna", Monstre: "Rib", Etape: 6 },
  { Zone: "Cimetière d'Amakna", Monstre: "Chafer Fantassin", Etape: 6 },
  { Zone: "Cimetière d'Amakna", Monstre: "Chafer Draugr", Etape: 9 },
  { Zone: "Cimetière de Grobe", Monstre: "Tsukinochi", Etape: 15 },
  { Zone: "Cimetière de Grobe", Monstre: "Tambouraï", Etape: 15 },
  { Zone: "Cimetière de Grobe", Monstre: "Onabu-Geisha", Etape: 15 },
  { Zone: "Cimetière de Grobe", Monstre: "Jianshi-Nobi", Etape: 15 },
  { Zone: "Cimetière des Héros/Torturés", Monstre: "Chafer Archer", Etape: 8 },
  { Zone: "Cimetière des Héros/Torturés", Monstre: "Chafer Lancier", Etape: 8 },
  { Zone: "Cimetière des Héros/Torturés", Monstre: "Chafer d'élite", Etape: 8 },
  { Zone: "Cimetière des Héros/Torturés", Monstre: "Chafer Draugr", Etape: 9 },
  { Zone: "Cimetière Primitif", Monstre: "Fossoyeur koalak", Etape: 12 },
  { Zone: "Cimetière Primitif", Monstre: "Chevaucheur koalak", Etape: 12 },
  { Zone: "Cimetière Primitif", Monstre: "Momie Koalak", Etape: 13 },
  { Zone: "Cimetière Primitif", Monstre: "Maître koalak", Etape: 14 },
  { Zone: "Clairière de Brouce Boulgoure", Monstre: "Champa Vert", Etape: 3 },
  { Zone: "Clairière de Brouce Boulgoure", Monstre: "Champa Bleu", Etape: 5 },
  { Zone: "Clairière de Brouce Boulgoure", Monstre: "Champa Marron", Etape: 5 },
  { Zone: "Clairière de Brouce Boulgoure", Monstre: "Champa Rouge", Etape: 5 },
  { Zone: "Coin des Bouftous", Monstre: "Boufton Blanc", Etape: 1 },
  { Zone: "Coin des Bouftous", Monstre: "Boufton Noir", Etape: 1 },
  { Zone: "Coin des Bouftous", Monstre: "Champ Champ", Etape: 2 },
  { Zone: "Coin des Bouftous", Monstre: "Bouftou", Etape: 2 },
  { Zone: "Coin des Bouftous", Monstre: "Chef de Guerre Bouftou", Etape: 3 },
  { Zone: "Coin des Boos", Monstre: "Boo", Etape: 3 },
  { Zone: "Côte d'Asse", Monstre: "Larve Bleue", Etape: 1 },
  { Zone: "Côte d'Asse", Monstre: "Larve Verte", Etape: 2 },
  { Zone: "Côte d'Asse", Monstre: "Larve Orange", Etape: 2 },
  { Zone: "Cryptes", Monstre: "Souris Grise", Etape: 1 },
  { Zone: "Cryptes", Monstre: "Tofu Maléfique", Etape: 1 },
  { Zone: "Cryptes", Monstre: "Vampire", Etape: 3 },
  { Zone: "Cryptes", Monstre: "Maître Vampire", Etape: 4 },
  { Zone: "Cryptes", Monstre: "Noeul", Etape: 4 },
  { Zone: "Dents de Pierre", Monstre: "Panthégros", Etape: 12 },
  { Zone: "Dents de Pierre", Monstre: "Orfélin", Etape: 12 },
  { Zone: "Dents de Pierre", Monstre: "Alhyène", Etape: 12 },
  { Zone: "Dents de Pierre", Monstre: "Kaniblou", Etape: 14 },
  { Zone: "Désolation de Sidimote", Monstre: "Kolérat", Etape: 2 },
  { Zone: "Désolation de Sidimote", Monstre: "Crowneille", Etape: 3 },
  { Zone: "Désolation de Sidimote", Monstre: "Croc Gland", Etape: 4 },
  { Zone: "Désolation de Sidimote", Monstre: "Scorbute", Etape: 6 },
  { Zone: "Domaine des Fungus", Monstre: "Champaknyde", Etape: 15 },
  { Zone: "Domaine des Fungus", Monstre: "Tromperelle", Etape: 15 },
  { Zone: "Domaine des Fungus", Monstre: "Champ à Gnons", Etape: 15 },
  { Zone: "Domaine des Fungus", Monstre: "Champmane", Etape: 15 },
  { Zone: "Donjon Ensablé", Monstre: "Pichon Kloune", Etape: 6 },
  { Zone: "Feudala", Monstre: "Crachefoux", Etape: 9 },
  { Zone: "Feudala", Monstre: "Rouquette", Etape: 14 },
  { Zone: "Feudala", Monstre: "Boumbardier", Etape: 14 },
  { Zone: "Feudala", Monstre: "Pétartifoux", Etape: 15 },
  { Zone: "Feuillage de l'Arbre Hakam", Monstre: "Poolay", Etape: 14 },
  { Zone: "Feuillage de l'Arbre Hakam", Monstre: "Kaskargo", Etape: 15 },
  { Zone: "Feuillage de l'Arbre Hakam", Monstre: "Bitouf Aérien", Etape: 15 },
  { Zone: "Forêt d'Amakna/Astrub/Milifutaie", Monstre: "Sanglier", Etape: 3 },
  { Zone: "Forêt d'Amakna/Astrub/Milifutaie", Monstre: "Prespic", Etape: 3 },
  { Zone: "Forêt d'Amakna/Astrub/Milifutaie", Monstre: "Milimulou", Etape: 4 },
  { Zone: "Forêt de Kaliptus", Monstre: "DoK Alako", Etape: 8 },
  { Zone: "Forêt de Kaliptus", Monstre: "Koalak Immature", Etape: 8 },
  { Zone: "Forêt de Kaliptus", Monstre: "Warko marron", Etape: 12 },
  { Zone: "Forêt de Kaliptus", Monstre: "Koalak forestier", Etape: 12 },
  { Zone: "Forêt des Masques", Monstre: "Kanniboul Archer", Etape: 9 },
  { Zone: "Forêt des Masques", Monstre: "Kanniboul Jav", Etape: 9 },
  { Zone: "Forêt des Masques", Monstre: "Kanniboul Sarbak", Etape: 9 },
  { Zone: "Forêt des Masques", Monstre: "Kanniboul Thierry", Etape: 9 },
  { Zone: "Forêt Sombre", Monstre: "Abraknyde Vénérable", Etape: 8 },
  { Zone: "Forêt Sombre", Monstre: "Abraknyde sombre", Etape: 12 },
  { Zone: "Forêt Sombre", Monstre: "Abrakne sombre", Etape: 12 },
  { Zone: "Gelaxième dimension", Monstre: "Gelée Bleue", Etape: 2 },
  { Zone: "Gelaxième dimension", Monstre: "Gelée Menthe", Etape: 2 },
  { Zone: "Hauts des Hurlements", Monstre: "Mulou", Etape: 11 },
  { Zone: "Île de la Cawotte", Monstre: "Black Tiwabbit", Etape: 2 },
  { Zone: "Île de la Cawotte", Monstre: "Tiwabbit", Etape: 2 },
  { Zone: "Île de la Cawotte", Monstre: "Wabbit", Etape: 3 },
  { Zone: "Île de la Cawotte", Monstre: "Black Wabbit", Etape: 5 },
  { Zone: "Île du Minotoror", Monstre: "Minoskito", Etape: 4 },
  { Zone: "Île du Minotoror", Monstre: "Mandrine", Etape: 5 },
  { Zone: "Île du Minotoror", Monstre: "Kraméléhon", Etape: 5 },
  { Zone: "Île du Minotoror", Monstre: "Gamino", Etape: 8 },
  { Zone: "Île du Minotoror", Monstre: "Serpiplume", Etape: 10 },
  { Zone: "Îlot de la Couronne", Monstre: "Wabbit", Etape: 3 },
  { Zone: "Îlot de la Couronne", Monstre: "Grand Pa Wabbit - Wo Wabbit", Etape: 7 },
  { Zone: "Îlot des Tombeaux", Monstre: "Wabbit Squelette", Etape: 5 },
  { Zone: "Jungle Interdite", Monstre: "Trukikol", Etape: 3 },
  { Zone: "Jungle Interdite", Monstre: "Fourbasse", Etape: 4 },
  { Zone: "Jungle Interdite", Monstre: "Gloutovore", Etape: 12 },
  { Zone: "Jungle Obscure", Monstre: "Chiendent", Etape: 11 },
  { Zone: "Jungle Obscure", Monstre: "Nerbe", Etape: 11 },
  { Zone: "Jungle Obscure", Monstre: "Brouture", Etape: 13 },
  { Zone: "Jungle Obscure", Monstre: "Bitouf sombre", Etape: 13 },
  { Zone: "Jungle Obscure", Monstre: "Floribonde", Etape: 13 },
  { Zone: "Jungle Obscure", Monstre: "Fécorce", Etape: 13 },
  { Zone: "Jungle Obscure", Monstre: "Abrakleur sombre", Etape: 14 },
  { Zone: "Laboratoire de Brumen Tinctorias", Monstre: "Macien", Etape: 9 },
  { Zone: "Labyrinthe du Dragon Cochon", Monstre: "Cochon de Farle", Etape: 6 },
  { Zone: "Labyrinthe du Dragon Cochon", Monstre: "Don Duss Ang", Etape: 10 },
  { Zone: "Labyrinthe du Dragon Cochon", Monstre: "Don Dorgan", Etape: 11 },
  { Zone: "Labyrinthe du Minotoror", Monstre: "Scaratos", Etape: 6 },
  { Zone: "Labyrinthe du Minotoror", Monstre: "Gamino", Etape: 8 },
  { Zone: "Labyrinthe du Minotoror", Monstre: "Serpiplume", Etape: 10 },
  { Zone: "Lac de Cania", Monstre: "Biblop Coco", Etape: 3 },
  { Zone: "Lac de Cania", Monstre: "Biblop Griotte", Etape: 3 },
  { Zone: "Lac de Cania", Monstre: "Biblop Indigo", Etape: 3 },
  { Zone: "Lac de Cania", Monstre: "Biblop Reinette", Etape: 3 },
  { Zone: "Lac de Cania", Monstre: "Blop Coco", Etape: 6 },
  { Zone: "Lac de Cania", Monstre: "Blop Griotte", Etape: 6 },
  { Zone: "Lac de Cania", Monstre: "Blop Indigo", Etape: 6 },
  { Zone: "Lac de Cania", Monstre: "Blop Reinette", Etape: 6 },
  { Zone: "Lacs Enchantés", Monstre: "DoK Alako", Etape: 8 },
  { Zone: "Lacs Enchantés", Monstre: "Koalak Immature", Etape: 8 },
  { Zone: "Lacs Enchantés", Monstre: "Piralak", Etape: 12 },
  { Zone: "Lacs Enchantés", Monstre: "Pékeualak", Etape: 12 },
  { Zone: "Marécages", Monstre: "Boo", Etape: 3 },
  { Zone: "Marécages", Monstre: "Crocodaille", Etape: 6 },
  { Zone: "Marécages", Monstre: "Chef Crocodaile", Etape: 11 },
  { Zone: "Massif de Cania", Monstre: "Malle Outillée", Etape: 14 },
  { Zone: "Massif de Cania", Monstre: "Robot Fléau", Etape: 14 },
  { Zone: "Massif de Cania", Monstre: "Robionicle", Etape: 14 },
  { Zone: "Mine des Dopeuls", Monstre: "Aboub", Etape: 7 },
  { Zone: "Mine des Dopeuls", Monstre: "Gink", Etape: 7 },
  { Zone: "Mine des Dopeuls", Monstre: "Negbib", Etape: 7 },
  { Zone: "Mine des Dopeuls", Monstre: "Nipul", Etape: 7 },
  { Zone: "Mine des Dopeuls", Monstre: "Osurc", Etape: 8 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Craqueboule", Etape: 5 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Craqueleur", Etape: 5 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Kwak de Vent", Etape: 9 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Kwak de Flamme", Etape: 9 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Kwak de Glace", Etape: 9 },
  { Zone: "Montagne des Craqueleurs", Monstre: "Kwak de Terre", Etape: 9 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Gobet", Etape: 2 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Gob-trotteur", Etape: 3 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Bwork Mage", Etape: 4 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Bwork Archer", Etape: 5 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Craqueboule", Etape: 5 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Craqueleur", Etape: 5 },
  { Zone: "Montagne basse des Craqueleurs", Monstre: "Bwork", Etape: 5 },
  { Zone: "Monts des Tombeaux", Monstre: "Madura", Etape: 15 },
  { Zone: "Monts des Tombeaux", Monstre: "Bakazako", Etape: 15 },
  { Zone: "Monts des Tombeaux", Monstre: "Kaonashi", Etape: 16 },
  { Zone: "Monts des Tombeaux", Monstre: "Tsume-Bozu", Etape: 16 },
  { Zone: "Orée de la Forêt des Abraknydes", Monstre: "Abraknyde", Etape: 5 },
  { Zone: "Orée de la Forêt des Abraknydes", Monstre: "Tronknyde", Etape: 6 },
  { Zone: "Orée de la Forêt des Abraknydes", Monstre: "Abrakne", Etape: 6 },
  { Zone: "Orée de la Forêt des Abraknydes", Monstre: "Arakne Majeure", Etape: 7 },
  { Zone: "Passage vers Brâkmar", Monstre: "Bandit Manchot", Etape: 2 },
  { Zone: "Passage vers Brâkmar", Monstre: "Boulanger Sombre", Etape: 2 },
  { Zone: "Passage vers Brâkmar", Monstre: "Mineur Sombre", Etape: 5 },
  { Zone: "Passage vers Brâkmar", Monstre: "Forgeron Sombre", Etape: 7 },
  { Zone: "Pénates des Corbac", Monstre: "Corbac", Etape: 4 },
  { Zone: "Péninsule des Gelées", Monstre: "Gelée Bleue", Etape: 2 },
  { Zone: "Péninsule des Gelées", Monstre: "Gelée Menthe", Etape: 2 },
  { Zone: "Péninsule des Gelées", Monstre: "Gelée Fraise", Etape: 5 },
  { Zone: "Pics de Cania", Monstre: "Bizarbwork", Etape: 13 },
  { Zone: "Pics de Cania", Monstre: "Médibwork", Etape: 13 },
  { Zone: "Pics de Cania", Monstre: "Krambwork", Etape: 13 },
  { Zone: "Pics de Cania", Monstre: "Mégabwork", Etape: 13 },
  { Zone: "Plage de Corail", Monstre: "Crustorail Kouraçao", Etape: 7 },
  { Zone: "Plage de Corail", Monstre: "Crustorail Malibout", Etape: 7 },
  { Zone: "Plage de Corail", Monstre: "Crustorail Morito", Etape: 7 },
  { Zone: "Plage de Corail", Monstre: "Crustorail Passaoh", Etape: 7 },
  { Zone: "Plage de Corail", Monstre: "Palmifleur Malibout", Etape: 8 },
  { Zone: "Plage de Corail", Monstre: "Palmifleur Morito", Etape: 8 },
  { Zone: "Plage de Corail", Monstre: "Palmifleur Passaoh", Etape: 8 },
  { Zone: "Plage de Corail", Monstre: "Palmifleur Kouraçao", Etape: 9 },
  { Zone: "Plage de Corail", Monstre: "Corailleur", Etape: 10 },
  { Zone: "Plage de la Tortue", Monstre: "NodKoko", Etape: 3 },
  { Zone: "Plage de la Tortue", Monstre: "Tikokoko", Etape: 3 },
  { Zone: "Plage de la Tortue", Monstre: "Tortue Jaune", Etape: 3 },
  { Zone: "Plage de la Tortue", Monstre: "Tortue Bleue", Etape: 4 },
  { Zone: "Plage de la Tortue", Monstre: "Tortue Rouge", Etape: 4 },
  { Zone: "Plage de la Tortue", Monstre: "Tortue Verte", Etape: 4 },
  { Zone: "Plage de la Tortue", Monstre: "Kokoko", Etape: 8 },
  { Zone: "Plaine des Porkass", Monstre: "Cochon de Lait", Etape: 3 },
  { Zone: "Plaine des Porkass", Monstre: "Berger Porkass", Etape: 3 },
  { Zone: "Plaine des Porkass", Monstre: "Cavalier Porkass", Etape: 7 },
  { Zone: "Plaine des Porkass", Monstre: "Sanglier Des Plaines", Etape: 8 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Flammèche Air", Etape: 1 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Flammèche Eau", Etape: 1 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Flammèche Feu", Etape: 1 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Flammèche Terre", Etape: 1 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Scarafeuille Blanc", Etape: 6 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Scarafeuille Bleu", Etape: 6 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Scarafeuille Rouge", Etape: 6 },
  { Zone: "Plaine des Scarafeuilles", Monstre: "Scarafeuille Vert", Etape: 6 },
  { Zone: "Plaines Herbeuses", Monstre: "Craqueboule Poli", Etape: 9 },
  { Zone: "Plaines Herbeuses", Monstre: "Bitouf des plaines", Etape: 11 },
  { Zone: "Plaines Herbeuses", Monstre: "Mufafah", Etape: 11 },
  { Zone: "Plaines Herbeuses", Monstre: "Kido", Etape: 11 },
  { Zone: "Plaines Herbeuses", Monstre: "Kilibriss", Etape: 11 },
  { Zone: "Plaines Rocheuses", Monstre: "Craqueleur des plaines", Etape: 8 },
  { Zone: "Plantala", Monstre: "Floristile", Etape: 4 },
  { Zone: "Plantala", Monstre: "Bambouto", Etape: 4 },
  { Zone: "Plantala", Monstre: "Bulbuisson", Etape: 7 },
  { Zone: "Plantala", Monstre: "Grenufar", Etape: 13 },
  { Zone: "Port de Madrestam", Monstre: "Larve Bleue", Etape: 1 },
  { Zone: "Port de Madrestam", Monstre: "Larve Verte", Etape: 2 },
  { Zone: "Port de Madrestam", Monstre: "Larve Orange", Etape: 2 },
  { Zone: "Presqu'île des Dragoeufs", Monstre: "DragOeuf Calcaire", Etape: 10 },
  { Zone: "Presqu'île des Dragoeufs", Monstre: "DragOeuf Argile", Etape: 10 },
  { Zone: "Presqu'île des Dragoeufs", Monstre: "DragOeuf Charbon", Etape: 10 },
  { Zone: "Presqu'île des Dragoeufs", Monstre: "DragOeuf Ardoise", Etape: 10 },
  { Zone: "Rivages de Sufokia", Monstre: "Crabe", Etape: 1 },
  { Zone: "Rivages de Sufokia", Monstre: "Raul Mops", Etape: 10 },
  { Zone: "Rivages de Sufokia", Monstre: "Moumoule", Etape: 10 },
  { Zone: "Rivière Kawaii", Monstre: "Larve Bleue", Etape: 1 },
  { Zone: "Rivière Kawaii", Monstre: "Larve Verte", Etape: 2 },
  { Zone: "Rivière Kawaii", Monstre: "Larve Orange", Etape: 2 },
  { Zone: "Rives Iridescentes", Monstre: "Pissenlit Diabolique", Etape: 2 },
  { Zone: "Rives Iridescentes", Monstre: "Rose Démoniaque", Etape: 2 },
  { Zone: "Rives Iridescentes", Monstre: "Rose Obscure", Etape: 5 },
  { Zone: "Routes Rocailleuses", Monstre: "Maître Bolet", Etape: 9 },
  { Zone: "Routes Rocailleuses", Monstre: "Vétauran", Etape: 9 },
  { Zone: "Routes Rocailleuses", Monstre: "Kanigrou", Etape: 11 },
  { Zone: "Routes Rocailleuses", Monstre: "Foufayteur", Etape: 12 },
  { Zone: "Sanctuaire des Dragoeufs", Monstre: "Dragacé", Etape: 9 },
  { Zone: "Sanctuaire des Dragoeufs", Monstre: "Dragueuse", Etape: 12 },
  { Zone: "Sanctuaire des Dragoeufs", Monstre: "Dragnarok", Etape: 13 },
  { Zone: "Sanctuaire des Dragoeufs", Monstre: "Draguaindrop", Etape: 13 },
  { Zone: "Souterrains des Dragoeufs", Monstre: "Dragoss Calcaire", Etape: 14 },
  { Zone: "Souterrains des Dragoeufs", Monstre: "Dragoss Argile", Etape: 14 },
  { Zone: "Souterrains des Dragoeufs", Monstre: "Dragoss Charbon", Etape: 14 },
  { Zone: "Souterrains des Dragoeufs", Monstre: "Dragoss Ardoise", Etape: 14 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Bleu", Etape: 1 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Jaune", Etape: 1 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Rouge", Etape: 1 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Vert", Etape: 1 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Violet", Etape: 1 },
  { Zone: "Sufokia (Territoire)", Monstre: "Piou Rose", Etape: 1 },
  { Zone: "Tainéla", Monstre: "Boufton Blanc", Etape: 1 },
  { Zone: "Tainéla", Monstre: "Boufton Noir", Etape: 1 },
  { Zone: "Tainéla", Monstre: "Bouftou", Etape: 2 },
  { Zone: "Tainéla", Monstre: "Chef de Guerre Bouftou", Etape: 3 },
  { Zone: "Territoire des Bandits", Monstre: "Boulanger Sombre", Etape: 2 },
  { Zone: "Territoire des Bandits", Monstre: "Bandit du clan des Roublards", Etape: 2 },
  { Zone: "Territoire des Bandits", Monstre: "Mineur Sombre", Etape: 5 },
  { Zone: "Territoire des Bandits", Monstre: "Forgeron Sombre", Etape: 7 },
  { Zone: "Territoire des Dragodindes Sauvages", Monstre: "Dragodinde Amande Sauvage", Etape: 5 },
  { Zone: "Territoire des Dragodindes Sauvages", Monstre: "Dragodinde Rousse Sauvage", Etape: 7 },
  { Zone: "Territoire des Dragodindes Sauvages", Monstre: "Dragodinde dorée sauvage", Etape: 12 },
  { Zone: "Territoire des Porcos", Monstre: "Cochon de Farle", Etape: 6 },
  { Zone: "Territoire des Porcos", Monstre: "Porsalu", Etape: 9 },
  { Zone: "Terrdala", Monstre: "Ishigro Pake", Etape: 5 },
  { Zone: "Terrdala", Monstre: "Lolojiki", Etape: 10 },
  { Zone: "Terrdala", Monstre: "Parashukouï", Etape: 12 },
  { Zone: "Terrdala", Monstre: "Tétonuki", Etape: 14 },
  { Zone: "Tourbière d'Otomai", Monstre: "Le Ouassingue Entourbé", Etape: 8 },
  { Zone: "Tourbière d'Otomai", Monstre: "Bourbassingue", Etape: 13 },
  { Zone: "Tourbière d'Otomai", Monstre: "Roissingue", Etape: 15 },
  { Zone: "Tronc de l'Arbre Hakam", Monstre: "Meupette", Etape: 12 },
  { Zone: "Tronc de l'Arbre Hakam", Monstre: "Poolay", Etape: 14 },
  { Zone: "Tronc de l'Arbre Hakam", Monstre: "Kaskargo", Etape: 15 },
  { Zone: "Tronc de l'Arbre Hakam", Monstre: "Bitouf Aérien", Etape: 15 },
  { Zone: "Tronc de l'Arbre Hakam", Monstre: "Abrakleur Clair", Etape: 15 },
  { Zone: "Village des Zoths", Monstre: "Disciple Zoth", Etape: 13 },
  { Zone: "Village des Zoths", Monstre: "Gamine Zoth", Etape: 13 },
  { Zone: "Village des Zoths", Monstre: "Guerrier Zoth", Etape: 13 },
  { Zone: "Village des Zoths", Monstre: "Sergent Zoth", Etape: 15 },
  { Zone: "Village des Zoths", Monstre: "Maître Zoth", Etape: 15 }
];

function App() {
  const [sortConfig, setSortConfig] = useState({ key: 'Etape', direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const filteredAndSortedData = React.useMemo(() => {
    let result = [...monstersData];

    // Filtrage
    if (searchTerm) {
      result = result.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Tri
    if (sortConfig.key) {
      result.sort((a, b) => {
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        
        if (typeof a[sortConfig.key] === 'number') {
          return (a[sortConfig.key] - b[sortConfig.key]) * direction;
        }
        
        return a[sortConfig.key].localeCompare(b[sortConfig.key]) * direction;
      });
    }

    return result;
  }, [searchTerm, sortConfig]);

  const stats = React.useMemo(() => {
    const uniqueZones = new Set(filteredAndSortedData.map(item => item.Zone)).size;
    const totalMonsters = filteredAndSortedData.length;
    const averageLevel = Math.round(
      filteredAndSortedData.reduce((acc, curr) => acc + curr.Etape, 0) / totalMonsters
    );

    return { uniqueZones, totalMonsters, averageLevel };
  }, [filteredAndSortedData]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white-500 mb-2">
          Guide des Monstres Dofus
        </h1>
        <p className="text-gray-400">
          Base de données complète des monstres et leurs zones
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-400">Total Monstres</h3>
          <p className="text-2xl font-semibold text-blue-400">{stats.totalMonsters}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-sm font-medium text-gray-400">Zones Uniques</h3>
          <p className="text-2xl font-semibold text-emerald-400">{stats.uniqueZones}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher un monstre ou une zone..."
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-lg text-gray-100 
                   placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-900">
              <tr>
                {['Zone', 'Monstre', 'Etape'].map((key) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider 
                             cursor-pointer hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center">
                      {key}
                      {sortConfig.key === key && (
                        <span className="ml-2 text-yellow-500">
                          {sortConfig.direction === 'asc' ? '↑' : '↓'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredAndSortedData.map((item, index) => (
                <tr 
                  key={index}
                  className="hover:bg-gray-750 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {item.Zone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {item.Monstre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500 font-medium">
                    {item.Etape}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-sm text-gray-400">
        Total affiché : {filteredAndSortedData.length} monstre(s)
      </div>
    </div>
  </div>
);
}

export default App;
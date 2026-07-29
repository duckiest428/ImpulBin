const fs = require('fs');

let file = fs.readFileSync('src/data/mockPlayers.ts', 'utf8');

file = file.replace(/name: 'Schertenleib', rating: 96, foot: 'R'/g, "name: 'Schertenleib', rating: 96, position: 'CAM', foot: 'R'");
file = file.replace(/name: 'Diomande', rating: 96, foot: 'R'/g, "name: 'Diomande', rating: 96, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Nico Williams', rating: 99, foot: 'R'/g, "name: 'Nico Williams', rating: 99, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Gilberto Silva', rating: 97, foot: 'R'/g, "name: 'Gilberto Silva', rating: 97, position: 'CDM', foot: 'R'");
file = file.replace(/name: 'Mbappé', rating: 92, foot: 'R'/g, "name: 'Mbappé', rating: 92, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Gullit', rating: 95, foot: 'R'/g, "name: 'Gullit', rating: 95, position: 'CAM', foot: 'R'");
file = file.replace(/name: 'Messi', rating: 96, foot: 'L'/g, "name: 'Messi', rating: 96, position: 'CAM', foot: 'L'");
file = file.replace(/name: 'Claudia Pina', rating: 99, foot: 'R'/g, "name: 'Claudia Pina', rating: 99, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Ibrahimović', rating: 98, foot: 'R'/g, "name: 'Ibrahimović', rating: 98, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Pogba', rating: 98, foot: 'R'/g, "name: 'Pogba', rating: 98, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Zidane', rating: 95, foot: 'R'/g, "name: 'Zidane', rating: 95, position: 'CAM', foot: 'R'");
file = file.replace(/name: 'van Dijk', rating: 99, foot: 'R'/g, "name: 'van Dijk', rating: 99, position: 'CB', foot: 'R'");

file = file.replace(/name: 'Bárbara López', rating: 96, foot: 'R'/g, "name: 'Bárbara López', rating: 96, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Kelly', rating: 97, foot: 'R'/g, "name: 'Kelly', rating: 97, position: 'RM', foot: 'R'");
file = file.replace(/name: 'Touré', rating: 95, foot: 'R'/g, "name: 'Touré', rating: 95, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Richards', rating: 96, foot: 'R'/g, "name: 'Richards', rating: 96, position: 'CB', foot: 'R'");
file = file.replace(/name: 'Ronaldinho', rating: 99, foot: 'R'/g, "name: 'Ronaldinho', rating: 99, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Vidić', rating: 98, foot: 'R'/g, "name: 'Vidić', rating: 98, position: 'CB', foot: 'R'");
file = file.replace(/name: 'Maldini', rating: 94, foot: 'R'/g, "name: 'Maldini', rating: 94, position: 'CB', foot: 'R'");
file = file.replace(/name: 'Vitinha', rating: 96, foot: 'R'/g, "name: 'Vitinha', rating: 96, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Schertenleib', rating: 86, foot: 'R'/g, "name: 'Schertenleib', rating: 86, position: 'RM', foot: 'R'");
file = file.replace(/name: 'Walker', rating: 97, foot: 'R'/g, "name: 'Walker', rating: 97, position: 'RB', foot: 'R'");
file = file.replace(/name: 'Vitinha', rating: 95, foot: 'R'/g, "name: 'Vitinha', rating: 95, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Vicky López', rating: 96, foot: 'R'/g, "name: 'Vicky López', rating: 96, position: 'CAM', foot: 'R'");

file = file.replace(/name: 'Abily', rating: 97, foot: 'R'/g, "name: 'Abily', rating: 97, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Valverde', rating: 98, foot: 'R'/g, "name: 'Valverde', rating: 98, position: 'CM', foot: 'R'");
file = file.replace(/name: 'Díaz', rating: 98, foot: 'R'/g, "name: 'Díaz', rating: 98, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Lamine Yamal', rating: 90, foot: 'L'/g, "name: 'Lamine Yamal', rating: 90, position: 'RW', foot: 'L'");
file = file.replace(/name: 'Stam', rating: 89, foot: 'R'/g, "name: 'Stam', rating: 89, position: 'CB', foot: 'R'");
file = file.replace(/name: 'Dembélé', rating: 98, foot: 'L'/g, "name: 'Dembélé', rating: 98, position: 'RW', foot: 'L'");
file = file.replace(/name: 'Vini Jr.', rating: 90, foot: 'R'/g, "name: 'Vini Jr.', rating: 90, position: 'LW', foot: 'R'");
file = file.replace(/name: 'Dembélé', rating: 91, foot: 'L'/g, "name: 'Dembélé', rating: 91, position: 'RW', foot: 'L'");
file = file.replace(/name: 'Cristiano Ronaldo', rating: 88, foot: 'R'/g, "name: 'Cristiano Ronaldo', rating: 88, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Mbappé', rating: 98, foot: 'R'/g, "name: 'Mbappé', rating: 98, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Gabriel Jesus', rating: 97, foot: 'R'/g, "name: 'Gabriel Jesus', rating: 97, position: 'ST', foot: 'R'");
file = file.replace(/name: 'Lukébakio', rating: 94, foot: 'L'/g, "name: 'Lukébakio', rating: 94, position: 'RW', foot: 'L'");

fs.writeFileSync('src/data/mockPlayers.ts', file);

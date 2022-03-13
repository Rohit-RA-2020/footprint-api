const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

var questions = [
  {
    "id": 1,
    "question": "How often do you travel by air in a year ?",
    "options": ['I fly rarely', 'Occasionally', 'Regularly', 'Never'],
  },
  {
    "id": 2,
    "question": "What describes your diet ?",
    "options": [
      'Vegan',
      'Vegetarian',
      'Pescetarian',
      'Ocassionaly eat meat',
      'Regularly eat meat'
    ],
  },
  {
    "id": 3,
    "question": "How much do you travel by car ?",
    "options": [
      'I don\'t drive',
      '~5000 km',
      '~ 5,000 - 10000 km',
      '~ 10,000 - 15,000 km',
      '>15,000 km'
    ],
  },
  {
    "id": 4,
    "question": "Which kind of fuel do you use ?",
    "options": ['Electric', 'Natural gas', 'Petrol, Disel'],
  },
  {
    "id": 5,
    "question": "Tell us something about your shopping habits ?",
    "options": ['Rarely', 'Average', 'Shopper', 'Luxary Shopper'],
  },
  {
    "id": 6,
    "question": "How big is your home ?",
    "options": [
      'Sharing',
      'One-Bedroom',
      'Two-bedroom',
      'Three-bedroom',
      'Bunglow'
    ],
  },
  {
    "id": 7,
    "question": "How many people live in your home ?",
    "options": ['Just me', '2 people', '3 people', '4-6 people', ' > 7 people'],
  },
  {
    "id": 8,
    "question": "Which pet do you own ?",
    "options": ['None', 'Cat', 'Dog', 'Other'],
  },
  {
    "id": 9,
    "question": "Do you use renewable energy sources at your home ?",
    "options": ['Yes', 'Not Yet', 'Not Sure'],
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  //res.json(docs);
  res.json(questions);
});



app.post('/calculate', (req, res) => {

  var carbonEmission = 2.33;
  var travel = 0;
  var diet = 0;
  var carTravel = 0;
  var fuel = 0;
  var shopping = 0;
  var homeSize = 0;
  var homePeople = 0;
  var pet = 0;

  var responses = req.body;

  for (var i = 0; i < Object.keys(responses).length; i++) {
    if (Object.keys(responses).length == 0) {
      break;
    }
    if (i == 0) {
      switch (responses[i]) {
        case 0:
          carbonEmission += 0.66;
          travel += 0.66;
          break;
        case 1:
          carbonEmission += 3.74;
          travel += 3.74;
          break;
        case 2:
          carbonEmission += 12.37;
          travel += 12.37;
          break;
        case 3:
          carbonEmission += 0;
          break;
        default:
          break;
      }
    } else if (i == 1) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 0.23;
          break;
        case 1:
          carbonEmission -= 0.16;
          break;
        case 2:
          carbonEmission -= 0.15;
          break;
        case 3:
          carbonEmission -= 0.06;
          diet += 0.06;
          break;
        case 4:
          carbonEmission += 0.08;
          diet += 0.08;
          break;
        default:
          break;
      }
    } else if (i == 2) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 0.42;
          break;
        case 1:
          carbonEmission += 0.07;
          carTravel += 0.07;
          break;
        case 2:
          carbonEmission += 1.04;
          carTravel += 1.04;
          break;
        case 3:
          carbonEmission += 2.03;
          carTravel += 2.03;
          break;
        case 4:
          carbonEmission += 3.49;
          carTravel += 3.49;
          break;
        default:
          break;
      }
    } else if (i == 3) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 0.18;
          break;
        case 1:
          carbonEmission -= 0.04;
          break;
        case 2:
          carbonEmission += 0.0;
          break;
        default:
          break;
      }
    } else if (i == 4) {
      switch (responses[i]) {
        case 0:
          carbonEmission += 0.18;
          shopping += 0.18;
          break;
        case 1:
          carbonEmission += 0.0;
          shopping += 0.0;
          break;
        case 2:
          carbonEmission += 3.26;
          shopping += 3.26;
          break;
        case 3:
          carbonEmission += 6.85;
          shopping += 6.85;
          break;
        default:
          break;
      }
    } else if (i == 5) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 0.29;
          break;
        case 1:
          carbonEmission -= 0.16;
          break;
        case 2:
          carbonEmission -= 0.04;
          break;
        case 3:
          carbonEmission += 0.09;
          homeSize += 0.09;
          break;
        case 4:
          carbonEmission += 1.69;
          homeSize += 1.69;
          break;
        default:
          break;
      }
    } else if (i == 6) {
      switch (responses[i]) {
        case 0:
          carbonEmission += 0.54;
          homePeople += 0.54;
          break;
        case 1:
          carbonEmission += 0.0;
          break;
        case 2:
          carbonEmission -= 0.19;
          break;
        case 3:
          carbonEmission -= 0.33;
          break;
        case 4:
          carbonEmission -= 0.39;
          break;
        default:
          break;
      }
    } else if (i == 7) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 0.05;
          break;
        case 1:
          carbonEmission += 0.25;
          pet += 0.25;
          break;
        case 2:
          carbonEmission += 0.35;
          pet += 0.35;
          break;
        case 3:
          carbonEmission += 0.11;
          pet += 0.11;
          break;
        default:
          break;
      }
    } else if (i == 8) {
      switch (responses[i]) {
        case 0:
          carbonEmission -= 1.1;
          break;
        case 1:
          carbonEmission += 0.05;
          fuel += 0.05;
          break;
        case 2:
          carbonEmission += 0.0;
          break;
        default:
          break;
      }
    }
  }

  carbonEmission = carbonEmission.toFixed(2);

  var result = { "result": carbonEmission, "travel": travel, "diet": diet, "carTravel": carTravel, "fuel": fuel, "shopping": shopping, "homeSize": homeSize, "homePeople": homePeople, "pet": pet };
  res.send(result);
});

app.listen(port, () => console.log(`Carbon Footprint app listening on port ${port}!`));
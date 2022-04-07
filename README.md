# East Coast Greenway - Maine

## Description

This app is for cyclists planning a trip on the Maine portion of the East Coast Greenway. Users can learn more about the route, explore the cities on the route, and plan their own customized trip where they can add start points, end points, mileage, accommodations, and notes. It is currently deployed on Heroku: https://maine-east-coast-greenway.herokuapp.com/

## Installation

This app requires:

- Ruby 2.7.4
- NodeJS (v16)
- npm
- Heroku CLI
- Postgresql 14.2

The Rails backend requires the following gems:

- rails
- pg
- puma
- bcrpyt
- date_validator
- bootsnap

The React frontend requires the following dependencies:

- react
- react-bootstrap
- react-dom
- react-router-dom
- moment

To set up and run the application, use the following commands:

```bash
bundle install
rails db:create
npm install --prefix client
rails s
npm start --prefix client
```

## Usage

Without logging in, users can learn more about the East Coast Greenway and they can explore the cities on the route. For each city, they can also find more information about accommodations as well as breweries located nearby. In order to create and plan their own trips, users need to create an account and log in. Once logged in, they can create their own trips with specific dates. They can add start and end point for each day, as well as notes and accommodations. Mileage per day is calculated automatically with all cities listed in the 'Explore' tab. For cities not listed, users can manually input the mileage. Users can easily edit each day of their trip at any point by clicking on any part of the row for each day. 

## Contributing

Pull requests are welcome. If you would like to see any major changes, please open an issue first to discuss what you would like to change. 

## License

## Contact

Alessandra Chardon 
Project Link: https://github.com/achardon/maine-east-coast-greenway
LinkedIn: https://www.linkedin.com/in/alessandra-chardon-08024342/ 



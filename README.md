# Billson_H_Settimi_M_Roku![Roku Logo](https://www.ipoboutique.com/blog/wp-content/uploads/2017/09/Screen-Shot-2017-09-22-at-4.05.57-PM.png)

# ROKU FLASHBACK: Retro Streaming App

ROKU FLASHBACK is a web-based app built to display a variety of retro movies, TV shows and tunes, organized by decade and filtered according to the user's preferred age group settings ("Parents" vs. "Kids"). Using queries made through the app, users can signup/login, access their profile and settings, and search for their favourite media examples. 

## Requirements
1. Access to your system's localhost directory (or another way to test the site on a local server)
2. A terminal window 
3. A text editor 
4. An up-to-date web browser
5. Node 
6. Express
7. PHP 

## Installation & Set-up

- Clone this repository from GitHub into the desired folder.
- Clone the server repository into the desired folder. 
- Change the port settings in Billson_H_Settimi_M_Roku and Billson_H_Settimi_M_Roku_Server to the 2 ports you wish to use. 
- Import the SQL database (found under /admin) into PHPMyAdmin, or however you prefer to download the data, and adjust the information in "connect.php" accordingly. 
- Using the Node Package Manager (or whatever you use to install node packages), install the following packages in the root directory: 'express', 'php-express', 'connect-history-api-fallback' 
- Run the project and the server on separate ports using whichever method preferred. (During development, we used 'nodemon')
- Open up the port address (it will direct you to the login page)
- Either create your own credentials, or login using the test account: (username: testing, password: testing)

## Dev Roadmap & Design Notes 

- A link to our **Development Roadmap, Bugs & Updates** document can be found in the **/documents** directory.  
- A PDF copy of our **Design Reference** document can also be found in the **/documents** directory. 

## Authors
1. Marisa Settimi, Designer (des.ms)
2. Haley Billson, Developer (dev.hb)

## License
[MIT](https://choosealicense.com/licenses/mit/)
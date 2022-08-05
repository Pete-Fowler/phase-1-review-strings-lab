// Write your code in this file!
const currentUser = 'Pete';

let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

let excitedWelcomeMessage = `${welcomeMessage.toUpperCase()}, + ${currentUser.toUpperCase}!`;

let shortGreeting = `${welcomeMessage.slice(0, 7)}, ${currentUser.slice(0, 1)}!`;
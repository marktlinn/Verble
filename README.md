# Verble
Wordle App clone using the Wordle API hosted by RapidAPI, built in React using SASS for styling


**Link to project:** https://verble.netlify.app/

**Project screenshots**:
<img width="1371" alt="Screenshot 2022-10-16 at 12 51 17" src="https://user-images.githubusercontent.com/88390425/196031315-37a19733-8224-4bf6-be13-e9d38a2ce554.png">
<img width="1433" alt="Screenshot 2022-10-16 at 12 48 57" src="https://user-images.githubusercontent.com/88390425/196031319-7b2ff6bc-da2b-44ce-aa28-af91b5d57bb3.png">



## Key info:
This project was made to clone the game functionality of Wordle. The app was built using the World API hosted on Rapid API.
the App is set up to retrieve a 5 letter word from the API and set it as the game question.
For the hosted version I decided set a preset question, to avoid the rate limit of the API which is quite low and would otherwise incur costs.
But anyone wanting to use such an API on their own machines can do so easily. The logic is all ready to go in useFetch, you just need to get your own Rapid API key and secret and input those.

**Tech used:** HTML, SASS/CSS, JavaScript, Reactjs, Vite


## Optimizations
There's plenty of space for further optimizations: 
<br/>
[ ] - Add functionality to the buttons: add event listeners to the buttons so that when clicked they trigger the letter input.
<br/>
[ ] - Add localstorage of scores, and display previous results over the last few days, and perhaps an average number of attempts before the correct answer is found.
<br/>
[ ] - Add colour theme toggle, so the user can toggle from a white background to dark theme
<br/>
[ ] - Add ability to share results with friends.
<br/>
the app is hooked up to work with the Wordle API provided by RapidAPI, with the useFetch hook and all logic complete, but at the moment it is not connected up to the API.
This is because there is a restricted number of time the API server can be access and data retrieved before charges start being applied.
This would be an improvement for the user, but is not enabled for economic reasons

## Lessons Learned:
It has been great working more with react, I further developed my understanding of creating and implementing custom hooks in apps.
I was also able to use a few @keyframes animations in the scss file which was fun.

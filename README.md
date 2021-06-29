# Code Snippets

Here are some code examples to show that I can write clear, concise, readable, and understandable code.

## countdownTimer.js

Alrighty, so this code above was taken out of my Shelf-Life expiration tracker that you can see in action @ https://shelf-life.vercel.app/

It is a component that creates and renders a countdown timer, I am proud of this component in particular because I gave myself the challenge of working with time for the first time (pun intended) by creating a countdown clock, I accomplished this by using a wonderful library called "moment.js" and 2 bits of user inputted data:

countDate: this is a timestamp marking the date the countdown was created
expireDays: the user input the amount of days until the item expires

- so I take the countDate + expiredays to calculate the date of item expiration (line 29)
- then I take the newly calculated date of item expiration and subtract it from todays date to get the time remaining (line 30)
- lastly I take the remaining time and separate it into days, hours, minutes, and seconds and set that in state. NOTE: the time calculations were taken from good ol' StackOverflow. (lines 31-35)

The code above is a good example of me setting a challenge and then accomplishing it!

## practice-service.js

In order to create clear, concise code I created some helper functions that get exported to practice-router.js where users can get/post/delete/patch a daily practice in my Mana App (https://mana-client.vercel.app/)

https://github.com/adamfigueroa/codeSnippets/blob/main/practice-router.js

I think this is a great example of some organization I am proud of.

## auth-router.js

In the same Mana App (https://mana-client.vercel.app/) I wanted  to show that I have some knowledge in authorization, this particular route is called for every user get/post/delete/patch route to ensure that the user is logged in and authorized to do so.

Although I have a lot more to learn when it comes to App security, I am proud of what I have learned so far.




# Hackathon Submission: aChief

## GitHub handles of Team Members  
- @floherzler

## Project Title
aChief: Own Your Stats, Lead the Game!

## Project Description    
I have built a webscraping service to bundle all available basketball game data of german professional basketball players in the second-highest leagues ProA and ProB.
From these game statistics, I compute career overview statistics as a starting point for future usage in achieving you personal sports performance goals.

Try it out here: [achief.vercel.app](https://achief.vercel.app/)

## Inspiration behind the Project  
I have played with the idea of creating something like this since last year but never got around to it.
The initial idea was developed together with my friends from [LeadPeak](https://www.leadpeak.de/) performance program who manually keep track of all their player's data by checking the websites and copying numbers to Excel (ouch).
This would greatly improve their data tracking and goal setting, since especially for aspiring youth players these metrics are important for their future success!

## Tech Stack    
- Next.js template project, nothing fancy (not a web dev)
- [shadcn](https://ui.shadcn.com/) (I'm not a designer either)
- [axios](https://axios-http.com/) and [cheerio](https://cheerio.js.org/) for web scraping via POST requests
- Appwrite
   - Database with collections for players / league games
   - Realtime for updating the UI when data is entered / deleted
### Next Steps w/ Appwrite
I'm planning on leveraging Appwrite even more:
I would like to use Authentication to create Teams of player-coach like in LeadPeak and provide a platform for coordinated goal setting and achieving.
This is a niche that is currently not filled, at least not in german basketball.
I will use Appwrite Functions to update the manually added players with scheduled runs during weekdays in-season after each game.
Additionally, I will create indices of my final database structures to create a searchable database of individual performances that does not exist in this general form in Germany yet.
Season stats can be expanded to game stats and comparisons between players can be made.

I used these two YouTube tutorials as heavy inspiration (repos in resp. description:
- NetNinja [Realtime Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gXxY0nrh9N4CYHtwnoHjV2)
- Hitesh Choudhary [Next.js Tutorial + Stackoverflow Clone](https://www.youtube.com/playlist?list=PLRAV69dS1uWRJcxXk1omgcMI07ygMxSRl)

## Project Repo  
[https://github.com/floherzler/achief-web](https://github.com/floherzler/achief-web)

## Demo Video/Photos  
There is only one landing page so far with adisplay carousel of added players and a create player form.
Since a video would be overkill here, feel free to check out [my Notion page](https://floherzler.notion.site/aChief-Website-cb54878823344934a566818e971e903b) for a Screenshot.

Or visit [achief.vercel.app](https://achief.vercel.app/)directly!

Adding new players might not work at the moment after deploying to Vercel due to the timeout limitation, so I might need to move it somewhere else or lload seasons in batches.
I added some players that you can browse through!

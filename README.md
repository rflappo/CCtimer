# Chess Countdown Timer
### ... or CCtimer for short!
[[https://github.com/rflappo/CCtimer/Screenshot.png]]
## Javascript?
This is my first javascript project, and I hope it wont be the last one!.
The main goal was to learn how to make a js app. I really had a lack of knowledge about web; CSS and JavaScript were tech I've been putting it behind but it was time for me to 'level up'!.
With this project I learned the basic structure of a JS app. I did not use any kind of framework for the development, all my animation were made by using 'vanilla javascript'. It is true that you a see the jquery's script tag inside of the html5 template but that is just for the 'bootstrap' framework.
```
 onExecutionTimer = setInterval(function (){
                                    if (timerToId === whitesSeconds.id){
	                                    var secValue = Number(whitesSeconds.innerHTML);
                                        var minValue = Number(whitesMinutes.innerHTML);
                                        whitesPlayerPanel.setAttribute("onclick", "countDown('"+blacksSeconds.id+"')");
                                        blacksPlayerPanel.setAttribute("onclick", "");
                                       if (whitesCentiSec < 98) {
                                           whitesCentiSec += 1;
                                        } else {
                                            if (secValue > 0){
                                                whitesSeconds.innerHTML = (secValue - 1).toString();
                                            } else if (minValue > 0){
                                                whitesSeconds.innerHTML = "59";
                                                whitesMinutes.innerHTML = (minValue - 1).toString();
                                            } else{
                                                gameFinnished("Blacks");
                                            }
                                            whitesCentiSec = 0;
                                        }

```
As you can see in the code example above, I also learned how does javascript manage Asynchronous threads something that allowed me to get the correct form of the core functionality: the timers.

## Is that it?
I cannot argue that this needs to be improved, but what i can tell you is that it has fulfilled its purpose: Now I'm not scared anymore about javascript and I'm confident enough to get involve in a project with javascript as its core tech involved.
By the way, I also made this js app a mobile app with the help of the phonegap framework. Since I didn't upload it to the 'android market', I will include the apk file in the project folder for all of you who happen to be some chess players in the need of a digital clock for the game.
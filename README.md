rps-myo
=======
##Demo
Once all necessary dependencies are installed (check generator-angular-fullstack for info), run:
> grunt serve

See http://virtualrps.herokuapp.com to try out a live version, or watch the [demo presentation](http://youtu.be/4-c7qIWKohw?t=4m00s) with a Thalmic Myo.

##Instructions
Navigate to localhost:9000/arena/room_id with a buddy, and press 'r' for rock, 'p' for paper, or 's' for scissors to play.

Press esc to reset the game in case both players didn't play at the same time.

This was built for a Velocity Hackathon, and is meant to be connected to the Thlamic Myo. The Lua script for rock-paper-scissor gesture intergration is very simple and located in the myo-scripts folder.

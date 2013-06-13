soundcloud-followers
====================

You want to know if people you follow on SoundCloud are following you back? Here a javascript that will help you to unfollow all people you follow and that are not following you back.

### Author ###

+ <strong>Fry &lt;@ohFRY on Twitter&gt;</strong>

### INSTALLATION ###

Add to your bookmark bar this code below:

```javascript: (function () { var jsCode = document.createElement('script'); jsCode.setAttribute('id', 'soundcloud-followers'); jsCode.setAttribute('src', 'https://raw.github.com/ohFRY/soundcloud-followers/master/sc-unfollowers.js'); document.body.appendChild(jsCode); }());

### USAGE ###

Change the username by yours on the first line of the script. And run the script when you have loaded all your followers on https://soundcloud.com/{your username}/following

### WARNING ###
By executing this code, your browser might freeze the time to collect data. Sorry, I've been coding this very quickly and didn't really care about making this async.
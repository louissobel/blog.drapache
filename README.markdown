blog.drapache
===============
An example web application written with dbpy that runs on [drapache](http://github.com/louissobel/drapache)

To use:

- Just drop it into your drapache app folder, and go to <yourhostname>.drapache.com/blog
- Posts are stored in a folder called \_posts and kept track of through a json file called _posts
- Auth is handled by the do\_login.dbpy file, there is a dictionary in there that you can use to set users/passwords
- Change the basic info which is stored in a file \_info.json

Notes:

- Some admin actions are really really slow (on the order of 5,10 seconds) because of the number of requests that
  must be made, one after another, to dropbox. This will improve once asynchronous IO is added to dbpy.
- 
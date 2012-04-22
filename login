#DBPYEXECUTE

start_session()

invalid_login = SESSION.get('invalid_login',False)
failed_attempt = SESSION.get('failed_attempt',False)

error = False

if invalid_login:
	error = True
	error_message = "Invalid login credentials"
	SESSION['invalid_login'] = False
	
elif failed_attempt:
	error = True
	error_message = "You have to be signed in to access that part of the site"
	SESSION['failed_attempt'] = False



print """

<html>

<head>
	
	<title>
		Log in
	</title>
	
	<link href="static/css/login.css" rel="stylesheet">
	
	
</head>


<body>
	
	
	<div class="container">
		
"""

if error:
	print "<div class='error'>%s</div>" % error_message

print """
		<form name="login" action="do_login.dbpy" method="post">
			Username: <input type="text" name="username"/> <br>
			Password <input type="password" name="password"/> <br>
			<input type="submit">
		</form>
		
	</div>

</body>

"""	
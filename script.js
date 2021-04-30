var jsonLog = null;
$.ajax({
	'async': false,
	'global': false,
	'url': "/user.json",
	'dataType': "json",
	'success': function (data) {
		jsonLog = data;
	}
});

function validation() {
	var letters = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	var emailChecker = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var password2 = document.getElementById("password2");
	if (email.value.match(emailChecker)) {
		if (password.value.length < 8) {
			alert("Min size should be 8");
		}
		else {
			if (password.value.match(letters)) {
				if (password.value == password2.value) {
					alert("Signed In");

					obj = {
						'email': email.value,
						'password': password.value
					}

					$.post("https://jsonplaceholder.typicode.com/posts", obj, function (resp, status, resp_obj) {
						if (status == "success") {
							console.log(resp);
							console.log(resp_obj);
						}
					});
				}
				else {
					alert("Passwords aren't same");
				}
			}
			else {
				alert("Invalid password!");
			}
		}
	}
	else {
		alert("Invalid email address!");
		return false;
	}
}

function authorization() {
	var emailLog = $('#emailLog').val();
	var passwordLog = $('#passwordLog').val();;

	const email = jsonLog.find((email) => { return email.Email === emailLog })


	if (email === undefined) {
		alert("No such user")
		console.log(1);
		return false;
	}
	else {
		const pass = email.Password;
		if (emailLog === email.Email && passwordLog === pass) {
			alert("Sucsess");
			console.log(3);
		}
	}
}
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
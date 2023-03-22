function getCookie(Name) {
	//document.cookie="radio_central=It works, woo-hoo!";
	cookies = document.cookie.split(';');
	for (i = 0; i < cookies.length; i++) {
		//document.write(cookies[i] + "<br />");
		isthere = cookies[i].indexOf(Name + "=");
		if (isthere != -1) {
			//document.write("Aha! I have found it! At " + cookies[i] + "<br />");
			right_number = i;
			cookie_u_want = cookies[right_number].split("=");
			cookie_content = cookie_u_want[1];
			return cookie_content;
		}
	}
}
function setCookie(n, v) {
	document.cookie = n + "=" + v + '; expires=Tue, 19 Jan 2038 04:14:07 GMT"';
}

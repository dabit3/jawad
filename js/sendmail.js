$(document).ready(function() {
	

	$('#mailinglist').click(function () {
	        
	        var email = $('#updates-email').val();
	        var varData = 'email=' + email;
	        if (email == "") {
	    			swal("Please fill out the email field.");
	    			return false;
	    		}
	        
	        if(email != "") {
	        		swal("You've signed up for the Developers.ms Newsletter! ", "Unsubscribe at any time.", "success");
	            
	        		emailRef.push({ email: email });
	            console.log(email);

	            $('#updates-email').val("");
	            $.ajax({
	                type: "POST",
	                url: "../mailing-list.php",
	                data: varData,
	                success: function() {
	                	
	                }
	            });

	            return false;
	        }
    });

		$('#mailinglist2').click(function () {
	        
	        var email = $('#updates-email').val();
	        var varData = 'email=' + email;
	        if (email == "") {
	    			swal("Please fill out the email field.");
	    			return false;
	    		}
	        
	        if(email != "") {
	        		swal("You've signed up to be sponsored for Startup Weekend! ", "We will update you shortly.", "success");
	            
	        		emailRef.push({ email: email });
	            console.log(email);

	            $('#updates-email').val("");
	            

	            return false;
	        }
    });


});
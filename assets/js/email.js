const contactform = document.getElementById("contact-form");
contactform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted event triggered.");

    // Gather data from the form
 // Accessing the form field values
const fullName = document.getElementById("fullName").value;
const email = document.getElementById("email").value;
const lastname = document.getElementById("lastname").value;
const design = document.getElementById("design").value;
const message = document.getElementById("message").value;
const subject = document.getElementById("subject").value;


console.log("Collected form data:", { fullName, email, lastname, design, message, subject });


    // Create email data
    const emailData = {
        "Host": "216.10.241.228",
        "Port": "587",
        "SMTPSecure": "ssl",
        "SenderEmail": "hitixa.bhuva@uniqueconsumerservices.com",
        "SenderEmailPassword": "1f1UOc{3U*64",  
        "ReciverEmail": "shreyans@theuniqueitsolution.com",
        "Subject": subject,
        "Body": `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shreyans Padmani - Contact Information</title>
    <style type="text/css">
        /* Client-specific resets */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
       
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
       
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }
   
        u + #body a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
       
        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
        }
       
        @media (prefers-color-scheme: dark) {
            .darkmode-bg { background-color: #000000 !important; }
            .darkmode-bg-light { background-color: #1a1a1a !important; }
            .darkmode-text { color: #ffffff !important; }
            .darkmode-text-secondary { color: #cccccc !important; }
            .darkmode-border { border-color: #333333 !important; }
            .darkmode-table-header { background-color: #2a2a2a !important; }
            .darkmode-table-row { background-color: #1a1a1a !important; }
        }
       
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .fluid {
                max-width: 100% !important;
                height: auto !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
            .stack-column,
            .stack-column-center {
                display: block !important;
                width: 100% !important;
                max-width: 100% !important;
                direction: ltr !important;
            }
            .stack-column-center {
                text-align: center !important;
            }
            .center-on-narrow {
                text-align: center !important;
                display: block !important;
                margin-left: auto !important;
                margin-right: auto !important;
                float: none !important;
            }
            table.center-on-narrow {
                display: inline-block !important;
            }
            .content-padding {
                padding-left: 15px !important;
                padding-right: 15px !important;
            }
            .small-table-padding {
                padding: 5px !important;
            }
           
            .data-table-container {
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch !important;
                display: block !important;
                width: 100% !important;
            }
           
            .data-table {
                min-width: 100% !important;
                width: 100% !important;
            }
           
            .data-table td,
            .data-table th {
                white-space: nowrap !important;
                font-size: 12px !important;
                padding: 8px !important;
            }
            
            .hero-headline {
                font-size: 28px !important;
                line-height: 1.3 !important;
            }
            
            .hero-text {
                font-size: 16px !important;
            }
            
            .mobile-padding {
                padding: 30px 20px !important;
            }
            
            .mobile-bottom-padding {
                padding-bottom: 25px !important;
            }
            
            .mobile-hide {
                display: none !important;
            }
        }
    </style>
</head>
<body bgcolor="#f8f9fa" class="darkmode-bg" width="100%" style="margin: 0; font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333333; -webkit-font-smoothing: antialiased;">
    <!-- Preheader text -->
    <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
        Your contact details have been received - Shreyans Padmani will connect with you shortly.
    </div>
   
    <center style="width: 100%; background-color: #f8f9fa;" class="darkmode-bg">
        <div style="max-width: 650px; margin: 0 auto;" class="email-container">
            <!-- Email Header -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto; border-spacing: 0; border-collapse: collapse;">
                <tr>
                    <td style="padding: 40px 0 30px 0; text-align: center;">
                        <!-- Logo placeholder - you can replace this with actual logo -->
                        <div style="width: 180px; height: 50px; background-color: #000000; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-family: 'Inter', sans-serif; font-weight: 800; font-size: 22px; color: #ffffff; letter-spacing: -0.5px;">
                            Shreyans Padmani
                        </div>
                    </td>
                </tr>
            </table>
            
            <!-- Main Email Body -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto; border-radius: 0; overflow: hidden; border: 2px solid #000000;">
                <!-- Hero Section -->
                <tr>
                    <td bgcolor="#000000" style="padding: 0;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td style="padding: 60px 40px; text-align: center;" class="mobile-padding">
                                    <h1 style="margin: 0 0 20px 0; font-weight: 700; font-size: 36px; line-height: 1.2; color: #ffffff; font-family: 'Inter', Helvetica, Arial, sans-serif; letter-spacing: -1px;" class="hero-headline">Thank You</h1>
                                    <div style="width: 60px; height: 2px; background-color: #ffffff; margin: 0 auto 25px auto;"></div>
                                    <p style="margin: 0; font-weight: 400; font-size: 18px; line-height: 1.6; color: #ffffff; opacity: 0.9;" class="hero-text">We've received your contact information and will be in touch shortly to discuss your requirements.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <!-- Contact Summary Intro -->
                <tr>
                    <td bgcolor="#ffffff" class="darkmode-bg-light" style="padding: 50px 40px 30px 40px; text-align: center;" class="mobile-padding">
                        <h2 style="margin: 0 0 10px 0; font-weight: 600; font-size: 24px; line-height: 1.3; color: #000000; font-family: 'Inter', Helvetica, Arial, sans-serif; letter-spacing: -0.5px;" class="darkmode-text">Contact Summary</h2>
                        <div style="width: 40px; height: 2px; background-color: #000000; margin: 0 auto;" class="darkmode-text"></div>
                    </td>
                </tr>
                
                <!-- Contact Data Table -->
                <tr>
                    <td bgcolor="#ffffff" class="darkmode-bg-light" style="padding: 0 40px 60px 40px;" class="mobile-padding">
                        <div class="data-table-container" style="overflow-x: auto; -webkit-overflow-scrolling: touch; width: 100%;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="2" bordercolor="#000000" width="100%" style="border: 2px solid #000000; border-collapse: collapse;" class="darkmode-border">
                                <tr>
                                    <td style="padding: 0;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="data-table">
                                            <!-- Table Header -->
                                            <tr style="background-color: #000000;" class="darkmode-table-header">
                                                <td colspan="2" style="padding: 20px; font-size: 16px; line-height: 24px; font-weight: 600; color: #ffffff; text-align: center; border-bottom: 2px solid #000000;" class="darkmode-text">CONTACT INFORMATION</td>
                                            </tr>
                                            
                                            <!-- Table Rows -->
                                            <tr style="background-color: #ffffff;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000; border-bottom: 1px solid #000000;" class="darkmode-text">First Name</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%; border-bottom: 1px solid #000000;" class="darkmode-text-secondary">${fullName}</td>
                                            </tr>
                                            <tr style="background-color: #f8f9fa;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000; border-bottom: 1px solid #000000;" class="darkmode-text">Last Name</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%; border-bottom: 1px solid #000000;" class="darkmode-text-secondary">${lastname}</td>
                                            </tr>
                                            <tr style="background-color: #f8f9fa;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000; border-bottom: 1px solid #000000;" class="darkmode-text">Email Address</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%; border-bottom: 1px solid #000000;" class="darkmode-text-secondary">${email}</td>
                                            </tr>
                                            
                                            <tr style="background-color: #ffffff;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000; border-bottom: 1px solid #000000;" class="darkmode-text">Subject</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%; border-bottom: 1px solid #000000;" class="darkmode-text-secondary">${subject}</td>
                                            </tr>
                                            
                                            <tr style="background-color: #ffffff;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000; border-bottom: 1px solid #000000;" class="darkmode-text">Service Type</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%; border-bottom: 1px solid #000000;" class="darkmode-text-secondary">${design}</td>
                                            </tr>
                                            
                                            <tr style="background-color: #f8f9fa;" class="darkmode-table-row">
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; font-weight: 600; color: #000000; width: 35%; border-right: 1px solid #000000;" class="darkmode-text">Message</td>
                                                <td style="padding: 18px 25px; font-size: 15px; line-height: 24px; color: #333333; width: 65%;" class="darkmode-text-secondary">${message}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
            
            <!-- Footer -->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <tr>
                    <td style="padding: 40px 30px; text-align: center; font-size: 13px; color: #666666; font-weight: 400;" class="darkmode-text-secondary">
                        <div style="width: 30px; height: 1px; background-color: #cccccc; margin: 0 auto 15px auto;"></div>
                        <p style="margin: 0 0 8px 0; font-family: 'Inter', sans-serif;">© 2025 Shreyans Padmani. All rights reserved.</p>
                        <p style="margin: 0; font-family: 'Inter', sans-serif; font-size: 12px;">Professional IT Solutions & Digital Services</p>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
    `,
    };

    console.log("Email data prepared:", emailData);

    const apiUrl = "./Mail/test.php";
    const headers = {
        "Content-Type": "application/json",
    };

    console.log("API URL:", apiUrl);

    function removeErrorClass(fieldId, className = "border-danger") {
    const field = document.getElementById(fieldId);
    if (field && field.classList.contains(className)) {
        field.classList.remove(className);
        console.log(`Removed class ${className} from ${fieldId}`);
    }
}


    console.log("Checking form validation...");

    if (!fullName || !email || !lastname || !design || !subject || !message ) {
        console.log("Validation failed: Missing required fields.");
    if (!message) {
            toggleClassForField('message', 'border-danger', 3000);
        }
        if (!fullName) {
            toggleClassForField('fullName', 'border-danger', 3000);
        }
        if (!subject) {   // OPTIONAL: if you want to validate design name too
            toggleClassForField('subject', 'border-danger', 3000);
        }
        if (!design) {
            toggleClassForField('design', 'border-danger', 3000);
        }
        if (!email) {
            toggleClassForField('email', 'border-danger', 3000);
        }
        if (!lastname) {
            toggleClassForField('lastname', 'border-danger', 3000);
        }
    
        showFeedback('Please fill in all required fields.', 'error');
        return;
    }
    

    console.log("Validating email...");
    if (!isValidEmail(email)) {
        console.log("Invalid email entered.");
        showFeedback('Please enter a valid email address.', 'col-12 text-center border-1 py-2 border-info border text-info mt-3');
        return;
    }

    console.log("Sending email request...");

    const submitButton = document.getElementById("submit-button");
submitButton.disabled = true;
submitButton.innerHTML = 'Sending... <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>'; // Optional: show loading indicator

    fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(emailData),
    })
    .then((response) => response.json())
    .then((data) => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';

        if (data.status) {
            console.log("Message sent successfully", data);
            showFeedback(
                "Message sent successfully",
                "success"
            );
            clearForm();
        } else {
            console.log("Server returned an error", data);
            showFeedback(
                "Message sending failed. Please try again later.",
                "info"
            );
            clearForm();
        }
    })
    .catch((error) => {
        console.error("Error while sending request:", error);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send a message <span></span>';
        showFeedback(
            "An error occurred while sending the message. Please try again later.",
            "error"
        );
    });
});

function isValidEmail(email) {
  console.log("Checking email format...");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  console.log(`Email validation result for ${email}: ${isValid}`);
  return isValid;
}

function showFeedback(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = toast.querySelector(".toast-message");
  const toastIcon = toast.querySelector(".toast-icon");
  const toastProgress = toast.querySelector(".toast-progress");

  toast.classList.remove("success", "error", "info");
  toast.classList.add(type);

  if (type === "success") {
    toastIcon.textContent = "✓";
    toastIcon.style.color = "green";
    toastProgress.style.backgroundColor = "green";
  } else if (type === "error") {
    toastIcon.textContent = "";
    toastIcon.style.color = "red";
    toastProgress.style.backgroundColor = "red";
  } else if (type === "info") {
    toastIcon.textContent = "⚠";
    toastIcon.style.color = "blue";
    toastProgress.style.backgroundColor = "blue";
  }

  toastMessage.textContent = message;
  toast.classList.add("show");
  toastProgress.style.width = "100%";

  setTimeout(() => {
    toast.classList.remove("show");
    toastProgress.style.width = "0";
  }, 3000);
}

function hideToast() {
  const toast = document.getElementById("toast");
  const toastProgress = toast.querySelector(".toast-progress");
  toast.classList.remove("show");
  toastProgress.style.width = "0";
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (email === "") {
    showFeedback("Email is required!", "error");
  } else if (!isValidEmail(email)) {
    showFeedback("Invalid email address!", "error");
  } else {
    showFeedback("Email sent successfully!", "success");
  }
});

function clearForm() {
    console.log("Clearing form fields...");
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('design').value = '';
    document.getElementById('message').value = '';
    document.getElementById('subject').value = '';
    console.log("Form reset successfully.");
}
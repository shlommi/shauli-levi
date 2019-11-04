import React from 'react'

const FormContainer = () => {
	const [formSubmitted, setFormSubmitted] = React.useState(false);

	React.useEffect(
		() => {
			// console.log("Contact form submission handler loaded successfully.");
			// bind to the submit event of our form
			var forms = document.querySelectorAll("form.gform");
			for (var i = 0; i < forms.length; i++) {
				forms[i].addEventListener("submit", handleFormSubmit, false);
			}
	
	
			//document.addEventListener("DOMContentLoaded", loaded, false);
	
			function validateHuman(honeypot) {
				if (honeypot) {  //if hidden form filled up
					console.log("Robot Detected!");
					return true;
				} else {
					console.log("Welcome Human!");
				}
			}
	
			// get all data in form and return object
			function getFormData(form) {
				var elements = form.elements;
				var honeypot;
	
				var fields = Object.keys(elements).filter(function (k) {
					if (elements[k].name === "honeypot") {
						honeypot = elements[k].value;
						return false;
					}
					return true;
				}).map(function (k) {
					if (elements[k].name !== undefined) {
						return elements[k].name;
						// special case for Edge's html collection
					} else if (elements[k].length > 0) {
						return elements[k].item(0).name;
					}
				}).filter(function (item, pos, self) {
					return self.indexOf(item) === pos && item;
				});
	
				var formData = {};
				fields.forEach(function (name) {
					var element = elements[name];
	
					// singular form elements just have one value
					formData[name] = element.value;
	
					// when our element has multiple items, get their values
					if (element.length) {
						var data = [];
						for (var i = 0; i < element.length; i++) {
							var item = element.item(i);
							if (item.checked || item.selected) {
								data.push(item.value);
							}
						}
						formData[name] = data.join(', ');
					}
				});
	
				// add form-specific values into the data
				formData.formDataNameOrder = JSON.stringify(fields);
				formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
				//formData.formGoogleSend = form.dataset.email || ""; // no email by default
	
				// console.log(formData);
				return { data: formData, honeypot };
			}
	
			function handleFormSubmit(event) {	  // handles form submit without any jquery
				event.preventDefault();           // we are submitting via xhr below
				var form = event.target;
				var formData = getFormData(form);
				var data = formData.data;
	
				// If a honeypot field is filled, assume it was done so by a spam bot.
				if (formData.honeypot) {
					return false;
				}
	
				disableAllButtons(form);
				var url = form.action;
				var xhr = new XMLHttpRequest();
				xhr.open('POST', url);
				// xhr.withCredentials = true;
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.onreadystatechange = function () {
					// console.log(xhr.status, xhr.statusText);
					// console.log(xhr.responseText);
					form.reset();
					setFormSubmitted(true)
					window.scrollTo({
						top: 100,
						left: 100,
						behavior: 'smooth'
					});
					return;
				};
				// url encode form data for sending as post data
				var encoded = Object.keys(data).map(function (k) {
					return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
				}).join('&');
				xhr.send(encoded);
			}
	
			function disableAllButtons(form) {
				var buttons = form.querySelectorAll("button");
				for (var i = 0; i > buttons.length; i++) {
					buttons[i].disabled = true;
				}
			}
	
		},[]
	)

		{
			if(formSubmitted) {
				return (
					<div className="messageWrapper">
						<p> תודה שיצרת קשר  &#128522;</p>
					<style jsx>{`
						.messageWrapper {
							max-width: 525px;
							height: 200px;
							display: flex;
							flex-wrap: wrap;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							margin: 40px auto 0 ;
							font-size: 28px;
						}
						@media(max-width: 600px) {
							.messageWrapper  {
								font-size:20px;
								margin: 0 auto;
								align-items: center;
								height: 200px;
							}
						}
			
					`}</style>
				</div>
				)
			} else {
				return (
					<>
						<p>אז מה שנותר עכשיו הוא להשאיר פרטים ושאולי רוה יחזור אליכם. חשוב להשאיר פרטים מדוייקים שכוללים שם מלא (שרשום בתעודת זהות) + תאריך לידה מלא.</p>
						<p>תוכן האתר נכתב בלשון זכר מטעמי נוחיות, אך מיועד לשני המינים כאחד.</p>
					<form
					action="GOOGLESCRIPT"
					method="POST"
					className="gform" 
					data-email="example@email.net"
					>	
					<div className="group-item">
						<label htmlFor="firstName">שם פרטי: </label>
						<input 
						type="text"
						placeholder="הכנס את שמך הפרטי כפי שרשום בתעודת הזהות"
						name="firstName"
						/>
					</div>
					<div className="group-item">
						<label htmlFor="lastName">שם משפחה: </label>
						<input
							type="text"
							name="lastName"
							placeholder="הכנס את שם המשפחה כפי שרשום בתעודת הזהות"
						/>
					</div>
					<div className="group-item">
						<label htmlFor="burnDate">תאריך לידה: </label>
						<input
							type="text"
							name="burnDate"
							placeholder="אנא רשום תאריך לידה מלא"
						/>
					</div>
					<div className="group-item">
						<label htmlFor="phone">מספר טלפון: </label>
						<input
							type="text"
							name="phone"
							placeholder="אנא הזן את מספר הטלפון שלך"
							/>
					</div>
					<div className="group-item">
						<label htmlFor="email">דוא"ל: </label>
						<input
							type="email"
							name="email"
							placeholder="אנא הזן את כתובת הדואר האלקטרוני"
							required
						/>
					</div>
					<div className="group-item">
						<label htmlFor="message">הודעה: </label>
						<textarea 
						name="message"
						rows="10" 
						placeholder="אנא הזן הודעה..."
						></textarea>
					</div>
					<button type="submit" >שלח</button>
					</form>

					<style jsx>{`
						.gform  {
							max-width: 525px;
							height: 700px;
							display: flex;
							flex-wrap: wrap;
							flex-direction: column;
							align-items: flex-end;
							justify-content: space-between;
							margin: 40px auto 0 ;
							font-size: 24px;
						}
				
						label {
							margin-left: 10px;
						}
				
						input {
							padding: 11px;
							width: 374px;
							height: 48px;
							font-size: 18px !important;
							font-family: inherit;
							border: 1px solid #2632404D;
							color: #263240;
							text-align: right;
						}
				
						textarea {
							width: 374px;
							font-size: 18px !important;
							font-family: inherit;
							padding: 10px;
							border: 1px solid #2632404D;
							color: #263240;
							vertical-align: top;
						}

						p {
							margin-bottom: 10px;
							text-align: center;
						}
				
						button {
							display:block;
							margin: 40px auto 0;
							font-size: 24px;
							color:#263240;
							border: 0.5px solid #263240; 
							background-color:transparent; 
							padding: 6px 60px;
						}
				
						::placeholder {
							font-size: 18px;
						}
				
						::-webkit-calendar-picker-indicator {
							opacity: 1;
							
						}
				
						@media(max-width: 600px) {
							.gform {
								font-size:20px;
								margin: 0 auto;
								align-items: center;
								height: auto;
							}
				
							label {
								margin-left: 0;
							}
				
							input {
								margin: 10px auto;
								width: 80vw;
								height: 40px;
							}
							textarea{
								width: 80vw;
								margin: 10px auto;
							}
				
							button {
								display:block;
								margin: 40px auto 0;
								font-size: 20px;
								padding: 3px 30px;
							}

							p {
                                margin: 20px 20px;
							}
						}
				
					`}</style>
				</>
				)
			}
		}
		
	
}

export default FormContainer;



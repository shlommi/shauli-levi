

const FormContainer = () => (
	<form
	action="https://script.google.com/macros/s/AKfycby-4oeBjA_KfLFPI9QLfKPV8OX-uZ96-crvvYwhW3leN6_N4j8/exec"
	method="POST" 
	data-email="example@email.net"
	>	
	    <div className="group-item">
			<label htmlFor="firstName">שם פרטי: </label>
			<input type="text" name="firstName" placeholder="הכנס את שמך הפרטי כפי שרשום בתעודת הזהות"/>
	    </div>
		<div className="group-item">
			<label htmlFor="lastName">שם משפחה: </label>
			<input type="text" name="lastName" placeholder="הכנס את שם המשפחה כפי שרשום בתעודת הזהות"/>
		</div>
		<div className="group-item">
			<label htmlFor="burnDate">תאריך לידה: </label>
			<input type="date" name="burnDate" placeholder="אנא רשום תאריך לידה מלא"/>
		</div>
		<div className="group-item">
			<label htmlFor="phone">מספר טלפון: </label>
			<input type="text" name="phone" placeholder="אנא הזן את מספר הטלפון שלך"  required/>
		</div>
		<div className="group-item">
			<label htmlFor="email">דוא"ל: </label>
			<input type="email" name="email" placeholder="אנא הזן את כתובת הדואר האלקטרוני"/>
		</div>
		<div className="group-item">
			<label htmlFor="message">הודעה: </label>
			<textarea name="message"   rows="10" placeholder="אנא הזן הודעה..."></textarea>
		</div>
		<button>שלח</button>
		<style jsx>{`
			form {
				max-width: 525px;
				height: 620px;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				align-items: flex-end;
				justify-content: space-between;
				margin: 30px auto;
				font-size: 24px
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
				border: 1px solid #2632404D;
				color: #263240;
				vertical-align: top;
			}

			::placeholder {
				font-size: 18px;
			}

			::-webkit-calendar-picker-indicator {opacity: 1;}
		`}</style>
	</form>
)

export default FormContainer;
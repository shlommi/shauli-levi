
const SubTitle = ({title}) =>(
	  <div className="title-wrapper">
		  <div className="title">
				<div className="dash"></div>
					{title}
				<div className="dash"></div>
		  </div>
       <style jsx>{`
		   
		.title-wrapper {
			color:  #263240;
			font-size: 30px;
			width: 100%;
			margin: 30px auto;
			display: inline-block;
			text-align: center;
		}

		.title {
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: center;
		}
		.dash {
			border-bottom: 0.6px solid  #BEAF78;
			border-top: 0.6px solid  #263240;
			width: 15%;
			height: 7px;
			margin: 0 15px;
		}

		@media (max-width: 600px) {
			.title-wrapper {
				font-size: 26px;
				margin: 20px auto;
			}
		}
			`}
		</style>
		</div>
)
export default SubTitle;

 
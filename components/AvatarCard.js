import Button from './Button'

const AvatarCard  = () => {
	return (
		<div className="card">
			<div className="inner-card">
				<h1>היי שמי שאולי רוה-לוי</h1> 
				<p>נומרולוג גרפולוג ויועץ-עסקי</p> 
				<Button 
				url="/yeutz-hachvana" 
				text="איך אוכל לעזור ?"
				/>
			</div>
			<style jsx>{`

				h1 {
					font-size: 42px;
					font-weight: 700px;
					margin-bottom: 0;
					margin-top: 0;
					letter-spacing: 2;
					line-height: 1;
				}
				.card {
					background-color: #fff;
					text-align: center;
					display:flex;
					flex-direction: column;
					justify-content: center;
					align-items:center;
				    width: 330px;
					height:230px;
					color:  #263240;
					box-shadow: 0px 3px 6px #00000029;
				}
				.inner-card {
					display:flex;
					max-width: 80%;
					max-height:120px;
					transform-origin:(-50%, -50%);
					flex-direction: column;
					justify-content: center;
					align-items:center;
					background-color: #fff;
					margin: 0 auto;
					color:  #263240;
				}

				button {
					margin: 0 auto;
					display:inline-block;
					font-size: 18px;
					color:#FFFFFF;
					background-color:#263240; 
					padding: 8px 14px;
					outline: none;
					border: none;
				}


				@media(max-width: 800px) {
					.card {
					    width: 260px;
					    height:180px;
					}

					h1 {
						font-size: 22px;
						margin: 0 auto;
					}

					button {
						font-size: 16px;
					}

                }

				@media(max-width: 600px) {
					
					.card {
					    width: 260px;
					    height:150px;
					}

					h1 {
						font-size: 22px;
						margin: 0 auto;
					}
				}

			`}</style>
		</div>
	)
}
export default AvatarCard;
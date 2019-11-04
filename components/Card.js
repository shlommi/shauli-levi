

const Card = ({card}) => {
	const {title, image, info} = card;
	return (
		<div className="card-wrapper">
			<div className="card-img">
				<img src={image} alt="image-card" height="265" width="410"/>
			</div>
			<div className="card-body">
				<h1>{title}</h1>
				<p>
				{info}
				</p>
			</div>
			<style jsx>{`
				.card-wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content:flex-start;
					max-width: 410px;
					max-height: 680px;
					margin: 20px;
					border: 0.5 solid #333333;
					box-shadow: 0px 3px 6px #00000029;
				}
	
				.card-img  {
					overflow: hidden;
				}
	
				img {
					max-width: 100%;
				}

				
				.card-body {
					width: 70%;
					display: block;
				}

				h1 {
					font-size: 36px;
					margin: 20px 0 ;
				}
				p {
					text-align: center;
					margin-bottom: 30px;
				}
		
			

			`}</style>
		</div>
	)
}

export default Card;
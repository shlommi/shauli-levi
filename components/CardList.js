import Card from './Card';
import data from './data';

const CardList = () => (
	<div className="list-wrapper">
		{
			data.map(card => (
				<Card 
				card={card}
				key={card.title}
				/>
			))
		}
		<style jsx>{`
		
			.list-wrapper{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				margin: 50px auto;
			}
		`}</style>
	</div>
);

export default CardList;
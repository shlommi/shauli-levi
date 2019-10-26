const Gallery = ({images}) => (
	<div className="gallery">
		{images.map((img, index) =>  (
				<img  key={`comment${index}`} src={img} alt={`comment${index}`} />
				))}
		<style jsx>{`
			.gallery {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				margin: 0 auto;
				
			}

			img {
				margin-bottom: 2em;
				box-shadow: 0px 3px 6px #00000029;

			}

			@media (max-width: 600px) {

				img {
					
				}
			}
		
		`}</style>
	</div>
)
export default Gallery;
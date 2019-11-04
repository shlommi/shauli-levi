import Link from 'next/link';

const Button = ({url, text, mt, mb}) => (
	<>
	<Link  href={url}>
		<a 
		className="btn" 
		style={{ marginTop: `${mt}px`, marginBottom: `${mb}px`}}
		>{text}</a>
	</Link>
	<style jsx>{`

		a.btn {
			margin: 0 auto;
			display:inline-block;
			font-size: 18px;
			color:#FFFFFF;
			background-color:#263240; 
			padding: 8px 14px;
		}


		a.btn:active {
			box-shadow: 2px 2px  #877450;
		}
		`}</style>
	</>
)
export default Button;




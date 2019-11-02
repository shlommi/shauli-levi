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
			-webkit-animation: callToAction 1s linear   alternate infinite  ; /* Safari 4+ */
            -moz-animation: callToAction 1s linear  alternate infinite ; /* Fx 5+ */
            -o-animation: callToAction 1s linear   alternate infinite ; /* Opera 12+ */
            animation: callToAction 1s linear   alternate infinite ; /* IE 10+, Fx 29+ */
			transition: transform 0.1s;
		}


		a.btn:hover {
			box-shadow: 5px 5px  #877450;
		}


			@-webkit-keyframes callToAction {
			0%   { transform: translateY(0); }
			100% { transform: translateY(-6px); }
			}

			@-moz-keyframes callToAction {
			0%   { transform: translateY(0); }
			100% { transform: translateY(-6px); }
			}

			@-o-keyframes callToAction {
			0%   { transform: translateY(0); }
			100% { transform: translateY(-6px); }
			}

			@keyframes callToAction {
			0%   { transform: translateY(0); }
			100% { transform: translateY(-6px); }
			}


		`}</style>
	</>
)
export default Button;




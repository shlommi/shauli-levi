const AnchorLink = ({ title, mt, mb, linkText}) => (
	<a 
	className="btn" 
	style={{ marginTop: `${mt}px`, marginBottom: `${mb}px`}}
	href={linkText}
	>{title}
		<style jsx>
			{`
				a.btn {
				margin: 0 auto;
				font-size: 18px;
				color:#FFFFFF;
				background-color:#263240; 
				padding: 8px 14px;
				}
			`}
		</style>
	</a>

)
export default AnchorLink;

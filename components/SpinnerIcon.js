
const SpinnerIcon  =  () => {
	return (
		<div className="spinner">

		<svg
		  style={{ background: "none"}}
		  width="200"
		  height="200"
		  className="lds-spinner"
		  preserveAspectRatio="xMidYMid"
		  viewBox="0 0 100 100"
		>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.7333333333333334s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(30 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.6666666666666666s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(60 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.6s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(90 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.5333333333333333s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(120 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.46666666666666673s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(150 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.4000000000000001s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(180 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.3333333333333333s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(210 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.26666666666666666s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(240 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.20000000000000004s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(270 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.13333333333333333s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(300 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="-0.06666666666666667s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		  <rect
			width="6"
			height="12"
			x="47"
			y="24"
			fill="#263240"
			rx="9.4"
			ry="4.8"
			transform="rotate(330 50 50)"
		  >
			<animate
			  attributeName="opacity"
			  begin="0s"
			  dur="0.8s"
			  keyTimes="0;1"
			  repeatCount="indefinite"
			  values="1;0"
			></animate>
		  </rect>
		</svg>
		<style jsx>{`
			.spinner {
				text-align: center;
				opacity: 0.4;
			}
		
		`}</style>
		</div>
	  );
  }
  
  export default SpinnerIcon;
  
import React from "react";
import Work from "./Work";

let builtWith = [
	"HTML5",
	"CSS3",
	"ES2015",
	"AngularJS",
	"ui-router",
	"Angular Animate",
	"ngMap",
	"Firebase",
	"Webpack",
	"Babel"
];

let team = [
	"Gabe Meola"
];

function CamTaylor(props) {
	return (
		<div className="work">
			<Work
				detailHeader="An Angular App"
				detailDate="February, 2016"
				builtWith={builtWith}
				team={team}
				name="Cameron & Taylor Wedding"
				siteUrl="raindropsandmangotrees.com"
			/>
		</div>
	)
}

export default CamTaylor;
import React from "react";
import Work from "./Work";
import macMock from "../../../assets/fivestarMock@2x.png";

let builtWith = [
	"HTML5",
	"CSS3",
	"ES2015",
	"AngularJS",
	"ui-router",
	"Angular Animate",
	"Angular Material",
	"SASS",
	"Firebase",
	"Webpack",
	"Babel"
];

let team = [
	"Gabe Meola",
	"Devin Bond"
];

function FiveStarLegal(props) {
	return (
		<div className="work">
			<Work
				detailHeader="An Angular App"
				detailDate="April, 2016"
				builtWith={builtWith}
				team={team}
				name="Five Star Legal"
				siteUrl="5starlegaldocuments.firebaseapp.com"
				macMock={macMock}
				overviewHeader="Living Trust Questionnaire that dynamically changes based on questions submitted"
				overviewPosition="Frontend Developer"
			/>
		</div>
	)
}

export default FiveStarLegal;
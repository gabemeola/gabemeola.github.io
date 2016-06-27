import React from "react";
import Work from "./Work";

let builtWith = [
	"AngularJS",
	"Webpack",
	"Amazon S3",
	"Babel",
	"ES2015",
	"lodash",
	"Firebase",
	"ui-router",
	"SASS",
	"ng-dialog",
	"ng-progress"
];

let team = [
	"Gabe Meola",
	"Devin Bond"
];

function CosmeticLaserExchange(props) {
	return (
		<Work
			detailHeader="An Angular App"
			detailDate="March, 2016"
		  builtWith={builtWith}
		  team={team}
		  name="Cosmetic Laser Exchange"
		  siteUrl="www.cosmeticlaserexchange.com"
		/>
	)
}

export default CosmeticLaserExchange;
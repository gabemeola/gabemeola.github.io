import React from "react";
import CamTaylorMacMock from "../../../assets/camtaylorMock@2x.png";
import CosmeticLaserExchangeMacMock from "../../../assets/CLEmock@2x.png";
import FiveStarLegalMacMock from "../../../assets/fivestarMock@2x.png";


function ImgPreRenders() {
	return (
		<div style={{display: 'none'}}>
			<img src={CamTaylorMacMock}/>
			<img src={CosmeticLaserExchangeMacMock}/>
			<img src={FiveStarLegalMacMock}/>
		</div>
	)
}

export default ImgPreRenders;
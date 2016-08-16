import React from "react";
import CamTaylorMacMock from "../../../assets/camtaylorMock@2x.png";
import CosmeticLaserExchangeMacMock from "../../../assets/CLEmock@2x.png";
import FiveStarLegalMacMock from "../../../assets/fivestarMock@2x.png";
import gabeImg from "../../../assets/gabe.png";


function ImgPreRenders() {
	return (
		<div style={{display: 'none'}}>
			<img src={CamTaylorMacMock}/>
			<img src={CosmeticLaserExchangeMacMock}/>
			<img src={FiveStarLegalMacMock}/>
			<img src={gabeImg}/>
		</div>
	)
}

export default ImgPreRenders;
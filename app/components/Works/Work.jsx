import React, { PropTypes } from "react";

function Work(props) {
	return(
		<div className="work">
			<div className="work-details"></div>
			<div className="work-header"></div>
		</div>
	)
}

Work.propTypes = {
	detailHeader: PropTypes.string,
	detailTime: PropTypes.string,
	builtWith: PropTypes.array,
	team: PropTypes.array,
	header: PropTypes.string,
	siteUrl: PropTypes.string
};

export default Work;
import React, { PropTypes } from "react";

function Work(props) {
	return(
		<div className="work">
			<div className="work-details"></div>
			<div className="work-header">
				<h1>{props.name}</h1>
			</div>
		</div>
	)
}

Work.propTypes = {
	detailHeader: PropTypes.string,
	detailTime: PropTypes.string,
	builtWith: PropTypes.array,
	team: PropTypes.array,
	name: PropTypes.string,
	siteUrl: PropTypes.string
};

export default Work;
import React, { PropTypes } from "react";

function Work(props) {
	return(
		<div>
			<div className="work-details">
				<div className="work-details-wrapper">
					<div className="work-details-header">
						<div className="work-details-header-name">
							{props.detailHeader}
						</div>
						<div className="work-details-header-date">
							{props.detailDate}
						</div>
					</div>
					<div className="work-details-info">
						<div className="work-details-built">
							<h3>Built With:</h3>
							{props.builtWith.map((tech, index) => {
								let last = props.builtWith.length - 1;
								return index === last ? tech : `${tech}, `;
							})}
						</div>
						<div className="work-details-team">
							<h3>Team:</h3>
							<ul>
								{props.team.map((name) => <li>{name}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="work-header">
				<div className="work-header-wrapper">
					<h1 className="work-header-name">{props.name}</h1>
					<h3 className="work-header-siteUrl underline">
						<a target="_blank" href={`//${props.siteUrl}`}>{`www.${props.siteUrl}`}
							<div className="underline-mark"></div>
						</a>
					</h3>
				</div>
			</div>
		</div>
	)
}

Work.propTypes = {
	detailHeader: PropTypes.string,
	detailDate: PropTypes.string,
	builtWith: PropTypes.array,
	team: PropTypes.array,
	name: PropTypes.string,
	siteUrl: PropTypes.string
};

export default Work;
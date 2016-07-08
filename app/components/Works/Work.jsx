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
								{props.team.map((name, index) => <li key={index}>{name}</li>)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="work-header">
				<div className="work-header-wrapper">
					<h1 className="work-header-name">{props.name}</h1>
					<h3 className="work-header-siteUrl underline">
						<a target="_blank" href={`//${props.siteUrl}`}>
							{`www.${props.siteUrl}`}
							<div className="underline-mark"></div>
						</a>
					</h3>
				</div>
			</div>
			<div className="work-content">
				<div className="work-content-overview">
					<div className="work-content-macmock">
						<img src={props.macMock} alt="MAC MOCK"/>
					</div>
					<div className="work-content-header">
							<h2>{props.overviewHeader}</h2>
							<h4>
								with <b>Gabe Meola</b>
								<br/>
								as <b>{props.overviewPosition}</b>
							</h4>
					</div>
				</div>
			</div>
			<div className="work-link">
				<a target="_blank" href={`//${props.siteUrl}`}>
					<div className="work-link-btn">
						<p>Visit Project</p>
					</div>
				</a>
			</div>
		</div>
	)
}

Work.propTypes = {
	detailHeader: PropTypes.string.isRequired,
	detailDate: PropTypes.string.isRequired,
	builtWith: PropTypes.array.isRequired,
	team: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	siteUrl: PropTypes.string.isRequired,
	macMock: PropTypes.string,
	overviewHeader: PropTypes.string.isRequired,
	overviewPosition: PropTypes.string.isRequired
};

export default Work;
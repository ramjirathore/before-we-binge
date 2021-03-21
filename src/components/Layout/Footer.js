import React from 'react';

const footer = () => {
	return (
		<div className="conatiner" id="footer">
			<div className="footer p-3 mt-5 text-center bg-dark text-light">
				Developed by
                    <span className="text-warning font-weight-normal ml-2 mr-2">Shreyansh, Shilpi and Meenakshi</span>
				<span> </span>using <i className="fab fa-react" /> React JS and <i className="cib-redux"></i> Redux integrated
                    with external movies data API
                    <a
					href="http://www.odmbapi.com/"
					target="_blank"
					rel="noopener noreferrer"
				> OMDB</a>
			</div>
		</div>
	);
};

export default footer;


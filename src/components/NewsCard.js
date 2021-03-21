import React from 'react';

const NewsCard = (props) => {
	return (
		<div className='newscard bg-dark border-secondary'>
			<h6 style={ { textAlign: 'left' } }>{ props.title }</h6>
			<img src={ props.urlToImage } className="img-fluid rounded newscard_img" alt='headline-img' />
			<p className="newscard_desc">{ props.description }</p>
			<button className='btn btn-warning' onClick={ () => window.open(props.url) }>View</button>
		</div>
	);
};


export default NewsCard;

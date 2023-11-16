import { PropTypes } from 'prop-types';
const SubmitBtn = ({ text }) => {
	return (
		<button type='submit' className='btn-primary'>
			{text}
		</button>
	);
};

SubmitBtn.propTypes = {
	text: PropTypes.string.isRequired,
};

export default SubmitBtn;

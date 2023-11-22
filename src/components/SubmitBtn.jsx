import { PropTypes } from 'prop-types';
import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<button type='submit' className='uppercase btn-primary btn btn-block'>
			{isSubmitting ? (
				<>
					<span className='loading loading-bars'></span>sending...
				</>
			) : (
				text || 'submit'
			)}
		</button>
	);
};

SubmitBtn.propTypes = {
	text: PropTypes.string.isRequired,
};

export default SubmitBtn;

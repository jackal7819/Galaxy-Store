import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, defaultValue }) => {
	return (
		<div className='form-control'>
			<label htmlFor='' className='label'>
				<span className='label-text'>{label}</span>
			</label>
			<input
				type={type}
				name={name}
				defaultValue={defaultValue}
				className='input input-bordered'
			/>
		</div>
	);
};

FormInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormInput;

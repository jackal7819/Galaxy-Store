import PropTypes from 'prop-types';

const FormCheckBox = ({ label, name, defaultValue, size }) => {
	return (
		<div className='items-center form-control'>
			<label htmlFor={name} className='cursor-pointer label'>
				<span className='capitalize label-text'>{label}</span>
			</label>
            <input type='checkbox' name={name} defaultChecked={defaultValue} className={`checkbox checkbox-accent ${size}`} />
		</div>
	);
};

FormCheckBox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	defaultValue: PropTypes.bool.isRequired,
	size: PropTypes.string.isRequired,
};

export default FormCheckBox;

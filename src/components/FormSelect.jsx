import PropTypes from 'prop-types';

const FormSelect = ({ label, name, list, defaultValue, size }) => {
	return (
		<div className='form-control'>
			<label htmlFor={name} className='label'>
				<span className='capitalize label-text'>{label}</span>
			</label>
			<select
				name={name}
				id={name}
				className={`select select-bordered bg-base-300 ${size}`}
				defaultValue={defaultValue}>
				{list.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

FormSelect.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
	size: PropTypes.string.isRequired,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FormSelect;

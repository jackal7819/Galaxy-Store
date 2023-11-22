import PropTypes from 'prop-types';
import formatPrice from '../services/formatPrice';
import { useState } from 'react';

const FormRange = ({ label, name, size, price }) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

	const rangeHandler = (event) => setSelectedPrice(event.target.value);

	return (
		<div className='form-control'>
			<label htmlFor={name} className='cursor-pointer label'>
				<span className='capitalize label-text'>{label}</span>
				<span>{formatPrice(selectedPrice)}</span>
			</label>
			<input
				type='range'
				name={name}
				id={name}
				min={0}
				max={maxPrice}
				step={step}
				value={selectedPrice}
				onChange={rangeHandler}
				className={`range range-primary ${size}`}
			/>
			<div className='flex justify-between w-full px-2 mt-2 text-xs font-bold'>
				<span>0</span>
				<span>Max: {formatPrice(maxPrice)}</span>
			</div>
		</div>
	);
};

FormRange.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

export default FormRange;

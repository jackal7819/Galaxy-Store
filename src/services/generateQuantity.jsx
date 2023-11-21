const generateQuantity = (number) =>
	Array.from({ length: number }, (_, index) => (
		<option key={index + 1} value={index + 1}>
			{index + 1}
		</option>
	));

export default generateQuantity;

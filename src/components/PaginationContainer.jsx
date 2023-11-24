import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
	const navigate = useNavigate();
	const { search, pathname } = useLocation();
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;

	const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

	const pageChangeHandler = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	if (pageCount < 2) return null;

	return (
		<div className='flex justify-end mt-16'>
			<div className='join'>
				<button
					className='btn btn-xs sm:btn-md join-item'
					disabled={page === 1}
					onClick={() =>
						pageChangeHandler(page - 1)
					}>
					Prev
				</button>
				{pages.map((pageNumber) => (
					<button
						key={pageNumber}
						onClick={() => pageChangeHandler(pageNumber)}
						className={`btn btn-xs sm:btn-md border-none join-item ${
							pageNumber === page
								? 'bg-base-300 border-base-300'
								: ''
						}`}>
						{pageNumber}
					</button>
				))}
				<button
					className='btn btn-xs sm:btn-md join-item'
					disabled={page === pageCount}
					onClick={() =>
						pageChangeHandler(page + 1)
					}>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginationContainer;

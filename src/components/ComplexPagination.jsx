import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPagination = () => {
	const navigate = useNavigate();
	const { search, pathname } = useLocation();
	const { meta } = useLoaderData();
	const { pageCount, page } = meta.pagination;

	const pageChangeHandler = (pageNumber) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', pageNumber);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	const addPageButton = ({ pageNumber, activeClass }) => {
		return (
			<button
				key={pageNumber}
				onClick={() => pageChangeHandler(pageNumber)}
				className={`btn btn-xs sm:btn-md border-none join-item ${
					activeClass ? 'bg-base-300 border-base-300' : ''
				}`}
			>
				{pageNumber}
			</button>
		);
	};

	const renderPageButtons = () => {
		const pageButtons = [];
		pageButtons.push(
			addPageButton({ pageNumber: 1, activeClass: page === 1 })
		);
		if (page > 2) {
			pageButtons.push(
				<button
					key='dots-1'
					className='btn btn-xs sm:btn-md join-item'
					onClick={() => pageChangeHandler(Math.floor(page / 2))}
				>
					...
				</button>
			);
		}
		if (page !== 1 && page !== pageCount) {
			pageButtons.push(
				addPageButton({
					pageNumber: page,
					activeClass: true,
				})
			);
		}
		if (page < pageCount - 1) {
			pageButtons.push(
				<button
					key='dots-2'
					className='btn btn-xs sm:btn-md join-item'
					onClick={() =>
						pageChangeHandler(
							Math.floor(page + (pageCount - page) / 2)
						)
					}
				>
					...
				</button>
			);
		}
		pageButtons.push(
			addPageButton({
				pageNumber: pageCount,
				activeClass: page === pageCount,
			})
		);
		return pageButtons;
	};

	if (pageCount < 2) return null;

	return (
		<div className='flex justify-end mt-16'>
			<div className='join'>
				<button
					className='btn btn-xs sm:btn-md join-item'
					disabled={page === 1}
					onClick={() => pageChangeHandler(page - 1)}
				>
					Prev
				</button>
				{renderPageButtons()}
				<button
					className='btn btn-xs sm:btn-md join-item'
					disabled={page === pageCount}
					onClick={() => pageChangeHandler(page + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ComplexPagination;

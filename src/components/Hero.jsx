import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
	return (
		<div className='grid items-center gap-24 lg:grid-cols-2'>
			<div>
				<h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
					We are changing the way people shop
				</h1>
				<p className='max-w-xl mt-8 text-lg leading-8'>
					Transform your living space with our curated collection of
					exquisite furniture. Elevate your home&#39;s style and
					comfort, one piece at a time. Redefining the way you
					experience furniture shopping.
				</p>
                <div className='mt-10'>
                    <Link to='/products' className='btn btn-primary'>
                        Our Products
                    </Link>
                </div>
			</div>
			<div className='sm:space-y-4 sm:p-4 h-96 carousel carousel-vertical carousel-center rounded-box bg-neutral'>
				{carouselImages.map((image) => (
					<div key={image} className='h-full carousel-item'>
						<img
							src={image}
							alt='furniture'
							className='object-cover w-full rounded-box'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;

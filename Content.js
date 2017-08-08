import React from 'react';
import product from './images/bitmap.jpg';
import delivery from './images/del.jpg';
import relatedItem1 from './images/products/1.jpg';
import relatedItem2 from './images/products/2.jpg';
import relatedItem3 from './images/products/3.jpg';
import relatedItem4 from './images/products/4.jpg';

export default () => {
	return (
		<main className="product container">
			<h1 className="product__title">Long Cotton Gabardine Car Coat</h1>
			<div className="row">
				<div className="col-xs-12 col-md-7">
					<div className="product__slider">
						<img src={product} className="product__slider-image" alt="Long Cotton Gabardine Car Coat" />
						<img src={product} className="product__slider-image" alt="Long Cotton Gabardine Car Coat" />
						<img src={product} className="product__slider-image" alt="Long Cotton Gabardine Car Coat" />
					</div>
				</div>
				<div className="col-xs-12 col-md-5">
					<div className="product__info">
						<div className="product__info-placeholder">
							<h2 className="product__info-price">110 000 руб.</h2>
							<p className="product__info-code">Item 39428531</p>
						</div>
					</div>

					<div className="product__color">
						<p className="product__color-current">Colour: Honey</p>
						<div className="product__color-buttons">
							<button className="product__button-color product__button-color-active" type="button">
								Current color: Honey
							</button>
							<button className="product__button-color" type="button">
								Next Color: Black
							</button>
						</div>
						<hr className="divider-product" />
					</div>
					<div className="product__actions">
						<button className="product__actions-size" type="button">
							SELECT A SIZE
						</button>
						<button className="product__actions-find" type="button">
							FIND IN STORE
						</button>
						<button className="product__actions-help" type="button">
							NEED SIZE HELP?
						</button>
					</div>
				</div>
			</div>
			<hr className="divider-full-width" />
			<div className="row">
				<section className="product__description">
					<button className="product__description-button" type="button">
						<h2 className="product__description-title">DESCRIPTION</h2>
					</button>

					<span className="product__description-text">
						<p>A refined car coat crafted in protective cotton gabardine.</p>
						<p>
							Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable
							fabric that protects against wind and rain.
						</p>
						<p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
						<p>The piece is finished with a distinctive check undercollar.</p>
						<ul>
							<li>
								Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly
								according to size.
							</li>
							<li>Outer: 100% cotton</li>
							<li>Check lining: 100% cotton</li>
							<li>Sleeve lining: 100% viscose</li>
							<li>Buttons: buffalo horn</li>
							<li>Specialist dry clean</li>
							<li>Made in Europe</li>
							<li>Item 39428531</li>
						</ul>
					</span>
				</section>

				<hr className="divider-full-width" />

				<section className="product__shipping">
					<button className="product__shipping-button" type="button">
						<h2 className="product__shipping-title">SHIPPING & RETURNS</h2>
					</button>
				</section>

				<section className="product__delivery">
					<div className="row">
						<div className="col-md-7">
							<img className="product__delivery-image" src={delivery} alt="Delivery information" />
						</div>

						<div className="col-md-5">
							<h2 className="product__delivery-title">DELIVERY</h2>

							<h5 className="product__delivery-subject">Free Next Day Delivery</h5>
							<p className="product__delivery-text">
								Order before 7pm Monday to Thursday for delivery the next day
							</p>

							<h5 className="product__delivery-subject">Collect-in-Store</h5>
							<p className="product__delivery-text">
								Order online today and pick up your items in store as early as tomorrow
							</p>

							<h5 className="product__delivery-subject">Free Returns</h5>
							<p className="product__delivery-text">Enjoy free returns on your order</p>

							<h5 className="product__delivery-subject">Free Gift Packaging</h5>
							<p className="product__delivery-text">
								Discover our gift packaging, a gold lined box tied with a coloured ribbon
							</p>
						</div>
					</div>
				</section>

				<hr className="divider-full-width" />

				<section className="product__related">
					<h2 className="product__related-title">WE RECOMMEND</h2>

					<div className="row">
						<div className="col-xs-6 col-sm-3 col-md-3">
							<a className="product__related-card" href="#">
								<img src={relatedItem1} className="product__related-image" alt="Emroided Hooded" />
								<span className="product__related-subject">Emroided Hooded</span>
								<span className="product__related-price">27 000 руб.</span>
							</a>
						</div>

						<div className="col-xs-6 col-sm-3 col-md-3">
							<a className="product__related-card" href="#">
								<img
									src={relatedItem2}
									className="product__related-image"
									alt="Relaxed Fit Stretch Jeans"
								/>
								<span className="product__related-subject">Relaxed Fit Stretch Jeans</span>
								<span className="product__related-price">27 000 руб.</span>
							</a>
						</div>

						<div className="col-xs-6 col-sm-3 col-md-3">
							<a className="product__related-card" href="#">
								<img
									src={relatedItem3}
									className="product__related-image"
									alt="Leather and House Check"
								/>
								<span className="product__related-subject">Leather and House Check</span>
								<span className="product__related-price">120 000 руб.</span>
							</a>
						</div>

						<div className="col-xs-6 col-sm-3 col-md-3">
							<a className="product__related-card" href="#">
								<img
									src={relatedItem4}
									className="product__related-image"
									alt="Leather Wingtip Check"
								/>
								<span className="product__related-subject">Leather Wingtip Check</span>
								<span className="product__related-price">46 000 руб.</span>
							</a>
						</div>
					</div>
				</section>

				<section className="product__more">
					<div className="product__more-placeholder">
						<h2 className="product__more-title">MORE FOR YOU</h2>
						<a className="product__more-link" href="#">
							Men's Black Trench Coats
						</a>
						<a className="product__more-link" href="#">
							Men's Short Trench Coats
						</a>
						<a className="product__more-link" href="#">
							Men's Long Trench Coats
						</a>
					</div>
				</section>
			</div>
		</main>
	);
};

import React from 'react'
import styles from './Basket.module.scss'
import SvgArrow from './SvgArrow'
import SvgRemove from './SvgRemove'

export default function Basket({ onClickClose }) {
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.drawerHeader}>
					<h2>
						Корзина
						<SvgRemove onClickClose={onClickClose} />
					</h2>
					<div className={styles.items}>
						<div className={styles.cartItem}>
							<img
								width={70}
								height={70}
								src='/img/sneakers/2.jpg'
								alt='Sneakers'
							/>
							<div className={styles.cartInfo}>
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<span>12 999 руб.</span>
							</div>
							<button>
								<SvgRemove />
							</button>
						</div>
					</div>
				</div>
				<div className={styles.drawerFooter}>
					<div className={styles.cartTotalBlock}>
						<ul>
							<li>
								<span>Итого:</span>
								<div></div>
								<p>21 498 руб.</p>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<p>1074 руб.</p>
							</li>
						</ul>
					</div>
					<button className={styles.greenButton}>
						Оформить заказ
						<SvgArrow />
					</button>
				</div>
			</div>
		</div>
	)
}

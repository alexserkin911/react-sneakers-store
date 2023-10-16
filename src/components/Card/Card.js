import React, { useState } from 'react'
import styles from './Card.module.scss'
import SvgFavorite from './SvgFavorite'
import SvgGreenOk from './SvgGreenOk'
import SvgPlus from './SvgPlus'

export default function Card() {
	const [isAdded, setIsAdded] = useState(false)

	const onClickPlus = () => {
		setIsAdded(!isAdded)
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<SvgFavorite />
			</div>
			<img
				className={styles.cardImg}
				src='./img/sneakers/1.jpg'
				alt='sneakers'
			/>
			<p className={styles.cardTitle}>
				Мужские Кроссовки Nike Blazer Mid Suede
			</p>
			<div className={styles.cardFooter}>
				<div className={styles.cardFooterLeft}>
					<p className={styles.cardFooterLeftTitle}>Цена:</p>
					<span className={styles.cardFooterLeftPrice}>12 999 rub</span>
				</div>
				{isAdded ? (
					<SvgGreenOk onClickPlus={onClickPlus} />
				) : (
					<SvgPlus onClickPlus={onClickPlus} />
				)}
			</div>
		</div>
	)
}

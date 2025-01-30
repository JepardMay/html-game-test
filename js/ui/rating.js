(function () {
	const data = {
		"rating": [
			{
				"id": "123",
				"name": "Владимир",
				"lastName": "Ларионов",
				"img": "./male.png",
				"points": "463"
			},
			{
				"id": "9",
				"name": "Владимир",
				"lastName": "Сергеев",
				"img": "./male.png",
				"points": "521"
			},
			{
				"id": "231",
				"name": "Вениамин",
				"lastName": "Васильев",
				"img": "./male.png",
				"points": "865"
			},
			{
				"id": "321",
				"name": "Мария",
				"lastName": "Логинова",
				"img": "./female.png",
				"points": "865"
			},
			{
				"id": "492",
				"name": "Борис",
				"lastName": "Казанцев",
				"img": "./male.png",
				"points": "784"
			},
			{
				"id": "452",
				"name": "Полина",
				"lastName": "Калинина",
				"img": "./female.png",
				"points": "225"
			},
			{
				"id": "796",
				"name": "Даниил",
				"lastName": "Воробьёв",
				"img": "./male.png",
				"points": "642"
			},
			{
				"id": "4",
				"name": "Эрик",
				"lastName": "Аксёнов",
				"img": "./male.png",
				"points": "150"
			},
			{
				"id": "1155",
				"name": "Иван",
				"lastName": "Иванов",
				"img": "./male.png",
				"points": "100"
			},
			{
				"id": "12145",
				"name": "Артем",
				"lastName": "Алексеев",
				"img": "./male.png",
				"points": "1000"
			}
		],
		"friends": [
			{
				"id": "9",
				"name": "Владимир",
				"lastName": "Сергеев",
				"img": "./male.png"
			},
			{
				"id": "4",
				"name": "Эрик",
				"lastName": "Аксёнов",
				"img": "./male.png"
			},
			{
				"id": "15411",
				"name": "Ирина",
				"lastName": "Чеснокова",
				"img": "./female.png"
			},
			{
				"id": "15564",
				"name": "Дарина",
				"lastName": "Боброва",
				"img": "./female.png"
			}
		]
	};

	function sortRatingsByPoints(ratings) {
		return ratings.sort((a, b) => parseInt(b.points) - parseInt(a.points));
	}

	function renderRatingList(data) {
		const ratingList = document.querySelector('[data-rating-list]');
		const sortedRatings = sortRatingsByPoints(data.rating);
		const friendIds = new Set(data.friends.map(friend => friend.id));

		ratingList.innerHTML = '';

		sortedRatings.forEach((item, i) => {
			const listItem = document.createElement('li');
			listItem.className = `rating__item block ${friendIds.has(item.id) ? 'friend' : ''}`;

			listItem.innerHTML = `
					<div class="rating__col">${i + 1}</div>
					<div class="rating__col block">
						<img class="block__img" src="img/empty-block.png" alt="Фон блока">
						<div class="user block">
							<!-- <img class="block__img" src="${item.img}" alt="Иконка пользователя"> -->
						</div>
					</div>
					<div class="rating__col">${item.name} ${item.lastName}</div>
					<div class="rating__col">${item.points}</div>
					<img class="block__img" src="img/rating-user-bg.png" alt="Фон пользователя">
			`;

			ratingList.appendChild(listItem);
		});
	}

	renderRatingList(data);
})();

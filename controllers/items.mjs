export default function initItemsController(db) {
	const index = (request, response) => {
		db.Item.findAll()
			.then((items) => {
				response.send({ items });
			})
			.catch((error) => console.log(error));
	};

	const getItems = (request, response) => {
		db.Item.findAll()
			.then((items) => {
				response.render('items', { items });
			})
			.catch((error) => console.log(error));
	};

	return {
		index,
		getItems,
	};
}

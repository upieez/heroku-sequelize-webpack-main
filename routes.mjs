import { resolve } from 'path';
import db from './models/index.mjs';
import initItemsController from './controllers/items.mjs';

export default function bindRoutes(app) {
	const ItemsController = initItemsController(db);

	app.get('/items', ItemsController.index);
	app.get('/item', ItemsController.getItems);

	// Root route returns the Webpack-generated main.html file
	app.get('/', (request, response) => {
		response.sendFile(resolve('dist', 'main.html'));
	});
}

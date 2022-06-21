module.exports = {
	development: {
		username: 'samuel',
		password: null,
		database: 'webp_items_development',
		host: '127.0.0.1',
		dialect: 'postgres',
	},
	production: {
		use_env_variable:
			'postgres://fghuulujcwcibh:5b15c000aac079b2903270d2b0091db7b4115955f3452c3eb58b010249e1ea8f@ec2-44-197-128-108.compute-1.amazonaws.com:5432/dcfqqfha4g996r',
		dialect: 'postgres',
		protocol: 'postgres',
		dialectOptions: {
			ssl: {
				// https://github.com/sequelize/sequelize/issues/12083
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
};

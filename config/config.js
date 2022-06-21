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
			'postgres://thocdlusjfdcxg:015f23c88420a99a527e1c4fd573f2fedf9d6ef01d8386a6e0b58f8c75748490@ec2-44-197-128-108.compute-1.amazonaws.com:5432/d89ur3dpak5f8a',
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

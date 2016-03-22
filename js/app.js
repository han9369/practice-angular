(function(){

	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
		this.totals = 0;

		this.add = function(value){
			this.totals += value;
		};

		this.remove = function(value){
			this.totals -= value;
			if(this.totals <= 0){
				this.totals = 0;
			}
		};

	});

	var gems = [
		{
			name: 'product1',
			price: 20.95,
			imgs: 'img/1.png',
			canPurchase: true
		},
		{
			name: 'product2',
			price: 50.95,
			imgs: 'img/2.png',
			canPurchase: true

		},
		{
			name: 'product3',
			price: 100.30,
			imgs: 'img/3.png',
			canPurchase: true

		},
	];

})();
(function(){

	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
		this.totals = 0;

		this.add = function(value,index){
			if(gems[index].canPurchase){
				this.totals += value;
				gems[index].canPurchase = false;
			}
		};

		this.remove = function(value,index){
			if(!gems[index].canPurchase){
				this.totals -= value;
				if(this.totals <= 0){
					this.totals = 0;
				}
				gems[index].canPurchase = true;
			}
		};

	});

	app.controller("PanelController",function(){
		this.tab = 1;
		this.pro = gems;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};



	});

	var gems = [
		{
			num: 0,
			name: 'product1',
			price: 20.95,
			imgs: 'img/1.png',
			canPurchase: true,
			reviews:[
				{
					stars:5,
					body:"I love this product!",
					author:"joe@thomas.com"

				},
				{
					stars:1,
					body:"This product sucks",
					author:"tim@hater.com"

				},
			]
		},
		{
			num:1,
			name: 'product2',
			price: 50.95,
			imgs: 'img/2.png',
			canPurchase: true

		},
		{
			num:2,
			name: 'product3',
			price: 100.30,
			imgs: 'img/3.png',
			canPurchase: true

		},
	];

})();

<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'home',
		
		data() {
			return {
			selectedDirection: "",
			selectedCity: "",
			changeBgSize: false,
			showLoading: false,
			isClicked: false,
			error: "",
			searchResultsTxt: "",
			imageSrc: "'https://cms.uni-info.org/img/manjakos/'",
			facultities: [],
			facultyKey: 0,
			directions: [],
			cities: [],
			home_info: [],
			}
		},

		methods: {
			ajaxReq: function(pageType) {
				let ajaxData = [
					{						
						"global": [
							{					
								"limit": "all",
								"type": pageType
							}
						]
					}
				];

				return ajaxData;
			},

			fetchHomeInfo: function(ajax) {
				

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('home_details')[0]).then((response) => {				
					
					this.home_info.push(response.body.global.one[0].home_details.collections);
					
				});
				

			},

			fetchSearchFields: function() {
				let directionsRequest = {
						
					"global": [
						{					
							"limit": "all",
							"type": "drejtimet"
						}
					]
				}

				this.$http.post('https://cms.uni-info.org/websites/api/global', directionsRequest).then((response) => {
					
					
					this.directions = response.body.global.many[0].drejtimet;
					
				});


				let citiesRequest = {
						
					"global": [
						{					
							"limit": "all",
							"type": "qyteti"
						}
					]
				}

				this.$http.post('https://cms.uni-info.org/websites/api/global', citiesRequest).then((response) => {		

					
					this.cities = response.body.global.many[0].qyteti;
					
				});
			},


			searchBtn: function(e) {
				e.preventDefault();

				let object = {
						
					"global": [
						{					
							"limit": "all",
							"direction": this.selectedDirection,
							"city": this.selectedCity
						}
					]
				}

				var _this = this;

				this.changeBgSize = true;
				this.showLoading = true;

				setTimeout(function() {
					
					_this.showLoading = false;
					// _this.isClicked = true;
					
					_this.searchResultsMessage();

				_this.$http.post('https://cms.uni-info.org/websites/api/universities', object).then((response) => {
					
					
					

					_this.facultities = response.body.global;

					console.log(response.body.global);
					_this.checkError();
					
					if(response.body.global.length <= 0)
						_this.changeBgSize = false;
				});
				}, 1000);

				

				
			},

			enableButton: function(){
				if(this.selectedDirection || this.selectedCity)
					this.isClicked = false;
			},

			searchResultsMessage: function() {


				if(this.selectedDirection.length > 1) {
					this.searchResultsTxt = "Lista e universiteteve te drejtimit " + this.selectedDirection + (this.selectedCity == "" ? " ne te gjitha qytetet." : " ne "+this.selectedCity+"."); 
				} else if(this.selectedDirection.length <= 0 && this.selectedCity.length <= 0) {
					this.searchResultsTxt = "Lista e te gjitha universiteteve me te gjitha drejtimet.";
				} else {
					this.searchResultsTxt = "Lista e universiteteve me te gjitha drejtimet ne " + this.selectedCity + "."; 
				}


				
				
			},

			checkError: function () {
				if(this.facultities.length <= 0) {
					this.error = "Na vjen keq, por kerkimi juaj nuk u gjet!";
				} else {
					this.error = "";
				}
			}
		},

		mounted() {
			this.fetchSearchFields();
			this.fetchHomeInfo();
		}

} 




</script>
<template src="../templates/home.html">


</template>
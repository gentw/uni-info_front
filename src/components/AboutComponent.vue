
<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'about',
		data() {
			return {
				aboutInfos: {
					"cover_information": [],
					"details": [],
					"team_details": [],
					"team_members": [],
					"sponsors_details": [],



				},
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

			fetchAboutInfo: function(ajax) {

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('home_details')[0]).then((response) => {				
					
					this.home_info.push(response.body.global.one[0].home_details.collections);
					
				});
				

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('cover_information')[0]).then((response) => {				
					
					this.aboutInfos.cover_information.push(response.body.global.one[0].cover_information.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('details')[0]).then((response) => {				
					
					this.aboutInfos.details.push(response.body.global.one[0].details.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('team_heading_details')[0]).then((response) => {				
					
					this.aboutInfos.team_details.push(response.body.global.one[0].team_heading_details.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('team_members')[0]).then((response) => {				
					
					this.aboutInfos.team_members.push(response.body.global.many[0].team_members);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('sponsors_details')[0]).then((response) => {				
					
					this.aboutInfos.sponsors_details.push(response.body.global.one[0].sponsors_details.collections);
					
				});

			},


		},

		mounted() {
			this.fetchAboutInfo();

			console.log(this.aboutInfos.team_members);
		}
		

} 




</script>
<template src="../templates/about.html">


</template>
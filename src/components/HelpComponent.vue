
<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'help',
		data() {
			return {
				helpInfos: {
					"cover_information": [],
					"details": [],
					'content_help': []
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

			fetchHelpInfo: function(ajax) {
				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('home_details')[0]).then((response) => {				
					
					this.home_info.push(response.body.global.one[0].home_details.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('help_cover_info')[0]).then((response) => {				
					
					this.helpInfos.cover_information.push(response.body.global.one[0].help_cover_info.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('help_details')[0]).then((response) => {				
					
					this.helpInfos.details.push(response.body.global.one[0].help_details.collections);
					
				});

				

			},


		},

		mounted() {
			this.fetchHelpInfo();
			this.content_help = this.helpInfos.details;

		}
		

} 




</script>
<template src="../templates/help.html">


</template>
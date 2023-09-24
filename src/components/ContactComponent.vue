<script>
// import HeaderComponent from './general/HeaderComponent.vue'
// import SearchComponent from './home/SearchComponent.vue';	

export default {
		name: 'contact',
		data() {
			return {
				contactInfos: {
					"cover_information": [],
					"contact_info": [],


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

			fetchContactInfo: function(ajax) {

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('home_details')[0]).then((response) => {				
					
					this.home_info.push(response.body.global.one[0].home_details.collections);
					
				});
				

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('cover_info')[0]).then((response) => {				
					
					this.contactInfos.cover_information.push(response.body.global.one[0].cover_info.collections);
					
				});

				this.$http.post('https://cms.uni-info.org/websites/api/global', this.ajaxReq('contact_info')[0]).then((response) => {				
					
					this.contactInfos.contact_info.push(response.body.global.one[0].contact_info.collections);
					
				});

				

			},


		},

		mounted() {
			this.fetchContactInfo();

			console.log(this.contactInfos.cover_information);
			
		}
		

} 




</script>
<template src="../templates/contact.html">


</template>
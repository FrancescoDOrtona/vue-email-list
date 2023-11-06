const { createApp } = Vue

console.log(axios)

createApp ({
    data() {
        return {
            message: 'Email List',
			emailAddresses: [],
        }
    },
    methods: {
		fetchEmails(num) {
			for (let i = 0; i < num; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
						const fetchedMail = res.data.response
						this.emailAddresses.push(fetchedMail)
					})
			}
		},
	},
	created() {
		this.fetchEmails(10)
	},
}).mount('#app')
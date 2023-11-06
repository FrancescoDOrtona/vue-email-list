const { createApp } = Vue

console.log(axios)

createApp ({
    data() {
        return {

        }
    },
}).mount('#app')

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
new Vue({
    el: '#vue-app',
    data: {
        tiagoValue: 'Change value of field and click Submit',
        changeOnKeyUp: 'ChangeOnKeyUp Input Field'  
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.tiagoValue = this.$refs.tiagoinput.value;
        },
        changeDiv: function() {
            this.changeOnKeyUp = this.$refs.tiagoinput.value
        }
    },
    computed: {
 
    }
});
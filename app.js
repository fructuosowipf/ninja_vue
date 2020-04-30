new Vue({
    el: '#vue-app',
    data: {
        name: 'Rubén',
        job: 'Künstler',
        website: 'https://fructuosowipf.com',
        websiteTag: '<a href="website" target="_blank">Website Tag</a>'
    },
    methods: {
        greet: function(time){
            
            return 'Hallo ' + this.name + ', Guten ' + time + '!';
        }
    }
});

new Vue({
    el:'#vue-events',
    data: {
        age: 33,
        x: 0,
        y: 0
    },
    methods: {
        plus: function(inc){
            this.age += inc;
        },
        minus: function(dec){
            this.age -= dec;
        },
        updateXY: function(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})
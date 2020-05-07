new Vue({
    el: '#vue-app',
    data: {
        name: 'Rubén',
        job: 'Künstler',
        website: 'https://fructuosowipf.com',
        websiteTag: '<a href="website" target="_blank">Website Tag</a>'
    },
    methods: {
        greet: function (time) {

            return 'Hallo ' + this.name + ', Guten ' + time + '!';
        }
    }
});

new Vue({
    el: '#vue-events',
    data: {
        age: 33,
        x: 0,
        y: 0
    },
    methods: {
        plus: function (inc) {
            this.age += inc;
        },
        minus: function (dec) {
            this.age -= dec;
        },
        updateXY: function (e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        click: function () {
            alert('hoppla!');
        }
    }
});

new Vue({
    el: '#keyboard-events',
    data: {
        keyboardName: '',
        keyboardAge: ''
    },
    methods: {
        logName: function () {
            console.log('you entered your name');
        },
        logAge: function () {
            console.log('you entered your age');
        }
    }
});

new Vue({
    el: '#computed',
    data: {
        age: 33,
        a: 0,
        b: 0,
    },
    methods: {
        /*addToA: function(){return this.age + this.a;},
        addToB: function(){return this.age + this.b;}*/
    },
    computed: {
        addToA: function () { console.log('addToA'); return this.age + this.a; },
        addToB: function () { console.log('addToB'); return this.age + this.b; }
    }
});

new Vue({
    el: '#dyncss',
    data: {
        available: false,
        nearby: false
    },
    methods: {},
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }

        }
    }
});

new Vue({
    el: '#conditionals',
    data: {
        error: false,
        success: false

    },
    methods: {

    },
    computed: {

    }
});

new Vue({
    el: '#v-for',
    data: {
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
    },
    methods: {

    },
    computed: {

    }
});
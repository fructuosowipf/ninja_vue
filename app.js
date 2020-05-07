Vue.component('greeting',{
    template: '<p>Hey there, I am a re-usable component</p>',
    data: function(){
        return {
            name: 'Yoshi'
        }
    }
})

var one = new Vue({
    el: '#vue-app-one',
    data: {

  
    },
    methods: {
      
    },
    computed: {
 
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        
  
    },
    methods: {
        
      
    },
    computed: {
        
        
    }
});

two.title = "App Two Title Changed from outside";
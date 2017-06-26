var route_point = new Vue({
    el: '#routes',
    data: {
        startRoute: '',
        endRoute: '',
        route: {},
        stored_routes: []

    },
    methods: {
        showRoute: function() {
            this.stored_routes = JSON.parse(localStorage.getItem('routes'));
            if(!this.stored_routes) this.stored_routes = [];
        },
        addRoute: function() {
            this.route = {
                start: this.startRoute,
                end: this.endRoute
            };
            this.stored_routes.push(this.route);

            localStorage.setItem('routes', JSON.stringify(this.stored_routes));

            //Reset inputs
            this.startRoute = '';
            this.endRoute = '';
        },
        removeRoute: function(route) {
          var index = this.stored_routes.indexOf(route);
          this.stored_routes.splice(index, 1);
          localStorage.setItem('routes', JSON.stringify(this.stored_routes));
        },
        clearRoute: function() {
          this.stored_routes = [];
          localStorage.removeItem('routes');
        },
        displayRoute: function(route) {
            localStorage.setItem('displayStart', route.start);
            localStorage.setItem('displayEnd', route.end);
            location = 'route.html';
        }
    }

});
route_point.showRoute();
// SIMPLE ROUTE
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

// SIMPLE ROUTE RENDERING INTO SPECIFIC TEMPLATE AREA
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});

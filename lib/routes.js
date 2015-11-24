// SIMPLE ROUTE
FlowRouter.route('/', {
    name: 'home',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

// SIMPLE ROUTE RENDERING INTO SPECIFIC TEMPLATE AREA
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'});
    }
});
FlowRouter.route('/recipe/:id', {
    name: 'recipe-single',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

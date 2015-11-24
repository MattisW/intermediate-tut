// SIMPLE ROUTE
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

// SIMPLE ROUTE RENDERING INTO SPECIFIC TEMPLATE AREA
FlowRouter.route('/test', {
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});

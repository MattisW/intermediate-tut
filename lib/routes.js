
// NEEDS TO BE IN CLIENT CODE! (USES PACKAGE Gwendall:oauth-login-redirects)
if(Meteor.isClient){
    //Checking for loggin & loggout
    Accounts.onLogin(function() {
        FlowRouter.go('recipe-book');
    });
    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect) {
    // if user is not logged in, redirect him to home!
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

// SIMPLE ROUTE
FlowRouter.route('/', {
    name: 'home',
    action() {
        // If User logged in, redirect to recipe-book
        if(Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
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
FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

//route for the dynamic content
FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Test' });
  }
});
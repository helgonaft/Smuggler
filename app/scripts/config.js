/**
 * myproject - Responsive Admin Theme
 * Copyright 2015
 *
 * myproject theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/myproject/home");

    $stateProvider
        .state('myproject', {
            abstract: true,
            url: "/myproject",
            templateUrl: "views/common/content.html"
        })

        .state('myproject.home', {
            url: "/home",
            views: {
                " ": {

                    templateUrl: "views/home.html"
                },
                "loginuser@": {

                    templateUrl: 'views/partials/sign-in.html'
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.create-account-1', {
            url: "/create-account-1",
            views: { 
                "createAccount@": { 
                    templateUrl: "views/partials/create-header.html"
                },
                " ": {

                    templateUrl: "views/partials/register-first-step.html"
                },
                 "loginuser@": { 
                    templateUrl: "views/partials/register-first-step.html"
                },
               
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        
        .state('myproject.create-account-2', {
            url: "/create-account-2",
            views: { 
                " ": {

                    templateUrl: "views/partials/register-second-step.html"
                },
                 "loginuser@": {

                    templateUrl: "views/partials/register-second-step.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.create-account-3', {
            url: "/create-account-3",
            views: { 
                " ": {

                    templateUrl: "views/partials/register-third-step.html"
                },
                 "loginuser@": {

                    templateUrl: "views/partials/register-third-step.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.login',{
            url: "/sign-in",
            views: {
                " ": {

                    templateUrl: "views/home.html"
                },
                "loginuser@": {

                    templateUrl: 'views/partials/sign-in.html'
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })

       }
angular
    .module('myproject')
    .config(config);

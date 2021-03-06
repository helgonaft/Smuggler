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

                    templateUrl: 'views/home.html'
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.sign-in', {
            url: "/sign-in",
            views: {
                " ": {

                    templateUrl: "views/partials/sign-in.html"
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
                    templateUrl: "views/partials/registration/create-header.html"
                },
                " ": {

                    templateUrl: "views/partials/registration/register-first-step.html"
                },
                 "loginuser@": { 
                    templateUrl: "views/partials/registration/register-first-step.html"
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

                    templateUrl: "views/partials/registration/register-second-step.html"
                },
                 "loginuser@": {

                    templateUrl: "views/partials/registration/register-second-step.html"
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

                    templateUrl: "views/partials/registration/register-third-step.html"
                },
                 "loginuser@": {

                    templateUrl: "views/partials/registration/register-third-step.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.dashboard',{
            url: "/dashboard",
            views: {
                " ": {
                    templateUrl: "views/partials/dashboard/dashboard.html"
                },
                "loginuser@" : {
                    templateUrl: "views/partials/dashboard/dashboard.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.myStay',{
            url: "/myStay",
            views: {
                " ": {
                    templateUrl: "views/partials/dashboard/myStay.html"
                },
                "loginuser@" : {
                    templateUrl: "views/partials/dashboard/myStay.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.rewardAndBenefits',{
            url: "/rewardAndBenefits",
            views: {
                " ": {
                    templateUrl: "views/partials/dashboard/rewardAndBenefits.html"
                },
                "loginuser@" : {
                    templateUrl: "views/partials/dashboard/rewardAndBenefits.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
         .state('myproject.messages',{
            url: "/messages",
            views: {
                " ": {
                    templateUrl: "views/partials/dashboard/messages.html"
                },
                "loginuser@" : {
                    templateUrl: "views/partials/dashboard/messages.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.profile',{
            url: "/profile",
            views: {
                " ": {
                    templateUrl: "views/partials/dashboard/profile.html"
                },
                "loginuser@" : {
                    templateUrl: "views/partials/dashboard/profile.html"
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
        .state('myproject.hotels-overview',{
            url: "/hotels-overview",
            views: {
                " ": {

                    templateUrl: "views/partials/hotels/hotels-overview.html"
                },
                "loginuser@": {

                    templateUrl: "views/partials/hotels/hotels-overview.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.hotels-find',{
            url: "/hotels-find",
            views: {
                " ": {

                    templateUrl: "views/partials/hotels/hotels-find.html"
                },
                "loginuser@": {

                    templateUrl: "views/partials/hotels/hotels-find.html"
                },
                "footer@": {

                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('myproject.hotels-newest',{
            url: "/hotels-newest",
            views: {
                " ": {

                    templateUrl: "views/partials/hotels/hotels-newest.html"
                },
                "loginuser@": {

                    templateUrl: "views/partials/hotels/hotels-newest.html"
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

# Todo Challenge [![Build Status](https://travis-ci.org/samover/todo_challenge.svg?branch=master)](https://travis-ci.org/samover/todo_challenge) 

![screenshot](/public/images/screenshot.png)

## Way of Approaching the Challenge

The [desired product](#desired-product) is a toDo list as a single page web application. This project uses [AngularJS](https://www.angularjs.org) for the front-end on a [Sinatra](http://sinatrarb.com) server. 

The product can be previewed on [Heroku](https://minimal-todo-list.herokuapp.com/).

As always at [Makers Academy], the approach is TDD. For testing I have used Karma and Protractor.

The app uses the new HTML5 persistent local storage and Bootstrap for the layout.

## Installation Instructions

* Fork the repo
* Run `bundle install`, `npm install` and `bower install`  
* Run `rackup` and visit `localhost:9292`

## The Desired Product

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

Here are the core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

Here are some other user stories you may choose to implement:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```



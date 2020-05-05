# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Note.destroy_all
Tag.destroy_all
TagNote.destroy_all
User.destroy_all

users = ['RandomPerson1','RandomPerson2']
User1 = User.create(username: users[0])
User2 = User.create(username: users[1])

Tags = tags.map do |tag|
  Tag.create(name: tag)
end

tags = ['backend','frontend','javascript','ruby','rails','html','css','react','redux','coding']
descriptions = [
  "JavaScript, often abbreviated as JS,
  is a programming language that conforms
  to the ECMAScript specification.
  JavaScript is high-level, often just-in-time
  compiled, and multi-paradigm.",
  "Although there are similarities between JavaScript and Java,
  including language name, syntax, and respective standard libraries,
  the two languages are distinct and differ greatly in design.",
  "Ruby is a dynamic, open source programming language with a focus on
  simplicity and productivity. It has an elegant syntax that is natural
  to read and easy to write.",
  "Ruby is an interpreted, high-level, general-purpose programming language.
  It was designed and developed in the mid-1990s by Yukihiro Matz Matsumoto in
  Japan.",
  "Ruby on Rails, or Rails, is a server-side web application framework written
  in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework,
  providing default structures for a database, a web service, and web pages.",
  "Ruby on Rails' emergence in the 2000s greatly influenced web app development,
  through innovative features such as seamless database table creations, migrations,
  and scaffolding of views to enable rapid application development. Ruby on Rails'
  influence on other web frameworks remains apparent today, with many frameworks in other
  languages borrowing its ideas, including Django in Python, Catalyst in Perl,
  Laravel and CakePHP in PHP, Phoenix in Elixir, Play in Scala, and Sails.js in Node.js.",
  "Hypertext Markup Language (HTML) is the standard markup language for documents
  designed to be displayed in a web browser. It can be assisted by technologies
  such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  "Cascading Style Sheets (CSS) is a style sheet language used for describing the
  presentation of a document written in a markup language like HTML.
  CSS is a cornerstone technology of the World Wide Web, alongside HTML and
  JavaScript.",
  "React can be used as a base in the development of single-page or mobile applications.
  However, React is only concerned with rendering data to the DOM, and so creating React
  applications usually requires the use of additional libraries for state management and
  routing. Redux and React Router are respective examples of such libraries.",
  "Redux is an open-source JavaScript library for managing application state.
  It is most commonly used with libraries such as React or Angular for building
  user interfaces. Similar to (and inspired by) Facebook's Flux architecture,
  it was created by Dan Abramov and Andrew Clark."
  ];
titles = ['JavaScript Intro','JavaScript Details',
  'Ruby Intro','Ruby Details','Ruby on Rails Intro',
    'Ruby on Rails Details','HTML Summary',"CSS Summary",'React Summary',
    'Redux Summary']

 (0..5).each do |n|
   Note.create_with_user(title: titles[n],description: descriptions[n],User1)
 end
 (5..10).each do |n|
   Note.create_with_user(title: titles[n],description: descriptions[n],User2)
 end

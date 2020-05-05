# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

categories = ['A','B','C','D'];
descriptions = ['take out the trash','mow the lawn',
  'feed the dog','trim the hedges','wash the care','change oil in car',
  'make hair cut appointment'];
duedates = [Date.new(2020, 11,10),Date.new(2020,8,10),Date.new(2020,6,6),Date.new(2020,6,5)];
100.times do
  Todo.create({category: categories.sample , description: descriptions.sample ,due_date: duedates.sample})
end

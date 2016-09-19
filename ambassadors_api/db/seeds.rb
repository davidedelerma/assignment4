# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#Teacher_Ambassador.delete_All()
TeacherAmbassador.destroy_all
Teacher.destroy_all
Ambassador.destroy_all

teacher1 = Teacher.create(
  { name: 'Maria',
    surname: 'Dembech',
    school: 'test1',
    city: 'Naples',
    email: 'mdembech@gmail.com',
    phone_nb: '123456789',
    password: 'topsecret', 
    password_confirmation: 'topsecret'
}
)
teacher2 = Teacher.create(
  { name: 'Jhon',
    surname: 'Smith',
    school: 'test2',
    city: 'Edinburgh',
    email: 'jsmith@gmail.com', 
    phone_nb: '123456789'}
)
teacher3 = Teacher.create(
  { name: 'Jack',
    surname: 'Sparrow',
    school: 'test3',
    city: 'Glasgow',
    email: 'jsparrow@gmail.com', 
    phone_nb: '123456789'}
)
teacher4 = Teacher.create(
  { name: 'Peter',
    surname: 'Griffin',
    school: 'test4',
    city: 'Leeds',
    email: 'pgriffin@gmail.com', 
    phone_nb: '123456789'}
)
teacher5 = Teacher.create(
  { name: 'Lisa',
    surname: 'Simpson',
    school: 'test5',
    city: 'London',
    email: 'lsimpson@gmail.com', 
    phone_nb: '123456789'}
)

ambassador1 = Ambassador.create(
  { name: 'Pinco', 
    surname: 'Pallo', 
    subject: 'cloud', 
    city: 'Naples', 
    email: 'ppallo@gmail.com',
    phone_nb: '123456789'}
)
ambassador2 = Ambassador.create(
  { name: 'Homer', 
    surname: 'Simpson', 
    subject: 'IOT', 
    city: 'Naples', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
ambassador3 = Ambassador.create(
  { name: 'David', 
    surname: 'Beckam', 
    subject: 'Docker', 
    city: 'Edinburgh', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
ambassador4 = Ambassador.create(
  { name: 'Matthew', 
    surname: 'McGregor', 
    subject: 'Agile', 
    city: 'Edinburgh', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
ambassador5 = Ambassador.create(
  { name: 'Marks', 
    surname: 'Spencer', 
    subject: 'Testing', 
    city: 'Glasgow', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
ambassador6 = Ambassador.create(
  { name: 'David', 
    surname: 'Letterman', 
    subject: 'cloud', 
    city: 'Leeds', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
ambassador7 = Ambassador.create(
  { name: 'Michael', 
    surname: 'Jordan', 
    subject: 'Java', 
    city: 'London', 
    email: 'ppallo@gmail.com', 
    phone_nb: '123456789'}
)
TeacherAmbassador.create(
  { teacher_id: teacher1.id, 
    ambassador_id: ambassador1.id}
)




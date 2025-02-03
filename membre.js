function skillsMember() {
  var member = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node', 'MongoDB', 'Express']
  }
  console.log(member.firstName + ' ' + member.lastName + ' is ' + member.age + ' years old and knows ' + member.skills.join(', '))
}
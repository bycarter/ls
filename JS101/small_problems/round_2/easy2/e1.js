let nameArr = ['Sandy', 'Butts'];
let jobInfo = {
  title: 'Boss',
  occupation: 'Dude'
}

function greet(name, job) {
  console.log(`Hello ${name[0]} ${name[1]}! Nice to have the ${job.title} ${job.occupation} here today!`);
}

greet(nameArr, jobInfo);

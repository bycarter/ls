let greet = local => {
  let lang = ['en', 'fr', 'pt'];
  let greeting = ['Hi!', 'Salut!', 'Olá!']
  let loc = local.slice(0, 2);

  for (let i in lang) {
    if (lang[i] === loc) {
      console.log(greeting[i]);
    }
  }
}

greet('fr_FR.UTF-8');

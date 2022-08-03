let greet = lc => {
  let lang = ['en', 'fr', 'pt'];
  let greeting = ['Hi!', 'Salut!', 'Olá!']

  for (let i in lang) {
    if (lang[i] === lc) {
      console.log(greeting[i]);
    }
  }
}

greet('fr');

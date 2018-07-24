var hello = {
  en: 'hello',
  ko: '안녕'
}

var exampleModule = {
  print({ name = 'world', locale = 'en' }) {
    console.log(`${hello[locale]}, ${name}!`)
  }
}

module.exports = exampleModule;
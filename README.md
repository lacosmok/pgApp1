Utworzyłem 4 branche w ktorych są kolejne etapy aplikacji:

Zrobione na spotkaniu 1:
1) emptyProject - pusty czysty postawiony projekt. Tu proszę się upewnić czy wersje bibliotek w bower.json oraz package.json są odpowiednich lub wyższych wersjach. Szczególnie ember i ember-data.

2) firstForm - podstawowy formularz, czyli route/add.js oraz template/add.hbs oraz odpowiedni wpis w routes.js

Będziemy robić na spotkaniu 2:
3) list - utworzona lista obiektow ktore zostały wyslane do bazy. Zainstalowany bootstrap, ktory pomoże układać elementy

4) delEdit - formularz edycji oraz akcja usowania obiektow


# Zadanie domowe
1) Utworzyć swój pełny model danych z potrzebnymi polami. Dodać te pola w formularzu dodawani. Sprawdzić czy wszystkie dane dodają się do firebase.com

2) Można sformatować formularz aby był bardziej czytelny ( zabawa z HTML i CSS )



# App1 - instrukcja stawiania projektu

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# Contrats de développement agiles français

## Introduction

Ce dépôt est une première version de mes contrats rédigés avec mon avocat.

Pour l'instant, ce sont des contrats qui fonctionnent plutôt bien avec
mes clients actuels. Ces contrats sont bien adaptés pour le travail à l'heure
avec des clients, en tant que freelance.

N'hésitez pas à me faire des retours (soit par pull request, soit par DM)

En espérant vous avoir été utile !

## Utilisation

**Les CGV (conditions générales de vente)** sont la base de tout contrat.

Elles permettent d'avoir une base de contrat avec un client et couvrent la
plupart des problèmes basiques d'une prestation de développement web.

**Les CP (conditions particulières)** sont la partie variable du contrat.

Ce sont elles qui vont définir plus précisément les quelques points spécifiques
à un client. Elles sont customisables à souhait !

**Les CGA (conditions générales d'achat)** sont la base d'un contrat où les rôles sont inversés, dans le cas où vous jouez celui de sous-traitant.

Elles permettent d'avoir une base de contrat avec un prestataire. Elles assurent notamment la session complète des droits d'auteurs à votre nom. 

## Warning

Attention, ces contrats, bien que validés avec un avocat ne sont pas paroles
d'évangile.

Je conseille à quiconque qui utilise ces contrats de bien les lire, et
potentiellement de les faire valider / refactor par un avocat si vous
pensez qu'ils ne sont pas adaptées à vos besoins.


## Crédits

L'avocat avec qui nous avons travaillé (avec [@urbanpierre](http://twitter.com/urbanpierre) ) pour rédiger ces contrats est Étienne
Deshoulières, un excellent avocat qui connait très bien son métier.
Si vous avez besoin d'un bon avocat sur Paris n'hésitez pas à le contacter
[http://www.deshoulieres-avocat.com](http://www.deshoulieres-avocat.com)

you should follow me on twitter : [@tibastral](http://twitter.com/tibastral)

Si vous cherchez un moyen d'utiliser ces contrats avec vos clients (travail à l'heure), j'ai créé un service [freelancebooking.pro](http://freelancebooking.pro/), exprès pour ça :)


----

## Usage automatisé

**Pour générer un contrat**, vous devez d'abord:

* définir vos informations personnelles dans `config.json` (`config.sample.json` est dispo en exemple).

Puis 2 possibilités:
* Vous utilisez ruby (non compactible windows à cause d'une des librairies): installer les dépendances ruby/bundler: `bundle`, puis générer les contrats en faisant `rake`
* Vous utilisez node.js: installer les dépendances node: `npm i`, puis générer les contrats en faisant `npm run build` 

**Notes sur la version node.js**
Si vous voulez modifier la 'css' des contrat générés en pdf, vous pouvez via le fichier md-style.css. Et pour tester/ajuster le rendu vous devez passer par le fichier html intermédiaire, que vous trouverez dans le dossier contracts en lancant `npm run debug`;
Et si vous voulez modifier d'autres options comme les marges, le header ou le footer, modifiez la config utilisée par la librairie [mdpdf](https://github.com/BlueHatbRit/mdpdf) dans `generateContracts.js`.

## License

License MIT

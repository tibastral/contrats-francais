# Contrats de développement agiles français

## Introduction

Ce repo est une première release de mes contrats rédigés avec mon avocat.

Pour l'instant, ce sont des contrats qui fonctionnent plutôt bien avec
mon client actuel.

N'hésitez pas à me faire des retours (soit pas pull request, soit par DM)

En espérant vous avoir été utile !

## Utilisation

Les CGV (conditions générales de vente) sont la base de tout contrat.

Elles permettent d'avoir une base de contrat avec un client et couvrent la
plupart des problèmes basiques d'une prestation de développement web.

Les CP (conditions particulières) sont la partie variable du contrat.

Ce sont elles qui vont définir plus précisément les quelques points spécifiques
à un client. Elles sont customisasbles à souhait !

## Warning

Attention, ces contrats, bien que validés avec un avocat ne sont pas paroles
d'évangile.

Je conseille à quiconque qui utilise ces contrats de bien les lire, et
potentiellement de les faire valider / refactor par un avocat si vous
pensez qu'ils ne sont pas adaptées à vos besoins.


## Crédits

L'avocat avec qui j'ai travaillé pour rédiger ces contrats est Étienne
Deshoulières, un excellent avocat qui connait très bien son métier.
Si vous avez besoin d'un bon avocat sur Paris n'hésitez pas à le contacter
[http://www.deshoulieres-avocat.com](http://www.deshoulieres-avocat.com)

you should follow me on twitter : [@tibastral](http://twitter.com/tibastral)

----

## Usage automatisé

**Pour générer un contrat**, vous devez d'abord:

* installer les dépendances node/npm: `npm i`
* définir vos informations personnelles dans `config.json` (`config.sample.json` est dispo en exemple).

Une fois ceci fait, vous pouvez pour chaque contrat/client créer les fichiers suivants:

* `clients/{{client}}.json`: Pour définir les informations propres à chaque client
* `contracts/YYYY-MM-DD-contrat-{{client}}.json`: Informations spécifiques à au contrat
* `contracts/YYYY-MM-DD-contrat-{{client}}-cp.md`: Pour réécrire complètement les conditions particulières
* `contracts/YYYY-MM-DD-contrat-{{client}}-cp-addons.md`: Pour simplement insérer des ajouts dans les conditions particulières

Une fois les différents fichiers créés (facultatif), vous pouvez simplement jouer
la commande suivante (en remplaçant `{{client}}` par votre clé client):


    npm run create --client={{client}}

Votre contrat sera créer dans `contracts/YYYY-MM-DD-contrat-{{client}}.pdf`

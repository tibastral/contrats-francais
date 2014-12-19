# Introduction

Ce document est une référence sur l'écriture de stories.

Il permet de bien se mettre d'accord sur ce qu'est une story, et permet de bien
comprendre comment les écrire.

# Une histoire utilisateur

## Écrire une histoire utilisateur

Définition:

une histoire utilisateur est une suite d'actions effectuées par un utilisateur
de notre application suivies d'une ou plusieurs assertions (test) validant que
notre histoire s'est bien déroulée.

Pour expliquer en langage courant, une histoire ressemble à un problème de mathématiques dans lequel on a :

* des hypothèses
* un élément perturbateur
* quelque chose à démontrer

exemple de problème mathématique (version collège) :

    Soit 2 personnes (Pierre et Jean)
    et Pierre possède 3 bananes
    et Jean possède 2 fois plus de bananes que pierre
    quand Jean mange une banane
    alors combien de bananes possède Jean ?


transformons cet exemple de manière mathématique (version prépa, merci M. Bool) :

    Soit 2 personnes (Pierre et Jean)
    et Pierre possède 3 bananes
    et Jean possède 2 fois plus de bananes que pierre
    quand Jean mange une banane
    alors prouvons que Jean possède 5 bananes.

Si maintenant nous voulons écrire une histoire utilisateur validée par notre système, nous écrirons :

    Soit 2 personnes (Pierre et Jean)
    et Pierre possède 3 bananes
    et Jean possède 2 fois plus de bananes que pierre
    quand Jean mange une banane
    alors Jean devrait posséder 5 bananes.

C'est ce qu'on appelle un test : Jean _devrait_ posséder 5 bananes.
Si nous écrivons des tests, c'est parce que notre système *doit* se comporter comme tel.
Ça nous permet de valider que notre application réagit bien
TOUJOURS de la même manière, même après de nombreux mois / années (donc après de nombreuses modifications).

Le rôle du client est alors

* D'écrire les histoires utilisateurs de la façon la plus explicite possible pour qu'elles soient compréhensibles par un développeur.
* D'être certain de la valeur ajoutée de telle ou telle histoire

Le rôle du développeur est :

* De bien comprendre l'utilité de cette histoire utilisateur (le pourquoi)
* De mettre en place le système qui va rendre possible l'exécution de cette histoire (le comment)
* De s'assurer que quelles que soient les modifications futures, cette histoire soit TOUJOURS réalisable (le test)
* D'être sûr de bien comprendre les hypothèses (le contexte)

Pour le développement, le plus simple est d'utiliser gherkin pour la syntaxe des stories (https://github.com/cucumber/cucumber/wiki)

## Première étape : savoir de quoi on parle

* Le "In order to" est la valeur ajoutée de ce qu'on va coder
* C'est la partie essentielle du travail, c'est là qu'on va savoir si une fonctionnalité a bien de la valeur

## Loi des 5 pourquoi (issue de l'industrie automobile)

Poser la question pourquoi récursivement 5 fois (au maximum) jusqu'à avoir une des réponses suivantes :

* Protéger les recettes
* Augmenter les recettes
* Diminuer les coûts
* Augmenter la valeur de la marque
* Faire du produit un produit remarquable
* Apporter plus de valeur aux clients

## Ensuite, on commence à réfléchir à un scénario avec les Soit, Quand, Alors (Given When Then)

* état initial
* introduction d'une perturbation au système
* assertion : vérification que le système est dans un état définit

# Exemple d'histoire utilisateurs : on se propose de gérer un chenil (des chiens, des naissances, etc.)

    @@@ cucumber
    Feature: handle a kenel
      In order to handle our kenel
      As a dog trainer
      I want to be able to relate born dogs

## Application de gestion de chenil

* état initial : soit un chenil habité par 2 chiens 1 mâle et 1 femelle
* perturbation du système : les 2 chiens copulent et ont un petit
* assertion : le chenil devrait avoir 3 habitants


## En cucumber on va écrire ça de la façon suivante :

    @@@ cucumber
    Scenario:
      Given 1 dog and 1 bitch in a kennel
      When the 2 dogs have a child
      Then the kennel should have 3 inhabitants

## Ces scénarios n'ayant pas grand chose à voir avec quelque chose de monétisable, nous n'allons donc pas les coder.

En effet, nous ne sommes pas une communauté de dresseurs, et nous gagnerions
plus à travailler sur un projet qui pourrait nous être utile...


## Passons donc à un VRAI problème que nous avons dans notre communauté ruby parisienne

# Exemple "vie réelle" : un espace permettant de proposer des conférences pour les évènements ruby !


## Soit 2 personnes (dont une morale)

1. product owner => Thibaut Assus
2. developer => Milesrock


## Méthode de travail avec cucumber et pivotal (1/2)

1. le product owner propose une user story au développeur
2. le développeur lui demande quelle est la valeur ajoutée de cette fonctionnalité
3. ils se mettent d'accord sur la valeur ajoutée
4. le product owner poste la user story dans pivotal tracker
5. le développeur estime (0, 1, 2 ou 3 points)
6. il débute le développement (et clique sur start)
7. il finit le développement (et clique sur finish)
8. il livre la story sur la plateforme de recette (et clique sur deliver)
9. le product owner refuse tant de fois qu'il veut la story (tant qu'elle ne satisfait pas ses requirements), MAIS doit donner une raison à chaque fois
11. le développeur peut alors cliquer sur restart, finish, deliver pour refaire un cycle de travail
12. quand tout est ok, le product owner clique sur accept
13. la story est finie et peut être incluse dans la prochaine release.


## Méthode de travail associée à cucumber passe par 3 étapes de développement : Red, Green et Refactor

* Quand on lance notre premier test, on commence par avoir du jaune, le jaune
  correspond à des étapes non définies
* On va coder ce à quoi correspondent ces étapes

### Red

* On relance notre test, et on a alors le test qui échoue (rouge). C'est normal, on n'a rien codé pour le moment.

### Green

* On code juste assez pour faire passer ce test. On ne fait pas d'optimisation de
code. On se concentre vraiment sur le fait de faire passer le test. Quand on
relance le test, celui-ci passe (il est alors vert)

### Refactor

On factorise le code pour supprimer la duplication, et on essaye le plus
possible d'avoir du code lisible, propre et réutilisable.

## On peut alors passer à la feature suivante.

Le résultat de ce travail a servi à créer un projet actuellement utilisé en production :
[http://www.rubyparis.org](http://www.rubyparis.org)


# Ressources

* Rspec, cucumber book : [http://pragprog.com/book/achbd/the-rspec-book](http://pragprog.com/book/achbd/the-rspec-book)
* Le wiki du github de cucumber [https://github.com/cucumber/cucumber/wiki](https://github.com/cucumber/cucumber/wiki)
* [http://cukes.info](http://cukes.info)

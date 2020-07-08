# Projet fin d'année: Agora

## Disclaimer

**Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun cas exploité à des fins commerciales et ne sera pas publié**

## Le site

https://hetic-agora.netlify.app/

## Choix technologiques

[L'argumentaire des choix technologiques front](./rendu/choix-technologiques.pdf) se trouve dans le dossier "rendu" du projet.

## L'équipe

- Kento Monthubert
- Virgil Limongi
- Tristan Lemire
- Virgil Caffier
- Emilie Tombuyses

## Comment installer le projet ?

installer le projet:  
`npm install`

créer un ficher .env avec les variables suivantes : 

```
REACT_APP_LOCAL_API=http://127.0.0.1:8000
REACT_APP_API=https://agora-api-hetic.herokuapp.com 
```

[installer l'api](https://github.com/kentoje/agora-api) pour faire tourner le projet en local OU changer le .env avec les variables suivantes:

```
REACT_APP_LOCAL_API=https://agora-api-hetic.herokuapp.com 
REACT_APP_API=https://agora-api-hetic.herokuapp.com 
```

démarrer le projet:  
`npm run start`

## Comment se connecter à un compte de test ?

pour avoir une vision d'un utilisateur ayant déjà des données, voici deux comptes de test :

```
mail: aymeric.mayeux@hetic.net
mdp: azerty
```

```
mail: bastien.calou@hetic.net
mdp: azerty

```

## prettier

to format all files run:

`prettier --write .`

change formatting options in prettier.config.js

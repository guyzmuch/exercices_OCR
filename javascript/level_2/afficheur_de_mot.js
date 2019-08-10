/*
Créer une fonction à laquelle nous passont 1 mot.

La fonction vas afficher le mot 10 fois.

L'affichage à une taille maximum de 100 caractères et chaques lettres vas avoir une plage pour s'affiché au hazard.

En exemple pour le mot "test" ou chaque letre à une plage de 4 espaces (les underscores doivent être considérer comme des espaces blanc)
t___e___s___t___  // Toutes les lettres sont au début de leur plage
___t___e___s___t  // Toutes les lettres sont à la fin de leur plage

// Mais dans le programme, la position de la lettre sera au hazard dans la plage, et cela donnera (pour une plage de 4)

__t_e______s__t_
_t____e_s____t__
__t_e______s__t_
.....



La plage d'un charactère est calculer en suivant la taille du mots, et la taille maximum (aroundis en dessous).
Comme la taille maximum est de 100 :
- si la phrase fait 25 lettres chaque plage fera 4 espaces
- si la phrase fait 40 lettre, comme 100 / 40 = 2,5 chaque plage fera 2


Une plage ne peut pas faire plus de 5 céréctère, donc pour un mot de 4 lettres, la plagesera de 5


*/



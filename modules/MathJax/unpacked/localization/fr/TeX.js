/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/localization/fr/TeX.js
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Localization.addTranslation("fr","TeX",{
        version: "2.3",
        isLoaded: true,
        strings: {
          ExtraOpenMissingClose: "Accolade ouvrante manquante ou accolade fermante non attendue",
          ExtraCloseMissingOpen: "Accolade fermante non attendue ou accolade ouvrante manquante",
          MissingLeftExtraRight: "Commande \\left manquante ou commande \\right non attendue",
          MissingScript: "Argument en exposant ou en indice manquant",
          ExtraLeftMissingRight: "Commande \\left inattendue ou commande \\right manquante",
          Misplaced: "Mauvaise position pour la commande %1",
          MissingOpenForSub: "Accolade ouvrante manquante pour le script en indice",
          MissingOpenForSup: "Accolade ouvrante manquante pour le script en exposant",
          AmbiguousUseOf: "Usage ambigu de la commande %1",
          EnvBadEnd: "\\begin{%1} s'est termin\u00E9 par un \\end{%2}",
          EnvMissingEnd: "\\end{%1} manquant",
          MissingBoxFor: "Boite manquante pour la commande %1",
          MissingCloseBrace: "Accolade fermante manquante",
          UndefinedControlSequence: "Commande %1 non d\u00E9finie",
          IllegalControlSequenceName: "Nom de contr\u00F4le de s\u00E9quence non autoris\u00E9 pour la commande %1",
          IllegalParamNumber: "Nombre de param\u00E8tres incorrect pour la commande %1",
          DoubleExponent: "Double exposant: utilisez des accolades pour clarifier",
          DoubleSubscripts: "Double indice: utilisez des accolades pour clarifier",
          DoubleExponentPrime: "Un prime entraine un double exposant: utilisez des accolades pour clarifier",
          CantUseHash1: "Vous ne pouvez pas utilisez le caract\u00E8re #, indiquant un param\u00E8tre de macro, dans le mode math\u00E9matique",
          CantUseHash2: "Usage du caract\u00E8re # non autoris\u00E9 dans le mod\u00E8le pour la s\u00E9quence de contr\u00F4le %1",
          MisplacedMiddle: "La commande %1 doit \u00EAtre plac\u00E9e \u00E0 l'int\u00E9rieur d'une section \\left ... \\right",
          MisplacedLimits: "La commande %1 n'est autoris\u00E9e que sur les op\u00E9rateurs",
          MisplacedMoveRoot: "La commande %1 n'est autoris\u00E9e qu'\u00E0 l'int\u00E9rieur d'une racine",
          MultipleCommand: "Usage multiple de la commande %1",
          IntegerArg: "L'argument de la commande %1 doit \u00EAtre un entier",
          PositiveIntegerArg: "L'argument de la commande %1 doit \u00EAtre un entier strictement positif",
          NotMathMLToken: "L'\u00E9l\u00E9ment %1 n'est pas un \u00E9l\u00E9ment MathML \u00E9l\u00E9mentaire",
          InvalidMathMLAttr: "Attribut MathML non valide: %1",
          UnknownAttrForElement: "Attribut %1 inconnu pour l'\u00E9l\u00E9ment %2",
          MaxMacroSub1: "Le nombre maximal de substitution de macro autoris\u00E9 par MathJax a \u00E9t\u00E9 d\u00E9pass\u00E9. Il y a t'il un appel de macro r\u00E9cursif?",
          MaxMacroSub2: "Le nombre maximal de substitution de macro autoris\u00E9 par MathJax a \u00E9t\u00E9 d\u00E9pass\u00E9. Il y a t'il un environnement LaTeX r\u00E9cursif?",
          MissingArgFor: "Argument manquant pour la commande %1",
          ExtraAlignTab: "Caract\u00E8re d'alignement '&' non attendue pour le texte de la commande \\cases",
          BracketMustBeDimension: "L'argument entre crochets de la commande %1 doit \u00EAtre une dimension",
          InvalidEnv: "Nom d'environnement '%1' non valide",
          UnknownEnv: "Environnement '%1' inconnu",
          ExtraCloseLooking: "Accolade fermante non attendue lors de la recherche de %1",
          MissingCloseBracket: "Impossible de trouver le crochet fermant pour l'argument de la commande %1",
          MissingOrUnrecognizedDelim: "D\u00E9limiteur manquant ou non reconnu pour la commande %1",
          MissingDimOrUnits: "Dimension ou unit\u00E9 manquante pour la commande %1",
          TokenNotFoundForCommand: "Impossible de trouver la commande %1 pour la commande %2",
          MathNotTerminated: "Expression math\u00E9matique non termin\u00E9e \u00E0 l'int\u00E9rieur de cette boite de texte",
          IllegalMacroParam: "Param\u00E8tre de r\u00E9f\u00E9rence de macro non autoris\u00E9",
          MaxBufferSize: "Taille maximale du tampon interne de MathJax d\u00E9pass\u00E9e. Il y a t'il un appel de macro r\u00E9cursif?",
          CommandNotAllowedInEnv: "La commande %1 n'est pas autoris\u00E9 \u00E0 l'int\u00E9rieur de l'environnement %2",
          MultipleLabel: "\u00C9tiquette '%1' d\u00E9j\u00E0 d\u00E9finie",
          CommandAtTheBeginingOfLine: "La commande %1 doit \u00EAtre plac\u00E9e en d\u00E9but de ligne",
          IllegalAlign: "Alignement non autoris\u00E9 pour la commande %1",
          BadMathStyleFor: "Style math\u00E9matique non valide pour la commande %1",
          ErroneousNestingEq: "Emboitement incorrect des structures d'\u00E9quation",
          MultlineRowsOneCol: "L'environnement multline doit avoir exactement une colonne",
          NoClosingDelim: "Impossible de trouver le d\u00E9limiteur fermant pour la commande %1",
          NoClosingChar: "Impossible de trouver le d\u00E9limiteur '%1' fermant",
          MultipleBBoxProperty: "La propri\u00E9t\u00E9 %1 de la commande %2 est sp\u00E9cifi\u00E9e deux fois",
          InvalidBBoxProperty: "La valeur '%1' ne semble pas \u00EAtre une couleur, une dimension de marge int\u00E9rieur ou un style.",
          ExtraEndMissingBegin: "Commande %1 non attendue ou commande \\begingroup manquante",
          GlobalNotFollowedBy: "Commande %1 non suivie d'une commande \\let, \\def ou \\newcommand",
          NewextarrowArg1: "Le premier argument de la commande %1 doit \u00EAtre le nom d'une s\u00E9quence de contr\u00F4le",
          NewextarrowArg2: "Le second argument de la commande %1 doit \u00EAtre deux entiers s\u00E9par\u00E9s par une virgule",
          NewextarrowArg3: "Le troisi\u00E8me argument de la commande %1 doit \u00EAtre la valeur d'un caract\u00E8re unicode",
          UndefinedColorModel: "Le mod\u00E8le de couleur '%1' n'est pas d\u00E9fini",
          ModelArg1: "Les valeurs de couleurs pour le mod\u00E8le %1 n\u00E9cessitent 3 nombres",
          InvalidDecimalNumber: "Nombre d\u00E9cimal non valide",
          ModelArg2: "Les valeurs de couleurs pour le mod\u00E8le %1 doivent \u00EAtre comprises entre %2 et %3",
          InvalidNumber: "Nombre non valide",
          MissingCS: "%1 doit \u00EAtre suivi d'une s\u00E9quence de contr\u00F4le",
          SequentialParam: "Les param\u00E8tres de la s\u00E9quence de contr\u00F4le %1 doivent \u00EAtre \u00E9num\u00E9r\u00E9s de fa\u00E7on s\u00E9quentielle",
          MissingReplacementString: "Chaine de caract\u00E8re de remplacement manquante pour la d\u00E9finition %1",
          MismatchUseDef: "L'utilisation de la commande %1 ne correspond pas \u00E0 sa d\u00E9finition",
          RunawayArgument: "Argument non termin\u00E9 pour la commande %1?"
        }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/fr/TeX.js");
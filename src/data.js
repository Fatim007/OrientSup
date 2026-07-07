 
/**
 * data.js
 * -----------------------------------------------------------
 * Source unique de données pour toute la plateforme.
 * Chaque domaine référence une variable CSS de couleur (définie
 * dans variable.css) et contient la liste de ses filières.
 *
 * -> Pour ajouter une filière : copie un objet existant dans le
 *    tableau "filieres" du domaine concerné et modifie les champs.
 * -> Pour ajouter un domaine : copie un objet du tableau
 *    DOMAINES et donne-lui un "id" unique (utilisé dans l'URL).
 * -----------------------------------------------------------
 */
 
const DOMAINES = [
  {
    id: "sciences-tech",
    nom: "Sciences et technologies",
    description: "Informatique, ingénierie, mathématiques et sciences appliquées.",
    icone: "fa-solid fa-computer",
    couleurVar: "--informatique",
    filieres: [
      {
        id: "genie-logiciel",
        nom: "Génie Logiciel",
        resume: "Conception et développement de systèmes logiciels complexes.",
        duree: "3 ans (Licence) ou 5 ans (Master)",
        niveau: "Licence / Master",
        apercu:
          "La filière Génie Logiciel forme des ingénieurs capables de concevoir, développer et maintenir des applications et systèmes informatiques à grande échelle, en suivant les meilleures pratiques du génie logiciel.",
        debouches: [
          "Développeur full-stack",
          "Ingénieur logiciel",
          "Architecte de systèmes",
          "Chef de projet technique",
        ],
        competences: [
          "Programmation orientée objet",
          "Architecture logicielle",
          "Méthodes agiles (Scrum, Kanban)",
          "Bases de données et systèmes distribués",
        ],
        admission: {
          conditions: [
            "Baccalauréat scientifique ou technique",
            "Dossier scolaire (moyenne générale)",
            "Entretien de motivation",
          ],
          filieresBac: ["Bac D", "Bac C", "Bac technologique", "Bac litteraire conditionné"],
        },
        etablissements: [
          { nom: "École Supérieure de Science de Gestion et d'Informatique (ESGI)", ville: "Libreville, Cité Damas", note: "Scolarité adaptéé au Gabonais Economiquement faible"  },
          { nom: "Institut Africaine d'Informatique (IAI)", ville: "Libreville, Carrefour IAI", note: 4.4 },
        ],
      },

      {
        id: "genie-civil",
        nom: "Génie Civil",
        resume: "Concevez et réalisez les infrastructures qui façonnent les villes et soutiennent le developpement économique",
        duree: "3 ans (Licence) ou 5 ans (Master)",
        niveau: "Licence / Master",
        apercu:
          "Le Génie Civil forme des professionnels capables de concevoir, construire et entretenir les infrastructures essentielles, comme les routes, les ponts et bâtiments.",
        debouches: [
          "Ingénieur Génie Civil",
          "Conducteur de travaux",
          "Chef de chantier",
          "Bureau d'Etude",
        ],
        competences: [
          "Administration des réseau informatique",
          "Configuration des équipement réseau ",
          "Maintenance des sytemes de communication",
          "sécurité Réseau",
        ],
        admission: {
          conditions: [
            "Baccalauréat scientifique ou technique",
            "Dossier scolaire (moyenne générale)",
            "Entretien de motivation",
          ],
          filieresBac: ["Bac D", "Bac C", "Bac technologique"],
        },
        etablissements: [
          
          { nom: "Université Polytechnique de Masuku (USTM)", ville: "Franceville", note: 4.4 },
        ],
      },
         {
        id: "reseau-telecom",
        nom: "Réseau et Télécomunication",
        resume: "Participer à la conception et à la gestion des réseaux qui permettent de communiquer et d'accéder à internet partout dans le monde.",
        duree: "2ans (DUT), 3 ans (Licence) ou 5 ans (Master)",
        niveau: "DUT/ Licence / Master",
        apercu:
          "La filière Réseau et Télécommunication forme des professionnels capables d'installer, configurer et gérer les réseaux informatique ainsi que les systèmes de communication. Elle permet d'assurer la transmission fiable des odnnées, de la voix et d'internet, indispensable aux entreprises et aux particuliers",
        debouches: [
          "Administrateur Réseau",
          "Technicien Télécommunications",
          "Ingénieur Réseau",
          "Architecte Réseau",
        ],
        competences: [
          "Administration des réseau informatique",
          "Configuration des équipement réseau ",
          "Maintenance des sytemes de communication",
          "sécurité Réseau",
        ],
        admission: {
          conditions: [
            "Baccalauréat scientifique ou technique",
            "Dossier scolaire (moyenne générale)",
            "Entretien de motivation",
          ],
          filieresBac: ["Bac D", "Bac C", "Bac technologique", "Bac litteraire conditionné"],
        },
        etablissements: [
          { nom: "École Supérieure de Science de Gestion et d'Informatique (ESGI)", ville: "Libreville, Cité Damas", note: "Scolarité adaptéé au Gabonais Economiquement faible"  },
          { nom: "Université Polytechnique de Masuku (USTM)", ville: "Franceville", note: 4.4 },
        ],
      },

       {
        id: "genie-electrique",
        nom: "Génie Electrique",
        resume: "Développez les compétences nécessaires pour produire, distribuer et gérer l'énergie qui alimente notre monde.",
        duree: "3 ans (Licence) ou 5 ans (Master)",
        niveau: "Licence / Master",
        apercu:
          "Le Génie Electrique forme des spécialistes de la conception, de l'installation et de la maintenance des systèmes électriques utilisés dans les bâtiments, les industries et les réseaux d'énergie",
        debouches: [
          "Ingénieur Electricien",
          "Technicien electrique",
          "Chargé d'exploitation électrique",
          "Consultatnt en énergie",
        ],
        competences: [
          "Installation électrique",
          "Electrotechnique",
          "Maintenance des équipements électrique",
          "Energie renouvelable",
        ],
        admission: {
          conditions: [
            "Baccalauréat scientifique ou technique",
            "Dossier scolaire (moyenne générale)",
            "Entretien de motivation",
          ],
          filieresBac: ["Bac D", "Bac C", "Bac technologique"],
        },
        etablissements: [
          
          { nom: "Université Polytechnique de Masuku (USTM)", ville: "Franceville", note: 4.4 },
        ],
      },
    //  ajout des filières plus tard
    ],
    etablissementsExcellence: [
      { nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.7 },
      { nom: "Institut Africaine d'Informatique", ville: "Libreville", note: 4.4 },
    ],
  },

  
 
  {
    id: "sante",
    nom: "Sciences de la Santé",
    description: "Médecine, pharmacie, soins infirmiers et santé publique.",
    icone: "fa-solid fa-stethoscope",
    couleurVar: "--sante",
    filieres: [
      {
        id: "medecine-generale",
        nom: "Médecine Générale",
        resume: "Formation complète au diagnostic et à la prise en charge des patients.",
        duree: "7 ans",
        niveau: "Doctorat",
        apercu:
          "Le cursus de Médecine Générale prépare les étudiants à exercer en tant que médecins généralistes, avec une formation théorique approfondie complétée par des stages hospitaliers dès la 3e année.",
        debouches: ["Médecin généraliste", "Médecin urgentiste", "Chercheur en santé publique"],
        competences: [
          "Diagnostic clinique",
          "Relation patient-soignant",
          "Pharmacologie",
          "Gestes d'urgence",
        ],
        admission: {
          conditions: ["Baccalauréat scientifique", "Concours d'entrée national", "Analyse des dossiers"],
          filieresBac: ["Bac D de préférence", "Bac C"],
        },
        etablissements: [
          { nom: "Unisersité des Sciences de la Santé", ville: "Libreville, Owendo", note: 4.6 },
        ],
      },
    ],
    etablissementsExcellence: [{ nom: "Université des Sciences de la Santé", ville: "Libreville", note: 4.6 }],
  },
 
  {
    id: "droit",
    nom: "Droit et Sciences Politiques",
    description: "Droit privé, droit public, sciences politiques et relations internationales.",
    icone: "fa-solid fa-scale-balanced",
    couleurVar: "--droit",
    filieres: [
      {
        id: "droit-prive",
        nom: "Droit Privé",
        resume: "Étude des relations juridiques entre particuliers et entreprises.",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière Droit Privé couvre le droit civil, commercial et du travail, et prépare aux métiers du conseil juridique, du notariat et de la magistrature.",
        debouches: ["Avocat", "Notaire", "Juriste d'entreprise", "Magistrat"],
        competences: ["Analyse juridique", "Rédaction d'actes", "Argumentation", "Négociation"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Lettres", "Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "Faculté de Droit d'Alger", ville: "Alger", note: 4.3 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Faculté de Droit d'Alger", ville: "Alger", note: 4.3 }],
  },
 
  {
    id: "economie",
    nom: "Sciences économiques",
    description: "Économie, gestion, comptabilité, finance et commerce.",
    icone: "fa-solid fa-building-columns",
    couleurVar: "--gestion",
    filieres: [
      {
        id: "comptabilite",
        nom: "Comptabilité",
        resume: "Gestion financière, fiscalité et audit des organisations.",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière Comptabilité forme des professionnels capables de tenir, contrôler et analyser les comptes d'une organisation, dans le respect des normes comptables et fiscales.",
        debouches: ["Comptable", "Contrôleur de gestion", "Auditeur financier", "Expert-comptable"],
        competences: ["Comptabilité générale", "Fiscalité", "Audit", "Analyse financière"],
        admission: {
          conditions: ["Baccalauréat, série économique de préférence", "Dossier scolaire"],
          filieresBac: ["Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "École Supérieure de Commerce", ville: "Alger", note: 4.5 }],
      },
      // Logistique et Transport, Audit... à compléter
    ],
    etablissementsExcellence: [{ nom: "École Supérieure de Commerce", ville: "Alger", note: 4.5 }],
  },
 
  {
    id: "lettres",
    nom: "Lettres, Langues et Arts",
    description: "Littérature, langues étrangères, traduction et arts appliqués.",
    icone: "fa-solid fa-palette",
    couleurVar: "--lettres",
    filieres: [
      {
        id: "traduction",
        nom: "Traduction et Interprétation",
        resume: "Maîtrise de plusieurs langues appliquée à la traduction professionnelle.",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "Cette filière forme des traducteurs et interprètes polyvalents, capables de travailler dans les domaines juridique, technique, littéraire ou audiovisuel.",
        debouches: ["Traducteur", "Interprète de conférence", "Rédacteur multilingue"],
        competences: ["Traduction spécialisée", "Interprétation simultanée", "Rédaction", "Culture générale"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Test de langues"],
          filieresBac: ["Lettres et Langues Étrangères"],
        },
        etablissements: [{ nom: "École Supérieure de Traduction", ville: "Alger", note: 4.4 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.4 }],
  },
 
  {
    id: "sciences-humaines",
    nom: "Sciences Humaines",
    description: "Psychologie, sociologie, histoire et sciences de la communication.",
    icone: "fa-solid fa-brain",
    couleurVar: "--sciences-humaines",
    filieres: [
      {
        id: "psychologie",
        nom: "Psychologie",
        resume: "Étude du comportement humain et accompagnement psychologique.",
        duree: "3 ans (Licence) + spécialisation",
        niveau: "Licence / Master",
        apercu:
          "La filière Psychologie explore les mécanismes cognitifs, émotionnels et comportementaux humains, avec des spécialisations possibles en clinique, travail ou éducation.",
        debouches: ["Psychologue clinicien", "Psychologue du travail", "Chercheur en psychologie"],
        competences: ["Écoute active", "Analyse comportementale", "Méthodologie de recherche", "Entretien clinique"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Lettres", "Sciences de la Vie et de la Terre"],
        },
        etablissements: [{ nom: "Faculté des Sciences Humaines d'Alger", ville: "Alger", note: 4.2 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Faculté des Sciences Humaines d'Alger", ville: "Alger", note: 4.2 }],
  },
 
  {
    id: "education",
    nom: "Éducation et formation",
    description: "Enseignement, pédagogie et formation professionnelle.",
    icone: "fa-solid fa-chalkboard-user",
    couleurVar: "--education",
    filieres: [
      {
        id: "enseignement-primaire",
        nom: "Enseignement Primaire",
        resume: "Formation des futurs enseignants du cycle primaire.",
        duree: "3 ans (Licence)",
        niveau: "Licence",
        apercu:
          "Cette filière prépare aux métiers de l'enseignement au primaire, en combinant savoirs disciplinaires, pédagogie et stages pratiques en école.",
        debouches: ["Enseignant du primaire", "Conseiller pédagogique", "Concepteur de contenus éducatifs"],
        competences: ["Pédagogie active", "Gestion de classe", "Didactique", "Évaluation des apprentissages"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Entretien de motivation"],
          filieresBac: ["Toutes séries"],
        },
        etablissements: [{ nom: "École Normale Supérieure", ville: "Alger", note: 4.3 }],
      },
    ],
    etablissementsExcellence: [{ nom: "École Normale Supérieure", ville: "Alger", note: 4.3 }],
  },
 
  {
    id: "agronomie",
    nom: "Agronomie et Environnement",
    description: "Agriculture, sciences environnementales et développement durable.",
    icone: "fa-solid fa-leaf",
    couleurVar: "--agronomie",
    filieres: [
      {
        id: "agronomie-generale",
        nom: "Agronomie Générale",
        resume: "Production agricole durable et gestion des ressources naturelles.",
        duree: "3 ans (Licence) ou 5 ans (Ingéniorat)",
        niveau: "Licence / Ingéniorat",
        apercu:
          "La filière Agronomie forme des ingénieurs capables d'optimiser les systèmes de production agricole tout en préservant les ressources naturelles et l'environnement.",
        debouches: ["Ingénieur agronome", "Conseiller agricole", "Chargé d'études environnementales"],
        competences: ["Agronomie appliquée", "Gestion des sols", "Agroécologie", "Analyse environnementale"],
        admission: {
          conditions: ["Baccalauréat scientifique", "Dossier scolaire"],
          filieresBac: ["Sciences de la Vie et de la Terre", "Sciences Physiques"],
        },
        etablissements: [{ nom: "École Nationale Supérieure Agronomique", ville: "Alger", note: 4.5 }],
      },
    ],
    etablissementsExcellence: [{ nom: "École Nationale Supérieure Agronomique", ville: "Alger", note: 4.5 }],
  },
];
 
// Accès pratique par id, utilisé dans domaines.js et filieres.js
function getDomaineById(id) {
  return DOMAINES.find((d) => d.id === id) || null;
}
 
function getFiliereById(domaineId, filiereId) {
  const domaine = getDomaineById(domaineId);
  if (!domaine) return null;
  return domaine.filieres.find((f) => f.id === filiereId) || null;
}
 

export const DOMAINES = [
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

       {
        id: "pharmacie",
        nom: "pharmacie",
        resume: "Continuez à la santé en développant et en sécurisant les médicaments",
        duree: "7 ans",
        niveau: "Doctorat",
        apercu:
          "La pharmacie est ine filière de la santé qui forme des professionneles spécialisés dans les médicaments, leur fabrication, leur contrôle, leur distribution et leur bon usage auprès des patients",
        debouches: ["Pharmacien", "Pharmacien Hospitalier", "Industrie pharmaceutique", "Laboratoire d'analyse", "Chercheur"],
        competences: [
          "Connaissance en Chimie et Biologie",
          "Analyse et précision",
          "Sens des responsabilités",
          "Communication avec les patients",
          "Rigeur scientifique",
        ],
        admission: {
          conditions: ["Baccalauréat scientifique", "Concours d'entrée national", "Analyse des dossiers"],
          filieresBac: ["Bac D de préférence", "Bac C"],
        },
        etablissements: [
          { nom: "Unisersité des Sciences de la Santé", ville: "Libreville, Owendo", note: 4.6 },
          { nom: "EM-Gabon Université", ville: "Libreville", note: 4.6 },

        ],
      },

       {
        id: "biologie-medicale",
        nom: "Biologie-Médicale",
        resume: "Analyser les prélèvements pour aider au diagnostic des maladies",
        duree: "3 à 7ans",
        niveau: "Licence, Master, Doctorat",
        apercu:
          "La biologie médicale forme des spécialistes capables de réaliser des analyse de sang; d'urine et d'autres prélèvements afin d'aider les medecins à diagnostiquer les maladies",
        debouches: ["Technicien de laboratoire", "Biologiste Médicale", "Centre de recherche"],
        competences: [
          "Technique de laboratoire",
          "Biologie et microbiologie",
          "sens de l'observation",
          "Précision",
          "esprit critique",
        ],
        admission: {
          conditions: ["Baccalauréat scientifique", "Analyse des dossiers"],
          filieresBac: ["Bac D", "Bac C"],
        },
        etablissements: [
          { nom: "Unisersité des Sciences de la Santé", ville: "Libreville, Owendo", note: 4.6 },
          { nom: "Unisersité des Sciences de la Santé", ville: "Libreville, Owendo", note: 4.6 },

        ],
      },

       {
        id: "ingenierie-biomedicale",
        nom: "Ingénierie-Biomédicale",
        resume: "Alliez technologie et medecine pour améliorer les soins de santé",
        duree: "3 à 7ans",
        niveau: "Licence Master Doctorat",
        apercu:
          "L'ingénierie biomédicale forme des spécialiste capable de concevoir, installer, maintenir et améliorer les équipements médicaux utilisés dans les hopitaux et les cenntres de santé. ",
        debouches: ["Ingénieur Biomédical", "Maintenance Hospitalière", "Fabriquant d'équipements médicaux","Recherche"],
        competences: [
          "Electronique",
          "Informatique",
          "Physique",
          "Maintenance des équipements médicaux",
          "Résolution de problèmes",
        ],
        admission: {
          conditions: ["Baccalauréat scientifique", "Baccalauréat Technique"],
          filieresBac: ["Bac D", "Bac C", "Bac E"],
        },
        etablissements: [
          { nom: "EM-Gabon Université", ville: "Libreville", note: 4.6 },

        ],
      },

       {
        id: "soin-infimier",
        nom: "Soins Infirmiers",
        resume: "Prenez soin des patients avec compétence, écoute et humanité",
        duree: "3 ans",
        niveau: "Licence",
        apercu:
          "Les soins infirmiers forment des professionnels chargés d'assurer les soins, le suivi et l'accompagnement des patients dans les établissements de santé",
        debouches: ["Infirmier diplômé", "Hôpital", "Clinique"],
        competences: [
          "Soins des patients",
          "Communication",
          "Emphatie",
          "Organisation",
        ],
        admission: {
          conditions: ["Baccalauréat", "Concours d'entrée national", "Analyse des dossiers"],
          filieresBac: ["Tous type de Bac de l'enseignement général"],
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
        etablissements: [{ nom: "Université OUMAR BONGO ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],
      },
      
      {
        id: "Fiscalite",
        nom: "Fiscalité et Douanes",
        resume: "Contribuez à la gestion des fianaces publiques et au contrôle des échanges",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière Fiscalité et Douanes forme des professionneles chargés de la gestion des impôts, des taxes et du contrôle des marchandises afin d'assurer le respect de la réglémentation fiscale et douanière",
        debouches: ["Inspecteur des impôts", "Agent des douanes", "Conseiller Fiscal", "Auditeur Fiscal"],
        competences: ["Comptabilité", "Droit Fiscal", "Analyse financière", "Rigueur"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Lettres", "Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "Université OUMAR BONGO ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],

      },

      {
        id: "relation-internationale",
        nom: "Relation Internationale",
        resume: "Répresentez votre pays et contribuez à la coopération internationale",
        duree: "5 ans (Master)",
        niveau: "Licence / Master",
        apercu:
          "Les relations internationales forment des spécialistes des affaires diplomatiques, de la coopération entre les Etats et des organisations internationales",
        debouches: ["Diplomate", "Chargé de Coopération", "Fonctionnaire international", "Consultant"],
        competences: ["Communication", "Négociation", "Culture générale", "Langues étrangères"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Lettres", "Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "Université OUMAR BONGO ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],
      },
      
      {
        id: "administration",
        nom: "Administration Publique",
        resume: "Devenez un acteur clé de la gestion et du développement des services publics",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "L'administration publique forme des professionnels capables de gérer les services de l'Etat, des collectivités térritoriales et des établissements publics afin d'assurer leur bon fonctionnement",
        debouches: ["Administrateur civil", "Gestionnaire Administratif", "Chef de Service", "Cadre de la fonction publique"],
        competences: ["Gestion administrative", "Organisation", "Management", "Droit Administrative"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire", "Bonne capacité d'organisation"],
          filieresBac: ["Lettres", "Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "Université OUMAR BONGO ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],
      },
      
    ],
    etablissementsExcellence: [{ nom: "Université OUMAR BONGO ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],

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
        etablissements: [{ nom: "EM-Gabon Université", ville: "Libreville", note: 4.5 }],
      },

       {
        id: "logistique",
        nom: "Logistique et Transport",
        resume: "Organisez le transport des marchandises et optimisez les chaînes d'approvisionnement",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière Logistique et Transport dorme des professionnels capables de plannifier, coordonnées et gérer le transport des marchandises, le stockage et la distribution afin d'assurer un approvisionnement efficace des entreprises",
        debouches: ["Responsable logistique", "Gestionnaire des stocks", "Agent de transit", "Coordinateur transport"],
        competences: ["Gestion de la chaîne logistique", "Fiscalité", "Organisation du transport", "Utilisation des outils de gestion logistique"],
        admission: {
          conditions: ["Baccalauréat, série économique de préférence", "Dossier scolaire"],
          filieresBac: ["Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "Ecole Supérieure de Science de Gestion et d'Informatique", ville: "Libreville", note: 4.5 }],
      },

      {
        id: "qhse",
        nom: "Qualité, Hygiène, Sécurité et Environnement (QHSE)",
        resume: "Garantissez la sécurité des personnes, la qualité des activités et la protection de l'environnement",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière QHSE forme des spécialistes chargés de mettre en place des normes de qualité, de prévénir les riques professionnels et se protéger l'environnement dans les entreprises et les industries",
        debouches: ["Responsable QHSE", "Animateur HSE", "Auditeur qualité", "Responsable sécurité"],
        competences: ["Gestion des riques", "Qualité des processus", "Protection des environnement", "Utilisation des outils de gestion logistique"],
        admission: {
          conditions: ["Baccalauréat, série scientifique de préférence", "Dossier scolaire"],
          filieresBac: ["Tous les Bac"],
        },
        etablissements: [{ nom: "École Supérieure de Science de Gestion et d'Informatique", ville: "Libreville", note: 4.5 }],
      },

       {
        id: "banque",
        nom: "Banque et Assurance",
        resume: "Accompagnez les particuliers et les entreprises dans leurs projets financiers",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "La filière Banque et Assurance prépare aux métiers de lagestion bancaire, du crédit, l'épargne et de l'assurance. Les diplômés travaillent dans les banques, les compagnies d'assurance et les institions financières",
        debouches: ["Conseiller bancaire", "Chargé de clientèle", "Gestionnaire de crédit", "Responsable d'agence bancaires"],
        competences: ["Analyse financière ", "relation client", "Gestion des risque", "Technique Bancaire"],
        admission: {
          conditions: ["Baccalauréat, série économique de préférence", "Dossier scolaire"],
          filieresBac: ["Sciences Économiques et Gestion"],
        },
        etablissements: [{ nom: "École Supérieure de Science de Gestion et d'Informatique", ville: "Libreville", note: 4.5 }],
      },
     
    ],
    etablissementsExcellence: [{ nom: "Université Oumar Bongo Odimba", ville: "Libreville", note: 4.5 }],
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
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.4 }],
      },

      {
        id: "communication",
        nom: "Journalisme et Communication",
        resume: "Informez, influencez et donnez de la voix aux médias, aux entreprises et aux institutions",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "Cette filière forme des professionnels capables de collecter, rédiger et diffuser l'information, ainsi que de gérer la communication des entreprises et des organisations.",
        debouches: ["Journaliste", "chargé de communication", "Attaché de presse"],
        competences: ["Rédaction et expression écrite", "Technique de communication", "Journalisme radio, télévision et presse", "Relations publiques"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Test de langues"],
          filieresBac: ["Lettres et Langues Étrangères"],
        },
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.4 }],
      },

      {
        id: "art-culture",
        nom: "Arts, Culture et Patrimoine",
        resume: "Valorisez la culture gabonaise et développez des projets artistiques et culturels",
        duree: "3 ans (Licence)",
        niveau: "Licence / Master",
        apercu:
          "Cette filière prépare les étudiants à la gestion des projets culturels, à la promotion du patrimoine et au développement des industries créatives",
        debouches: ["Chargé de projet culturel", "Responsable Culturel", "Animateur culturel"],
        competences: ["Gestion de projets culturels", "Médiation culturelle", "Valorisation du patrimoine", "Organisation des évènements"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Test de langues"],
          filieresBac: ["Lettres et Langues Étrangères"],
        },
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.4 }],
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
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.2 }],
      },

      {
        id: "sociologie",
        nom: "sociologie",
        resume: "Analyser les comportements sociaux et accompagnez les transformations de la société",
        duree: "3 ans (Licence) + spécialisation",
        niveau: "Licence / Master",
        apercu:
          "Cette filière forme des spécialistes capables d'étudier les phénomènes sociaux, les besoins des populations et les dynamiques de communautés afin de proposer des solutions adaptées",
        debouches: ["Chargé d'étude sociales", "Analyse des comportements humains", "méthode de recherche"],
        competences: ["Enquêtes et études sociales", "Analyse comportementale", "Méthodologie de recherche", "Entretien clinique"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Lettres", "intérêt pour les questions sociales"],
        },
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.2 }],
      },

      {
        id: "geographie",
        nom: "Géographie et Aménagement du Territoire",
        resume: "Comprenez les territoires et participez au développement durable des espaces",
        duree: "3 ans (Licence) + spécialisation",
        niveau: "Licence / Master",
        apercu:
          "Cette filière forme des professionnels capables d'analyser les térritoires, gérer les ressources et accompagner les projets d'aménagement urbain et rural",
        debouches: ["Psychologue clinicien", "Psychologue du travail", "Chercheur en psychologie"],
        competences: ["Analyse des térritoire", "Cartographie et syst-mes d'information géographique", "Gestion de l'environnement", "Plannification du territoire"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Dossier scolaire"],
          filieresBac: ["Intérêt pour l'environnement"],
        },
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.2 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Université Oumar Bongo ODIMBA", ville: "Libreville", note: 4.2 }],
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
        etablissements: [{ nom: "École Normale des Instituteurs", ville: "Libreville", note: 4.3 }],
      },

      {
        id: "enseignement-sup",
        nom: "Enseignement Supérieure",
        resume: "Formez les élèves du collège et du lycée en devenant un spécialiste de l'enseignement",
        duree: "5 ans (Master)",
        niveau: "Master",
        apercu:
          "Cette filière prépare les futurs enseignants capables de transmettre des connaissances dns une disciplne donnée au niveau secondaire",
        debouches: ["Enseignant du primaire", "Conseiller pédagogique", "Concepteur de contenus éducatifs"],
        competences: ["Pédagogie active", "Préparation des cours", "Didactique", "Évaluation des apprentissages"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Entretien de motivation"],
          filieresBac: ["Toutes séries"],
        },
        etablissements: [{ nom: "École Normale des Instituteurs", ville: "Libreville", note: 4.3 }],
      },

       {
        id: "enseignement-recherche",
        nom: "Enseignement Supérieur et Recherche",
        resume: "Participez à la formation universitaire et au développement des connaissances",
        duree: "7ans",
        niveau: "Doctorat",
        apercu:
          "Cette filière prépare aux métiers de l'enseignement universitaire, de la recherche et de l'accompagnement académique",
        debouches: ["Enseignant chercheur", "Chercheur", "Attaché de recherche"],
        competences: ["Méthodes de recherche", "Production scientifique", "Transmission des connaissances", "Gestion des projets de recherche"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Entretien de motivation"],
          filieresBac: ["Toutes séries"],
        },
        etablissements: [{ nom: "Université Oumar Bongo ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],
      },

       {
        id: "administration scolaire",
        nom: "Administration Scolaire et gestion Educative",
        resume: "Formation des futurs enseignants du cycle primaire.",
        duree: "5 ans (Master)",
        niveau: "Licence/Master",
        apercu:
          "Cette filière forme des professionnels capables de gérer les établissements scolaires, les programmes éducatifs et les services administratifs liés à l'éducation",
        debouches: ["Administrateur scolaire", "Gestionnaire d'établissement", "Responsable pédagogique"],
        competences: ["Gestion administrative", "Organisation scolaire", "Planification éducative", "Suivi des projets éducatifs"],
        admission: {
          conditions: ["Baccalauréat toutes séries", "Entretien de motivation"],
          filieresBac: ["Toutes séries"],
        },
        etablissements: [{ nom: "École Normale des Instituteurs", ville: "Libreville", note: 4.3 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Université Oumar Bongo ODIMBA (UOB)", ville: "Libreville", note: 4.3 }],
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
        etablissements: [{ nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.5 }],
      },

      {
        id: "gestion-forrestiere",
        nom: "Gestion Forestière et Exploitation du Bois",
        resume: "Préservez et valorisez les ressources forestières au coeur des enjeux économiques du Gabon",
        duree: "3 ans (Licence) ou 5 ans (Ingéniorat)",
        niveau: "Licence / Ingéniorat",
        apercu:
          "Cette filière forme des professionnels capables de gérer durablement des forêts, suivre les ressources naturelles et accompagner l'exploitation responsable du bois",
        debouches: ["Ingénieur Forestier", "Gestionnaire des ressources naturelles", "Responsable d'exploitation forestière", "Technicien Forestier"],
        competences: ["Gestion des écosystèmes forestiers", "Inventaire forestier", "Aménagement des forêts", "Gestion durable des resources naturelles"],
        admission: {
          conditions: ["Baccalauréat scientifique", "Dossier scolaire"],
          filieresBac: ["Sciences de la Vie et de la Terre", "Sciences Physiques"],
        },
        etablissements: [{ nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.5 }],
      },

       {
        id: "production-vegetale",
        nom: "Productions Végétales et agriculture Durable",
        resume: "Développez une agriculture moderne pour améliorer la production alimentaire et la sécurité alimentaire",
        duree: "3 ans (Licence) ou 5 ans (Ingéniorat)",
        niveau: "Licence / Ingéniorat",
        apercu:
          "La filière forme des spécialistes de la production agricole, de l'amélioration des cultures et des techniques agricoles adaptées aux réalités locales.",
        debouches: ["Ingénieur agronome spécialisé", "Conseiller agricole", "Responsable d'exploitation agricole", "chargé de projet agricole", "Technicien en production végétale"],
        competences: ["Agronomie appliquée", "Gestion des sols", "Agroécologie", "Analyse environnementale"],
        admission: {
          conditions: ["Baccalauréat scientifique", "Dossier scolaire"],
          filieresBac: ["Sciences de la Vie et de la Terre", "Sciences Physiques"],
        },
        etablissements: [{ nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.5 }],
      },

      {
        id: "gestion-environnement",
        nom: "Gestion de l'Environnement et Développement Durable",
        resume: "Protéger les ressources naturelles et accompagnez les projets de développement durable",
        duree: "3 ans (Licence) ou 5 ans (Ingéniorat)",
        niveau: "Licence / Ingéniorat",
        apercu:
          "La filière prépare des professionnels capables de gérer les problématiques environnementales, réaliser des études d'impact et accompagner les politiques de protection de l'environnement.",
        debouches: ["Chargé d'études environnementales", "Responsable environnement", "Consultatnt environnement"],
        competences: ["Etudes d'impact environnemental", "Gestion des déchets", "Gestion des ressources naturelles", "sensibilisation de l'environnement"],
        admission: {
          conditions: ["Baccalauréat scientifique", "Dossier scolaire"],
          filieresBac: ["Sciences de la Vie et de la Terre", "Sciences Physiques"],
        },
        etablissements: [{ nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.5 }],
      },
    ],
    etablissementsExcellence: [{ nom: "Université Polytechnique de Masuku", ville: "Franceville", note: 4.5 }],
  },
];

// Accès pratique par id, utilisé dans domaines.js et filieres.js
export function getDomaineById(id) {
  return DOMAINES.find((d) => d.id === id) || null;
}

export function getFiliereById(domaineId, filiereId) {
  const domaine = getDomaineById(domaineId);
  if (!domaine) return null;
  return domaine.filieres.find((f) => f.id === filiereId) || null;
}



"use strict";

/*
  TRADUCTIONS DU SITE
  -------------------
  Pour modifier un texte : changez la valeur à côté de la clé, dans la langue voulue.
  Pour ajouter une langue : copiez un bloc (par ex. "en"), renommez-le (par ex. "es"),
  traduisez les valeurs, puis ajoutez <option value="es">ES</option> dans le sélecteur
  de index.html et "es" dans la liste LANGS de script.js.
*/

const I18N = {

  /* ========================= FRANÇAIS ========================= */
  fr: {
    "meta.title": "Felana Christelle RAKOTONDRAHASY – Consultante Data",

    "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets",
    "nav.career": "Parcours", "nav.contact": "Contact",

    "aria.theme": "Changer de thème", "aria.menu": "Ouvrir le menu", "aria.lang": "Langue",
    "aria.top": "Remonter en haut", "aria.close": "Fermer", "aria.filters": "Filtrer les projets", "aria.pagination": "Pagination des projets",

    "hero.label": "// consultante data · prête à vous accompagner",
    "hero.title": "Je transforme vos données en <span>décisions claires</span>.",
    "hero.typed": "Je maîtrise",
    "hero.text": "Je centralise, nettoie, analyse et visualise vos données, puis j'en tire des recommandations concrètes pour vous aider à prendre des décisions éclairées.",
    "hero.cta1": "Voir mes projets", "hero.cta2": "Me contacter",
    "kpi.projects": "ans d'expérience", "kpi.tools": "outils maîtrisés", "kpi.gain": "projets d'analyse",
    "profile.alt": "Photo de profil de Felana Christelle RAKOTONDRAHASY",

    "about.label": "// 01 à propos",
    "about.title": "Une expertise à la croisée des métiers, des données et des technologies",
    "about.p1": "Analyste de données depuis 2020, spécialisée dans l'analyse, le suivi des indicateurs et le développement de solution data. Mon parcours, construit dans des environnements aussi variés que la relation client, les télécommunications, la distribution pétrolière et l’enseignement, m’a permis de développer une approche à la fois analytique, innovante et orientée vers l’aide à la décision.",
    "about.p2": "Grâce à la maîtrise d’outils informatiques tels que R, Python, Excel, SQL et Power BI, je suis en mesure de vous accompagner dans la réalisation de vos projets liés à la donnée. ",
    "about.p3": "Curieuse et dotée d’une grande capacité d’adaptation, je sais également m’approprier rapidement de nouveaux environnements et intégrer les innovations technologiques à mes pratiques, notamment grâce à l'IA générative.",
    "about.code": "# Ma démarche en quelques lignes",
    "about.code.example": "<span class=\"k\">def</span> <span class=\"f\">analyser</span>(besoin):<br>&nbsp;&nbsp;données = <span class=\"f\">collecter</span>(besoin)<br>&nbsp;&nbsp;données = <span class=\"f\">nettoyer</span>(données)<br>&nbsp;&nbsp;insights = <span class=\"f\">explorer</span>(données)<br>&nbsp;&nbsp;<span class=\"k\">return</span> <span class=\"f\">raconter</span>(insights, <span class=\"s\">\"simple\"</span>)",
    "about.trust": "Ils m'ont fait confiance",

    "skills.label": "// 02 compétences",
    "skills.title": "Ma boîte à outils",
    "skills.lead": "Outils pour explorer, analyser et présenter les données.",
    "skills.g1": "Extraction & exploration", "skills.g2": "Nettoyage & analyse",
    "skills.g3": "Visualisation & restitutions", "skills.g4": "Bureautique",
    "skills.excel": "Excel avancé (TCD, VBA)", "skills.story": "Storytelling de données",
    "chip.stats": "Statistiques", "chip.cleaning": "Nettoyage des données", "chip.kpi": "KPI & reporting",
  
    "projects.label": "// 03 projets",
    "projects.title": "Analyses & tableaux de bord",
    "projects.lead": "Filtrez par outil, puis cliquez sur un projet pour voir plus de détail.",
    "projects.empty": "Aucun projet dans cette catégorie pour l'instant.",
    "projects.page": "Page {current} sur {total}",
    "filter.all": "Tous",
    "p.more": "Voir plus de détail →",
    "p1.title": "Exploration d'une base de données immobilières", "p1.desc": "Se démarquer de la concurrence pour mieux prévoir le prix de vente des biens immobiliers", "p1.impact": "→ résultat : Identification des biens à forte valeur ajoutée",
    "p2.title": "Etude sur l'alimentation dans le monde", "p2.desc": "Aider une organisation à construire un monde libéré de la faim", "p2.impact": "→ résultat : 7,10% de sous-nutrition en 2017 alors que théoriquement cela devrait être 1%",
    "p3.title": "Analyse des ventes e-commerce", "p3.desc": "Concevoir un rapport mensuel et faire une prévision", "p3.impact": "→ résultat : Cause de la baisse de CA identifié et prévision",
    "p4.title": "Indicateurs de l'égalité femme-homme", "p4.desc": "Améliorer la marque employeur et attirer plus facilement des talents", "p4.impact": "→ résultat : Index de l'égalité professionnelle = 98%, axes d'amélioration du recrutement",
    "p5.title": "Etude sur l'eau potable", "p5.desc": "Réaliser un tableau de bord qui permet de choisir un pays à cibler", "p5.impact": "→ résultat : Identification des pays cibles par domaine d'expertise",
    "p6.title": "Emission de CO₂ dans le monde", "p6.desc": "Avoir une vision globale de l'émission de CO₂ par zone", "p6.impact": "→ résultat : Les pays développés émettent 50% Du total de CO₂ émis dans le monde",
    "p7.title": "Optimisation de la gestion d'une boutique", "p7.desc": "Montrer le progrès de vente et détecter les incohérences des données", "p7.impact": "→ résultat : Astuces pour avoir des données de qualité",
    "p8.title": "Comprendre les habitudes d'achat en librairie", "p8.desc": "Aider l’entreprise à mieux comprendre ses données", "p8.impact": "→ résultat : 2 profils clients identifiés et anticipation d'une rupture de stock grâce à la saisonnalité",
    "p9.title": "Etude de marché", "p9.desc": "Proposer une première analyse des groupements de pays que l’on peut cibler pour exporter les marchandises", "p9.impact": "→ résultat : 4 clusters identifiés et 3 pays potentiels recommandés",
    "p10.title": "Détection des faux billets", "p10.desc": "Mettre en place une modélisation qui serait capable d’identifier automatiquement les vrais des faux billets", "p10.impact": "→ résultat : Un modèle robuste avec un score de 99% qui permet de détecter les faux billets",

    /* Fenêtre de détail : 3 libellés puis 3 textes par projet (même ordre) */
    "detail.labels": ["Données", "Méthode", "Livrable"],
    "detail.ventes": [
      "Base de données immobilières",
      "Modèle Conceptuel de Données (MCD) et requêtes SQL",
      "Schéma MCD et requêtes SQL"
    ],
    "detail.segmentation": [
      "Base de données FAOSTAT de 2013 à 2017",
      "Analyse exploratoire, nettoyage, analyse descriptive, top et flop",
      "Notebook Python et présentation"
    ],
    "detail.kpi": [
      "Données de vente",
      "Analyse descriptive, calcul, TCD et prévision",
      "Tableau de bord et présentation"
    ],
    "detail.knime": [
      "Données issues du SIRH",
      "RGPD, Workflow Knime, analyse graphique, index de l'égalité professionnelle",
      "Workflow automatisé Knime"
    ],
    "detail.tableau": [
      "Base de données de l'OMS",
      "Formalisation des besoins utilisateurs, collecte et nettoyage des données, conception et publication du tableau de bord",
      "Blueprint, mockup, tableau de bord et présentation"
    ],
    "detail.powerbi": [
      "Base de données OWID",
      "Calendrier et DAX",
      "Tableau de bord"
    ],
    "detail.python2": [
      "Base de données produit et vente",
      "Analyse exploratoire, Z-score pour identifier les outliers",
      "Notebook Python et présentation"
    ],
    "detail.python3": [
      "Données issues du site de vente en ligne",
      "Analyse des indicateurs de vente, décomposition en moyenne mobile, série temporelle, correlation entre les variables, test de chi2, test de Kruskall wallis, test de Kolmogorov-smirnov",
      "Notebook Python et présentation"
    ],
    "detail.python4": [
      "Base de données FAOSTAT et base de données de la Banque Mondiale  de 2020 à 2022",
      "Collecte des données, analyse exploratoire, nettoyage des données, Classification Ascendante Hiérarchique (CAH), K-means et Analyse en Composantes Principales (ACP)",
      "Notebook Python et présentation "
    ],
    "detail.python5": [
      "Dimensions géométriques du billet",
      "Analyse descriptive, régression linéaire, moteur simple , K-means et régression logistique",
      "Notebook Python et application finale de détection"
    ],

    "career.label": "// 04 parcours",
    "career.title": "Expériences professionnelles",
    "career.production.title": "Chargée d'études en production et analyse de données",
    "career.orange.title": "Experte BI - Data Analyst",
    "career.missions": "Voir plus de détails",
    "career.tools": "Outils utilisés :",
    "career.urca.1": "Piloter la mise en place du système d’information décisionnel (SID) à l’URCA",
    "career.urca.2": "Répondre aux différentes demandes d’indicateurs",
    "career.orange.1": "Recueillir les besoins métier et proposer des solutions BI (tableaux de bord, automatisation du traitement de données...).",
    "career.orange.2": "Contribuer aux référentiels et à la qualité des données (cubes Power BI, Datalab Stargate).",
    "career.quality.title": "Chargée de mission qualité des données",
    "career.itemm.1": "Recueillir, mettre à jour et enrichir la base de données \"contact\" de l’Institut",
    "career.itemm.2": "Mettre en conformité les fichiers aux normes RGPD",
    "career.jovena.1": "Accompagner les équipes commerciales dans l’interprétation des données de vente",
    "career.jovena.2": "Intermédiaire entre le gérant de la station service et les fournisseurs afin d'optimiser les actions marketing au niveau des boutiques",
    "career.omg.1": "Accompagner l'équipe marketing dans la compréhension des clients et la définition du plan marketing relationnel",
    "career.omg.2": "Analyser, traiter, exploiter et suivre l'évolution des indicateurs afin d'optimiser les campagnes",
    "career.research.title": "Assistante de recherche",
    "career.60db.1": "Conduire une enquête à partir des appels téléphoniques et faire des traductions Anglais - Malagasy",
    "career.60db.2": "Effectuer le codage des données qualitatives et assurer la qualité des réponses collectées.",
    "contact.label": "// 05 contact",
    "contact.title": "Un besoin d'analyse ?",
    "contact.lead": "Parlons de vos données et de ce que vous voulez en tirer.",
    "contact.name": "Felana Christelle RAKOTONDRAHASY",
    "contact.role": "Consultante Data",
    "contact.location": "Marne, Grand Est, France",
    "contact.email": "E-mail",

    "footer.text": "RAKOTONDRAHASY · construit avec du HTML, du CSS et un peu de JavaScript",

  },

  /* ========================= ENGLISH ========================= */
  en: {
    "meta.title": "Felana Christelle RAKOTONDRAHASY – Data Consultant",

    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.career": "Career", "nav.contact": "Contact",

    "aria.theme": "Switch theme", "aria.menu": "Open menu", "aria.lang": "Language",
    "aria.top": "Back to top", "aria.close": "Close", "aria.filters": "Filter projects", "aria.pagination": "Project pagination",

    "hero.label": "// data consultant · ready to support you",
    "hero.title": "I turn your data into <span>clear decisions</span>.",
    "hero.typed": "I work with",
    "hero.text": "I consolidate, clean, analyse and visualise your data, then turn it into practical recommendations to support informed decisions.",
    "hero.cta1": "See my projects", "hero.cta2": "Contact me",
    "kpi.projects": "years of experience", "kpi.tools": "tools mastered", "kpi.gain": "analysis projects",
    "profile.alt": "Profile photo of Felana Christelle RAKOTONDRAHASY",

    "about.label": "// 01 about",
    "about.title": "Expertise at the intersection of business, data and technology",
    "about.p1": "I have worked as a data analyst since 2020, specialising in data analysis, KPI monitoring and developing data solutions. My experience across customer relations, telecommunications, petroleum distribution and higher education has helped me develop an analytical, innovative approach focused on decision support.",
    "about.p2": "With expertise in R, Python, Excel, SQL and Power BI, I can support you in delivering your data projects.",
    "about.p3": "Curious and adaptable, I quickly get to grips with new environments and incorporate technological innovations into my work, including generative AI.",
    "about.code": "# My approach in a few lines",
    "about.code.example": "<span class=\"k\">def</span> <span class=\"f\">analyse</span>(need):<br>&nbsp;&nbsp;data = <span class=\"f\">collect</span>(need)<br>&nbsp;&nbsp;data = <span class=\"f\">clean</span>(data)<br>&nbsp;&nbsp;insights = <span class=\"f\">explore</span>(data)<br>&nbsp;&nbsp;<span class=\"k\">return</span> <span class=\"f\">present</span>(insights, <span class=\"s\">\"clearly\"</span>)",
    "about.trust": "Organisations that have trusted me",

    "skills.label": "// 02 skills",
    "skills.title": "My toolbox",
    "skills.lead": "Tools for exploring, analysing, and presenting data.",
    "skills.g1": "Extraction & exploration", "skills.g2": "Cleaning & analysis",
    "skills.g3": "Visualization & reporting", "skills.g4": "Office tools",
    "skills.excel": "Advanced Excel", "skills.story": "Data storytelling",
    "chip.stats": "Statistics", "chip.cleaning": "Data cleaning", "chip.kpi": "KPI & reporting",

    "projects.label": "// 03 projects",
    "projects.title": "Analyses & dashboards",
    "projects.lead": "Filter by tool, then select a project to see more details.",
    "projects.empty": "No projects in this category yet.",
    "projects.page": "Page {current} of {total}",
    "filter.all": "All",
    "p.more": "See more details →",
    "p1.title": "Exploring a real estate database", "p1.desc": "Stand out from the competition with more accurate forecasts of property sale prices.", "p1.impact": "→ result: High-value properties identified.",
    "p2.title": "Global food and nutrition study", "p2.desc": "Help an organisation work towards a world free from hunger.", "p2.impact": "→ result: Undernourishment stood at 7.10% in 2017, against a theoretical target of 1%.",
    "p3.title": "E-commerce sales analysis", "p3.desc": "Prepare a monthly report and make a forecast.", "p3.impact": "→ result: Identified the cause of the revenue decline and produced a forecast.",
    "p4.title": "Gender equality indicators", "p4.desc": "Strengthen employer branding and attract talent more easily.", "p4.impact": "→ result: Gender Equality Index: 98%; opportunities to improve recruitment were identified.",
    "p5.title": "A study of drinking water", "p5.desc": "Build a dashboard to select a target country.", "p5.impact": "→ result: Target countries identified by area of expertise.",
    "p6.title": "Global CO₂ emissions", "p6.desc": "Get an overview of CO₂ emissions by region.", "p6.impact": "→ result: Developed countries account for 50% of total global CO₂ emissions.",
    "p7.title": "Optimising shop management", "p7.desc": "Track sales performance and detect inconsistencies in the data.", "p7.impact": "→ result: Recommendations to improve data quality.",
    "p8.title": "Understanding bookstore purchasing habits", "p8.desc": "Help the company better understand its data.", "p8.impact": "→ result: Identified two customer profiles and anticipated a stockout based on seasonality.",
    "p9.title": "Market study", "p9.desc": "Conduct an initial analysis to identify groups of countries as potential export markets.", "p9.impact": "→ result: Identified four clusters and recommended three potential countries.",
    "p10.title": "Counterfeit banknote detection", "p10.desc": "Develop a model to automatically distinguish genuine banknotes from counterfeits.", "p10.impact": "→ result: A robust model with a 99% score detects counterfeit banknotes.",

    "detail.labels": ["Data", "Method", "Deliverable"],
    "detail.ventes": [
      "Real estate database",
      "Conceptual data model (CDM) and SQL queries",
      "CDM schema and SQL queries"
    ],
    "detail.segmentation": [
      "FAOSTAT database (2013–2017)",
      "Exploratory analysis, data cleaning, descriptive analysis, top- and bottom-performing comparisons",
      "Python notebook and presentation"
    ],
    "detail.kpi": [
      "Sales data",
      "Descriptive analysis, calculations, pivot tables and forecasting",
      "Dashboard and presentation"
    ],
    "detail.knime": [
      "Data from the HR information system (HRIS)",
      "GDPR, KNIME workflow, graphical analysis and Gender Equality Index",
      "Automated KNIME workflow"
    ],
    "detail.tableau": [
      "World Health Organization (WHO) database",
      "User requirements, data collection and cleaning, dashboard design and publication",
      "Blueprint, mock-up, dashboard and presentation"
    ],
    "detail.powerbi": [
      "Our World in Data (OWID) database",
      "Calendar table and DAX",
      "Dashboard"
    ],
    "detail.python2": [
      "Product and sales databases",
      "Exploratory analysis and Z-score to identify outliers",
      "Python notebook and presentation"
    ],
    "detail.python3": [
      "Online store data",
      "Sales KPI analysis, moving-average decomposition, time-series analysis, variable correlation, chi-square test, Kruskal–Wallis test and Kolmogorov–Smirnov test",
      "Python notebook and presentation"
    ],
    "detail.python4": [
      "FAOSTAT and World Bank databases (2020–2022)",
      "Data collection, exploratory analysis, data cleaning, agglomerative hierarchical clustering (AHC), K-means and principal component analysis (PCA)",
      "Python notebook and presentation"
    ],
    "detail.python5": [
      "Geometric dimensions of the banknote",
      "Descriptive analysis, linear regression, a basic model, K-means and logistic regression",
      "Python notebook and final detection application"
    ],

    "career.label": "// 04 career",
    "career.title": "Professional experience",
    "career.production.title": "Data Production and Analysis Officer",
    "career.orange.title": "BI Expert – Data Analyst",
    "career.missions": "View more details",
    "career.tools": "Tools used:",
    "career.urca.1": "Lead the implementation of the decision support system (DSS) at URCA.",
    "career.urca.2": "Respond to requests for indicators.",
    "career.orange.1": "Gather business requirements and propose BI solutions (dashboards, automated data processing, etc.).",
    "career.orange.2": "Contribute to data repositories and data quality (Power BI cubes, Datalab Stargate).",
    "career.quality.title": "Data Quality Officer",
    "career.itemm.1": "Collect, update and enrich the Institute's contact database.",
    "career.itemm.2": "Ensure files comply with GDPR requirements.",
    "career.jovena.1": "Support sales teams in interpreting sales data.",
    "career.jovena.2": "Act as liaison between the service station manager and suppliers to optimize marketing activities in the shops.",
    "career.omg.1": "Support the marketing team in understanding customers and defining the relationship marketing plan.",
    "career.omg.2": "Analyze, process and monitor indicators to optimize campaigns.",
    "career.research.title": "Research Assistant",
    "career.60db.1": "Conduct surveys by phone and translate between English and Malagasy.",
    "career.60db.2": "Code qualitative data and ensure the quality of collected responses.",
    "contact.label": "// 05 contact",
    "contact.title": "Need help with your data?",
    "contact.lead": "Let's talk about your data and what you want to get from it.",
    "contact.name": "Felana Christelle RAKOTONDRAHASY",
    "contact.role": "Data Consultant",
    "contact.location": "Marne, Grand Est, France",
    "contact.email": "Email",

    "footer.text": "RAKOTONDRAHASY · built with HTML, CSS and a little JavaScript",

  },

  /* ========================= РУССКИЙ ========================= */
  ru: {
    "meta.title": "Фелана Кристель РАКОТОНДРАХАСИ – консультант по данным",

    "nav.about": "Обо мне", "nav.skills": "Навыки", "nav.projects": "Проекты",
    "nav.career": "Путь", "nav.contact": "Контакты",

    "aria.theme": "Сменить тему", "aria.menu": "Открыть меню", "aria.lang": "Язык",
    "aria.top": "Наверх", "aria.close": "Закрыть", "aria.filters": "Фильтр проектов", "aria.pagination": "Пагинация проектов",

    "hero.label": "// консультант по данным · готова помочь вам",
    "hero.title": "Превращаю ваши данные в <span>понятные решения</span>.",
    "hero.typed": "Я работаю с",
    "hero.text": "Систематизирую, очищаю, анализирую и визуализирую ваши данные, а затем формулирую конкретные рекомендации, помогающие принимать обоснованные решения.",
    "hero.cta1": "Посмотреть работы", "hero.cta2": "Связаться со мной",
    "kpi.projects": "лет опыта", "kpi.tools": "освоенных инструментов", "kpi.gain": "аналитических проектов",
    "profile.alt": "Фотография профиля Феланы Кристель Ракотондрахаси",

    "about.label": "// 01 обо мне",
    "about.title": "Экспертность на стыке бизнеса, данных и технологий",
    "about.p1": "Я работаю аналитиком данных с 2020 года, специализируюсь на анализе данных, мониторинге показателей и разработке решений для работы с данными. Опыт в сферах клиентских отношений, телекоммуникаций, нефтяной дистрибуции и высшего образования помог мне выработать аналитический и инновационный подход, ориентированный на поддержку принятия решений.",
    "about.p2": "Владея такими инструментами, как R, Python, Excel, SQL и Power BI, я могу помочь вам в реализации проектов, связанных с данными.",
    "about.p3": "Я любознательна и легко адаптируюсь: быстро осваиваюсь в новых условиях и внедряю технологические инновации в свою работу, в том числе генеративный ИИ.",
    "about.code": "# Мой подход в нескольких строках",
    "about.code.example": "<span class=\"k\">def</span> <span class=\"f\">анализировать</span>(задача):<br>&nbsp;&nbsp;данные = <span class=\"f\">собрать</span>(задача)<br>&nbsp;&nbsp;данные = <span class=\"f\">очистить</span>(данные)<br>&nbsp;&nbsp;инсайты = <span class=\"f\">исследовать</span>(данные)<br>&nbsp;&nbsp;<span class=\"k\">return</span> <span class=\"f\">представить</span>(инсайты, <span class=\"s\">\"понятно\"</span>)",
    "about.trust": "Компании, которые мне доверяли",

    "skills.label": "// 02 навыки",
    "skills.title": "Мои инструменты",
    "skills.lead": "Инструменты для изучения, анализа и представления данных.",
    "skills.g1": "Извлечение и исследование", "skills.g2": "Очистка и анализ",
    "skills.g3": "Визуализация и представление результатов", "skills.g4": "Офисные приложения",
    "skills.excel": "Excel (продвинутый)", "skills.story": "Сторителлинг данных",
    "chip.stats": "Статистика", "chip.cleaning": "Очистка данных", "chip.kpi": "KPI и отчётность",

    "projects.label": "// 03 проекты",
    "projects.title": "Анализ и дашборды",
    "projects.lead": "Выберите инструмент для фильтрации, затем откройте проект, чтобы увидеть подробности.",
    "projects.empty": "В этой категории пока нет проектов.",
    "projects.page": "Страница {current} из {total}",
    "filter.all": "Все",
    "p.more": "Подробнее о проекте →",
    "p1.title": "Исследование базы данных о недвижимости", "p1.desc": "Выделиться среди конкурентов и точнее прогнозировать цены продажи недвижимости.", "p1.impact": "→ результат: выявлены объекты недвижимости с высокой добавленной стоимостью.",
    "p2.title": "Исследование глобального питания и недоедания", "p2.desc": "Помочь организации построить мир, свободный от голода.", "p2.impact": "→ результат: уровень недоедания в 2017 году составил 7,10%, тогда как теоретически он должен был быть 1%.",
    "p3.title": "Анализ продаж в электронной торговле", "p3.desc": "Подготовить ежемесячный отчёт и сделать прогноз.", "p3.impact": "→ результат: выявлена причина снижения выручки и подготовлен прогноз.",
    "p4.title": "Показатели гендерного равенства", "p4.desc": "Укрепить бренд работодателя и упростить привлечение талантов.", "p4.impact": "→ результат: индекс профессионального равенства — 98%; определены направления для улучшения найма.",
    "p5.title": "Исследование питьевой воды", "p5.desc": "Создать дашборд для выбора целевой страны.", "p5.impact": "→ результат: определены целевые страны по областям экспертизы.",
    "p6.title": "Выбросы CO₂ в мире", "p6.desc": "Получить общую картину выбросов CO₂ по регионам.", "p6.impact": "→ результат: на развитые страны приходится 50% всех выбросов CO₂ в мире.",
    "p7.title": "Оптимизация управления магазином", "p7.desc": "Отслеживать динамику продаж и выявлять несоответствия в данных.", "p7.impact": "→ результат: рекомендации по повышению качества данных.",
    "p8.title": "Покупательские привычки в книжном магазине", "p8.desc": "Помочь компании лучше понять свои данные.", "p8.impact": "→ результат: выявлены два профиля клиентов и спрогнозирован дефицит товара с учётом сезонности.",
    "p9.title": "Исследование рынка", "p9.desc": "Провести первичный анализ групп стран, которые можно выбрать для экспорта товаров.", "p9.impact": "→ результат: выявлены 4 кластера и рекомендованы 3 потенциальные страны.",
    "p10.title": "Выявление поддельных банкнот", "p10.desc": "Создать модель для автоматического распознавания настоящих и поддельных банкнот.", "p10.impact": "→ результат: надёжная модель с оценкой 99% обнаруживает поддельные банкноты.",

    "detail.labels": ["Данные", "Метод", "Материалы"],
    "detail.ventes": [
      "База данных по недвижимости",
      "Концептуальная модель данных и SQL-запросы",
      "Схема модели данных и SQL-запросы"
    ],
    "detail.segmentation": [
      "База данных FAOSTAT за 2013–2017 годы",
      "Исследовательский и описательный анализ, очистка данных, сравнение лидеров и отстающих",
      "Блокнот Python и презентация"
    ],
    "detail.kpi": [
      "Данные о продажах",
      "Описательный анализ, расчёты, сводные таблицы и прогнозирование",
      "Дашборд и презентация"
    ],
    "detail.knime": [
      "Данные из HR-информационной системы",
      "Требования GDPR, workflow KNIME, графический анализ и индекс профессионального равенства",
      "Автоматизированный workflow KNIME"
    ],
    "detail.tableau": [
      "База данных Всемирной организации здравоохранения (ВОЗ)",
      "Формализация требований пользователей, сбор и очистка данных, разработка и публикация дашборда",
      "Схема, макет, дашборд и презентация"
    ],
    "detail.powerbi": [
      "База данных Our World in Data (OWID)",
      "Таблица календаря и DAX",
      "Дашборд"
    ],
    "detail.python2": [
      "Базы данных товаров и продаж",
      "Исследовательский анализ и Z-оценка для выявления выбросов",
      "Блокнот Python и презентация"
    ],
    "detail.python3": [
      "Данные интернет-магазина",
      "Анализ показателей продаж, декомпозиция скользящего среднего, анализ временных рядов, корреляция переменных, критерии хи-квадрат, Краскела–Уоллиса и Колмогорова–Смирнова",
      "Блокнот Python и презентация"
    ],
    "detail.python4": [
      "Базы данных FAOSTAT и Всемирного банка (2020–2022)",
      "Сбор и исследовательский анализ данных, очистка, иерархическая агломеративная кластеризация, K-means и анализ главных компонент (PCA)",
      "Блокнот Python и презентация"
    ],
    "detail.python5": [
      "Геометрические параметры банкноты",
      "Описательный анализ, линейная регрессия, простая модель, K-means и логистическая регрессия",
      "Блокнот Python и готовое приложение для обнаружения подделок"
    ],

    "career.label": "// 04 путь",
    "career.title": "Профессиональный опыт",
    "career.production.title": "Специалист по подготовке и анализу данных",
    "career.orange.title": "Эксперт по BI — аналитик данных",
    "career.missions": "Подробнее",
    "career.tools": "Используемые инструменты:",
    "career.urca.1": "Руководить внедрением системы поддержки принятия решений (SID) в URCA.",
    "career.urca.2": "Отвечать на запросы по различным показателям.",
    "career.orange.1": "Собирать бизнес-требования и предлагать BI-решения (дашборды, автоматизация обработки данных и др.).",
    "career.orange.2": "Участвовать в развитии справочников и повышении качества данных (кубы Power BI, Datalab Stargate).",
    "career.quality.title": "Специалист по качеству данных",
    "career.itemm.1": "Собирать, обновлять и дополнять базу контактов института.",
    "career.itemm.2": "Приводить файлы в соответствие требованиям GDPR.",
    "career.jovena.1": "Помогать коммерческим командам интерпретировать данные о продажах.",
    "career.jovena.2": "Выступать посредником между управляющим автозаправочной станции и поставщиками, оптимизируя маркетинговые мероприятия в магазинах.",
    "career.omg.1": "Помогать маркетинговой команде лучше понимать клиентов и определять план маркетинга взаимоотношений.",
    "career.omg.2": "Анализировать, обрабатывать и отслеживать показатели для оптимизации кампаний.",
    "career.research.title": "Ассистент-исследователь",
    "career.60db.1": "Проводить телефонные опросы и переводить с английского на малагасийский и обратно.",
    "career.60db.2": "Кодировать качественные данные и обеспечивать качество собранных ответов.",
    "contact.label": "// 05 контакты",
    "contact.title": "Нужен анализ данных?",
    "contact.lead": "Давайте обсудим ваши данные и то, что вы хотите из них извлечь.",
    "contact.name": "Felana Christelle RAKOTONDRAHASY",
    "contact.role": "Консультант по данным",
    "contact.location": "Marne, Grand Est, France",
    "contact.email": "Эл. почта",

    "footer.text": "RAKOTONDRAHASY · создано на HTML, CSS и немного JavaScript",

  },

  /* ================= PORTUGUÊS (variante brésilienne) ================= */
  pt: {
    "meta.title": "Felana Christelle RAKOTONDRAHASY – Consultora de Dados",

    "nav.about": "Sobre mim", "nav.skills": "Competências", "nav.projects": "Projetos",
    "nav.career": "Trajetória", "nav.contact": "Contato",

    "aria.theme": "Alternar tema", "aria.menu": "Abrir menu", "aria.lang": "Idioma",
    "aria.top": "Voltar ao topo", "aria.close": "Fechar", "aria.filters": "Filtrar projetos", "aria.pagination": "Paginação de projetos",

    "hero.label": "// consultora de dados · pronta para apoiar você",
    "hero.title": "Transformo seus dados em <span>decisões claras</span>.",
    "hero.typed": "Trabalho com",
    "hero.text": "Consolido, limpo, analiso e visualizo seus dados e os transformo em recomendações práticas para apoiar decisões bem fundamentadas.",
    "hero.cta1": "Ver minhas análises", "hero.cta2": "Fale comigo",
    "kpi.projects": "anos de experiência", "kpi.tools": "ferramentas dominadas", "kpi.gain": "projetos de análise",
    "profile.alt": "Foto de perfil de Felana Christelle RAKOTONDRAHASY",

    "about.label": "// 01 sobre mim",
    "about.title": "Especialização na interseção entre negócios, dados e tecnologia",
    "about.p1": "Atuo como analista de dados desde 2020, com foco em análise, acompanhamento de indicadores e desenvolvimento de soluções de dados. Minha trajetória em áreas como relacionamento com clientes, telecomunicações, distribuição de petróleo e ensino superior me permitiu desenvolver uma abordagem analítica e inovadora, voltada ao apoio à tomada de decisão.",
    "about.p2": "Com experiência em ferramentas como R, Python, Excel, SQL e Power BI, posso apoiar você na realização dos seus projetos de dados.",
    "about.p3": "Curiosa e adaptável, aprendo rapidamente em novos ambientes e incorporo inovações tecnológicas ao meu trabalho, incluindo inteligência artificial generativa.",
    "about.code": "# Minha abordagem em poucas linhas",
    "about.code.example": "<span class=\"k\">def</span> <span class=\"f\">analisar</span>(necessidade):<br>&nbsp;&nbsp;dados = <span class=\"f\">coletar</span>(necessidade)<br>&nbsp;&nbsp;dados = <span class=\"f\">limpar</span>(dados)<br>&nbsp;&nbsp;insights = <span class=\"f\">explorar</span>(dados)<br>&nbsp;&nbsp;<span class=\"k\">return</span> <span class=\"f\">comunicar</span>(insights, <span class=\"s\">\"claramente\"</span>)",
    "about.trust": "Empresas que confiaram no meu trabalho",

    "skills.label": "// 02 competências",
    "skills.title": "Minha caixa de ferramentas",
    "skills.lead": "Ferramentas para explorar, analisar e apresentar dados.",
    "skills.g1": "Extração e exploração", "skills.g2": "Limpeza e análise",
    "skills.g3": "Visualização e apresentação de resultados", "skills.g4": "Ferramentas de escritório",
    "skills.excel": "Excel avançado", "skills.story": "Storytelling com dados",
    "chip.stats": "Estatística", "chip.cleaning": "Limpeza de dados", "chip.kpi": "KPIs e relatórios",

    "projects.label": "// 03 projetos",
    "projects.title": "Análises e dashboards",
    "projects.lead": "Filtre por ferramenta e selecione um projeto para ver mais detalhes.",
    "projects.empty": "Nenhum projeto nesta categoria por enquanto.",
    "projects.page": "Página {current} de {total}",
    "filter.all": "Todos",
    "p.more": "Ver mais detalhes →",
    "p1.title": "Exploração de uma base de dados imobiliária", "p1.desc": "Destacar-se da concorrência e prever melhor os preços de venda dos imóveis.", "p1.impact": "→ resultado: imóveis de alto valor agregado identificados.",
    "p2.title": "Estudo global sobre alimentação e desnutrição", "p2.desc": "Ajudar uma organização a construir um mundo livre da fome.", "p2.impact": "→ resultado: a desnutrição era de 7,10% em 2017, embora teoricamente devesse ser de 1%.",
    "p3.title": "Análise das vendas de e-commerce", "p3.desc": "Criar um relatório mensal e elaborar uma previsão.", "p3.impact": "→ resultado: causa da queda do faturamento identificada e previsão elaborada.",
    "p4.title": "Indicadores de igualdade entre mulheres e homens", "p4.desc": "Fortalecer a marca empregadora e atrair talentos com mais facilidade.", "p4.impact": "→ resultado: índice de igualdade profissional de 98%; oportunidades de melhoria no recrutamento identificadas.",
    "p5.title": "Estudo sobre água potável", "p5.desc": "Criar um dashboard que permita escolher um país-alvo.", "p5.impact": "→ resultado: países-alvo identificados por área de especialidade.",
    "p6.title": "Emissões de CO₂ no mundo", "p6.desc": "Obter uma visão geral das emissões de CO₂ por região.", "p6.impact": "→ resultado: países desenvolvidos emitem 50% do total de CO₂ no mundo.",
    "p7.title": "Otimização da gestão de uma loja", "p7.desc": "Acompanhar a evolução das vendas e detectar inconsistências nos dados.", "p7.impact": "→ resultado: recomendações para melhorar a qualidade dos dados.",
    "p8.title": "Entender hábitos de compra em livrarias", "p8.desc": "Ajudar a empresa a compreender melhor seus dados.", "p8.impact": "→ resultado: dois perfis de clientes identificados e risco de falta de estoque previsto com base na sazonalidade.",
    "p9.title": "Estudo de mercado", "p9.desc": "Fazer uma primeira análise dos grupos de países que podem ser escolhidos para exportar mercadorias.", "p9.impact": "→ resultado: quatro clusters identificados e três países potenciais recomendados.",
    "p10.title": "Detecção de cédulas falsas", "p10.desc": "Desenvolver um modelo capaz de identificar automaticamente cédulas verdadeiras e falsas.", "p10.impact": "→ resultado: um modelo robusto com pontuação de 99% detecta cédulas falsas.",

    "detail.labels": ["Dados", "Método", "Entrega"],
    "detail.ventes": [
      "Base de dados imobiliária",
      "Modelo Conceitual de Dados (MCD) e consultas SQL",
      "Esquema do MCD e consultas SQL"
    ],
    "detail.segmentation": [
      "Base de dados FAOSTAT (2013–2017)",
      "Análise exploratória e descritiva, limpeza de dados e comparação dos melhores e piores resultados",
      "Notebook Python e apresentação"
    ],
    "detail.kpi": [
      "Dados de vendas",
      "Análise descritiva, cálculos, tabelas dinâmicas e previsão",
      "Dashboard e apresentação"
    ],
    "detail.knime": [
      "Dados do sistema de informação de recursos humanos (SIRH)",
      "LGPD, fluxo de trabalho no KNIME, análise gráfica e Índice de Igualdade Profissional",
      "Fluxo de trabalho automatizado no KNIME"
    ],
    "detail.tableau": [
      "Base de dados da Organização Mundial da Saúde (OMS)",
      "Formalização das necessidades dos usuários, coleta e limpeza de dados, criação e publicação do dashboard",
      "Especificação, protótipo, dashboard e apresentação"
    ],
    "detail.powerbi": [
      "Base de dados Our World in Data (OWID)",
      "Tabela de calendário e DAX",
      "Dashboard"
    ],
    "detail.python2": [
      "Bases de dados de produtos e vendas",
      "Análise exploratória e Z-score para identificar valores atípicos",
      "Notebook Python e apresentação"
    ],
    "detail.python3": [
      "Dados de uma loja online",
      "Análise de KPIs de vendas, decomposição da média móvel, análise de séries temporais, correlação entre variáveis e testes qui-quadrado, Kruskal–Wallis e Kolmogorov–Smirnov",
      "Notebook Python e apresentação"
    ],
    "detail.python4": [
      "Bases de dados FAOSTAT e Banco Mundial (2020–2022)",
      "Coleta, análise exploratória e limpeza de dados, agrupamento hierárquico aglomerativo, K-means e análise de componentes principais (PCA)",
      "Notebook Python e apresentação"
    ],
    "detail.python5": [
      "Dimensões geométricas da cédula",
      "Análise descritiva, regressão linear, modelo simples, K-means e regressão logística",
      "Notebook Python e aplicação final de detecção"
    ],

    "career.label": "// 04 trajetória",
    "career.title": "Experiência profissional",
    "career.production.title": "Especialista em produção e análise de dados",
    "career.orange.title": "Especialista em BI – Analista de Dados",
    "career.missions": "Ver mais detalhes",
    "career.tools": "Ferramentas utilizadas:",
    "career.urca.1": "Liderar a implementação do sistema de apoio à decisão (SID) na URCA.",
    "career.urca.2": "Atender às diferentes solicitações de indicadores.",
    "career.orange.1": "Levantar necessidades de negócio e propor soluções de BI (dashboards, automação do processamento de dados etc.).",
    "career.orange.2": "Contribuir para os repositórios e a qualidade dos dados (cubos do Power BI, Datalab Stargate).",
    "career.quality.title": "Analista de qualidade de dados",
    "career.itemm.1": "Coletar, atualizar e enriquecer a base de dados de contatos do Instituto.",
    "career.itemm.2": "Adequar os arquivos às normas do RGPD.",
    "career.jovena.1": "Apoiar as equipes comerciais na interpretação dos dados de vendas.",
    "career.jovena.2": "Atuar como intermediária entre o gerente do posto de combustível e os fornecedores para otimizar as ações de marketing nas lojas.",
    "career.omg.1": "Apoiar a equipe de marketing na compreensão dos clientes e na definição do plano de marketing de relacionamento.",
    "career.omg.2": "Analisar, tratar e acompanhar a evolução dos indicadores para otimizar as campanhas.",
    "career.research.title": "Assistente de pesquisa",
    "career.60db.1": "Realizar pesquisas por telefone e traduções entre inglês e malgaxe.",
    "career.60db.2": "Codificar dados qualitativos e garantir a qualidade das respostas coletadas.",
    "contact.label": "// 05 contato",
    "contact.title": "Precisa de uma análise de dados?",
    "contact.lead": "Vamos conversar sobre seus dados e o que você quer extrair deles.",
    "contact.name": "Felana Christelle RAKOTONDRAHASY",
    "contact.role": "Consultora de Dados",
    "contact.location": "Marne, Grand Est, France",
    "contact.email": "E-mail",

    "footer.text": "RAKOTONDRAHASY · feito com HTML, CSS e um pouco de JavaScript",

  },

  /* ========================= ESPAÑOL ========================= */
  es: {
    "meta.title": "Felana Christelle RAKOTONDRAHASY – Consultora de Datos",

    "nav.about": "Sobre mí", "nav.skills": "Habilidades", "nav.projects": "Proyectos",
    "nav.career": "Trayectoria", "nav.contact": "Contacto",

    "aria.theme": "Cambiar tema", "aria.menu": "Abrir menú", "aria.lang": "Idioma",
    "aria.top": "Volver arriba", "aria.close": "Cerrar", "aria.filters": "Filtrar proyectos", "aria.pagination": "Paginación de proyectos",

    "hero.label": "// consultora de datos · lista para ayudarte",
    "hero.title": "Transformo tus datos en <span>decisiones claras</span>.",
    "hero.typed": "Trabajo con",
    "hero.text": "Consolido, limpio, analizo y visualizo tus datos, y los convierto en recomendaciones prácticas para facilitar decisiones fundamentadas.",
    "hero.cta1": "Ver mis análisis", "hero.cta2": "Contáctame",
    "kpi.projects": "años de experiencia", "kpi.tools": "herramientas dominadas", "kpi.gain": "proyectos de análisis",
    "profile.alt": "Foto de perfil de Felana Christelle RAKOTONDRAHASY",

    "about.label": "// 01 sobre mí",
    "about.title": "Especialización en la intersección entre negocio, datos y tecnología",
    "about.p1": "Trabajo como analista de datos desde 2020, especializada en análisis, seguimiento de indicadores y desarrollo de soluciones de datos. Mi trayectoria en ámbitos tan diversos como la relación con clientes, las telecomunicaciones, la distribución de petróleo y la educación superior me ha permitido desarrollar un enfoque analítico e innovador, orientado al apoyo en la toma de decisiones.",
    "about.p2": "Gracias a mi experiencia con herramientas como R, Python, Excel, SQL y Power BI, puedo ayudarte a llevar a cabo tus proyectos de datos.",
    "about.p3": "Curiosa y adaptable, aprendo rápidamente en nuevos entornos e incorporo innovaciones tecnológicas a mi trabajo, incluida la inteligencia artificial generativa.",
    "about.code": "# Mi enfoque en pocas líneas",
    "about.code.example": "<span class=\"k\">def</span> <span class=\"f\">analizar</span>(necesidad):<br>&nbsp;&nbsp;datos = <span class=\"f\">recopilar</span>(necesidad)<br>&nbsp;&nbsp;datos = <span class=\"f\">limpiar</span>(datos)<br>&nbsp;&nbsp;hallazgos = <span class=\"f\">explorar</span>(datos)<br>&nbsp;&nbsp;<span class=\"k\">return</span> <span class=\"f\">comunicar</span>(hallazgos, <span class=\"s\">\"claramente\"</span>)",
    "about.trust": "Empresas que han confiado en mí",

    "skills.label": "// 02 habilidades",
    "skills.title": "Mi caja de herramientas",
    "skills.lead": "Herramientas para explorar, analizar y presentar datos.",
    "skills.g1": "Extracción y exploración", "skills.g2": "Limpieza y análisis",
    "skills.g3": "Visualización y presentación de resultados", "skills.g4": "Ofimática",
    "skills.excel": "Excel avanzado", "skills.story": "Storytelling con datos",
    "chip.stats": "Estadística", "chip.cleaning": "Limpieza de datos", "chip.kpi": "KPI e informes",

    "projects.label": "// 03 proyectos",
    "projects.title": "Análisis y paneles de control",
    "projects.lead": "Filtra por herramienta y selecciona un proyecto para ver más detalles.",
    "projects.empty": "Todavía no hay proyectos en esta categoría.",
    "projects.page": "Página {current} de {total}",
    "filter.all": "Todos",
    "p.more": "Ver más detalles →",
    "p1.title": "Exploración de una base de datos inmobiliaria", "p1.desc": "Destacar frente a la competencia y prever mejor los precios de venta de los inmuebles.", "p1.impact": "→ resultado: identificación de inmuebles de alto valor añadido.",
    "p2.title": "Estudio global sobre alimentación y desnutrición", "p2.desc": "Ayudar a una organización a construir un mundo libre del hambre.", "p2.impact": "→ resultado: la desnutrición fue del 7,10 % en 2017, aunque teóricamente debería ser del 1 %.",
    "p3.title": "Análisis de ventas de comercio electrónico", "p3.desc": "Preparar un informe mensual y realizar una previsión.", "p3.impact": "→ resultado: causa de la caída de ingresos identificada y previsión elaborada.",
    "p4.title": "Indicadores de igualdad entre mujeres y hombres", "p4.desc": "Mejorar la marca empleadora y atraer talento con mayor facilidad.", "p4.impact": "→ resultado: índice de igualdad profesional del 98 %; áreas de mejora en la contratación identificadas.",
    "p5.title": "Estudio sobre el agua potable", "p5.desc": "Crear un panel que permita elegir un país objetivo.", "p5.impact": "→ resultado: países objetivo identificados por área de especialización.",
    "p6.title": "Emisiones de CO₂ en el mundo", "p6.desc": "Obtener una visión global de las emisiones de CO₂ por región.", "p6.impact": "→ resultado: los países desarrollados emiten el 50 % del total mundial de CO₂.",
    "p7.title": "Optimización de la gestión de una tienda", "p7.desc": "Mostrar la evolución de las ventas y detectar incoherencias en los datos.", "p7.impact": "→ resultado: recomendaciones para mejorar la calidad de los datos.",
    "p8.title": "Comprender los hábitos de compra en librerías", "p8.desc": "Ayudar a la empresa a comprender mejor sus datos.", "p8.impact": "→ resultado: dos perfiles de clientes identificados y una posible ruptura de stock anticipada gracias a la estacionalidad.",
    "p9.title": "Estudio de mercado", "p9.desc": "Realizar un primer análisis de los grupos de países a los que se podría exportar mercancía.", "p9.impact": "→ resultado: cuatro clústeres identificados y tres países potenciales recomendados.",
    "p10.title": "Detección de billetes falsos", "p10.desc": "Desarrollar un modelo capaz de identificar automáticamente los billetes auténticos y los falsos.", "p10.impact": "→ resultado: un modelo robusto con una puntuación del 99 % detecta billetes falsos.",

    "detail.labels": ["Datos", "Método", "Entregable"],
    "detail.ventes": [
      "Base de datos inmobiliaria",
      "Modelo conceptual de datos (MCD) y consultas SQL",
      "Esquema del MCD y consultas SQL"
    ],
    "detail.segmentation": [
      "Base de datos FAOSTAT (2013–2017)",
      "Análisis exploratorio y descriptivo, limpieza de datos y comparación de los mejores y peores resultados",
      "Notebook de Python y presentación"
    ],
    "detail.kpi": [
      "Datos de ventas",
      "Análisis descriptivo, cálculos, tablas dinámicas y previsiones",
      "Panel de control y presentación"
    ],
    "detail.knime": [
      "Datos del sistema de información de recursos humanos",
      "RGPD, flujo de trabajo de KNIME, análisis gráfico e Índice de Igualdad Profesional",
      "Flujo de trabajo automatizado de KNIME"
    ],
    "detail.tableau": [
      "Base de datos de la Organización Mundial de la Salud (OMS)",
      "Definición de las necesidades de los usuarios, recopilación y limpieza de datos, diseño y publicación del panel de control",
      "Especificación, maqueta, panel de control y presentación"
    ],
    "detail.powerbi": [
      "Base de datos de Our World in Data (OWID)",
      "Tabla de calendario y DAX",
      "Panel de control"
    ],
    "detail.python2": [
      "Bases de datos de productos y ventas",
      "Análisis exploratorio y puntuación Z para detectar valores atípicos",
      "Notebook de Python y presentación"
    ],
    "detail.python3": [
      "Datos de una tienda en línea",
      "Análisis de KPI de ventas, descomposición de la media móvil, análisis de series temporales, correlación entre variables y pruebas de chi-cuadrado, Kruskal-Wallis y Kolmogorov-Smirnov",
      "Notebook de Python y presentación"
    ],
    "detail.python4": [
      "Bases de datos FAOSTAT y del Banco Mundial (2020–2022)",
      "Recopilación, análisis exploratorio y limpieza de datos, agrupamiento jerárquico aglomerativo, K-means y análisis de componentes principales (PCA)",
      "Notebook de Python y presentación"
    ],
    "detail.python5": [
      "Dimensiones geométricas del billete",
      "Análisis descriptivo, regresión lineal, modelo básico, K-means y regresión logística",
      "Notebook de Python y aplicación final de detección"
    ],

    "career.label": "// 04 trayectoria",
    "career.title": "Experiencia profesional",
    "career.production.title": "Especialista en producción y análisis de datos",
    "career.orange.title": "Especialista BI – Analista de Datos",
    "career.missions": "Ver más detalles",
    "career.tools": "Herramientas utilizadas:",
    "career.urca.1": "Liderar la implementación del sistema de apoyo a la toma de decisiones (SID) en la URCA.",
    "career.urca.2": "Atender las distintas solicitudes de indicadores.",
    "career.orange.1": "Recopilar necesidades del negocio y proponer soluciones de BI (paneles, automatización del procesamiento de datos, etc.).",
    "career.orange.2": "Contribuir a los repositorios y a la calidad de los datos (cubos de Power BI, Datalab Stargate).",
    "career.quality.title": "Responsable de calidad de datos",
    "career.itemm.1": "Recopilar, actualizar y enriquecer la base de datos de contactos del Instituto.",
    "career.itemm.2": "Adaptar los archivos a los requisitos del RGPD.",
    "career.jovena.1": "Acompañar a los equipos comerciales en la interpretación de los datos de ventas.",
    "career.jovena.2": "Actuar como intermediaria entre el gerente de la estación de servicio y los proveedores para optimizar las acciones de marketing en las tiendas.",
    "career.omg.1": "Acompañar al equipo de marketing en la comprensión de los clientes y la definición del plan de marketing relacional.",
    "career.omg.2": "Analizar, procesar y seguir la evolución de los indicadores para optimizar las campañas.",
    "career.research.title": "Asistente de investigación",
    "career.60db.1": "Realizar encuestas telefónicas y traducciones entre inglés y malgache.",
    "career.60db.2": "Codificar datos cualitativos y garantizar la calidad de las respuestas recopiladas.",
    "contact.label": "// 05 contacto",
    "contact.title": "¿Necesitas un análisis de datos?",
    "contact.lead": "Hablemos de tus datos y de lo que quieres obtener de ellos.",
    "contact.name": "Felana Christelle RAKOTONDRAHASY",
    "contact.role": "Consultora de Datos",
    "contact.location": "Marne, Grand Est, France",
    "contact.email": "Correo electrónico",

    "footer.text": "RAKOTONDRAHASY · hecho con HTML, CSS y un poco de JavaScript",

  }
};

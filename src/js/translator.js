// translator.js

const translations = {
    en: {
        // Блок завдань
        "h2_tasks": "DEVELOPMENT THAT WORKS FOR THE FUTURE",
        "p_tasks_intro": 'Bril Park Goals:',
        "task_1": "Jobs with decent pay – higher than the industry average",
        "task_2": "Increase in budget revenues – personal income tax, VAT, social security, land tax",
        "task_3": "Efficient use of local potential – raw materials, personnel, infrastructure",
        "task_4": "Balanced regional development – economic and social proportionality",
        "task_5": "Support for SMEs – favorable conditions near EU borders",
        "task_6": "Innovative production – new capacities with high competitiveness",
        "task_7": "Attracting investments – financing construction and infrastructure",
        "task_8": "Environmental responsibility – modern technologies for safe production",

        // Header
        "brilpark_h1": "“Bril Park” – The Industry of the Future, Starting Today",
        "brilpark_h3_1": "The Industrial Park “Bril Park” is a project that combines economic growth, innovation, and environmental responsibility.It creates conditions for business expansion, attracting investment, cluster development, and community growth based on the best national and global practices.",
        "brilpark_h2": "Scientific foundation and R&D are the heart and soul of “Bril Park",
        "brilpark_h3_2": "Would you like to be part of it?",
        "btn_resident": "APPLY TO BECOME A FUTURE RESIDENT",

        // Header buttons
        "header_contacts": "Contacts",
        "header_form": "Form",

        // Main benefits
        //"main_title": "Key advantages of the industrial parks",
        "main_intro_1": "Industrial park “Bril Park”  is a modern platform with a powerful infrastructure core, tax incentives, and opportunities to scale production in a community of like-minded businesses.",
        "main_intro_2": "Our priorities:",
        "main_intro_3": "Priority industries for placement in Bril Park:",

        "tax_title": "Tax incentives for residents:",
        "tax_1": "0% corporate income tax – for up to 10 years",
        "tax_2": "Exemption from VAT and customs duties on imported equipment",
        "tax_3": "Reduced land tax rates – subject to local government decisions",
        "infrastructure_title": "Infrastructure readiness:",
        "infrastructure_text": "Businesses gain immediate access to utilities, logistics solutions, and support services – without the need to build everything from scratch. This significantly reduces initial costs, shortens timelines, and minimizes risks.",
        "collaboration_title": "Collaboration environment:",
        "collaboration_text": "The co-location of companies from related industries creates an effective ecosystem: knowledge exchange, joint projects, shared workforce, and optimized logistics.",

        // Eco and strategic development
        "eco_title": "Bril Park – environmental responsibility and strategic development",
        "eco_priorities_1": "Support for developers and innovators (grants, shared laboratory access, legal and accounting assistance, etc.)",
        "eco_priorities_2": "A modern industrial and manufacturing cluster with full infrastructure",
        "eco_priorities_3": "Successful implementation of partner projects and increased competitiveness in Ukrainian and global markets",
        "eco_priorities_4": "Collaboration based on the principles of a circular economy",
        "eco_sectors_1": "R&D centers and scientific laboratories",
        "eco_sectors_2": "Food industry: grain, vegetable, and berry processing",
        "eco_sectors_3": "Energy generation (heating, cooling, electricity)",
        "eco_sectors_4": "Logistics complexes",
        "eco_sectors_5": "Building materials manufacturing",

        // Goals
        "goals_title": "“Bril Park” – space of opportunities and growth",
        "goals_intro": "Purpose of Bril Park",
        "goals_text": "Provide a favorable environment for modern, environmentally safe, and technological production, attract investments, and increase the region's competitiveness.",
        "goal_1": "Generate new jobs and boost employment",
        "goal_2": "Provide infrastructure for business relocation",
        "goal_3": "Develop production and market infrastructure",
        "goal_4": "Stimulate local investment activity",

        // Carousel slides
        "carousel_1_title": "Bril Park – development that works for the future",
        "carousel_1_li_1": "Create jobs with competitive salaries – higher than the industry average",
        "carousel_1_li_2": "Increase tax revenues (PIT, VAT, USC, land tax)",
        "carousel_1_li_3": "Ensure effective use of local resources – raw materials, workforce, infrastructure",
        "carousel_1_li_4": "Support balanced regional development – economic and social sustainability",
        "carousel_1_li_5": "Foster SMEs with favorable conditions near the EU border",
        "carousel_1_li_6": "Drive innovative production – new capacities with high competitiveness",
        "carousel_1_li_7": "Attract investment – financing construction and infrastructure",
        "carousel_1_li_8": "Promote environmental responsibility – modern technologies for safe production",

        "carousel_2_title": "“Bril Park”: place where pathways connect and opportunities emerge",
        "carousel_2_li_1": "Location:Industrial Park address: 7 Zavodska St., Brailiv, part of the Zhmerynka community.",
        "carousel_2_li_2": "Transport infrastructure: railway, M21 highway, E583 road",
        "carousel_2_li_3": "Economic potential: industrial and logistics hub of the region",
        "carousel_2_li_4": "Engineering networks: electricity, gas, water supply, and sewage",

        "carousel_3_title": "Bril Park – investments that create opportunities",
        "carousel_3_li_1": "Projected investment volume – $25.8M",
        "carousel_3_li_2": "Creation of up to 400 new jobs",
        "carousel_3_li_3": "Implementation stages: 2025-2027 – infrastructure development",
        "carousel_3_li_4": "2026-2033 – launch of production capacities by park residents",
        "carousel_3_li_5": "Bril Park – a space where ideas become production, and investments – success",
        "carousel_3_li_6": "Start a new development stage – become a Bril Park resident",

        // Footer
        "footer_title": "For more information, please contact:",
        "footer_email": "info@brilpark.com",
        "footer_phone": "+380 67 812 09 72 –  Anna Slobodianiuk",
        "footer_address": "Vinnytsia, 10a Yunosti Avenue"
    }
};

function translate(lang) {
    if (!translations[lang]) return;

    // Tasks
    document.querySelector(".brilpark_tasks h2").textContent = translations[lang].h2_tasks;
    document.querySelector(".brilpark_tasks p").textContent = translations[lang].p_tasks_intro;
    const tasks = document.querySelectorAll(".brilpark_tasks .task");
    tasks.forEach((task, i) => { task.textContent = translations[lang][`task_${i+1}`]; });

    // Header
    document.querySelector(".brilpark_h1").textContent = translations[lang].brilpark_h1;
    const h3s = document.querySelectorAll(".brilpark_h3");
    h3s[0].textContent = translations[lang].brilpark_h3_1;
    h3s[1].textContent = translations[lang].brilpark_h3_2;
    document.querySelector(".brilpark_h2").textContent = translations[lang].brilpark_h2;
    document.querySelector(".brilpark_info__btn").textContent = translations[lang].btn_resident;

    // Header buttons
    const headerButtons = document.querySelectorAll(".brilpark_items .brilpark__button");
    headerButtons[0].textContent = translations[lang].header_contacts;
    headerButtons[1].textContent = translations[lang].header_form;

    // Main
    document.querySelector(".main__title").textContent = translations[lang].main_title;

    // Переклад всіх main__intro
    const mainIntros = document.querySelectorAll(".main__intro");
    if(mainIntros[0]) mainIntros[0].textContent = translations[lang].main_intro_1;
    if(mainIntros[1]) mainIntros[1].textContent = translations[lang].main_intro_2;
    if(mainIntros[2]) mainIntros[2].textContent = translations[lang].main_intro_3;

    document.querySelector(".main__tax h2").textContent = translations[lang].tax_title;
    const taxItems = document.querySelectorAll(".main__tax li");
    taxItems.forEach((li,i)=>{ li.textContent = translations[lang][`tax_${i+1}`]; });

    document.querySelector(".main__infrastructure h2").textContent = translations[lang].infrastructure_title;
    document.querySelector(".main__infrastructure p").textContent = translations[lang].infrastructure_text;

    document.querySelector(".main__collaboration h2").textContent = translations[lang].collaboration_title;
    document.querySelector(".main__collaboration p").textContent = translations[lang].collaboration_text;

    document.querySelector(".main__eco-columns h2").textContent = translations[lang].eco_title;

    const ecoColumns = document.querySelectorAll(".main__eco-column ul");
    const ecoTexts = [
        "eco_priorities_1","eco_priorities_2","eco_priorities_3","eco_priorities_4",
        "eco_sectors_1","eco_sectors_2","eco_sectors_3","eco_sectors_4","eco_sectors_5"
    ];
    ecoColumns[0].querySelectorAll("li").forEach((li,i)=> li.textContent = translations[lang][ecoTexts[i]]);
    ecoColumns[1].querySelectorAll("li").forEach((li,i)=> li.textContent = translations[lang][ecoTexts[i+4]]);

    // Goals
    document.querySelector(".main__goals h2").textContent = translations[lang].goals_title;
    document.querySelector(".main__goals-left p.main__intro").textContent = translations[lang].goals_intro;
    document.querySelector(".main__goals-left p.main__feature-text").textContent = translations[lang].goals_text;
    const goalCards = document.querySelectorAll(".main__goals-right .main__goal-card");
    for(let i=0;i<goalCards.length;i++){
        goalCards[i].textContent = translations[lang][`goal_${i+1}`];
    }

    // Carousel
    const slides = document.querySelectorAll(".carousel-slide");
    const carouselData = [
        {title:"carousel_1_title", items:["carousel_1_li_1","carousel_1_li_2","carousel_1_li_3","carousel_1_li_4","carousel_1_li_5","carousel_1_li_6","carousel_1_li_7","carousel_1_li_8"]},
        {title:"carousel_2_title", items:["carousel_2_li_1","carousel_2_li_2","carousel_2_li_3","carousel_2_li_4"]},
        {title:"carousel_3_title", items:["carousel_3_li_1","carousel_3_li_2","carousel_3_li_3","carousel_3_li_4","carousel_3_li_5","carousel_3_li_6"]}
    ];
    slides.forEach((slide, idx)=>{
        slide.querySelector("p strong").textContent = translations[lang][carouselData[idx].title];
        slide.querySelectorAll("li").forEach((li,i)=>{
            li.textContent = translations[lang][carouselData[idx].items[i]];
        });
    });

    // Footer
    document.querySelector(".footer__title").textContent = translations[lang].footer_title;
    const footerLinks = document.querySelectorAll(".footer__content a");
    footerLinks[0].textContent = translations[lang].footer_email;
    footerLinks[1].textContent = translations[lang].footer_phone;
    footerLinks[2].textContent = translations[lang].footer_address;

    // Кнопка під каруселью
    const residentBtn = document.querySelector(".brilpark_info__btn-wrapper .main__btn");
    if(residentBtn) residentBtn.textContent = translations[lang].btn_resident;
}

// Event listener для кнопки перемикання мови
document.querySelectorAll(".lang-toggle").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        const current = btn.textContent.trim();
        if(current === "UA") { 
            translate("en"); 
            btn.textContent = "EN"; 
        }
        else { location.reload(); } // повернення до UA
    });
});

// Початково залишаємо українську

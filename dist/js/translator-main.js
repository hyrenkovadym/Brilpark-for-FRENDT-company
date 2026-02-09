// translator-main.js
const mainTranslations = {
    "UA": {
        "main_h1": "Індустріальні парки – переваги",
        "main_p": "Індустріальний парк Бріл Парк – сучасна платформа з потужним інфраструктурним ядром, податковими стимулами та можливістю масштабування виробництва в середовищі однодумців.",
        "tax1": "0% податку на прибуток – до 10 років",
        "tax2": "Звільнення від ПДВ і мита на імпорт обладнання",
        "tax3": "Знижені ставки земельного податку – за рішенням місцевої влади",
        "infrastructure": "Бізнес одразу отримує доступ до інженерних мереж, логістичних рішень та сервісів підтримки – без необхідності будувати все з нуля. Це значно знижує стартові витрати, скорочує час та мінімізує ризики.",
        "collaboration": "Розміщення компаній споріднених галузей в одному просторі формує ефективну екосистему: обмін досвідом, спільні проєкти, кадри, логістика.",
        "eco_dev": "“Бріл Парк” – це екологічна відповідальність і стратегічний розвиток",
        "priority1": "Допомога та підтримка розробникам та інноваторам (гранти, спільне використання лабораторії, юридичний та бухгалтерський супровід тощо)",
        "priority2": "Сучасний виробничо-промисловий кластер із повноцінною інфраструктурою",
        "priority3": "Успішна реалізація проєктів партнерів та підвищення конкурентоспроможності на українському та світових ринках",
        "priority4": "Взаєморозуміння та взаємодія учасників по принципу циркулярної економіки",
        "sectors1": "R&D центри та наукові лабораторії",
        "sectors2": "Харчова промисловість, агро переробка зернових, овочевих та ягід",
        "sectors3": "Генерація енергії (тепло, холод, електрика)",
        "sectors4": "Логістичні комплекси",
        "sectors5": "Виробництво будівельних матеріалів",
        "space_growth": "“Бріл Парк” – це простір можливостей і зростання",
        "goal1": "Забезпечити сприятливе середовище для сучасних, екологічно безпечних і технологічних виробництв, залучати інвестиції та підвищувати конкурентоспроможність регіону.",
        "goal2": "Організація нових робочих місць і зростання зайнятості",
        "goal3": "Інфраструктура для релокації бізнесу",
        "goal4": "Розвиток виробничої та ринкової інфраструктури",
        "goal5": "Стимулювання інвестиційної активності на місцевому рівні"
    },
    "EN": {
        "main_h1": "Industrial Parks – Advantages",
        "main_p": "Bril Park Industrial Park is a modern platform with a powerful infrastructure core, tax incentives, and the ability to scale production in an environment of like-minded companies.",
        "tax1": "0% profit tax – up to 10 years",
        "tax2": "Exemption from VAT and import duties on equipment",
        "tax3": "Reduced land tax rates – by local government decision",
        "infrastructure": "Businesses immediately get access to engineering networks, logistics solutions, and support services – no need to build everything from scratch. This significantly reduces startup costs, shortens time, and minimizes risks.",
        "collaboration": "Placement of related industry companies in one space creates an effective ecosystem: experience exchange, joint projects, personnel, logistics.",
        "eco_dev": "“Bril Park” – ecological responsibility and strategic development",
        "priority1": "Support for developers and innovators (grants, shared laboratory use, legal and accounting support, etc.)",
        "priority2": "Modern production-industrial cluster with full infrastructure",
        "priority3": "Successful implementation of partner projects and increased competitiveness in Ukrainian and global markets",
        "priority4": "Understanding and interaction of participants based on circular economy principles",
        "sectors1": "R&D centers and scientific laboratories",
        "sectors2": "Food industry, agro-processing of cereals, vegetables, and berries",
        "sectors3": "Energy generation (heat, cold, electricity)",
        "sectors4": "Logistics complexes",
        "sectors5": "Building materials production",
        "space_growth": "“Bril Park” – a space of opportunities and growth",
        "goal1": "Provide a favorable environment for modern, environmentally safe, and technological productions, attract investments, and increase the competitiveness of the region.",
        "goal2": "Creation of new jobs and employment growth",
        "goal3": "Infrastructure for business relocation",
        "goal4": "Development of production and market infrastructure",
        "goal5": "Stimulating investment activity at the local level"
    }
};

function translateMain(lang) {
    document.querySelector(".main_h1").textContent = mainTranslations[lang].main_h1;
    document.querySelector(".main_p").textContent = mainTranslations[lang].main_p;
    document.querySelectorAll(".tax")[0].textContent = mainTranslations[lang].tax1;
    document.querySelectorAll(".tax")[1].textContent = mainTranslations[lang].tax2;
    document.querySelectorAll(".tax")[2].textContent = mainTranslations[lang].tax3;
    document.querySelector(".infrastructure").textContent = mainTranslations[lang].infrastructure;
    document.querySelector(".collaboration").textContent = mainTranslations[lang].collaboration;
    document.querySelector(".eco_dev").textContent = mainTranslations[lang].eco_dev;
    document.querySelectorAll(".priority")[0].textContent = mainTranslations[lang].priority1;
    document.querySelectorAll(".priority")[1].textContent = mainTranslations[lang].priority2;
    document.querySelectorAll(".priority")[2].textContent = mainTranslations[lang].priority3;
    document.querySelectorAll(".priority")[3].textContent = mainTranslations[lang].priority4;
    document.querySelectorAll(".sector")[0].textContent = mainTranslations[lang].sectors1;
    document.querySelectorAll(".sector")[1].textContent = mainTranslations[lang].sectors2;
    document.querySelectorAll(".sector")[2].textContent = mainTranslations[lang].sectors3;
    document.querySelectorAll(".sector")[3].textContent = mainTranslations[lang].sectors4;
    document.querySelectorAll(".sector")[4].textContent = mainTranslations[lang].sectors5;
    document.querySelector(".space_growth").textContent = mainTranslations[lang].space_growth;
    document.querySelectorAll(".goal")[0].textContent = mainTranslations[lang].goal1;
    document.querySelectorAll(".goal")[1].textContent = mainTranslations[lang].goal2;
    document.querySelectorAll(".goal")[2].textContent = mainTranslations[lang].goal3;
    document.querySelectorAll(".goal")[3].textContent = mainTranslations[lang].goal4;
    document.querySelectorAll(".goal")[4].textContent = mainTranslations[lang].goal5;
}

// Кнопки мови для main
document.querySelectorAll(".lang-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const currentLang = btn.textContent.trim();
        const newLang = currentLang === "UA" ? "EN" : "UA";
        translateMain(newLang);
    });
});

// Ініціалізація
translateMain("UA");

export const languages = {
  en: "EN",
  ru: "RU",
  kz: "KZ",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // ── Nav ──
    "nav.about": "About",
    "nav.benefits": "Benefits",
    "nav.schedule": "Schedule",
    "nav.sponsors": "Partners",
    "nav.faq": "FAQs",
    "nav.register": "Register",
    "nav.teamPage": "Team Page",
    "nav.logOut": "Log out",

    // ── Welcome ──
    "welcome.line1": "Make your biggest ",
    "welcome.highlight": "WISH",
    "welcome.line2": " come true",
    "welcome.register": "Register",

    // ── Countdown ──
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.mins": "Mins",
    "countdown.sec": "Sec",

    // ── About ──
    "about.srTitle": "About WISH",
    "about.when": "When?",
    "about.whenDate": "March 14-15, 2026",
    "about.where": "Where?",
    "about.whereLine1": "Nazarbayev University",
    "about.whereLine2": "Astana, Kazakhstan",
    "about.who": "Who?",
    "about.whoLine": "Female students, 16+",
    "about.p1_highlight": "Women in STEM Hackathon",
    "about.p1_text1": " is a 24-hour offline hackathon for ",
    "about.p1_highlight_girls": "girls",
    "about.p1_text1b": ", where participants team up in groups of ",
    "about.p1_highlight2": "2 to 4",
    "about.p1_text2":
      " to solve practical challenges from sponsors in the fields of ",
    "about.p1_highlight_ds": "Data Science, ML, and AI",
    "about.p1_text3":
      ". We welcome high school, college, and university students ",
    "about.p1_highlight_age": "aged 16 and over",
    "about.p1_text4":
      ". Additionally, all registered participants will receive access to ",
    "about.p1_highlight_video": "exclusive video lessons",
    "about.p1_text5":
      " covering the essential tools and methods commonly used at hackathons.",
    "about.p1_highlight3": "",

    // ── Prize Pool ──
    "prizePool.title": "Prize Fund",
    "prizePool.amount": "₸ 1,200,000",

    // ── Benefits ──
    "benefits.title": "Benefits",
    "benefits.card1": "Preparation tips video lessons after registration",
    "benefits.card2": "Hands-on experience in Data Science, ML & AI",
    "benefits.card3": "1 200 000 ₸ Prize Fund and Exclusive Merchandise",
    "benefits.card4": "Welcome Package for the first 50 participants",
    "benefits.card5": "Career opportunities as ML Engineers",
    "benefits.card6": "Coffee Breaks & Engaging Activities",
    "benefits.card7": "New technical skills & real teamwork experience",
    "benefits.card8": "Certificates of Participation for every participant",

    // ── Timeline ──
    "timeline.title": "Timeline",
    "timeline.date1": "February 24 - March 11",
    "timeline.label1": "Registration Period",
    "timeline.date2": "March 11 - 13",
    "timeline.label2": "Confirmation Period",
    "timeline.date3": "March 14 - 15",
    "timeline.label3": "Women in STEM Hackathon",

    // ── Sponsors ──
    "sponsors.title": "Sponsors",
    "sponsors.infoPartners": "Info Partners",
    "sponsors.sponsor": "Sponsor",
    "sponsors.partner": "Partner",
    "sponsors.freedomAILabs.description":
      "A division of the Kazakhstan-based Freedom Holding Corp. dedicated to the development and implementation of Artificial Intelligence technologies across the ecosystem's internal and client services.",
    "sponsors.freedom.description":
      "A lifestyle service ecosystem within the Freedom holding. It integrates leading leisure and ticketing projects such as Ticketon, Sxodim, Kino.kz, Aviata, and Chocotravel, making your travel and entertainment experiences more accessible.",
    "sponsors.issai.description":
      "The Institute of Smart Systems and Artificial Intelligence (ISSAI) at Nazarbayev University is a driver of AI innovation in Kazakhstan. It facilitates collaboration with sponsors.",
    "sponsors.nuDatasciClub.description":
      "A student club at Nazarbayev University dedicated to promoting Data Science. As a content partner for WISH, the club provided the essential video lessons to help participants prepare for the hackathon.",

    // ── Schedule / Agenda ──
    "schedule.title": "Schedule",
    "schedule.day1": "March 14",
    "schedule.day2": "March 15",
    "schedule.d1_t1": "Registration",
    "schedule.d1_t2": "Opening Ceremony",
    "schedule.d1_t3": "Case Presentations by Companies + Q&A",
    "schedule.d1_t4": "Coding Begins",
    "schedule.d1_t5": "Coffee Break",
    "schedule.d2_t1": "Case Submission Deadline",
    "schedule.d2_t2": "Pizza Break",
    "schedule.d2_t3": "Pitching Session",
    "schedule.d2_t4": "Closing Ceremony",
    "schedule.disclaimer": "There may be minor changes to the schedule",

    // ── Gallery ──
    "gallery.title": "Gallery",

    // ── Over Past Years ──
    "pastYears.title": "Over the past years",
    "pastYears.participants": "participants",
    "pastYears.teams": "teams",
    "pastYears.countries": "countries",

    // ── FAQ ──
    "faq.title": "FAQs",
    "faq.q1": "What is WISH?",
    "faq.a1":
      "Women in STEM Hackathon (WISH) is a 24-hour offline hackathon for girls, where participants team up to solve practical challenges from sponsors in Data Science, ML, and AI. It is an intensive event designed for those who dream of building a career in the world of high-tech and innovation.",
    "faq.q2": "Who can participate?",
    "faq.a2":
      "We welcome high school, college, and university students aged 16 and above. Participation is in teams of 2 to 4 people.",
    "faq.q3": "What if I don't have a team?",
    "faq.a3":
      'Don\'t worry! You can find teammates in our dedicated <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">WISH Telegram chat</a>, where other participants are also looking for partners.',
    "faq.q4": "Do I need to be a professional?",
    "faq.a4":
      "No, everyone interested in Data Science and AI is welcome! To help you prepare, all registered participants will receive access to exclusive video lessons covering essential tools and methods used at hackathons.",
    "faq.q5": "Can I participate online?",
    "faq.a5":
      "No, WISH will be held offline at Nazarbayev University, Astana, Kazakhstan.",
    "faq.q6": "How can I participate?",
    "faq.a6":
      "Form a team of 2-4 people and register through our website. Registration is open from February 24 to March 11, 2026. Please note that every team member must register individually through the website.",
    "faq.q7": "Will participants receive certificates or prizes?",
    "faq.a7":
      "Yes! The total prize fund is 1 200 000 ₸. Winners will also receive exclusive merchandise, and the first 50 participants will get a special Welcome Package. Every participant will receive a certificate of participation. Moreover, the best-performing participants will have the chance to receive job offers or internship opportunities from our partners.",
    "faq.q8": "I didn't find an answer to my question. What should I do?",
    "faq.a8":
      'Join our <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">Telegram chat</a> and ask your questions there, or contact us via email: <a href="https://mail.google.com/mail/u/0/?fs=1&to=acm_w@nu.edu.kz&su&body&tf=cm" target="_blank" rel="noopener noreferrer">acm_w@nu.edu.kz</a>.',
    "faq.instagram": "Instagram",
    "faq.telegram": "Telegram",
    "faq.youtube": "Youtube",
    "faq.email": "Email",
    "faq.copyright": "© 2026 NU ACM-W SC. All rights reserved.",
    "faq.q9": "Who are the organisers of WISH?",
    "faq.a9":
      "The organizer is the NU ACM-W Student Chapter - the first and only branch of ACM-Women in Kazakhstan and Central Asia. Our mission is to support women in STEM fields, especially in IT, through initiatives that foster social, professional, and technical growth.",
    "faq.q10": "Are there any other events for girls?",
    "faq.a10":
      'Yes! NU ACM-W SC annually organizes events for girls such as Women\'s Hack Day - 3-round team competition for girls (product design, mathematics, programming), CodeW - an individual competitive programming contest, and Code Girl Summer - a two-week web development camp. You can find more details and information on our <a href="https://t.me/nu_acm_w" target="_blank" rel="noopener noreferrer">Telegram</a> and <a href="https://www.instagram.com/nuacm_wsc/" target="_blank" rel="noopener noreferrer">Instagram</a> pages.',

    // ── Footer ──
    "footer.description":
      "<b>NU ACM-W Student Chapter</b> is the first student chapter of the international ACM-Women organization in Kazakhstan and Central Asia, based at Nazarbayev University. Since 2017, we have been providing social and professional support to women in STEM by organizing various events.",
    "footer.copyright": "© 2026 NU ACM-W SC. All rights reserved.",

    // ── Auth ──
    "auth.signIn": "SIGN IN",
    "auth.enterCode": "ENTER CODE",
    "auth.codeSent": "We sent a 6-digit code to",
    "auth.email": "Email",
    "auth.emailPlaceholder": "you@example.com",
    "auth.sending": "SENDING...",
    "auth.continue": "CONTINUE",
    "auth.verificationCode": "Verification Code",
    "auth.otpPlaceholder": "------",
    "auth.verifying": "VERIFYING...",
    "auth.verify": "VERIFY",
    "auth.codeResent": "Code resent to",
    "auth.sendAgain": "Send again",
    "auth.differentEmail": "Use a different email",
    "auth.failedSend": "Failed to send code.",
    "auth.invalidCode": "Invalid code.",
    "auth.unexpectedError": "An unexpected error occurred.",

    // ── Registration Form ──
    "reg.firstName": "first name:",
    "reg.lastName": "last name:",
    "reg.placeOfStudy": "place of study:",
    "reg.city": "city:",
    "reg.educationLevel": "education level:",
    "reg.school": "School Student (16+ age)",
    "reg.college": "College",
    "reg.bachelor": "Bachelor's",
    "reg.master": "Master's",
    "reg.iin": "IIN:",
    "reg.phone": "phone number:",
    "reg.parentPhone": "parent's phone number:",
    "reg.parentPhoneOptional": "parent's phone number (optional):",
    "reg.cvDropbox": "CV Dropbox (optional)",
    "reg.cvHint": "PDF only · max 2 MB",
    "reg.ageConfirm":
      "I confirm that I am above 16 years old & agree with the code of conduct",
    "reg.ageConfirmPre":
      "I confirm that I am above 16 years old & agree with the",
    "reg.codeOfConduct": "code of conduct",
    "reg.register": "Register",
    "reg.pdfOnly": "Only PDF files are allowed",
    "reg.cvSizeLimit": "CV file must be under 2 MB",
    "reg.pleaseConfirmAge":
      "Please confirm that you are above 16 years old and agree with the code of conduct",
    "reg.failed": "Registration failed",
    "reg.cvFailed": "CV upload failed",

    // ── Registration Page ──
    "regPage.loading": "Loading...",
    "regPage.redirecting": "Redirecting...",

    // ── Team Page ──
    "team.loading": "Loading...",
    "team.createTeam": "CREATE TEAM",
    "team.noTeamYet":
      "You are not part of any team yet. Create one or join via an invite link.",
    "team.teamName": "Team Name",
    "team.enterTeamName": "Enter team name",
    "team.creating": "Creating...",
    "team.createTeamBtn": "CREATE TEAM",
    "team.instructions": "INSTRUCTIONS",
    "team.instr1": "1. Create a team or join one via an invite link.",
    "team.instr2": "2. Share your invite link with teammates.",
    "team.instr3": "3. Teams must consist of 2 to 4 members.",
    "team.instr4": "4. The team captain can kick members from the team.",
    "team.instr5": "5. Only the captain can dissolve the team.",
    "team.roleCaptain": "captain",
    "team.roleMember": "member",
    "team.roleRequest": "request",
    "team.enterTeamNameLabel": "Enter Team Name:",
    "team.save": "SAVE",
    "team.participants": "PARTICIPANTS",
    "team.copyInvite": "COPY INVITE LINK",
    "team.copied": "COPIED!",
    "team.dissolve": "DISSOLVE TEAM",
    "team.leave": "LEAVE TEAM",
    "team.teamVideos": "TEAM VIDEOS",
    "team.failedCreate": "Failed to create team",
    "team.failedInviteLink": "Failed to get invite link",
    "team.failedCopy": "Failed to copy invite link.",
    "team.actionFailed": "Action failed",
    "team.failedRemove": "Failed to remove member",
    "team.failedRename": "Failed to rename team",
    "team.renamedSuccess": "Team renamed successfully!",
    "team.failedLeave": "Failed to leave team",
    "team.failedDissolve": "Failed to dissolve team",

    // ── Invite Page ──
    "invite.loading": "Loading...",
    "invite.invalidLink": "Invalid invite link.",
    "invite.failedProcess": "Failed to process invite.",
    "invite.joinedFallback": "You have joined the team!",
    "invite.joinedTitle": "JOINED TEAM",
    "invite.joinedMessage": "You have successfully joined the team!",
    "invite.errorTitle": "ERROR",
    "invite.teamPage": "TEAM PAGE",

    // ── Pending Invites (in team page) ──
    "team.pendingTitle": "PENDING INVITES",
    "team.accept": "Accept",
    "team.reject": "Reject",

    // ── Page titles ──
    "page.home": "WISH",
    "page.team": "Team",
    "page.registration": "Registration",
    "page.invite": "Team Invite",

    // ── Videos page ──
    "videos.title": "VIDEO LESSONS",
    "videos.introBefore": "These videos were prepared by the ",
    "videos.datasciClubName": "NU DataSci Club",
    "videos.introAfter":
      " to help you master the essentials before you start. Learn the best tips and strategies to build a great project and get ready for the hackathon.",
    "videos.video1Title": "How to Win a Hackathon",
    "videos.video1Desc":
      "The first video explains how to navigate the full hackathon process, from forming a small, effective team to delivering a winning 3-minute pitch. You will learn how to focus on a working demo rather than technical complexity and how to confidently handle the judges' Q&A session.",
    "videos.video2Title": "Working with AI Agents as an Architect",
    "videos.video2Desc":
      'This video introduces "Vibe Coding," where you act as a system architect by designing logic and creating clear technical tasks for AI. You will learn how to efficiently fix bugs by finding their root cause and guiding AI agents to the right solution.',
    "videos.video3Title": "Effective Workflow & Toolset",
    "videos.video3Desc":
      "Now, you will understand how to work faster by using AI agents like Cursor or Claude for code generation and analysis. You will learn how to choose the right tech stack (React, FastAPI, PyTorch) and why it is better to focus on a working prototype rather than overcomplicating the project with unnecessary features.",
    "videos.video4Title": "Pretrained Models for Rapid Prototyping",
    "videos.video4Desc":
      "Let's look at why using pretrained models is the best strategy for a hackathon to save time and get better results. You will learn about popular models for different tasks and see a real example of how to quickly fine-tune a model to create a high-quality demo.",
    "videos.video5Title": "Version Control with Git",
    "videos.video5Desc":
      "Finally, we will show how to use GitHub to keep your project safe and work effectively in a team. You will learn how to save working versions of your code, use branches for experiments, and resolve conflicts when merging your team's changes together.",
    "videos.outro1":
      "That's it for our video series! We hope these lessons help you navigate the hackathon with confidence. Focus on building a presentable prototype, stay aligned with the task requirements, and use AI as your main superpower to speed up development.",
    "videos.outro2": "DON'T JUST WISH. BUILD IT.",
    "videos.outro3":
      "This is your moment to turn inspiration into impact and code into reality. We can't wait to see the incredible projects you'll bring to life. Believe in your vision, trust your team, and make it happen.",
    "videos.outro4Before": "Good luck - we'll see you at ",
    "videos.outro4Wish": "WISH!",
    "videos.outro4After": "",
    "videos.linksTitle": "Useful Links",
    "videos.link1Title": "GitHub Student Developer Pack",
    "videos.link1Desc":
      "Get free access to GitHub Copilot Pro and other premium developer tools.",
    "videos.link2Title": "Cursor & Claude",
    "videos.link2Cursor": "Cursor",
    "videos.link2Claude": "Claude",
    "videos.link2Desc":
      "The most effective AI code editors and agents for rapid development.",
    "videos.link3Title": "Hugging Face",
    "videos.link3Desc":
      "The go-to platform for finding pretrained models (Text, Image, Audio) to jumpstart your prototype.",
    "videos.link4Title": "YOLO by Ultralytics",
    "videos.link4Desc":
      "A powerful tool for quick object detection and computer vision tasks.",
    "videos.link5Title": "FastAPI Documentation",
    "videos.link5Desc":
      "A fast and modern framework for building your project's backend.",
    "videos.link6Title": "Git & GitHub Guide",
    "videos.link6Desc":
      "Master branching and version control to collaborate without losing your code.",
  },

  ru: {
    // ── Nav ──
    "nav.about": "Описание",
    "nav.benefits": "Преимущества",
    "nav.schedule": "Расписание",
    "nav.sponsors": "Партнёры",
    "nav.faq": "Вопросы",
    "nav.register": "Регистрация",
    "nav.teamPage": "Команда",
    "nav.logOut": "Выйти",

    // ── Welcome ──
    "welcome.line1": "Исполни свою самую заветную ",
    "welcome.highlight": "мечту",
    "welcome.line2": "",
    "welcome.register": "Регистрация",

    // ── Countdown ──
    "countdown.days": "Дней",
    "countdown.hours": "Часов",
    "countdown.mins": "Мин",
    "countdown.sec": "Сек",

    // ── About ──
    "about.srTitle": "О WISH",
    "about.when": "Когда?",
    "about.whenDate": "14-15 марта 2026",
    "about.where": "Где?",
    "about.whereLine1": "Назарбаев Университет",
    "about.whereLine2": "Астана, Казахстан",
    "about.who": "Кто?",
    "about.whoLine": "Студентки и ученицы, 16+",
    "about.p1_highlight": "Women in STEM Hackathon",
    "about.p1_text1": " - это 24-часовой офлайн-хакатон для ",
    "about.p1_highlight_girls": "девушек",
    "about.p1_text1b": ". Участницы объединяются в команды от ",
    "about.p1_highlight2": "2 до 4 человек",
    "about.p1_text2":
      " для решения практических кейсов от спонсоров в области ",
    "about.p1_highlight_ds": "Data Science, ML и AI",
    "about.p1_text3":
      ". Мы приглашаем к участию учениц старших классов, студенток колледжей и университетов в возрасте ",
    "about.p1_highlight_age": "от 16 лет и старше",
    "about.p1_text4":
      ". Кроме того, все зарегистрированные участницы получат доступ к ",
    "about.p1_highlight_video": "эксклюзивным видеоурокам",
    "about.p1_text5":
      " по основным инструментам и методам, которые чаще всего применяются на хакатонах.",
    "about.p1_highlight3": "",

    // ── Prize Pool ──
    "prizePool.title": "Призовой фонд",
    "prizePool.amount": "₸ 1 200 000",

    // ── Benefits ──
    "benefits.title": "Преимущества",
    "benefits.card1": "Видеоуроки по подготовке к хакатону после регистрации",
    "benefits.card2": "Практический опыт в Data Science, ML и AI",
    "benefits.card3": "Призовой фонд 1 200 000 ₸ и эксклюзивный мерч",
    "benefits.card4": "Приветственный пакет для первых 50 участниц",
    "benefits.card5": "Карьерные возможности в роли ML-инженеров",
    "benefits.card6": "Кофе-брейки и увлекательные активности",
    "benefits.card7":
      "Новые технические навыки и реальный опыт командной работы",
    "benefits.card8": "Сертификаты об участии для каждой участницы",

    // ── Timeline ──
    "timeline.title": "Этапы",
    "timeline.date1": "24 февраля - 11 марта",
    "timeline.label1": "Период регистрации",
    "timeline.date2": "11 - 13 марта",
    "timeline.label2": "Период подтверждения",
    "timeline.date3": "14 - 15 марта",
    "timeline.label3": "Women in STEM Hackathon",

    // ── Sponsors ──
    "sponsors.title": "Спонсоры",
    "sponsors.infoPartners": "Инфо-партнёры",
    "sponsors.sponsor": "Спонсор",
    "sponsors.partner": "Партнёр",
    "sponsors.freedomAILabs.description":
      "Подразделение казахстанского холдинга Freedom Holding Corp., которое занимается разработкой и внедрением технологий искусственного интеллекта во внутренние и клиентские сервисы экосистемы.",
    "sponsors.freedom.description":
      "Экосистема лайфстайл-сервисов, входящая в холдинг Freedom Holding Corp. Объединяет ведущие проекты в сфере досуга и билетов: Ticketon, Sxodim, Kino.kz, Aviata и Chocotravel, делая ваши впечатления и путешествия доступнее.",
    "sponsors.issai.description":
      "Институт умных систем и искусственного интеллекта (ISSAI) при Назарбаев Университете является драйвером инноваций в сфере ИИ в Казахстане. Он помогает в сотрудничестве со спонсорами.",
    "sponsors.nuDatasciClub.description":
      "Студенческий клуб Назарбаев Университета, нацеленный на популяризацию Data Science. Клуб выступил контент-партнером WISH, подготовив серию обучающих видеоуроков для участников хакатона.",

    // ── Schedule / Agenda ──
    "schedule.title": "Расписание",
    "schedule.day1": "14 марта",
    "schedule.day2": "15 марта",
    "schedule.d1_t1": "Регистрация",
    "schedule.d1_t2": "Церемония открытия",
    "schedule.d1_t3": "Презентации кейсов от компаний + Q&A",
    "schedule.d1_t4": "Начало кодинга",
    "schedule.d1_t5": "Кофе-брейк",
    "schedule.d2_t1": "Дедлайн сдачи кейсов",
    "schedule.d2_t2": "Пицца-брейк",
    "schedule.d2_t3": "Питчинг-сессия",
    "schedule.d2_t4": "Церемония закрытия",
    "schedule.disclaimer": "Возможны небольшие изменения в расписании",

    // ── Gallery ──
    "gallery.title": "Галерея",

    // ── Over Past Years ──
    "pastYears.title": "За прошлые годы",
    "pastYears.participants": "участников",
    "pastYears.teams": "команд",
    "pastYears.countries": "стран",

    // ── FAQ ──
    "faq.title": "Вопросы",
    "faq.q1": "Что такое WISH?",
    "faq.a1":
      "Women in STEM Hackathon (WISH) - это 24-часовой офлайн-хакатон для девушек. Участницы объединяются в команды для решения практических кейсов от спонсоров в области Data Science, ML и AI. Это интенсивное мероприятие для тех, кто мечтает построить карьеру в мире высоких технологий и инноваций.",
    "faq.q2": "Кто может участвовать?",
    "faq.a2":
      "Мы приглашаем учениц старших классов, студенток колледжей и университетов в возрасте от 16 лет и старше. Участие принимается в командах от 2 до 4 человек.",
    "faq.q3": "Что делать, если у меня нет команды?",
    "faq.a3":
      'Не беспокойтесь! Вы можете найти единомышленниц в нашем <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">Telegram чате WISH</a>, где другие участницы также ищут партнеров по команде.',
    "faq.q4": "Нужно ли быть профессионалом?",
    "faq.a4":
      "Нет, мы рады всем, кто интересуется Data Science и AI! Чтобы помочь вам подготовиться, все зарегистрированные участницы получат доступ к эксклюзивным видеоурокам по основным инструментам и методам, используемым на хакатонах.",
    "faq.q5": "Можно ли участвовать онлайн?",
    "faq.a5":
      "Нет, WISH пройдет офлайн в Назарбаев Университете, г. Астана, Казахстан.",
    "faq.q6": "Как принять участие?",
    "faq.a6":
      "Соберите команду из 2-4 человек и зарегистрируйтесь на нашем сайте. Регистрация открыта с 24 февраля по 11 марта 2026 года. Пожалуйста, обратите внимание: каждая участница команды должна зарегистрироваться на сайте индивидуально.",
    "faq.q7": "Получат ли участницы сертификаты или призы?",
    "faq.a7":
      "Да! Общий призовой фонд составляет 1 200 000 ₸. Победительницы получат денежные призы и эксклюзивный мерч, а первые 50 участниц - приветственный пакет. Каждая девушка получит сертификат об участии. К тому же, лучшие участницы могут получить шанс на оффер или стажировку от наших партнеров.",
    "faq.q8": "Я не нашла ответ на свой вопрос. Что делать?",
    "faq.a8":
      'Присоединяйся к нашему <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">Telegram чату</a> и задай свой вопрос там или свяжись с нами по почте: <a href="https://mail.google.com/mail/u/0/?fs=1&to=acm_w@nu.edu.kz&su&body&tf=cm" target="_blank" rel="noopener noreferrer">acm_w@nu.edu.kz</a>.',
    "faq.instagram": "Instagram",
    "faq.telegram": "Telegram",
    "faq.youtube": "Youtube",
    "faq.email": "Email",
    "faq.copyright": "© 2026 NU ACM-W SC. Все права защищены.",
    "faq.q9": "Кто организатор WISH?",
    "faq.a9":
      "Организатором мероприятия является NU ACM-W Student Chapter - первое и единственное студенческое подразделение ACM-Women в Казахстане и Центральной Азии. Наша миссия - поддержка девушек в STEM-направлениях, особенно в сфере IT, посредством инициатив, направленных на социальное, профессиональное и техническое развитие.",
    "faq.q10": "Есть ли другие мероприятия для девушек?",
    "faq.a10":
      'Да! Ежегодно NU ACM-W SC организует мероприятия для девушек, такие как Women\'s Hack Day - командное соревнование по дизайну, математике и программированию, CodeW - индивидуальное соревнование по программированию, и Code Girl Summer - двухнедельный лагерь по веб-разработке. Более подробную информацию вы можете найти на наших страницах в <a href="https://t.me/nu_acm_w" target="_blank" rel="noopener noreferrer">Telegram</a> и <a href="https://www.instagram.com/nuacm_wsc/" target="_blank" rel="noopener noreferrer">Instagram</a>.',

    // ── Footer ──
    "footer.description":
      "<b>NU ACM-W Student Chapter</b> - первое в Казахстане и Центральной Азии студенческое подразделение международной организации ACM-Women, базирующееся в Назарбаев Университете. С 2017 года мы оказываем социальную и профессиональную поддержку девушкам в STEM сферах, организуя различные мероприятия.",
    "footer.copyright": "© 2026 NU ACM-W SC. Все права защищены.",

    // ── Auth ──
    "auth.signIn": "ВХОД",
    "auth.enterCode": "ВВЕДИТЕ КОД",
    "auth.codeSent": "Мы отправили 6-значный код на",
    "auth.email": "Email",
    "auth.emailPlaceholder": "you@example.com",
    "auth.sending": "ОТПРАВКА...",
    "auth.continue": "ДАЛЕЕ",
    "auth.verificationCode": "Код подтверждения",
    "auth.otpPlaceholder": "------",
    "auth.verifying": "ПРОВЕРКА...",
    "auth.verify": "ПОДТВЕРДИТЬ",
    "auth.codeResent": "Код повторно отправлен на",
    "auth.sendAgain": "Отправить ещё раз",
    "auth.differentEmail": "Использовать другой email",
    "auth.failedSend": "Не удалось отправить код.",
    "auth.invalidCode": "Неверный код.",
    "auth.unexpectedError": "Произошла непредвиденная ошибка.",

    // ── Registration Form ──
    "reg.firstName": "имя:",
    "reg.lastName": "фамилия:",
    "reg.placeOfStudy": "место учёбы:",
    "reg.city": "город:",
    "reg.educationLevel": "уровень образования:",
    "reg.school": "Школьница (от 16 лет)",
    "reg.college": "Колледж",
    "reg.bachelor": "Бакалавриат",
    "reg.master": "Магистратура",
    "reg.iin": "ИИН:",
    "reg.phone": "номер телефона:",
    "reg.parentPhone": "номер телефона родителя:",
    "reg.parentPhoneOptional": "номер телефона родителя (необязательно):",
    "reg.cvDropbox": "Загрузить CV (необязательно)",
    "reg.cvHint": "Только PDF · макс 2 МБ",
    "reg.ageConfirm":
      "Я подтверждаю, что мне больше 16 лет и я согласна с правилами поведения",
    "reg.ageConfirmPre": "Я подтверждаю, что мне больше 16 лет и я согласна с",
    "reg.codeOfConduct": "правилами поведения",
    "reg.register": "Регистрация",
    "reg.pdfOnly": "Допускаются только PDF-файлы",
    "reg.cvSizeLimit": "Размер CV не должен превышать 2 МБ",
    "reg.pleaseConfirmAge":
      "Пожалуйста, подтвердите, что вам больше 16 лет и вы согласны с правилами поведения",
    "reg.failed": "Ошибка регистрации",
    "reg.cvFailed": "Ошибка загрузки CV",

    // ── Registration Page ──
    "regPage.loading": "Загрузка...",
    "regPage.redirecting": "Перенаправление...",

    // ── Team Page ──
    "team.loading": "Загрузка...",
    "team.createTeam": "СОЗДАТЬ КОМАНДУ",
    "team.noTeamYet":
      "Вы ещё не состоите в команде. Создайте команду или присоединитесь по ссылке-приглашению.",
    "team.teamName": "Название команды",
    "team.enterTeamName": "Введите название команды",
    "team.creating": "Создание...",
    "team.createTeamBtn": "СОЗДАТЬ КОМАНДУ",
    "team.instructions": "ИНСТРУКЦИИ",
    "team.instr1": "1. Создайте команду или вступите по ссылке-приглашению.",
    "team.instr2": "2. Поделитесь ссылкой-приглашением с напарницами.",
    "team.instr3": "3. В команде должно быть от 2 до 4 участниц.",
    "team.instr4": "4. Капитан команды может выгнать участницу из команды.",
    "team.instr5": "5. Только капитан может распустить команду.",
    "team.roleCaptain": "капитан",
    "team.roleMember": "участница",
    "team.roleRequest": "заявка",
    "team.enterTeamNameLabel": "Введите название:",
    "team.save": "СОХРАНИТЬ",
    "team.participants": "УЧАСТНИКИ",
    "team.copyInvite": "КОПИРОВАТЬ ССЫЛКУ",
    "team.copied": "СКОПИРОВАНО!",
    "team.dissolve": "РАСФОРМИРОВАТЬ",
    "team.leave": "ПОКИНУТЬ КОМАНДУ",
    "team.teamVideos": "ВИДЕО КОМАНД",
    "team.failedCreate": "Не удалось создать команду",
    "team.failedInviteLink": "Не удалось получить ссылку-приглашение",
    "team.failedCopy": "Не удалось скопировать ссылку.",
    "team.actionFailed": "Действие не выполнено",
    "team.failedRemove": "Не удалось удалить участника",
    "team.failedRename": "Не удалось переименовать команду",
    "team.renamedSuccess": "Команда успешно переименована!",
    "team.failedLeave": "Не удалось покинуть команду",
    "team.failedDissolve": "Не удалось расформировать команду",

    // ── Invite Page ──
    "invite.loading": "Загрузка...",
    "invite.invalidLink": "Недействительная ссылка-приглашение.",
    "invite.failedProcess": "Не удалось обработать приглашение.",
    "invite.joinedFallback": "Вы присоединились к команде!",
    "invite.joinedTitle": "ПРИСОЕДИНИЛИСЬ",
    "invite.joinedMessage": "Вы успешно присоединились к команде!",
    "invite.errorTitle": "ОШИБКА",
    "invite.teamPage": "СТРАНИЦА КОМАНДЫ",

    // ── Pending Invites ──
    "team.pendingTitle": "ПРИГЛАШЕНИЯ",
    "team.accept": "Принять",
    "team.reject": "Отклонить",

    // ── Page titles ──
    "page.home": "WISH",
    "page.team": "Команда",
    "page.registration": "Регистрация",
    "page.invite": "Приглашение в команду",

    // ── Videos page ──
    "videos.title": "ВИДЕОУРОКИ",
    "videos.introBefore": "Эти видео были подготовлены ",
    "videos.datasciClubName": "NU DataSci Club",
    "videos.introAfter":
      ", чтобы помочь вам освоить основы перед стартом. Узнайте лучшие советы и стратегии для создания отличного проекта и подготовки к хакатону.",
    "videos.video1Title": "Как победить на хакатоне",
    "videos.video1Desc":
      "Первое видео объясняет, как пройти весь путь хакатона: от формирования небольшой эффективной команды до победного 3-минутного питча. Вы научитесь фокусироваться на рабочем демо, а не на технической сложности, и уверенно отвечать на вопросы жюри.",
    "videos.video2Title": "Работа с AI-агентами: роль архитектора",
    "videos.video2Desc":
      "Это видео знакомит с концепцией «Vibe Coding», где вы выступаете в роли системного архитектора, проектируя логику и создавая четкие технические задания для ИИ. Вы научитесь эффективно исправлять баги, находя их первопричину и направляя AI-агентов к верному решению.",
    "videos.video3Title": "Эффективный рабочий процесс и инструменты",
    "videos.video3Desc":
      "Теперь вы узнаете, как работать быстрее, используя AI-агентов, таких как Cursor или Claude, для генерации и анализа кода. Мы разберем выбор правильного технологического стека (React, FastAPI, PyTorch) и объясним, почему важно сфокусироваться на рабочем прототипе, а не усложнять проект лишними функциями.",
    "videos.video4Title": "Предобученные модели для быстрого прототипирования",
    "videos.video4Desc":
      "Давайте разберём, почему использование готовых моделей - лучшая стратегия на хакатоне для экономии времени и получения высоких результатов. Вы узнаете о популярных моделях для разных задач и увидите реальный пример того, как быстро дообучить модель для создания качественного демо.",
    "videos.video5Title": "Контроль версий с помощью Git",
    "videos.video5Desc":
      "В завершение мы покажем, как использовать GitHub, чтобы обезопасить свой проект и эффективно работать в команде. Вы научитесь сохранять рабочие версии кода, использовать ветки для экспериментов и разрешать конфликты при слиянии правок всей команды.",
    "videos.outro1":
      "На этом наши видеоуроки завершены! Мы надеемся, что эти знания помогут вам уверенно пройти через хакатон. Сосредоточьтесь на создании презентабельного прототипа, следуйте требованиям задачи и используйте ИИ как свою главную суперсилу.",
    "videos.outro2": "DON'T JUST WISH. BUILD IT.",
    "videos.outro3":
      "Это ваш момент, чтобы превратить вдохновение в результат, а код - в реальность. Нам не терпится увидеть невероятные проекты, которые вы создадите. Верьте в свою идею, доверяйте команде и действуйте!",
    "videos.outro4Before": "Удачи - увидимся на ",
    "videos.outro4Wish": "WISH!",
    "videos.outro4After": "",
    "videos.linksTitle": "Полезные ссылки",
    "videos.link1Title": "GitHub Student Developer Pack",
    "videos.link1Desc":
      "Получите бесплатный доступ к GitHub Copilot Pro и другим премиальным инструментам для разработчиков.",
    "videos.link2Title": "Cursor & Claude",
    "videos.link2Cursor": "Cursor",
    "videos.link2Claude": "Claude",
    "videos.link2Desc":
      "Самые эффективные AI-редакторы и агенты для быстрой разработки.",
    "videos.link3Title": "Hugging Face",
    "videos.link3Desc":
      "Главная платформа для поиска предобученных моделей (текст, изображения, аудио) для быстрого запуска вашего прототипа.",
    "videos.link4Title": "YOLO by Ultralytics",
    "videos.link4Desc":
      "Мощный инструмент для быстрого решения задач компьютерного зрения и распознавания объектов.",
    "videos.link5Title": "FastAPI Documentation",
    "videos.link5Desc":
      "Быстрый и современный фреймворк для создания бэкенда вашего проекта.",
    "videos.link6Title": "Git & GitHub Guide",
    "videos.link6Desc":
      "Руководство по работе с ветками и контролем версий для эффективной командной работы.",
  },

  kz: {
    // ── Nav ──
    "nav.about": "Сипаттама",
    "nav.benefits": "Артықшылықтар",
    "nav.schedule": "Кесте",
    "nav.sponsors": "Серіктестер",
    "nav.faq": "Сұрақтар",
    "nav.register": "Тіркеу",
    "nav.teamPage": "Команда",
    "nav.logOut": "Шығу",

    // ── Welcome ──
    "welcome.line1": "Ең үлкен ",
    "welcome.highlight": "арманың",
    "welcome.line2": " шындыққа айналсын",
    "welcome.register": "Тіркелу",

    // ── Countdown ──
    "countdown.days": "Күн",
    "countdown.hours": "Сағат",
    "countdown.mins": "Мин",
    "countdown.sec": "Сек",

    // ── About ──
    "about.srTitle": "WISH туралы",
    "about.when": "Қашан?",
    "about.whenDate": "14-15 наурыз, 2026",
    "about.where": "Қайда?",
    "about.whereLine1": "Назарбаев Университеті",
    "about.whereLine2": "Астана, Қазақстан",
    "about.who": "Кім?",
    "about.whoLine": "16 жастан асқан студенттер мен оқушы қыздар",
    "about.p1_highlight": "Women in STEM Hackathon",
    "about.p1_text1": " - бұл ",
    "about.p1_highlight_girls": "қыздарға арналған",
    "about.p1_text1b": " 24 сағаттық офлайн хакатон. Қатысушылар ",
    "about.p1_highlight2": "2-ден 4 адамға дейінгі",
    "about.p1_text2": " топтарға бірігіп, демеушілер ұсынған ",
    "about.p1_highlight_ds": "Data Science, ML және AI",
    "about.p1_text3": " салаларындағы нақты кейстерді шешеді. Біз ",
    "about.p1_highlight_age": "16 жастан асқан",
    "about.p1_text4":
      " мектеп оқушыларын, колледж және университет студенттерін шақырамыз. Сонымен қатар, барлық тіркелген қатысушылар хакатондарда жиі қолданылатын негізгі құралдар мен әдістер туралы ",
    "about.p1_highlight_video": "эксклюзивті бейнесабақтарға",
    "about.p1_text5": " қол жеткізе алады.",
    "about.p1_highlight3": "",

    // ── Prize Pool ──
    "prizePool.title": "Жүлде қоры",
    "prizePool.amount": "₸ 1 200 000",

    // ── Benefits ──
    "benefits.title": "Артықшылықтар",
    "benefits.card1":
      "Тіркелгеннен кейін хакатонға дайындық бойынша бейнесабақтар",
    "benefits.card2":
      "Data Science, ML және AI саласындағы практикалық тәжірибе",
    "benefits.card3": "1 200 000 ₸ жүлде қоры және эксклюзивті мерч",
    "benefits.card4": "Алғашқы 50 қатысушыға арналған сәлемдесу пакеті",
    "benefits.card5": "ML-инженер ретінде мансаптық мүмкіндіктер",
    "benefits.card6": "Кофе-брейктер және қызықты белсенділіктер",
    "benefits.card7":
      "Жаңа техникалық дағдылар мен командалық жұмыстың шынайы тәжірибесі",
    "benefits.card8": "Әрбір қатысушыға арналған қатысу сертификаттар",

    // ── Timeline ──
    "timeline.title": "Кезеңдер",
    "timeline.date1": "24 Ақпан - 11 наурыз",
    "timeline.label1": "Тіркелу кезеңі",
    "timeline.date2": "11 - 13 наурыз",
    "timeline.label2": "Растау кезеңі",
    "timeline.date3": "14 - 15 наурыз",
    "timeline.label3": "Women in STEM Hackathon",

    // ── Sponsors ──
    "sponsors.title": "Спонсорлар",
    "sponsors.infoPartners": "Ақпараттық серіктестер",
    "sponsors.sponsor": "Демеуші",
    "sponsors.partner": "Серіктес",
    "sponsors.freedomAILabs.description":
      "Экожүйенің ішкі және клиенттік сервистеріне жасанды интеллект технологияларын әзірлеумен және енгізумен айналысатын қазақстандық Freedom Holding Corp. холдингінің бөлімшесі.",
    "sponsors.freedom.description":
      "Freedom холдингіне кіретін лайфстайл-сервистер экожүйесі. Ticketon, Sxodim, Kino.kz, Aviata және Chocotravel сияқты демалыс пен билеттер саласындағы жетекші жобаларды біріктіріп, саяхат пен жаңа әсерлерді қолжетімді етеді.",
    "sponsors.issai.description":
      "Назарбаев Университеті жанындағы Ақылды жүйелер және жасанды интеллект институты (ISSAI) - Қазақстандағы ЖИ саласындағы инновациялар драйвері. Ол демеушілермен ынтымақтастық орнатуға көмектеседі.",
    "sponsors.nuDatasciClub.description":
      "Назарбаев Университетінің Data Science саласын насихаттауды мақсат ететін студенттік клубы. Клуб WISH жобасының контент-серіктесі болып табылады және қатысушылар үшін арнайы оқу видеосабақтарын дайындады.",

    // ── Schedule / Agenda ──
    "schedule.title": "Кесте",
    "schedule.day1": "14 наурыз",
    "schedule.day2": "15 наурыз",
    "schedule.d1_t1": "Тіркелу",
    "schedule.d1_t2": "Ашылу салтанаты",
    "schedule.d1_t3": "Компаниялардың кейс презентациялары + Q&A",
    "schedule.d1_t4": "Кодинг басталады",
    "schedule.d1_t5": "Кофе-брейк",
    "schedule.d2_t1": "Кейс тапсыру мерзімі",
    "schedule.d2_t2": "Пицца-брейк",
    "schedule.d2_t3": "Питчинг сессиясы",
    "schedule.d2_t4": "Жабылу салтанаты",
    "schedule.disclaimer": "Кестеге шағын өзгерістер болуы мүмкін",

    // ── Gallery ──
    "gallery.title": "Галерея",

    // ── Over Past Years ──
    "pastYears.title": "Өткен жылдар бойы",
    "pastYears.participants": "қатысушы",
    "pastYears.teams": "команда",
    "pastYears.countries": "ел",

    // ── FAQ ──
    "faq.title": "Сұрақтар",
    "faq.q1": "WISH дегеніміз не?",
    "faq.a1":
      "Women in STEM Hackathon (WISH) - бұл қыздарға арналған 24 сағаттық офлайн хакатон. Қатысушылар Data Science, ML және AI салаларында демеушілер ұсынған практикалық кейстерді шешу үшін командаларға бірігеді. Бұл - жоғары технологиялар әлемінде мансап құруды армандайтындарға арналған қарқынды іс-шара.",
    "faq.q2": "Кімдер қатыса алады?",
    "faq.a2":
      "Біз 16 жастан асқан мектеп оқушыларын, колледж және университет студенттерін шақырамыз. Қатысу 2-ден 4 адамға дейінгі командалар құрамында жүзеге асырылады.",
    "faq.q3": "Егер менде команда болмаса не істеймін?",
    "faq.a3":
      'Қам жемеңіз! Сіз біздің <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">WISH Telegram чатымыздан</a> командаластар таба аласыз, онда басқа қатысушылар да серіктестер іздеп жатады.',
    "faq.q4": "Міндетті түрде кәсіби маман болу керек пе?",
    "faq.a4":
      "Жоқ, Data Science және AI саласына қызығушылық танытатын кез келген адамды қуана қабылдаймыз! Дайындыққа көмектесу үшін барлық тіркелген қатысушылар хакатондарда қолданылатын негізгі құралдар мен әдістер туралы эксклюзивті бейнесабақтарға қол жеткізе алады.",
    "faq.q5": "Онлайн қатысуға бола ма?",
    "faq.a5":
      "Жоқ, WISH офлайн форматта Астана қаласында, Назарбаев Университетінде өтеді.",
    "faq.q6": "Қалай қатысамын?",
    "faq.a6":
      "2-4 адамнан тұратын команда құрып, біздің сайт арқылы тіркеліңіз. Тіркелу 2026 жылдың 24 ақпаны мен 11 наурызы аралығында ашық. Ескерту: команданың әрбір мүшесі сайтта жеке тіркелуі тиіс.",
    "faq.q7": "Қатысушылар сертификаттар немесе сыйлықтар ала ма?",
    "faq.a7":
      "Иә! Жалпы жүлде қоры 1 200 000 ₸ құрайды. Жеңімпаздар ақшалай сыйлықтар мен эксклюзивті мерчқа ие болады, ал алғашқы 50 қатысушыға арнайы Welcome Package беріледі. Әрбір қатысушыға сертификат табысталады. Бұған қоса, үздік қатысушылар серіктестерімізден жұмысқа шақырту немесе тағылымдамадан өту мүмкіндігін ала алады.",
    "faq.q8": "Сұрағыма жауап таппадым. Не істеймін?",
    "faq.a8":
      'Біздің <a href="https://t.me/wish_nuacmw" target="_blank" rel="noopener noreferrer">Telegram чатына</a> қосылып сұрағыңызды қойыңыз немесе бізге электрондық пошта арқылы жазыңыз: <a href="https://mail.google.com/mail/u/0/?fs=1&to=acm_w@nu.edu.kz&su&body&tf=cm" target="_blank" rel="noopener noreferrer">acm_w@nu.edu.kz</a>.',
    "faq.instagram": "Instagram",
    "faq.telegram": "Telegram",
    "faq.youtube": "Youtube",
    "faq.email": "Email",
    "faq.copyright": "© 2026 NU ACM-W SC. Барлық құқықтар қорғалған.",
    "faq.q9": "WISH ұйымдастырушысы кім?",
    "faq.a9":
      "Іс-шараның ұйымдастырушысы - NU ACM-W Student Chapter, Қазақстан мен Орталық Азиядағы ACM-Women ұйымының алғашқы және жалғыз студенттік бөлімшесі. Біздің миссиямыз - әйелдерді STEM салаларында, әсіресе IT бағытында қолдау, әлеуметтік, кәсіби және техникалық тұрғыдан дамуға бағытталған бастамалар арқылы олардың дамуына ықпал ету.",
    "faq.q10": "Қыздарға арналған басқа іс-шаралар бар ма?",
    "faq.a10":
      'Иә! NU ACM-W SC жыл сайын Women\'s Hack Day - дизайн, математика және бағдарламалау бойынша командалық жарыс, CodeW - спорттық бағдарламалау бойынша жеке жарыс және Code Girl Summer - веб-әзірлеу бойынша екі апталық лагерь сияқты шаралар ұйымдастырады. Толық ақпарат біздің <a href="https://t.me/nu_acm_w" target="_blank" rel="noopener noreferrer">Telegram</a> және <a href="https://www.instagram.com/nuacm_wsc/" target="_blank" rel="noopener noreferrer">Instagram</a> парақшаларымызда.',

    // ── Footer ──
    "footer.description":
      "<b>NU ACM-W Student Chapter</b> - Назарбаев Университетінде орналасқан халықаралық ACM-Women ұйымының Қазақстан мен Орталық Азиядағы алғашқы студенттік бөлімшесі. 2017 жылдан бастап біз түрлі іс-шаралар ұйымдастыру арқылы STEM саласындағы қыздарға әлеуметтік және кәсіби қолдау көрсетіп келеміз.",
    "footer.copyright": "© 2026 NU ACM-W SC. Барлық құқықтар қорғалған.",

    // ── Auth ──
    "auth.signIn": "КІРУ",
    "auth.enterCode": "КОДТЫ ЕНГІЗІҢІЗ",
    "auth.codeSent": "Біз 6 санды код жібердік:",
    "auth.email": "Email",
    "auth.emailPlaceholder": "you@example.com",
    "auth.sending": "ЖІБЕРІЛУДЕ...",
    "auth.continue": "ЖАЛҒАСТЫРУ",
    "auth.verificationCode": "Растау коды",
    "auth.otpPlaceholder": "------",
    "auth.verifying": "ТЕКСЕРІЛУДЕ...",
    "auth.verify": "РАСТАУ",
    "auth.codeResent": "Код қайта жіберілді:",
    "auth.sendAgain": "Қайта жіберу",
    "auth.differentEmail": "Басқа email пайдалану",
    "auth.failedSend": "Кодты жіберу мүмкін болмады.",
    "auth.invalidCode": "Қате код.",
    "auth.unexpectedError": "Күтпеген қате орын алды.",

    // ── Registration Form ──
    "reg.firstName": "аты:",
    "reg.lastName": "тегі:",
    "reg.placeOfStudy": "оқу орны:",
    "reg.city": "қала:",
    "reg.educationLevel": "білім деңгейі:",
    "reg.school": "Мектеп оқушысы (16+ жас)",
    "reg.college": "Колледж",
    "reg.bachelor": "Бакалавриат",
    "reg.master": "Магистратура",
    "reg.iin": "ЖСН:",
    "reg.phone": "телефон нөмірі:",
    "reg.parentPhone": "ата-ананың телефон нөмірі:",
    "reg.parentPhoneOptional": "ата-ананың телефон нөмірі (міндетті емес):",
    "reg.cvDropbox": "CV жүктеу (міндетті емес)",
    "reg.cvHint": "Тек PDF · макс 2 МБ",
    "reg.ageConfirm":
      "Менің жасым 16-дан асқанын және мінез-құлық кодексімен келісетінімді растаймын",
    "reg.ageConfirmPre": "Менің жасым 16-дан асқанын және мен келісемін",
    "reg.codeOfConduct": "мінез-құлық кодексімен",
    "reg.register": "Тіркелу",
    "reg.pdfOnly": "Тек PDF файлдар рұқсат етіледі",
    "reg.cvSizeLimit": "CV файлы 2 МБ-тан аспауы керек",
    "reg.pleaseConfirmAge":
      "Жасыңыздың 16-дан асқанын және мінез-құлық кодексімен келісетініңізді растаңыз",
    "reg.failed": "Тіркелу қатесі",
    "reg.cvFailed": "CV жүктеу қатесі",

    // ── Registration Page ──
    "regPage.loading": "Жүктелуде...",
    "regPage.redirecting": "Қайта бағытталуда...",

    // ── Team Page ──
    "team.loading": "Жүктелуде...",
    "team.createTeam": "КОМАНДА ҚҰРУ",
    "team.noTeamYet":
      "Сіз әлі ешбір командада жоқсыз. Команда құрыңыз немесе шақыру сілтемесі арқылы қосылыңыз.",
    "team.teamName": "Команда аты",
    "team.enterTeamName": "Команда атын енгізіңіз",
    "team.creating": "Құрылуда...",
    "team.createTeamBtn": "КОМАНДА ҚҰРУ",
    "team.instructions": "НҰСҚАУЛАР",
    "team.instr1":
      "1. Команда құрыңыз немесе шақыру сілтемесі арқылы қосылыңыз.",
    "team.instr2": "2. Шақыру сілтемесін командаластарыңызбен бөлісіңіз.",
    "team.instr3": "3. Команда құрамында 2-ден 4 қатысушыға дейін болуы керек.",
    "team.instr4": "4. Команда капитаны мүшелерді командадан шығара алады.",
    "team.instr5": "5. Команданы тек капитан тарата алады.",
    "team.roleCaptain": "капитан",
    "team.roleMember": "қатысушы",
    "team.roleRequest": "өтінім",
    "team.enterTeamNameLabel": "Атауды енгізіңіз:",
    "team.save": "САҚТАУ",
    "team.participants": "ҚАТЫСУШЫЛАР",
    "team.copyInvite": "СІЛТЕМЕНІ КӨШІРУ",
    "team.copied": "КӨШІРІЛДІ!",
    "team.dissolve": "ТАРАТУУ",
    "team.leave": "КОМАНДАДАН ШЫҒУ",
    "team.teamVideos": "КОМАНДА ВИДЕОЛАРЫ",
    "team.failedCreate": "Команда құру мүмкін болмады",
    "team.failedInviteLink": "Шақыру сілтемесін алу мүмкін болмады",
    "team.failedCopy": "Сілтемені көшіру мүмкін болмады.",
    "team.actionFailed": "Әрекет орындалмады",
    "team.failedRemove": "Қатысушыны жою мүмкін болмады",
    "team.failedRename": "Команданы қайта атау мүмкін болмады",
    "team.renamedSuccess": "Команда сәтті қайта аталды!",
    "team.failedLeave": "Командадан шығу мүмкін болмады",
    "team.failedDissolve": "Команданы тарату мүмкін болмады",

    // ── Invite Page ──
    "invite.loading": "Жүктелуде...",
    "invite.invalidLink": "Жарамсыз шақыру сілтемесі.",
    "invite.failedProcess": "Шақыруды өңдеу мүмкін болмады.",
    "invite.joinedFallback": "Сіз командаға қосылдыңыз!",
    "invite.joinedTitle": "ҚОСЫЛДЫҢЫЗ",
    "invite.joinedMessage": "Сіз командаға сәтті қосылдыңыз!",
    "invite.errorTitle": "ҚАТЕ",
    "invite.teamPage": "КОМАНДА БЕТІ",

    // ── Pending Invites ──
    "team.pendingTitle": "ШАҚЫРУЛАР",
    "team.accept": "Қабылдау",
    "team.reject": "Қабылдамау",

    // ── Page titles ──
    "page.home": "WISH",
    "page.team": "Команда",
    "page.registration": "Тіркелу",
    "page.invite": "Командаға шақыру",

    // ── Videos page ──
    "videos.title": "ВИДЕО САБАҚТАР",
    "videos.introBefore": "Бұл видеоларды ",
    "videos.datasciClubName": "NU DataSci Club",
    "videos.introAfter":
      " хакатон алдында ең қажетті дағдыларды меңгеруге көмектесу үшін дайындады. Үздік жоба жасау және жарысқа дайындалу үшін ең пайдалы кеңестер мен стратегияларды үйреніңіз.",
    "videos.video1Title": "Хакатонда қалай жеңіске жетуге болады?",
    "videos.video1Desc":
      "Бірінші видео хакатонның толық процесін түсіндіреді: шағын әрі тиімді команда құрудан бастап, жеңісті 3 минуттық питчке (жобаны таныстыруға) дейін. Сіз техникалық күрделілікке емес, жұмыс істеп тұрған демо-нұсқаға назар аударуды және қазылар алқасының сұрақтарына сенімді жауап беруді үйренесіз.",
    "videos.video2Title": "AI-агенттермен архитектор ретінде жұмыс істеу",
    "videos.video2Desc":
      "Бұл видео сізді «Vibe Coding» тұжырымдамасымен таныстырады, мұнда сіз жүйелік архитектор ретінде логиканы жобалап, жасанды интеллект үшін нақты техникалық тапсырмалар жасайсыз. Сіз қателердің (багтардың) негізгі себебін тауып, AI-агенттерді дұрыс шешімге бағыттау арқылы оларды тиімді түзетуді үйренесіз.",
    "videos.video3Title": "Тиімді жұмыс процесі және құралдар жиынтығы",
    "videos.video3Desc":
      "Енді сіз Cursor немесе Claude сияқты AI-агенттерін код жазу мен талдау үшін қолдану арқылы жұмысты қалай тездетуге болатынын түсінесіз. Біз дұрыс технологиялық стекті (React, FastAPI, PyTorch) таңдауды және жобаны артық функциялармен күрделендірмей, жұмыс істеп тұрған прототипке назар аударудың маңыздылығын талқылаймыз.",
    "videos.video4Title": "Жылдам прототиптеуге арналған дайын модельдер",
    "videos.video4Desc":
      "Уақытты үнемдеу және жоғары нәтижеге жету үшін дайын (pretrained) модельдерді пайдалану неліктен ең тиімді стратегия екенін қарастырамыз. Түрлі тапсырмаларға арналған танымал модельдермен танысып, сапалы демо жасау үшін модельді тез арада қосымша оқытудың нақты мысалын көресіз.",
    "videos.video5Title": "Git арқылы нұсқаларды бақылау",
    "videos.video5Desc":
      "Соңында біз жобаңызды қауіпсіз сақтау және командада тиімді жұмыс істеу үшін GitHub-ты қалай қолдану керектігін көрсетеміз. Сіз кодтың жұмыс істеп тұрған нұсқаларын сақтауды, эксперименттер үшін тармақтарды (branches) қолдануды және команданың өзгерістерін біріктіру кезіндегі қақтығыстарды шешуді үйренесіз.",
    "videos.outro1":
      "Біздің видеосабақтар осымен аяқталды! Бұл білім хакатонды сенімді түрде өткізуге көмектеседі деп үміттенеміз. Назарларыңызды сапалы прототип жасауға аударып, тапсырма талаптарын орындаңыз және жасанды интеллектіні басты көмекші ретінде пайдаланыңыз.",
    "videos.outro2": "DON'T JUST WISH. BUILD IT.",
    "videos.outro3":
      "Бұл - шабытты нәтижеге, ал кодты шындыққа айналдыратын сәт. Сіздер жасаған керемет жобаларды көруге асықпыз. Өз идеяңызға сеніңіз, командаңызға арқа сүйеңіз және алға ұмтылыңыз!",
    "videos.outro4Before": "Сәттілік - ",
    "videos.outro4Wish": "WISH",
    "videos.outro4After": "те кездескенше!",
    "videos.linksTitle": "Пайдалы сілтемелер",
    "videos.link1Title": "GitHub Student Developer Pack",
    "videos.link1Desc":
      "GitHub Copilot Pro және басқа да премиум құралдарға тегін қолжетімділік алыңыз.",
    "videos.link2Title": "Cursor & Claude",
    "videos.link2Cursor": "Cursor",
    "videos.link2Claude": "Claude",
    "videos.link2Desc":
      "Жылдам әзірлеуге арналған ең тиімді AI-редакторлар мен агенттер.",
    "videos.link3Title": "Hugging Face",
    "videos.link3Desc":
      "Прототипіңізді жылдам іске қосу үшін дайын модельдерді (мәтін, кескін, аудио) іздеуге арналған негізгі платформа.",
    "videos.link4Title": "YOLO by Ultralytics",
    "videos.link4Desc":
      "Компьютерлік көру және нысандарды тану тапсырмаларын жылдам шешуге арналған қуатты құрал.",
    "videos.link5Title": "FastAPI Documentation",
    "videos.link5Desc":
      "Жобаңыздың бэкендін жасауға арналған жылдам әрі заманауи фреймворк.",
    "videos.link6Title": "Git & GitHub Guide",
    "videos.link6Desc":
      "Командалық жұмыс үшін тармақтармен жұмыс істеу және нұсқаларды бақылау бойынша нұсқаулық.",
  },
} as const;

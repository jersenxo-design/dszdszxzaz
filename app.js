/* QalaPass — front-end demo. Авторизация хранится в localStorage (не для настоящей безопасности). */
const CONTACTS={telegram:"https://t.me/jerryzzxo",telegramName:"@jerryzzxo",email:"jersenxo@gmail.com",whatsapp:"https://wa.me/77075599068",whatsappName:"+7 707 559 9068"};
const IMG=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
/* verified:true — дата подтверждена источником. Остальные — реальные площадки с регулярной программой: актуальные даты и цены смотри у организатора. */
const events=[
{id:"malikov",type:"concert",category:"Концерт",tag:"LIVE",title:"Юбилейный концерт Дмитрия Маликова",date:"17 ноября",ts:"2026-11-17",place:"Дворец Республики · Алматы",city:"Алматы",price:null,image:IMG("photo-1501386761578-eac5c94b800a"),desc:"Юбилейный тур к 55-летию артиста: живой звук, световое шоу и хиты, которые знают несколько поколений.",url:"https://sxodim.com/almaty/event/yubileynyy-koncert-dmitriya-malikova-v-almaty",verified:true},
{id:"qazaqconcert",type:"concert",category:"Концерт",tag:"LIVE",title:"Концерты в ЦКЗ «Казахстан»",date:"По афише зала",ts:"2027-01-01",place:"ЦКЗ «Казахстан» · Астана",city:"Астана",price:null,image:IMG("photo-1511192336575-5a79af67a629"),desc:"Главная концертная площадка столицы: поп, эстрада, классика и большие гастроли. Выбери вечер в афише зала.",url:"https://sxodim.com/astana",verified:false},
{id:"punch",type:"comedy",category:"Стендап",tag:"STAND-UP",title:"Вечера стендапа в Punch StandUp Club",date:"Регулярно, по выходным",ts:"2027-01-02",place:"Punch StandUp Club · Алматы",city:"Алматы",price:null,image:IMG("photo-1585699324551-f6c309eedeca"),desc:"Камерный зал, близкая сцена, бар и комики, которые проверяют свежий материал. Состав меняется — смотри актуальный в инстаграме клуба.",url:"https://sxodim.com/almaty",verified:false},
{id:"central",type:"comedy",category:"Стендап",tag:"STAND-UP",title:"Almaty Central Stand Up Club",date:"Регулярно",ts:"2027-01-03",place:"Almaty Central Stand Up Club · Алматы",city:"Алматы",price:null,image:IMG("photo-1527224538127-2104bb71c51b"),desc:"Один из самых больших стендап-клубов Центральной Азии. Шоу с известными комиками, 18+.",url:"https://sxodim.com/almaty",verified:false},
{id:"abai",type:"theatre",category:"Опера и балет",tag:"THEATRE",title:"Театр оперы и балета им. Абая",date:"По репертуару театра",ts:"2027-01-04",place:"Театр им. Абая · Алматы",city:"Алматы",price:null,image:IMG("photo-1503095396549-807759245b35"),desc:"Главная оперная сцена юга страны: классический балет, опера и гала-концерты в историческом здании.",url:"https://sxodim.com/almaty",verified:false},
{id:"bohme",type:"theatre",category:"Театр",tag:"THEATRE",title:"Театр La Bohême",date:"По афише театра",ts:"2027-01-05",place:"Театр La Bohême · Алматы",city:"Алматы",price:null,image:IMG("photo-1507676184212-d03ab07a01bf"),desc:"Камерные постановки и современный театр в Алматы. Подходит, если хочется театра без пафоса.",url:"https://sxodim.com/almaty",verified:false},
{id:"astanaopera",type:"theatre",category:"Опера и балет",tag:"THEATRE",title:"Астана Опера",date:"По репертуару театра",ts:"2027-01-06",place:"Астана Опера · Астана",city:"Астана",price:null,image:IMG("photo-1508700115892-45ecd05ae2ad"),desc:"Один из самых узнаваемых театров страны: оперные премьеры, балет и концерты симфонического оркестра.",url:"https://sxodim.com/astana",verified:false},
{id:"chaplin",type:"cinema",category:"Кино",tag:"CINEMA",title:"Новинки проката в Chaplin Cinemas",date:"Сеансы каждый день",ts:"2027-01-07",place:"Chaplin MEGA · Алматы",city:"Алматы",price:null,image:IMG("photo-1489599849927-2ee91cede3ba"),desc:"Свежие премьеры на большом экране. Расписание и цены на сеансы — на сайте кинотеатра.",url:"https://sxodim.com/almaty",verified:false},
{id:"kinopark",type:"cinema",category:"Кино",tag:"CINEMA",title:"Кино в Kinopark · Астана",date:"Сеансы каждый день",ts:"2027-01-08",place:"Kinopark · Астана",city:"Астана",price:null,image:IMG("photo-1478720568477-152d9b164e26"),desc:"Премьеры, IMAX и семейные сеансы. Выбирай фильм и время в расписании кинотеатра.",url:"https://sxodim.com/astana",verified:false}
];
/* ---------- ПЕРЕВОДЫ: ключ = русский текст ---------- */
const TR={};const add=(ru,kk,en)=>{TR[ru]={kk,en}};
/* меню и общее */
add("Главная","Басты бет","Home");add("Афиша","Афиша","What's on");add("Туры","Турлар","Trips");add("О нас","Біз туралы","About");add("Выйти","Шығу","Log out");
add("Собирай впечатления, а не чеки.","Чек емес, әсер жина.","Collect memories, not receipts.");
add("Алматы","Алматы","Almaty");add("Астана","Астана","Astana");add("Шымкент","Шымкент","Shymkent");add("Караганда","Қарағанды","Karaganda");
/* главная */
add("ТВОЙ ГОРОД. ТВОИ ВПЕЧАТЛЕНИЯ.","СЕНІҢ ҚАЛАҢ. СЕНІҢ ӘСЕРЛЕРІҢ.","YOUR CITY. YOUR KIND OF FUN.");
add("Планы, которые","Есте қалатын","Plans worth");add("запомнятся.","жоспарлар.","remembering.");
add("Концерты, театр, кино и маленькие путешествия — выбирай настроение, остальное мы уже нашли.","Концерттер, театр, кино және шағын саяхаттар — көңіл күйіңді таңда, қалғанын біз таптық.","Gigs, theatre, movies and little escapes — pick a mood, we've found the rest.");
add("Найти событие ↗","Іс-шара табу ↗","Find an event ↗");add("Исследовать туры →","Турларды көру →","Explore trips →");
add("Город звучит","Қала саздай","The city is humming");add("Музыка · Алматы","Музыка · Алматы","Music · Almaty");
add("✳ ВЫХОДИ ИЗ ДОМА ✳ СОБИРАЙ ВПЕЧАТЛЕНИЯ ✳ ОТКРЫВАЙ СВОЙ ГОРОД ✳ ВЫХОДИ ИЗ ДОМА ✳ СОБИРАЙ ВПЕЧАТЛЕНИЯ ✳ ОТКРЫВАЙ СВОЙ ГОРОД ✳","✳ ҮЙДЕН ШЫҒ ✳ ӘСЕР ЖИНА ✳ ҚАЛАҢДЫ АШ ✳ ҮЙДЕН ШЫҒ ✳ ӘСЕР ЖИНА ✳ ҚАЛАҢДЫ АШ ✳","✳ GO OUT ✳ COLLECT MEMORIES ✳ EXPLORE YOUR CITY ✳ GO OUT ✳ COLLECT MEMORIES ✳ EXPLORE YOUR CITY ✳");
add("Что тебе по душе?","Саған не ұнайды?","What are you in the mood for?");add("Вся афиша ↗","Барлық афиша ↗","All events ↗");
add("Концерты","Концерттер","Concerts");add("Живая музыка и большие сцены","Жанды музыка мен үлкен сахна","Live music, big stages");
add("Театр","Театр","Theatre");add("Истории, которые трогают","Жүрекке жететін оқиғалар","Stories that stay with you");
add("Кино","Кино","Cinema");add("Большой экран, полный эффект","Үлкен экран, ерекше әсер","The big screen experience");
add("Сменить картинку за день","Бір күнде жаңа әсер","A change of scenery in a day");add("Сейчас в афише","Қазір афишада","Now on");
add("Пусть хорошие планы","Жақсы жоспарлар","Let good plans");add("приходят сами.","өзі келсін.","come to you.");
add("Раз в неделю — подборка событий.","Аптасына бір рет — іс-шаралар топтамасы.","Once a week — a shortlist of events.");
add("ТВОЯ ПОЧТА","ПОШТАҢ","YOUR EMAIL");add("Никакого спама.","Спам жоқ.","No spam.");
add("Ты в списке! (демо — рассылка пока не подключена)","Тізімдесің! (демо — жіберу әзірге қосылмаған)","You're on the list! (demo — newsletter isn't connected yet)");
/* афиша */
add("Не жди особого повода. Выбери, куда отправиться на этой неделе.","Ерекше себеп күтпе. Осы аптада қайда барарыңды таңда.","Don't wait for a reason. Pick where to go this week.");
add("Найти событие, артиста или место…","Іс-шара, әртіс немесе орын іздеу…","Search an event, artist or venue…");
add("Все категории","Барлық санаттар","All categories");add("Стендап","Стендап","Stand-up");
add("Сначала ближайшие","Алдымен жақындары","Soonest first");add("Сначала мой город","Алдымен менің қалам","My city first");
add("Подбираем события…","Іс-шараларды таңдап жатырмыз…","Finding events…");add("сохранено","сақталды","saved");add("Найдено:","Табылды:","Found:");
add("Пока ничего не нашли","Әзірге ештеңе табылмады","Nothing found yet");add("Попробуй изменить запрос или категорию.","Сұранысты немесе санатты өзгертіп көр.","Try changing your search or category.");
add("Сбросить фильтры","Сүзгілерді тастау","Reset filters");add("Сохранённое","Сақталғандар","Saved");
add("Нажми ♡ на карточке, чтобы не потерять","Жоғалтпау үшін карточкадағы ♡ басып қой","Tap ♡ on a card to keep it");
add("Здесь пока пусто — нажми ♡ на карточке.","Мұнда әзірге бос — карточкадағы ♡ бас.","Nothing here yet — tap ♡ on a card.");
/* карточки и страница события */
add("Подробнее ↗","Толығырақ ↗","Details ↗");add("Цена у организатора","Бағасы — ұйымдастырушыда","Price from the organiser");
add("✓ дата подтверждена","✓ күні расталған","✓ date confirmed");add("← Назад к афише","← Афишаға оралу","← Back to events");
add("Дата","Күні","Date");add("Место","Орны","Venue");add("Город","Қала","City");add("Билеты","Билеттер","Tickets");
add("Билеты и расписание ↗","Билеттер мен кесте ↗","Tickets & schedule ↗");add("Оставить заявку","Өтінім қалдыру","Leave a request");
add("Дата подтверждена по афише организатора.","Күні ұйымдастырушы афишасы бойынша расталған.","Date confirmed from the organiser's listing.");
add("Точные даты и цены уточняй на сайте организатора — программа площадки обновляется.","Нақты күндер мен бағаны ұйымдастырушы сайтынан нақтыла — алаң бағдарламасы жаңарып тұрады.","Check exact dates and prices on the organiser's site — the venue's programme changes.");
add("Концерт","Концерт","Concert");add("Опера и балет","Опера және балет","Opera & ballet");
add("17 ноября","17 қараша","17 November");add("По афише зала","Зал афишасы бойынша","See the hall's listings");add("Регулярно, по выходным","Үнемі, демалыс күндері","Regularly, on weekends");add("Регулярно","Үнемі","Regularly");
add("По репертуару театра","Театр репертуары бойынша","See the theatre's repertoire");add("По афише театра","Театр афишасы бойынша","See the theatre's listings");add("Сеансы каждый день","Сеанстар күн сайын","Screenings every day");
add("Юбилейный концерт Дмитрия Маликова","Дмитрий Маликовтың мерейтойлық концерті","Dmitry Malikov's anniversary concert");
add("Юбилейный тур к 55-летию артиста: живой звук, световое шоу и хиты, которые знают несколько поколений.","Әртістің 55 жылдығына арналған мерейтойлық тур: жанды дыбыс, жарық шоуы және бірнеше буын білетін хиттер.","Anniversary tour for the artist's 55th birthday: live sound, a light show and hits several generations know.");
add("Концерты в ЦКЗ «Казахстан»","«Қазақстан» ОКЗ-дағы концерттер","Concerts at Qazaqstan Concert Hall");
add("Главная концертная площадка столицы: поп, эстрада, классика и большие гастроли. Выбери вечер в афише зала.","Елорданың басты концерт алаңы: поп, эстрада, классика және үлкен гастрольдер. Зал афишасынан кеш таңда.","The capital's main concert venue: pop, classics and big tours. Pick an evening in the hall's listings.");
add("Вечера стендапа в Punch StandUp Club","Punch StandUp Club-тағы стендап кештері","Stand-up nights at Punch StandUp Club");
add("Камерный зал, близкая сцена, бар и комики, которые проверяют свежий материал. Состав меняется — смотри актуальный в инстаграме клуба.","Шағын зал, жақын сахна, бар және жаңа материалды сынайтын комиктер. Құрам өзгеріп тұрады — өзектісін клуб инстаграмынан қара.","Intimate room, close stage, a bar and comedians testing fresh material. The line-up changes — check the club's Instagram.");
add("Один из самых больших стендап-клубов Центральной Азии. Шоу с известными комиками, 18+.","Орталық Азиядағы ең үлкен стендап-клубтардың бірі. Белгілі комиктермен шоу, 18+.","One of the biggest stand-up clubs in Central Asia. Shows with well-known comedians, 18+.");
add("Театр оперы и балета им. Абая","Абай атындағы опера және балет театры","Abai Opera and Ballet Theatre");
add("Главная оперная сцена юга страны: классический балет, опера и гала-концерты в историческом здании.","Елдің оңтүстігіндегі басты опера сахнасы: классикалық балет, опера және гала-концерттер тарихи ғимаратта.","The main opera stage of the south: classical ballet, opera and gala concerts in a historic building.");
add("Театр La Bohême","La Bohême театры","La Bohême Theatre");add("Астана Опера","Астана Опера","Astana Opera");
add("Камерные постановки и современный театр в Алматы. Подходит, если хочется театра без пафоса.","Алматыдағы камералық қойылымдар мен заманауи театр. Пафоссыз театр қалағанға лайық.","Intimate productions and contemporary theatre in Almaty. Good if you want theatre without the pomp.");
add("Один из самых узнаваемых театров страны: оперные премьеры, балет и концерты симфонического оркестра.","Елдің ең танымал театрларының бірі: опера премьералары, балет және симфониялық оркестр концерттері.","One of the country's most recognisable theatres: opera premieres, ballet and symphony orchestra concerts.");
add("Новинки проката в Chaplin Cinemas","Chaplin Cinemas-тағы жаңа фильмдер","New releases at Chaplin Cinemas");
add("Свежие премьеры на большом экране. Расписание и цены на сеансы — на сайте кинотеатра.","Үлкен экрандағы жаңа премьералар. Сеанс кестесі мен бағасы — кинотеатр сайтында.","Fresh premieres on the big screen. Showtimes and prices are on the cinema's website.");
add("Кино в Kinopark · Астана","Kinopark-тағы кино · Астана","Cinema at Kinopark · Astana");
add("Премьеры, IMAX и семейные сеансы. Выбирай фильм и время в расписании кинотеатра.","Премьералар, IMAX және отбасылық сеанстар. Фильм мен уақытты кинотеатр кестесінен таңда.","Premieres, IMAX and family screenings. Pick a film and time in the cinema's schedule.");
add("Дворец Республики · Алматы","Республика сарайы · Алматы","Palace of the Republic · Almaty");add("ЦКЗ «Казахстан» · Астана","«Қазақстан» ОКЗ · Астана","Qazaqstan Concert Hall · Astana");
add("Punch StandUp Club · Алматы","Punch StandUp Club · Алматы","Punch StandUp Club · Almaty");add("Almaty Central Stand Up Club · Алматы","Almaty Central Stand Up Club · Алматы","Almaty Central Stand Up Club · Almaty");
add("Театр им. Абая · Алматы","Абай атындағы театр · Алматы","Abai Theatre · Almaty");add("Театр La Bohême · Алматы","La Bohême театры · Алматы","La Bohême Theatre · Almaty");
add("Астана Опера · Астана","Астана Опера · Астана","Astana Opera · Astana");add("Chaplin MEGA · Алматы","Chaplin MEGA · Алматы","Chaplin MEGA · Almaty");add("Kinopark · Астана","Kinopark · Астана","Kinopark · Astana");
/* модалка */
add("Твой следующий выход","Келесі шығуың","Your next night out");add("Оставь контакты, и мы расскажем детали.","Байланыс қалдыр, біз мәліметін айтамыз.","Leave your contacts and we'll share the details.");
add("Как к тебе обращаться?","Саған қалай жүгінейін?","What should we call you?");add("Имя","Аты","Name");add("Телефон или e-mail","Телефон немесе e-mail","Phone or e-mail");add("+7 … или почта","+7 … немесе пошта","+7 … or email");
add("Сколько человек?","Неше адам?","How many people?");add("1 человек","1 адам","1 person");add("2 человека","2 адам","2 people");add("3 человека","3 адам","3 people");add("4+ человека","4+ адам","4+ people");
add("Отправить заявку ↗","Өтінім жіберу ↗","Send request ↗");add("Демо-форма: заявка никуда не отправляется.","Демо-форма: өтінім ешқайда жіберілмейді.","Demo form: nothing is actually sent.");
add("Оставь контакты — мы свяжемся с тобой.","Байланыс қалдыр — өзіміз хабарласамыз.","Leave your contacts — we'll get in touch.");add("Оставь контакты — мы расскажем детали тура.","Байланыс қалдыр — тур мәліметін айтамыз.","Leave your contacts — we'll share the tour details.");
add("Заявка:","Өтінім:","Request:");add("Заявка принята (демо). Быстрее — напиши в","Өтінім қабылданды (демо). Жылдамырақ — мына жерге жаз:","Request received (demo). Faster — message us on");
/* туры */
add("Иногда нужно","Кейде керек","Sometimes you need to");add("просто","жай ғана","just");add("уехать.","кету.","leave.");
add("Горы, каньоны, озёра и места, где телефон сам просится в авиарежим.","Таулар, шатқалдар, көлдер және телефон өзі ұшақ режиміне сұранатын жерлер.","Mountains, canyons, lakes and places where your phone asks for airplane mode.");
add("Выбрать маршрут ↘","Бағыт таңдау ↘","Pick a route ↘");add("Куда сбежим?","Қайда қашамыз?","Where shall we escape?");
add("Реальные места Казахстана · цены и даты уточняй у организатора","Қазақстанның нақты орындары · баға мен күнді ұйымдастырушыдан нақтыла","Real places in Kazakhstan · check prices and dates with the organiser");
add("Кольсай и Каинды","Көлсай және Қайыңды","Kolsai & Kaindy");add("Чарынский каньон","Шарын шатқалы","Charyn Canyon");add("Бурабай","Бурабай","Burabay");add("Туркестан","Түркістан","Turkistan");add("Большое Алматинское озеро","Үлкен Алматы көлі","Big Almaty Lake");
add("ХИТ СЕЗОНА","МАУСЫМ ХИТІ","SEASON HIT");add("1–2 дня","1–2 күн","1–2 days");add("1 день","1 күн","1 day");add("2 дня","2 күн","2 days");add("полдня","жарты күн","half a day");
add("⛰ Алматинская область","⛰ Алматы облысы","⛰ Almaty Region");add("🏜 Долина замков","🏜 Қамалдар алқабы","🏜 Valley of Castles");add("🌲 Акмолинская область","🌲 Ақмола облысы","🌲 Akmola Region");add("🕌 Туркестанская область","🕌 Түркістан облысы","🕌 Turkistan Region");add("🏔 Рядом с Алматы","🏔 Алматыға жақын","🏔 Near Almaty");
add("Бирюзовые озёра, затопленный лес и дорога, ради которой стоит встать пораньше.","Көгілдір көлдер, суға батқан орман және ерте тұруға тұратын жол.","Turquoise lakes, a sunken forest and a road worth waking up early for.");
add("Красные скалы, простор и ощущение, будто ты попал на другую планету.","Қызыл жартастар, кең дала және басқа планетаға түскендей сезім.","Red cliffs, open space and the feeling of landing on another planet.");
add("Сосновый воздух, озеро на рассвете и вечер без спешки.","Қарағайлы ауа, таң атқандағы көл және асықпайтын кеш.","Pine air, a lake at sunrise and an unhurried evening.");
add("Мавзолей Ходжи Ахмеда Ясави, древние легенды и южное гостеприимство.","Қожа Ахмет Ясауи кесенесі, ежелгі аңыздар және оңтүстіктің қонақжайлығы.","The Khoja Ahmed Yasawi Mausoleum, ancient legends and southern hospitality.");
add("Высокогорное озеро в часе от города — подходит для спонтанной поездки.","Қаладан бір сағаттық жердегі биік таулы көл — кенеттен шығатын сапарға лайық.","A high-mountain lake an hour from the city — perfect for a spontaneous trip.");
add("Цену уточняй","Бағасын нақтыла","Check the price");add("Оставить заявку ↗","Өтінім қалдыру ↗","Leave a request ↗");
add("Лучшие выходные — не те, что запланированы идеально, а те, о которых потом рассказываешь.","Ең жақсы демалыс — мінсіз жоспарланғаны емес, кейін айтып жүретінің.","The best weekends aren't the perfectly planned ones — they're the ones you tell stories about.");
add("— команда QalaPass","— QalaPass командасы","— the QalaPass team");
/* о нас */
add("Город больше,","Қала сенің","The city is bigger");add("чем твой","маршрутыңнан","than your");add("маршрут.","үлкенірек.","route.");
add("QalaPass — это способ чаще говорить «да»: новому месту, живой музыке, спонтанной поездке и вечеру, который внезапно стал лучшим за месяц.","QalaPass — жаңа орынға, жанды музыкаға, кенет сапарға және айдың ең жақсы кешіне жиірек «иә» деудің жолы.","QalaPass is a way to say “yes” more often: to a new place, live music, a spontaneous trip and an evening that suddenly became the best of the month.");
add("Меньше искать","Аз іздеу","Search less");add("Собираем события и поездки в одном месте, чтобы ты тратил время на выбор, а не на вкладки браузера.","Іс-шара мен сапарларды бір жерге жинаймыз — уақытыңды браузер беттеріне емес, таңдауға жұмса.","We gather events and trips in one place so you spend time choosing, not juggling browser tabs.");
add("Больше чувствовать","Көбірек сезіну","Feel more");add("От камерных концертов до маршрутов с видом на горы — впечатления не обязаны быть дорогими.","Шағын концерттерден таулы маршруттарға дейін — әсер қымбат болуы шарт емес.","From intimate gigs to routes with mountain views — experiences don't have to be expensive.");
add("Открывать рядом","Жақыннан ашу","Discover nearby");add("Алматы, Астана, Шымкент, Караганда — у каждого города свой характер и куча поводов выйти.","Алматы, Астана, Шымкент, Қарағанды — әр қаланың өз мінезі мен үйден шығуға көп себебі бар.","Almaty, Astana, Shymkent, Karaganda — every city has its own character and plenty of reasons to go out.");
add("Есть идея?","Идеяң бар ма?","Got an idea?");add("Мы на связи.","Біз байланыстамыз.","We're in touch.");add("Партнёрство, вопросы или просто классная рекомендация — напиши нам.","Серіктестік, сұрақтар немесе жай керемет ұсыныс — бізге жаз.","Partnership, questions or just a great recommendation — message us.");
/* вход */
add("Твой город.","Сенің қалаң.","Your city.");add("Твои планы.","Сенің жоспарларың.","Your plans.");
add("Войди или создай аккаунт, чтобы видеть афишу, туры и сохранять любимое.","Афиша мен турларды көру және ұнағанды сақтау үшін кіріп немесе аккаунт жаса.","Log in or create an account to see events and trips and save your favourites.");
add("Связь: Telegram @jerryzzxo · jersenxo@gmail.com","Байланыс: Telegram @jerryzzxo · jersenxo@gmail.com","Contact: Telegram @jerryzzxo · jersenxo@gmail.com");
add("Войти","Кіру","Log in");add("Регистрация","Тіркелу","Sign up");add("Почта","Пошта","Email");add("Пароль","Құпиясөз","Password");add("Повтори пароль","Құпиясөзді қайтала","Repeat password");
add("Как тебя зовут?","Атың кім?","What's your name?");add("минимум 6 символов","кемінде 6 таңба","at least 6 characters");add("ещё раз","тағы бір рет","once more");
add("Войти ↗","Кіру ↗","Log in ↗");add("Создать аккаунт ↗","Аккаунт жасау ↗","Create account ↗");add("Демо-режим: аккаунты хранятся только в твоём браузере.","Демо-режим: аккаунттар тек сенің браузеріңде сақталады.","Demo mode: accounts are stored only in your browser.");
add("Пароль — минимум 6 символов","Құпиясөз — кемінде 6 таңба","Password — at least 6 characters");add("Пароли не совпадают","Құпиясөздер сәйкес емес","Passwords don't match");
add("Такой аккаунт уже есть — войди","Мұндай аккаунт бар — кіріп көр","This account already exists — log in");add("Неверная почта или пароль","Пошта немесе құпиясөз қате","Wrong email or password");
const tr=s=>{const l=ls.get("qalaLang","ru");return l==="ru"?s:(TR[s]?.[l]??s)};
const _o=new WeakMap();
function translateDOM(){const l=ls.get("qalaLang","ru"),w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){const p=n.parentNode.tagName;if(p==="SCRIPT"||p==="STYLE")continue;let o=_o.get(n);if(o===undefined){o=n.nodeValue;_o.set(n,o)}const k=o.trim();if(!k)continue;const v=l==="ru"?k:TR[k]?.[l];n.nodeValue=v?o.replace(k,v):o}
  document.querySelectorAll("[placeholder]").forEach(el=>{if(el.dataset.phRu===undefined)el.dataset.phRu=el.getAttribute("placeholder");const k=el.dataset.phRu;el.setAttribute("placeholder",l==="ru"?k:(TR[k]?.[l]||k))})}
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ls={get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
const page=(location.pathname.split("/").pop()||"index.html").toLowerCase();
const price=p=>{if(!p)return tr("Цена у организатора");const n=p.toLocaleString("ru-RU"),l=ls.get("qalaLang","ru");return l==="en"?`from ${n} ₸`:l==="kk"?`${n} ₸-ден`:`от ${n} ₸`};

/* ---------- AUTH ---------- */
async function sha(s){try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))|0;return"x"+h}}
const session=()=>ls.get("qalaSession",null);
function requireAuth(){if(page==="auth.html"){if(session())location.replace("index.html");return}if(!session())location.replace("auth.html")}
function setupAuth(){
  const tabs=$$(".tabs button");if(!tabs.length)return;
  const forms={login:$("#loginForm"),register:$("#registerForm")};
  tabs.forEach(t=>t.addEventListener("click",()=>{tabs.forEach(x=>x.classList.toggle("on",x===t));Object.entries(forms).forEach(([k,f])=>f.classList.toggle("hidden",k!==t.dataset.tab));$$(".auth-error").forEach(e=>e.textContent="")}));
  forms.register.addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(e.target),err=$("#registerError"),email=f.get("email").trim().toLowerCase(),name=f.get("name").trim(),pass=f.get("password");
    if(pass.length<6)return err.textContent=tr("Пароль — минимум 6 символов");if(pass!==f.get("password2"))return err.textContent=tr("Пароли не совпадают");
    const users=ls.get("qalaUsers",{});if(users[email])return err.textContent=tr("Такой аккаунт уже есть — войди");
    users[email]={name,hash:await sha(pass)};ls.set("qalaUsers",users);ls.set("qalaSession",{email,name});location.replace("index.html")});
  forms.login.addEventListener("submit",async e=>{e.preventDefault();const f=new FormData(e.target),err=$("#loginError"),email=f.get("email").trim().toLowerCase(),u=ls.get("qalaUsers",{})[email];
    if(!u||u.hash!==await sha(f.get("password")))return err.textContent=tr("Неверная почта или пароль");ls.set("qalaSession",{email,name:u.name});location.replace("index.html")});
}
function logout(){localStorage.removeItem("qalaSession");location.replace("auth.html")}

/* ---------- CHROME (шапка и подвал) ---------- */
function renderChrome(){
  const h=$("#siteHeader"),f=$("#siteFooter");const s=session();
  const nav=[["index.html","navHome","Главная"],["events.html","navEvents","Афиша"],["tours.html","navTours","Туры"],["about.html","navAbout","О нас"]];
  const active=page==="event.html"?"events.html":page;
  if(h)h.outerHTML=`<header class="site-header"><a class="brand" href="index.html"><span class="brand-mark">Q</span><span>qala<span class="brand-light">pass</span></span></a><nav class="main-nav">${nav.map(n=>`<a href="${n[0]}" data-i18n="${n[1]}" class="${active===n[0]?"active":""}">${n[2]}</a>`).join("")}</nav><div class="header-tools"><select id="citySelect" aria-label="Город"><option value="Алматы">Алматы</option><option value="Астана">Астана</option><option value="Шымкент">Шымкент</option><option value="Караганда">Караганда</option></select><select id="langSelect" aria-label="Language"><option value="ru">RU</option><option value="kk">KZ</option><option value="en">EN</option></select><a class="icon-link" href="events.html#favorites" title="Избранное">♡</a><span class="user-chip">${(s?.name||"").replace(/[<>&]/g,"")}</span><button class="logout-btn" id="logoutBtn" data-i18n="logout">Выйти</button></div><button class="menu-toggle" aria-label="Меню">☰</button></header>`;
  if(f)f.outerHTML=`<footer class="footer"><a class="brand" href="index.html"><span class="brand-mark">Q</span><span>qala<span class="brand-light">pass</span></span></a><span data-i18n="footer">Собирай впечатления, а не чеки.</span><div class="footer-contacts"><a href="${CONTACTS.telegram}" target="_blank" rel="noreferrer">Telegram</a><a href="${CONTACTS.whatsapp}" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:${CONTACTS.email}">E-mail</a></div><small>© 2026 QalaPass</small></footer>`;
}
function setLanguage(l){ls.set("qalaLang",l);document.documentElement.lang=l;$$("#langSelect,#authLang").forEach(x=>x.value=l);renderAll();translateDOM()}
function setupChrome(){
  $("#logoutBtn")?.addEventListener("click",logout);
  $(".menu-toggle")?.addEventListener("click",()=>{$(".main-nav").classList.toggle("open");$(".site-header").classList.toggle("open-tools")});
  const city=$("#citySelect"),lang=$("#langSelect");
  if(city){city.value=ls.get("qalaCity","Алматы");city.addEventListener("change",()=>{ls.set("qalaCity",city.value);renderAll()})}
  if(lang){lang.value=ls.get("qalaLang","ru");lang.addEventListener("change",()=>setLanguage(lang.value))}
}

/* ---------- EVENTS ---------- */
const favs=()=>ls.get("qalaFavorites",[]);
function cardHTML(e){const s=favs().includes(e.id);return`<article class="event-card reveal"><a href="event.html?id=${e.id}" class="event-image"><img src="${e.image}" alt="${e.title}" loading="lazy" onerror="this.remove()"><span class="event-type">${e.tag}</span><span class="date-badge">${e.date}</span></a><button class="favorite-btn ${s?"saved":""}" data-fav="${e.id}" aria-label="В избранное">${s?"♥":"♡"}</button><div class="event-info"><div class="event-meta"><span>${e.category}</span><span>${e.city}</span></div><h3><a href="event.html?id=${e.id}">${e.title}</a></h3><p>${tr(e.desc).slice(0,95)}…</p><div class="event-bottom"><span>${price(e.price)}${e.verified?' <span class="verified">✓ дата подтверждена</span>':""}</span><a href="event.html?id=${e.id}">Подробнее ↗</a></div></div></article>`}
function sortByCity(a){const c=ls.get("qalaCity","Алматы");return[...a].sort((x,y)=>(y.city===c)-(x.city===c)||x.ts.localeCompare(y.ts))}
function bindFav(){$$("[data-fav]").forEach(b=>b.onclick=()=>{let f=favs(),id=b.dataset.fav;f=f.includes(id)?f.filter(x=>x!==id):[...f,id];ls.set("qalaFavorites",f);renderAll()})}
function reveal(){const io=new IntersectionObserver(en=>en.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});$$(".reveal:not(.in)").forEach(el=>io.observe(el))}
function renderHome(){const el=$("#homeEvents");if(el)el.innerHTML=sortByCity(events).slice(0,3).map(cardHTML).join("")}
function renderEvents(){const list=$("#eventsList");if(!list)return;const q=($("#eventSearch")?.value||"").toLowerCase(),type=$("#typeFilter")?.value||"all",sort=$("#sortFilter")?.value||"date";
  let a=events.filter(e=>(type==="all"||e.type===type)&&`${e.title} ${tr(e.title)} ${e.category} ${tr(e.category)} ${e.place} ${tr(e.place)} ${e.city} ${tr(e.city)}`.toLowerCase().includes(q));
  a=sort==="city"?sortByCity(a):a.sort((x,y)=>x.ts.localeCompare(y.ts));
  list.innerHTML=a.map(cardHTML).join("");$("#resultsCount").textContent=`${tr("Найдено:")} ${a.length}`;$("#emptyState").classList.toggle("hidden",a.length>0);
  const fl=$("#favoriteList");if(fl){const f=events.filter(e=>favs().includes(e.id));fl.innerHTML=f.length?f.map(cardHTML).join(""):'<p class="muted">Здесь пока пусто — нажми ♡ на карточке.</p>'}
  const fc=$("#favoritesCount");if(fc)fc.textContent=favs().length}
function renderDetail(){const el=$("#eventDetail");if(!el)return;const id=new URLSearchParams(location.search).get("id"),e=events.find(x=>x.id===id)||events[0];document.title=tr(e.title)+" — QalaPass";const s=favs().includes(e.id);
  el.innerHTML=`<div class="detail-poster"><img src="${e.image}" alt="${e.title}" onerror="this.remove()"></div><div class="detail-copy"><div class="event-meta"><span>${e.category}</span><span>${e.tag}</span></div><h1 style="font-size:clamp(2rem,4.5vw,3.4rem)">${e.title}</h1><p>${e.desc}</p><div class="detail-facts"><div><span>Дата</span><b>${e.date}</b></div><div><span>Место</span><b>${e.place}</b></div><div><span>Город</span><b>${e.city}</b></div><div><span>Билеты</span><b>${price(e.price)}</b></div></div><div class="detail-actions"><a class="button button-lime" href="${e.url}" target="_blank" rel="noreferrer">Билеты и расписание ↗</a><button class="button button-dark" id="detailBook">Оставить заявку</button><button class="favorite-btn ${s?"saved":""}" data-fav="${e.id}">${s?"♥":"♡"}</button></div><p class="form-message">${e.verified?"Дата подтверждена по афише организатора.":"Точные даты и цены уточняй на сайте организатора — программа площадки обновляется."}</p></div>`;
  $("#detailBook")?.addEventListener("click",()=>openBooking("Заявка: "+e.title,"Оставь контакты — мы свяжемся с тобой."))}
function renderAll(){renderHome();renderEvents();renderDetail();bindFav();reveal()}

/* ---------- MODAL ---------- */
function openBooking(t,d){const m=$("#bookingModal");if(!m)return;$("#modalTitle").textContent=t.startsWith("Заявка: ")?tr("Заявка:")+" "+tr(t.slice(8)):tr(t);if(d)$("#modalDescription").textContent=tr(d);m.classList.remove("hidden");document.body.style.overflow="hidden"}
function closeBooking(){$("#bookingModal")?.classList.add("hidden");document.body.style.overflow=""}
function setupModal(){$$(".book-tour").forEach(b=>b.addEventListener("click",()=>openBooking(b.dataset.tour,"Оставь контакты — мы расскажем детали тура.")));$$(".modal-close,.modal-backdrop").forEach(b=>b.addEventListener("click",closeBooking));
  const f=$("#bookingForm");f?.addEventListener("submit",e=>{e.preventDefault();$("#bookingMessage").innerHTML=`${tr("Заявка принята (демо). Быстрее — напиши в")} <a href="${CONTACTS.telegram}" target="_blank" rel="noreferrer"><b>Telegram ${CONTACTS.telegramName}</b></a>.`;f.reset()})}

/* ---------- INIT ---------- */
requireAuth();
document.addEventListener("DOMContentLoaded",()=>{
  setupAuth();
  if(page!=="auth.html"){renderChrome();setupChrome();
    const t=new URLSearchParams(location.search).get("type");if(t&&$("#typeFilter"))$("#typeFilter").value=t;
    renderAll();setupModal();
    ["eventSearch","typeFilter","sortFilter"].forEach(id=>$("#"+id)?.addEventListener(id==="eventSearch"?"input":"change",renderEvents));
    $("#resetFilters")?.addEventListener("click",()=>{$("#eventSearch").value="";$("#typeFilter").value="all";renderEvents()});
    $("#newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();$("#newsletterMessage").textContent=tr("Ты в списке! (демо — рассылка пока не подключена)");e.target.reset()});
    $$(".contact-details,.values-grid article,.tour-card,.category-card").forEach(el=>el.classList.add("reveal"));reveal();
  }
  $("#authLang")?.addEventListener("change",e=>setLanguage(e.target.value));
  setLanguage(ls.get("qalaLang","ru"));
});

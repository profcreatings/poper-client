import { SPECIAL } from './special.js';

export const OLD_STANDUPS = [
    {
        id: 'blagotvoritelnyi',
        name: 'БЛАГОТВОРИТЕЛЬНЫЙ КОНЦЕРТ',
        youtubeId: 'kyN8UgXi6tw',
        posterH: '/images/standups/blagotvoritelnyi-h.jpg',
        posterV: '/images/standups/blagotvoritelnyi-v.jpg',
        posterVHQ: '/images/standups/blagotvoritelnyi-v-hq.jpg',
        duration: '35:42',
        date: '27 мая 2022',
        city: 'Рига, Прага, Варшава',
        subs: '—',
        description:
            'Запись благотворительных концертов из Риги, Праги и Варшавы, средства с которых полностью пошли на помощь украинским беженцам в Европе. Так как эти выступления произошли стихийно, они больше были похожи на что-то среднее между полноценными стендап концертами и лайв версией подкаста “Без Души”, но без гостей. Получилось что-то вроде “спецвыступления”…',
    },
    {
        id: 'special-4-kids',
        name: 'СПЕШЛ фо КИДС',
        youtubeId: 'K9qmjVlrcHw',
        posterH: '/images/standups/special-4-kids-h.jpg',
        posterV: '/images/standups/special-4-kids-v.jpg',
        posterVHQ: '/images/standups/special-4-kids-v-hq.jpg',
        duration: '2:06:11',
        date: '1 июня 2020',
        city: 'Санкт-Петербург',
        subs: 'ENG',
        description:
            'Один из самых важных для меня концертов снятый за 3 дня подряд в Питере на круговой сцене. Во время тура “СПЕШЛ фо КИДС” меня не покидало странное предчувствие, что этот тур будет моим последним. Кто бы тогда мог подумать, что интуиция намекала именно о турах по России.',
    },
    {
        id: 'nelicepriyatnyi',
        name: 'НЕЛИЦЕПРИЯТНЫЙ',
        youtubeId: 'IfTlqfHq1d8',
        posterH: '/images/standups/nelicepriyatnyi-h.jpg',
        posterV: '/images/standups/nelicepriyatnyi-v.jpg',
        posterVHQ: '/images/standups/nelicepriyatnyi-v-hq.jpg',
        duration: '1:36:45',
        date: '13 августа 2018',
        city: 'Санкт-Петербург',
        subs: 'ENG',
        description:
            'То самое легендарное выступление из Ледового дворца, которое навсегда изменило мою жизнь. Огромный стадион, с которого звучали вещи, которые в то время никто не решался говорить так открыто на такую большую аудиторию в России. Выступление и концовку с “последней сигаретой” я посвятил своему дедушке, который скончался в том году. Этот концерт снимал Эдгар Дубровский, который в последствии снимет нашумевшую документалку для Netflix “Аферист из Tinder”.',
    },
    {
        id: 'gde-smeyatsa',
        name: 'ГДЕ СМЕЯТЬСЯ?!',
        youtubeId: 'dfglFWjyTLo',
        posterH: '/images/standups/gde-smeyatsa-h.jpg',
        posterV: '/images/standups/gde-smeyatsa-v.jpg',
        posterVHQ: '/images/standups/gde-smeyatsa-v-hq.jpg',
        duration: '1:18:17',
        date: '7 апреля 2017',
        city: 'Владивосток',
        subs: '—',
        description: (
            <>
                “В тот раз мне захотелось записать спешл там, где я ни разу не
                выступал - где публика не знала меня, а я не знаю публику.” Это
                была официальная версия того, почему концерт снимается во
                Владивостоке. Правда же заключается в том, что концерт был
                отснят в Москве, в “Вегас сити холле”, но был отснят таким
                образом, что было принято решение, что стендап надо переснимать{' '}
                <img alt="" src="/images/smile.png" />
            </>
        ),
    },
    {
        id: 'h_y',
        name: 'Х_Й',
        youtubeId: 'fI28Y4_UqIg',
        posterH: '/images/standups/huy-h.jpg',
        posterV: '/images/standups/huy-v.jpg',
        posterVHQ: '/images/standups/huy-v-hq.jpg',
        duration: '1:19:52',
        date: '1 апреля 2016',
        city: 'Москва',
        subs: '—',
        description:
            'Больше 8 лет прошло с этого концерта и практически все, что я помню оттуда - танцующих монашек и историю про скотч на жопе. Название концерта появилось из двух факторов: 1) оно было отсылкой к слову, которое я часто говорил на исповеди батюшке, чтобы мне было за что просить прощение Бога; 2) на тот момент нам было очень смешно снимать приглашения и смотреть отзывы людей, которые побывали на стендапе с подобным названием.',
    },
];

export const ALL_STANDUPS = [...OLD_STANDUPS, SPECIAL];

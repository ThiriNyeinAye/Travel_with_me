import React, { useState } from 'react'
import { Content, Image } from './elements/detail'
import './destinationdetail.css'
import Table from './components/table'
import { color } from '../../../config/color'
import ShowLogin from './components/showlogin'
import desDetail from '../../../assets/img/kalaw.jpg'
import Mainimage from '../../Common/MainImageContainer'

const Facts = [
    {
        id: 1,
        smallTitle: "Bagan is an ancient city and a UNESCO World Heritage Site located in the Mandalay Region of Myanmar.",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['image4.jpg', 'image5.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '104'

    },
    {
        id: 2,
        smallTitle: "Inle a freshwater lake located in the Nyaungshwe Township of Taunggyi District of Shan State, part of Shan Hills in Myanmar (Burma)",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['inle1.jpg', 'inle2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '116.3'

    },
    {
        id: 3,
        smallTitle: "INNDAWGYI is the largest lake in Myanmar, Indawgyi remains pristine and undeveloped and has been designated as a UNESCO Biosphere Reserve",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['fishing.jpg', 'trekking.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '116.3'

    },
    {
        id: 4,
        smallTitle: "KALAW, high up in western Shan State, Kalaw is an old hill station with a laid back atmosphere, refreshing climate and scenic views. Many of Kalaw’s original colonial-era buildings remain, and it is also known as Myanmar’s trekking mecca.",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['kalaw1.jpg', 'kalaw2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '116.3'

    },
    {
        id: 5,
        smallTitle: "Mandalay,Third Largest Place,one of the fascinating place in Myanmar",
        paragraphs: "Mandalay was founded in 1857 by King Mindon, replacing Amarapura as the new royal capital of the Konbaung dynasty. It was Burma's final royal capital before the kingdom's annexation by the British Empire in 1885. Under British rule, Mandalay remained commercially and culturally important despite the rise of Yangon, the new capital of British Burma. The city suffered extensive destruction during the Japanese conquest of Burma in the Second World War. In 1948, Mandalay became part of the newly independent Union of Burma.",
        image: ['mandalay1.jpg', 'mandalay2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 6,
        smallTitle: "NgweSaung,one of largest beach in Myanmar",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['ngwe saung1.jpg', 'ngwe saung4.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 7,
        smallTitle: "NayPiTaw,captital of Myanmar",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['naypitaw1.jpg', 'naypitaw3.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 8,
        smallTitle: "Ngapali,situated on the Indian Ocean",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['ngapali.jpg', 'ngapali1.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 9,
        smallTitle: "PyinOoLwin,the place having a nice weather",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['pyinoolwin1.jpg', 'pyinoolwin3.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 10,
        smallTitle: "Yangon,the first largest city of Myanmar",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['yangon1.jpg', 'yangon2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 11,
        smallTitle: "Loikaw,a city in Magwe Division",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['loikaw1.jpg', 'loikaw3.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 12,
        smallTitle: "Popa,is an extinct volcano 1518 metres above sea level",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['popa1.jpg', 'popa2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 13,
        smallTitle: "Mount Victoria,is the highest mountain in the Chin State of western Myanmar",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['mtvictoria.jpg', 'mtvictoria1.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 14,
        smallTitle: "KyaingTong,a town in Shan State",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['kyaingtong1.jpg', 'kyaingtong3.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 15,
        smallTitle: "NgweSaung,is a beach resort",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['ngwe saung1.jpg', 'ngwe saung4.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 16,
        smallTitle: "Minbu,a city in Magwe Division",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['minbu.jpg', 'minbu2.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    
    {
        id: 17,
        smallTitle: "Meiktila,a city in central Burma",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['meiktila5.jpg', 'meiktila6.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    },
    {
        id: 18,
        smallTitle: "Kawthaung,a town located in the southernmost part of Myanmar",
        paragraphs: "Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus.&nbsp;Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.&nbsp;Nullam ac justo efficitur, tristique ligula.",
        image: ['kawthaung1.jpg', 'kawthaung3.jpg'],
        country: "Myanmar",
        visa: "Visa is needed for local citizens but foreginers must need",
        language: 'Burmese',
        currency: 'Kyats',
        area: '163.8'
    }


]
const Tour = {


    "bagan": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "inle": [
        {
            id: 1,
            name: "Arrive in inle",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Inle Lake',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Inle PaungTawOo Pagoda",
            image: "image5.jpg"
        },
    ],
    "inndawgyi": [
        {
            id: 1,
            name: "Arrive in Inndawgyi",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "kalaw": [
        {
            id: 1,
            name: "Arrive in kalaw",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Kalaw market',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Christ The King Church",
            image: "image5.jpg"
        },
    ],
    "mandalay": [
        {
            id: 1,
            name: "Arrive in mandalay",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Mandalay Hill',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Mahamyatmuni Pagoda",
            image: "image5.jpg"
        },
    ]
    ,
    "ngwesaung": [
        {
            id: 1,
            name: "Arrive in NgweSaung",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: "Riding Horse on the sand",
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Celebrating sea food feast by beach",
            image: "image5.jpg"
        },
    ],
    "naypyitaw": [
        {
            id: 1,
            name: "Arrive in NayPiTaw",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Parliament Complex',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Uppatasanti Pagoga",
            image: "image5.jpg"
        },
    ],
    "ngapali": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "pyinoolwin": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],

    "yangon": [
        {
            id: 1,
            name: "Arrive in Yangon",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Yangon',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "loikaw": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "popa": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "mtvictoria": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "kyaingtong": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "ngwesaung": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "minbu": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "meiktila": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ],
    "kawthaung": [
        {
            id: 1,
            name: "Arrive in Bagan",
            image: "image3.jpg"
        },
        {
            id: 2,
            name: 'Temple Tour Of Bagan',
            image: "image4.jpg"
        },
        {
            id: 1,
            name: "Visit Mount Popa&More Temples",
            image: "image5.jpg"
        },
    ]





}

const Categories = {
    "bagan": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "inle": [
        {
            id: 1,
            name: "Culture of Inle",

        },
        {
            id: 2,
            name: 'History & Culture',

        },
        {
            id: 3,
            name: "Cruise & Boat Tour",

        }
    ],
    "inndawgyi": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "kalaw": [
        {
            id: 1,
            name: "Tasting Kalaw traditional food",

        },
        {
            id: 2,
            name: 'Kalaw Train station',

        },
        {
            id: 3,
            name: "Seeing scenery",

        }
    ],
    "mandalay": [
        {
            id: 1,
            name: "excise aroung the moat",

        },
        {
            id: 2,
            name: 'Trekking on Mandalay Hill',

        },
        {
            id: 3,
            name: "History & Culture",

        }
    ],
    "ngwesaung": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "naypyitaw": [
        {
            id: 1,
            name: "Visit Hluttaw",

        },
        {
            id: 2,
            name: 'Vist Zoological garden',

        },
        {
            id: 3,
            name: "Visit water fountain garden",

        }
    ],
    "ngapali": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "pyinoolwin": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "yangon": [
        {
            id: 1,
            name: "Visit Shwedagon Pagoda",

        },
        {
            id: 2,
            name: 'Visit KangTawGyi Lake',

        },
        {
            id: 3,
            name: "Visit Inya Lake",

        }
    ],
    "loikaw": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "popa": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "mtvictoria": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "kyaingtong": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "ngwesaung": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "minbu": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "meiktila": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
    "kawthaung": [
        {
            id: 1,
            name: "Watching Sunset",

        },
        {
            id: 2,
            name: 'Riding Air Ballon',

        },
        {
            id: 3,
            name: "Seeing views riding by E-Bike",

        }
    ],
}

const DestinationDetail = (props) => {
    const [width, setWidth] = useState(window.innerWidth)
    window.onresize = () => setWidth(window.innerWidth)
    const [showHide, setShowHide] = useState(true)
    const id = props.match.params.id;
    const name = props.match.params.name;
    const tour = Tour[`${name}`]
    const categories = Categories[`${name}`]
    // const HandleZindex = (e) => {
    //     e.preventDefault()
    //     setShowHide(true)
    // }

    return (


        <div>
            {/* <ShowLogin showHide={showHide} /> */}
            <Mainimage mainImage={desDetail}></Mainimage>
            <div className="container pt-4 mt-4" style={{ color: color.ContainerColor }}>

                <div className="row">

                    {Facts.map((val, k) => {

                        if (id == val.id) {

                            const tableLists = [val.country, val.visa, val.language, val.currency, val.area]
                            return (
                                <div className="col-md-9" key={k}>
                                    <Content title={name.toUpperCase()} smallTitle={val.smallTitle} paragraph={val.paragraphs} />
                                    <div className="row">
                                        {
                                            val.image.map((v, k) => {
                                                return (<div className="col-md-6 col-sm-6 py-1" key={k}>
                                                    <div className="ImageHover" style={{ overflow: 'hidden' }}>
                                                        <Image images={v} />

                                                    </div>

                                                </div>)

                                            })
                                        }
                                        
                                    </div>
                                    <div className="py-1">
                                        <h2>Good To Know</h2>
                                        <div className="py-2">
                                            <Table lists={tableLists} />
                                        </div>
                                        <Content title={name.toUpperCase()} paragraph={val.paragraphs} />
                                        <div className="row">
                                            {
                                                val.image.map((v, k) => {
                                                    return <div className="col-md-6 col-sm-6" key={k}>
                                                        <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                            <Image images={v} />
                                                        </div>
                                                        <div className="ImageHover my-1" style={{ overflow: 'hidden' }}>
                                                            <Image images={v} />
                                                        </div>

                                                    </div>

                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}


                    <div className="col-md-3">
                        <h5>Tours</h5>
                        {tour.map((val,key)=>{
                             return (
                                <a href="/tour" style={{color:color.ContainerColor,textDecoration:'none'}} key={key}>
                                <div className="d-flex my-4">
                                    <Image images={val.image} style={{ height: '100px', width: '100px', cursor: 'pointer' }} />
                                    <div className="flex-row mx-2">
                                        {val.name}
                                    </div>
                                    
                                </div>
                                </a>
                            )
                        })}

                        <div className="my-3 py-3 ">
                            <h3>Categories</h3>
                            {categories.map((val,key)=>{
                               return (<div className="my-4 category" key={key}>
                               <a href='/tours' style={{ color: color.CategoryColor, cursor: 'pointer', textDecoration: 'none' }}><span>{val.name}</span></a>
                           </div>
                           )
                           })}
                        </div>

                        <div className="py-0 my-0 mx-0">

                           <h3>Instagram</h3>


                           <div className="row">
                           <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                
                                <img src={require('../../../assets/img/destinationdetail/fishing.jpg')} style={{ width: '100%' }} />
                                </div>
                                <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                <img src={require('../../../assets/img/destinationdetail/inle1.jpg')} style={{ width: '100%' }} />
                                </div>
                                <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                <img src={require('../../../assets/img/destinationdetail/e-bike.jpg')} style={{ width: '100%' }} />
                                </div>
                                <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                <img src={require('../../../assets/img/destinationdetail/image4.jpg')} style={{ width: '100%' }} />
                                </div>
                                <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                <img src={require('../../../assets/img/destinationdetail/image5.jpg')} style={{ width: '100%' }} />
                                </div>
                                <div className="col-lg-4 col-xs-4 col-md-4 col-xl-4 col-sm-4 p-0">
                                <img src={require('../../../assets/img/destinationdetail/minbu1.jpg')} style={{ width: '100%' }} />
                                </div>
                               {/* <div className={width<790?"d-flex flex-column":"col-md-12"}>
                                   <div className={width<790?"row mx-1":"row pl-0 pr-0 mr-0 ml-0"}>
                                       <div className={width<790?"d-flex pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/image1.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                       <div className={width<790?"d-flex pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/image4.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                       <div className={width<790?"d-flec pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/image5.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                   </div>
                                   <div className={width<790?"row mx-1":"row pl-0 pr-0 mr-0 ml-0"}>
                                       <div className={width<790?"d-flex pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/kalaw1.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                       <div className={width<790?"d-flex pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/inle1.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                       <div className={width<790?"d-flex pl-0 pr-0 mr-0 ml-0":"col-md-4 col-sm-4"}>
                                           <img alt="" src={require('../../../assets/img/destinationdetail/kawthaung1.jpg')} style={width < 790 ? { height: '100px', width: '100px' } : { height: '90px', width: '90px' }} />
                                       </div>
                                   </div>
                               </div> */}
                           </div>

                       </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default DestinationDetail
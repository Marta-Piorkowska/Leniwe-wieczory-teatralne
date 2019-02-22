import React, { Component } from 'react';
import './TeatrSztuki.scss';
import Szekspir from "../images/Polonia/PoloniaWszystkieDziełaSzekspira.jpg";
import Klaps from "../images/Polonia/PoloniaKlaps.jpg";
import Zapiski from "../images/Polonia/PoloniaZapiskiZWygnania.jpg";

import {
    Link
} from 'react-router-dom';

const SpectaclesPolonia = [
    {
        title: 'Dzieła wszystkie Szekspira (w nieco skróconej wersji)',
        description: 'Adam Krawczuk, Marcin Perchuć, Rafał Rutkowski i Maciej Wierzbicki – aktorzy Teatru Montownia podejmą się zadania z pozoru niemożliwego: przedstawią Widzom wszystkie dzieła Szekspira w ciągu jednego wieczoru! Będą cytaty z najsławniejszych dramatów, żarty ze stereotypowej znajomości dzieł słynnego twórcy, a także m.in. Tytus Andronikus w programie kulinarnym i Hamlet w wersji przyspieszonej. Widzowie mogą spodziewać się nieustającej zabawy, będą zapraszani do udziału w akcji. Spektakl obnaża powierzchowną znajomość Szekspira, do czego przyczyniła się kultura masowa.',
        time: '80 minut, bez przerwy',
        type: 'Komedia',
    },
    {
        title: 'KLAPS! 50 Twarzy Greya',
        description: 'Europejska premiera spektaklu, który w Ameryce cieszy się wielkim powodzeniem. Sztuka nawiązująca do „Pięćdziesięciu twarzy Greya” E.L. James – najsłynniejszego światowego czytadła dla kobiet. Tę wyśmiewaną i lekceważoną książkę przeczytało najwięcej kobiet na świecie, w USA już w ciągu trzech pierwszych miesięcy powieść sprzedała się w liczbie 20 milionów egzemplarzy! J.S. Blair, I.M. MacIntyre, J.A. Millan, S.A. Moran, C.J. Munch, A.M. Scheffler i I.P. Whalen napisali sztukę, która jest subtelną kpiną z tej książki i takiego rodzaju literatury. Na scenie spotykamy autorkę książki i dwójkę stworzonych przez nią postaci, które kłócą się z autorką o ich wizerunki i zalety intelektu i charakteru. Spektakl muzyczny, ze znakomitymi piosenkami.',
        time: '120 minut, 1 przerwa',
        type: 'Komedia, Parodia',
    },
    {
        title: 'Zapiski z wygnania',
        description: '„Zapiski z wygnania” to bardzo osobiste wspomnienia Sabiny Baral, dwudziestoletniej emigrantki roku 1968, która wyjechała razem z rodzicami.\n' +
            '\n' +
            '„Ile cierpienia można znieść, zanim się nie oszaleje? Powychodzili z lasów, z dziur w ziemi, z szaf, piwnic i strychów, wyszli półżywi z obozów, wrócili z Syberii i Kazachstanu, do domu, do Polski. A potem, przez następne dwadzieścia trzy lata nie wyjechali (...). Chcieli mieszkać tutaj, tu, gdzie się urodzili ich rodzice i gdzie się urodziły ich dzieci – my. Po wojennej gehennie, po latach cierpienia i strachu, mimo wszystko jeszcze raz zadecydowali, że Polska to ich kraj.\n' +
            'I tych ludzi po 1968 roku Polska wyrzuciła”.\n' +
            '\n' +
            'Krystyna Janda została uhonorowana indywidualną nagrodą aktorską za rolę w spektaklu ZAPISKI Z WYGNANIA w 24. Ogólnopolskim Konkursie na Wystawienie Polskiej Sztuki Współczesnej oraz nagrodą główną na XVII Festiwalu Prapremier Nie/Podległa 2018  za kreację, która przywraca sens i powagę obywatelskiemu zaangażowaniu artysty w sprawy publiczne.',
        time: '100 minut, bez przerwy',
        type: 'Dramat',
    },

];


class TeatrSztuki extends Component {
    render() {
        return (
            <div className = "container" >
        {
            SpectaclesPolonia.map((item, index) => {

                return (
                    <div className='spectacle' key={index}>
                        <Link to={`/spectacle/${item.id}`} className='spectacle-poster'><img src={item.img} alt=""/></Link>
                        <div className='spectacle-info'>
                            <h2>{item.title}</h2>

                            <div className="stars">
                                <input type="radio" id="star5" name="star" value="5"/>
                                <label htmlFor="star5"> Five Stars </label>
                                <input type="radio" id="star4" name="star" value="4"/>
                                <label htmlFor="star4"> Four Stars </label>
                                <input type="radio" id="star3" name="star" value="3"/>
                                <label htmlFor="star3"> Three Stars </label>
                                <input type="radio" id="star2" name="star" value="2"/>
                                <label htmlFor="star2"> Two Stars </label>
                                <input type="radio" id="star1" name="star" value="1"/>
                                <label htmlFor="star1"> One Star </label>
                            </div>

                            <p>{item.description}</p>

                        </div>
                    </div>
                )
            })
        }
            </div>
        );
    }
}

export default TeatrSztuki;

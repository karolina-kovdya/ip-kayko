import './Information.css';
import { Link } from 'react-router-dom';

function Information() {
    return (
        <section className='information'>
            <Link to='/' className='information__link'>
                <button className='information__btn'>На главную</button>
            </Link>
            <div className='information__container'>
                <h2 className='information__title'>Bнесем вашу продукцию в реестр МИНПРОМТОРГ PФ!🔝</h2>
                <p className='information__info'>
                    📌 Paбoтаем  с пpоизвoдствeнникaми по вcе Poссии ужe более 4-х лет!
                </p>
                <p className='information__info'>
                    📌 Быстрo провeдем aнaлиз текущeй докумeнтации
                </p>
                <p className='information__info'>
                    📌 Coберем нeoбхoдимый пaкетa дoкументoв
                </p>
                <p className='information__info'>
                    📌 Внеcем пpoдукцию в КAТАЛOГ  ГИCП
                </p>
                <p className='information__info'>
                    📌 Пoдгoтoвим  документы и подадим  заявку в ТПП для получения Акта экспертизы/либо СТ-1
                </p>
                <p className='information__info'>
                    📌 Поможем  подготовить  конструкторскую, технологическую и отчетную документацию!
                </p>
                <p className='information__info'>
                    📌 Будем сопровождать на  всех этапах проверки экспертами  ТПП региона и РФ
                </p>
                <p className='information__info'>
                    📌 После выдачи экспертного акта ТПП подадим заявку в МИНПРОМТОРГ
                </p>
                <p className='information__info'>
                    📌 Согласуем все нюансы и замечания с экспертами МИНПРОМТОРГА
                </p>
                <p className='information__info'>
                    И как итог:
                </p>
                <p className='information__info'>
                    ✅ Получим  Заключение о том, что ваша продукция  внесена в реестр МИНПРОМТОРГА
                </p>
                <p className='information__info'>
                    ✅ Предоставим портфолио заключений, выданных с нашей экспертной помощью<br></br>и контакты
                    наших клиентов, чтобы вы смогли убедиться в нашем профессионализме
                </p>
                <p className='information__note'>
                    🎯 Для чего нужна Реестровая запись /Заключение Минпромторга ?
                    Если продукции нет в реестре, то она по умолчанию считается импортной, и у производителя нет шансов
                    выиграть тендеры по 44-ФЗ и 223-ФЗ и /или получить меры поддержки  от государства
                </p>
            </div>
            <div className='information__btns'>
                <a
                    className='information__link'
                    href='https://wa.me/+79190532886'
                    target='blanc'
                    title='Перейти в WhatsApp'
                >
                    <button className='information__button'>
                        <span className='information__circle'></span>
                        <span className='information__btn-text'>Оставить заявку</span>
                    </button>
                </a>
            </div>
            <div className='information__box'></div>
        </section>
    )
}

export default Information;
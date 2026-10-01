import styles from './modal-editing-event.module.css'
import buttonStyles from '../../ui/button/button.module.css'
import dayjs from 'dayjs'

const EventModal = ({day, events, onClose}) => {
    const dayOfTheWeekNumber = day.day()
    let dayOfTheWeek = ''
    function HandleDayOfTheWeek() {
        switch (dayOfTheWeekNumber){
        case 0:
            dayOfTheWeek = 'domingo'
            break
        case 1:
            dayOfTheWeek = 'segunda-feira'
            break
        case 2:
            dayOfTheWeek = 'terça-feira'
            break
        case 3:
            dayOfTheWeek = 'quarta-feira'
            break
        case 4:
            dayOfTheWeek = 'quinta-feira'
            break
        case 5:
            dayOfTheWeek = 'sexta-feira'
            break
        case 6:
            dayOfTheWeek = 'sábado'
            break
        }
    }
    HandleDayOfTheWeek()
    function RenderEvents(){
        console.log('eai', events)
        events.map((event) => {
            console.log(event.title)
        });

    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2 className={styles.eventTitle}>{day.format("DD")}</h2>
                <p className={styles.eventDayOfTheWeek}>{dayOfTheWeek}</p>
                <p>Eventos do dia:</p>
                <br />
                <ul className={`${styles.ul} ${styles.eventsContainer}`}>
                {events && 
                    events.map((event) => (<>
                        <div className={styles.eventCard}>
                            <p>{event.title}</p>
                            <div className={styles.eventInfoPeriod}>
                                <ul className={styles.ul}>
                                    {dayjs(event.start).format("DD/MM")} <span> ➡ </span>
                                    {dayjs(event.end).format("DD/MM")}
                                </ul>
                            </div>
                            <span><p className={styles.eventDescription}>{event.desc}</p></span>
                        </div>
                    </>))
                }
                </ul>
            </div>
            <button tabIndex={1} onClick={onClose} className={buttonStyles.btnClose}>Fechar</button>
        </div>
    );
}

export default EventModal

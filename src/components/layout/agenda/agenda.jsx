import * as Test from 'react-big-calendar/lib/addons/dragAndDrop/withDragAndDrop'

import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

import moment from 'moment'
import DefaultEvents from '../../../mocks/events'
import EventModal from './modal-editing-event'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useState, cloneElement } from 'react'

import styles from './agenda.module.css'
import '../../../styles/calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const DragAndDropCalendar = Test.default.default(Calendar)
const localizer = momentLocalizer(moment)
dayjs.extend(isBetween)

function Agenda(){
    const [ events, setEvents ] = useState(DefaultEvents)
    const [ selectedDay, setSelectedDay ] = useState('')
    const [ selectedEvents, setSelectedEvents ] = useState([])
    const [ isDateInfoOpen, setIsDateInfoOpen ] = useState(false)


    const MOVEEVENTS = (data) => {
        const { start, end } = data
        const updatedEvents = events.map((event) => {
            if ( event.id === data.event.id){
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                };
            }
            return event;
        });
        setEvents(updatedEvents)
    }
/*
    const handleEventClick = (day) => {
        setSelectedDay(day)
        console.log('handleEventClick: ', selectedDay)
    }*/

    const handleEventClose = () => {
        setSelectedDay(null)
        setIsDateInfoOpen(false)
    }
    function handleDateKeyDown(event, date) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            handleDateSelect({ start: date })
        }
    }
    function DateCellWrapper({ value, children }){
        const hasEvent = events.some((event) =>
            dayjs(value).isBetween(
                event.start,
                event.end,
                'day',
                '[]'
            )
        );
        const today = dayjs().isSame(value, 'day');
        const isTabbable = hasEvent || today;

        return cloneElement(children, {
            //dayjs.value não está funcionando
            className: `${children.props.className} cell`,
            tabIndex: isTabbable ? 0 : null,
            onKeyDown: (event) => handleDateKeyDown(event, value),
            children: (<>
                {children.props.children}
                {hasEvent && <div className="dot" /*onClick={() => handleEventClick(value)}*/>{dayjs.value}</div>}
            </>)
        });
    }

    const handleDateSelect = ({ start, end, slots }) => {
        console.log(start.getDate())
        setIsDateInfoOpen(true)

        const eventsThisDay = events.filter((event) => {
            setSelectedDay(dayjs(start))
            return (
                dayjs(start).isBetween(dayjs(event.start), dayjs(event.end), "day", "[]")
            )
        });
        setSelectedEvents(eventsThisDay)
    }
    return(<>
        <div className={styles.agendaContainer}>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}     
                defaultView='month'
                events={events}
                localizer={localizer}
                //resizable
                selectable
                //onEventDrop={MOVEEVENTS}
                //onEventResize={MOVEEVENTS}
                //onSelectEvent={handleEventClick}
                className={styles.agenda}
                getDrilldownView={() => null}
                onSelectSlot={handleDateSelect}
                components={{
                    dateCellWrapper: DateCellWrapper
                }}
            />
            {isDateInfoOpen && (
                <EventModal
                    day = {dayjs(selectedDay)}
                    events = {selectedEvents}
                    onClose = {handleEventClose}
                />
            )}
            
        </div>
    </>)
}

export default Agenda
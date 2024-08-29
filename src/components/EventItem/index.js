// Write your code here
import './index.css'

const EventItem = props => {
  const {event, isActive, onClickEvent} = props
  const onEvent = () => {
    onClickEvent(event.id, event.registrationStatus)
  }

  const borderStyling = isActive ? 'button-with-border' : ''
  return (
    <li className="event-list-item-container">
      <button type="button" className="button" onClick={onEvent}>
        <img
          src={event.imageUrl}
          alt="event"
          className={`list-image ${borderStyling}`}
        />
      </button>
      <div>
        <p className="list-name">{event.name}</p>
        <p className="list-location">{event.location}</p>
      </div>
    </li>
  )
}

export default EventItem

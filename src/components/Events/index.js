import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const status = {
  initial: 'INITIAL',
  yetToBeRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
// Write your code here

class Events extends Component {
  state = {
    activeEventId: '',
    registrationStatus: status.initial,
  }

  onClickEvents = (id, registrationStatus) => {
    this.setState({activeEventId: id, registrationStatus})
  }

  renderEventsSection = () => {
    const {activeEventId} = this.state

    return (
      <div className="events-container">
        <h1 className="events-heading">Events</h1>
        <ul className="events-list-contaziner">
          {eventsList.map(event => (
            <EventItem
              key={event.id}
              event={event}
              isActive={event.id === activeEventId}
              onClickEvent={this.onClickEvents}
            />
          ))}
        </ul>
      </div>
    )
  }

  noActiveEventView = () => (
    <p className="noActiveEventView">
      Click on an event, to view its registration details
    </p>
  )

  yetToBeRegisteredView = () => (
    <div className="yetToBeRegisteredView-Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image-yet-to-register"
      />
      <p className="yet-to-registered-para">
        A live performance brings so much to your relationship with dance.
        Seeing live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="registered-button" type="button">
        Register Here
      </button>
    </div>
  )

  registeredView = () => (
    <div className="yetToBeRegisteredView-Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-view-image"
      />
      <h1 className="yet-to-registered-para">
        You have already registered for the event
      </h1>
    </div>
  )

  registrationsClosedView = () => (
    <div className="yetToBeRegisteredView-Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-hading">Registrations are closed</h1>

      <h1 className="registrations-closed-para">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-para">Stay tuned. We will reopen</p>
    </div>
  )

  renderStatus = () => {
    const {registrationStatus} = this.state

    switch (registrationStatus) {
      case status.initial:
        return this.noActiveEventView()
      case status.yetToBeRegistered:
        return this.yetToBeRegisteredView()
      case status.registered:
        return this.registeredView()
      case status.registrationClosed:
        return this.registrationsClosedView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        {this.renderEventsSection()}
        {this.renderStatus()}
      </div>
    )
  }
}

export default Events

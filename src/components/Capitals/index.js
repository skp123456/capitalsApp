import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    userCapitalId: countryAndCapitalsList[0].id,
  }

  changeCountry = event => {
    this.setState({
      userCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {userCapitalId} = this.state
    const countryNames = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === userCapitalId,
    )
    return countryNames.country
  }

  render() {
    const {userCapitalId} = this.state
    const country = this.getCountry(userCapitalId)

    return (
      <div className="capitals-container">
        <div className="card-container">
          <div>
            <h1 className="title">Countries And Capitals</h1>
            <div className="question-container">
              <select className="capitals-menu" onChange={this.changeCountry}>
                {countryAndCapitalsList.map(eachCountryDetails => (
                  <option
                    value={eachCountryDetails.id}
                    key={eachCountryDetails.id}
                  >
                    {eachCountryDetails.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="descreption">is capital of which country?</p>
            </div>
            <p className="country-name">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals

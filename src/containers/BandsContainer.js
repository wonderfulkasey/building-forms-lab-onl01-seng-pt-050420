import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {addBand} from '../actions/bands'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

export default BandsContainer
const mapStateToProps = ({ bands }) => ({bands})

const mapDispatchToProps = (dispatch) => ({addBand: band => dispatch({type:'ADD_BAND', band})})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, google} from 'google-maps-react';

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
);

const style = {
    width: '100%',
    height: 'calc(100% - 100px)'
};



class MapContainer extends Component {

    constructor(props){
        super(props);
        props = {
            //apiKey:'AIzaSyCqc5iZ3UT6F2wFGTI1MwG-7pSPZ8X4Quk',
            apiKey:'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM'
        };
        this.state = {
            zoom:18,
            initialCenter:{
                lat: 13.0232881,
                lng: 80.1752344
            }
        };
    }
    render() {

        return (
            // <Map google={window.google}></Map>

                <Map google={this.props.google} style={style} zoom={18}  initialCenter={{lat: 13.0232881,lng: 80.1752344}}> 

                <Marker title={'My Location'}/>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    position={{lat: 13.0232881, lng: 80.2752345}} />
                <Marker
                    title={'Dolores park'}
                    position={{lat: 13.0232881, lng: 80.2752346}} />
        
                <InfoWindow>
                    <div>
                      <h1>CEB Chennai</h1>
                    </div>
                </InfoWindow>

              </Map>

        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey:'AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM',
      LoadingContainer: LoadingContainer
    }
))(MapContainer)

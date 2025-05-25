import GoogleMapReact from 'google-map-react';
import { googleKey } from '../../GoogleKey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {

    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 11
    };

    return (
           <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    );
};

export default Map;
import { NativeModules } from 'react-native';
import { PropTypes } from 'prop-types';

const { RNAdobeAnalytics } = NativeModules;

// ------------------------------------
// API
// ------------------------------------

export class AdobeAnalyticsAPI {
  static init(debug = false, configFile) {
    RNAdobeAnalytics.init({ debug }, configFile);
  }

  static trackState(state, contextData = {}) {
    RNAdobeAnalytics.trackState(state, contextData);
  }

  static trackAction(action, contextData = {}) {
    RNAdobeAnalytics.trackAction(action, contextData);
  }

  static trackLocation(latitude, longitude, contextData = {}) {
    RNAdobeAnalytics.trackLocation(latitude, longitude, contextData);
  }

  static trackVideo(action, settings = {}) {
    RNAdobeAnalytics.trackVideo(action, settings);
  }

    static trackTimedActionStart(action, contextData = {}) {
    RNAdobeAnalytics.trackTimedActionStart(action, contextData);
  }


  static trackTimedActionUpdate(action, contextData = {}) {
    RNAdobeAnalytics.trackTimedActionUpdate(action, contextData);
  }

//Open question

  static trackTimedActionEnd(action) {
    RNAdobeAnalytics.trackTimedActionEnd(action);
  }



}

new AdobeAnalyticsAPI();

// ------------------------------------
// Init component
// ------------------------------------

export const AdobeAnalytics = ({ debug, configFile }) => {
  AdobeAnalyticsAPI.init(debug, configFile);

  return null;
};

AdobeAnalytics.propTypes = {
  debug: PropTypes.bool,
  configFile: PropTypes.string.isRequired
};

// ------------------------------------
// TrackState component
// ------------------------------------

export const AdobeAnalyticsTrackState = ({ state, contextData }) => {
  AdobeAnalyticsAPI.trackState(state, contextData);

  return null;
};

AdobeAnalyticsTrackState.propTypes = {
  state: PropTypes.string.isRequired,
  contextData: PropTypes.object
};

// ------------------------------------
// TrackAction component
// ------------------------------------

export const AdobeAnalyticsTrackAction = ({ action, contextData }) => {
  AdobeAnalyticsAPI.trackAction(action, contextData);

  return null;
};

AdobeAnalyticsTrackAction.propTypes = {
  action: PropTypes.string.isRequired,
  contextData: PropTypes.object
};

// ------------------------------------
// TrackLocation component
// ------------------------------------

export const AdobeAnalyticsTrackLocation = ({ latitude, longitude, contextData }) => {
  AdobeAnalyticsAPI.trackLocation(latitude, longitude, contextData);

  return null;
};

AdobeAnalyticsTrackLocation.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  contextData: PropTypes.object
};

// ------------------------------------
// AdobeAnalytics component
// ------------------------------------

export const AdobeAnalyticsTrackVideo = ({ action, settings }) => {
  AdobeAnalyticsAPI.trackVideo(action, settings);

  return null;
};

AdobeAnalyticsTrackVideo.propTypes = {
  action: PropTypes.string.isRequired,
  settings: PropTypes.object
};

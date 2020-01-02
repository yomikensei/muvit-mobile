import PushNotification from 'react-native-push-notification';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import React from 'react';
import { firebase } from '@react-native-firebase/messaging';
import { logout } from 'services/auth/actions';

export default WrappedComponent =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class NotificationWrapper extends React.PureComponent {
      componentDidMount() {
        this.messageListener = firebase.messaging().onMessage(message => {
          console.log('message', message);
        });
        // this.notificationListener = firebase.notifications().onNotification(({ _data }) => {
        //   // eslint-disable-next-line no-console
        //   console.log(_data);
        // });
      }

      render() {
        const self = this;
        PushNotification.configure({
          onNotification(notification) {
            console.log('notification', notification);

            switch (notification.action) {
              case 'DRIVERS_UNAVAILABLE':
                PushNotification.localNotification({
                  largeIcon: 'ic_launcher',
                  smallIcon: 'ic_launcher_round',
                  vibration: 300,
                  title: 'Order cancelled',
                  message: 'No drivers are currently available, so your order has been cancelled',
                });
                self.props.navigate('Hail');
                break;

              default:
                break;
            }
          },
        });
        return <WrappedComponent />;
      }
    }
  );

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  navigate: routeName => dispatch(NavigationActions.navigate({ routeName })),
});

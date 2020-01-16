import PushNotification from 'react-native-push-notification';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import React from 'react';
import {firebase} from '@react-native-firebase/messaging';

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
            console.log(notification);
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

              case 'RIDE_ACCEPTED':
              case 'DELIVERY_ACCEPTED':
                PushNotification.localNotification({
                  largeIcon: 'ic_launcher',
                  smallIcon: 'ic_launcher_round',
                  vibration: 300,
                  title: 'Order Accepted',
                  message: 'A driver is currently en-route to your location',
                });
                self.props.navigate('OngoingOrder', {
                  id: notification.ride ? notification.ride : notification.delivery,
                  type: notification.ride ? 'ride' : 'delivery',
                });
                break;

              case 'RIDE_COMMENCED':
              case 'DELIVERY_COMMENCED':
                PushNotification.localNotification({
                  largeIcon: 'ic_launcher',
                  smallIcon: 'ic_launcher_round',
                  vibration: 300,
                  title: 'Order ongoing',
                  message: 'Your order has now been commenced',
                });
                self.props.navigate('OngoingOrder', {
                  id: notification.ride ? notification.ride : notification.delivery,
                  type: notification.ride ? 'ride' : 'delivery',
                });
                break;

              case 'RIDE_CANCELLED':
              case 'DELIVERY_CANCELLED':
                PushNotification.localNotification({
                  largeIcon: 'ic_launcher',
                  smallIcon: 'ic_launcher_round',
                  vibration: 300,
                  title: 'Order cancelled',
                  message: notification.title,
                });
                self.props.navigate('Hail');
                break;

              case 'COMPLETED':
                PushNotification.localNotification({
                  largeIcon: 'ic_launcher',
                  smallIcon: 'ic_launcher_round',
                  vibration: 300,
                  title: 'Order completed',
                  message: 'Your order has been completed',
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
  navigate: (routeName, params) => dispatch(NavigationActions.navigate({ routeName, params })),
});

package com.muvit;

import android.app.Application;

import com.facebook.react.ReactApplication;
import codes.simen.IMEI.IMEI;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
import io.sentry.RNSentryPackage;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.arttitude360.reactnative.rnpaystack.RNPaystackPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.rnfs.RNFSPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new IMEI(),
            new RNDeviceInfo(),
            new ReactNativeFirebaseAppPackage(),
            new PickerPackage(),
            new ReactNativePushNotificationPackage(),
            new ReactNativeFirebaseMessagingPackage(),
            new RNSentryPackage(),
            new SnackbarPackage(),
            new RNGooglePlacesPackage(),
            new RNPaystackPackage(),
            new AsyncStoragePackage(),
            new VectorIconsPackage(),
            new ReactNativeConfigPackage(),
            new RNFSPackage(),
            new RNGestureHandlerPackage(),
            new MapsPackage(),
            new RNFusedLocationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

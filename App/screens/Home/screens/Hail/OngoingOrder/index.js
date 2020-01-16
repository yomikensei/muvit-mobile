import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet, TouchableOpacity, View,} from 'react-native';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';
import {RFValue} from 'react-native-responsive-fontsize';
import call from 'react-native-phone-call';
import {BoldText, MediumText, RegularText} from 'components/Text';
import {currencyFormatter} from 'util';
import Colors from 'theme/colors';
import api from 'services/api';
import _ from 'lodash';

const styles = StyleSheet.create({
  item: {
    marginBottom: RFValue(20),
  },
  label: {
    fontSize: RFValue(13),
  },
  text: {
    fontSize: RFValue(18),
  },
});

export default props => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);

  const {
    navigation: {
      state: { params },
    },
  } = props;

  const fetchDetails = async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await api({
        url: `/${params.type}/${params.id}`,
        method: 'GET',
      });
      setDetails(data);
    } catch (e) {
      console.log(e.response ? e.response : e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View style={BaseStyles.background}>
      <DashNav
        navigation={props.navigation}
        title="Ongoing Order"
        info="Details on current ride or delivery"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: RFValue(10) }}>
          {isLoading ? (
            <ActivityIndicator size={30} color={Colors.primary} />
          ) : (
            details && (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: RFValue(30),
                  }}
                >
                  <Image
                    source={{ uri: details.driver.avatar || 'https://i.pravatar.cc/300' }}
                    style={{
                      width: RFValue(48),
                      height: RFValue(48),
                      borderRadius: RFValue(24),
                      borderWidth: RFValue(3),
                      borderColor: '#EFF3F6',
                    }}
                  />
                  <View>
                    <RegularText
                      customstyle={{ fontSize: RFValue(16) }}
                    >{`${details.driver.firstname} ${details.driver.lastname}`}</RegularText>
                    <BoldText
                      customstyle={{ fontSize: RFValue(18) }}
                    >{`+${details.driver.phone_prefix} ${details.driver.phone}`}</BoldText>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>
                        call({ number: `+${details.driver.phone_prefix}${details.driver.phone}` })
                      }
                    >
                      <Image
                        source={require('../../../../../assets/icons/call1.png')}
                        style={{
                          width: RFValue(40),
                          height: RFValue(40),
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Order Code</RegularText>
                  <MediumText customstyle={styles.text}>{`#${details.code}`}</MediumText>
                </View>

                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Vehicle Plate</RegularText>
                  <MediumText customstyle={styles.text}>
                    {details.vehicle.plate_number.toUpperCase()}
                  </MediumText>
                </View>

                <MediumText
                  customstyle={{
                    color: '#B2B8BD',
                    fontSize: RFValue(14),
                    textAlign: 'center',
                    marginBottom: RFValue(24),
                  }}
                >
                  Location
                </MediumText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: RFValue(20),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require('../../../../../assets/icons/dot.png')}
                    style={{ width: RFValue(28), height: RFValue(28), marginEnd: RFValue(7) }}
                  />
                  <View>
                    <MediumText customstyle={{ fontSize: RFValue(10), color: '#B2B8BD' }}>
                      From
                    </MediumText>
                    <MediumText customstyle={{ fontSize: RFValue(16), flexWrap: 'wrap' }}>
                      {details.location_origin.address}
                    </MediumText>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: RFValue(30),
                  }}
                >
                  <Image
                    resizeMode="contain"
                    source={require('../../../../../assets/icons/dot.png')}
                    style={{ width: RFValue(28), height: RFValue(28), marginEnd: RFValue(7) }}
                  />
                  <View>
                    <MediumText customstyle={{ fontSize: RFValue(10), color: '#B2B8BD' }}>
                      To
                    </MediumText>
                    <MediumText customstyle={{ fontSize: RFValue(16), flex: 1, flexWrap: 'wrap' }}>
                      {details.location_destination.address}
                    </MediumText>
                  </View>
                </View>

                <MediumText
                  customstyle={{
                    color: '#B2B8BD',
                    fontSize: RFValue(14),
                    textAlign: 'center',
                    marginBottom: RFValue(24),
                  }}
                >
                  Payment
                </MediumText>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: RFValue(30),
                  }}
                >
                  <View
                    style={{
                      width: '48%',
                      height: RFValue(70),
                      backgroundColor: Colors.secondary,
                      borderRadius: RFValue(10),
                      justifyContent: 'center',
                    }}
                  >
                    <RegularText
                      customstyle={{
                        color: '#8291A4',
                        fontSize: RFValue(15),
                        textAlign: 'center',
                      }}
                    >
                      method
                    </RegularText>
                    <BoldText customstyle={[styles.text, { textAlign: 'center' }]}>
                      {_.capitalize(details.payment_method)}
                    </BoldText>
                  </View>
                  <View
                    style={{
                      width: '48%',
                      height: RFValue(70),
                      backgroundColor: Colors.secondary,
                      borderRadius: RFValue(10),
                      justifyContent: 'center',
                    }}
                  >
                    <RegularText
                      customstyle={{
                        color: '#8291A4',
                        fontSize: RFValue(15),
                        textAlign: 'center',
                      }}
                    >
                      bill
                    </RegularText>
                    <BoldText
                      customstyle={[styles.text, { textAlign: 'center' }]}
                    >{`₦ ${currencyFormatter(details.bill)}`}</BoldText>
                  </View>
                </View>
              </>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

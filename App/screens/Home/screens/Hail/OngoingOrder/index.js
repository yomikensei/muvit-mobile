import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import DashNav from 'components/DashNav';
import BaseStyles from 'theme/base';
import {RFValue} from 'react-native-responsive-fontsize';
import {MediumText, RegularText} from 'components/Text';
import {currencyFormatter} from 'util';
import Colors from 'theme/colors';
import api from 'services/api';

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
                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Driver Name</RegularText>
                  <MediumText
                    customstyle={styles.text}
                  >{`${details.driver.firstname} ${details.driver.lastname}`}</MediumText>
                </View>
                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Driver Phone</RegularText>
                  <MediumText
                    customstyle={styles.text}
                  >{`+${details.driver.phone_prefix}-${details.driver.phone}`}</MediumText>
                </View>
                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Vehicle Plate</RegularText>
                  <MediumText customstyle={styles.text}>
                    {details.vehicle.plate_number.toUpperCase()}
                  </MediumText>
                </View>
                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Order Code</RegularText>
                  <MediumText customstyle={styles.text}>{`#${details.code}`}</MediumText>
                </View>
                <View style={styles.item}>
                  <RegularText customstyle={styles.label}>Bill</RegularText>
                  <MediumText customstyle={styles.text}>{`₦ ${currencyFormatter(
                    details.bill
                  )}`}</MediumText>
                </View>
              </>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

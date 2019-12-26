import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors.json';

const Avatar = (props) => {
  const { width, height, borderColor, borderWidth, backgroundColor } = props;

  const { children } = props;
  const borderRadius = width / 2;

  const styles = StyleSheet.create({
    avatar: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View
      style={[
        styles.avatar,
        {
          borderColor,
          backgroundColor,
          width,
          height,
          borderWidth,
          borderRadius,
        },
      ]}
    >
      {children}
    </View>
  );
};

Avatar.defaultProps = {
  width: 60,
  height: 60,
  borderColor: colors.primary,
  borderWidth: 2,
  children: null,
  backgroundColor: colors.primary,
};

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
};

export default Avatar;

/**
 * @format
 */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<View />);
});

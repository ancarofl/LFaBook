import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './LoadingStyles';

// TODO: Add dynamic props like size, color.
const Loading = () => {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default Loading;

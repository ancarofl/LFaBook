import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// More info at: https://react-native-async-storage.github.io/async-storage/docs/advanced/jest/
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

/* Silences the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing.
More info at: https://reactnavigation.org/docs/testing/ */
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

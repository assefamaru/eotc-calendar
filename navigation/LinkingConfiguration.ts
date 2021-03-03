import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'daily',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'fasts',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'holidays',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'more',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

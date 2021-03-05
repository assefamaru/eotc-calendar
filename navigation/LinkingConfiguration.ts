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
              TabTwoScreen: 'annual',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'convert',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'notifications',
            },
          },
          TabFive: {
            screens: {
              TabFiveScreen: 'more',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

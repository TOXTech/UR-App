module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // This is required for expo-router to work properly
        'expo-router/babel','nativewind/babel'
      ],
    };
  };

  
  

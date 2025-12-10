# react-native-snowfx ❄️

A beautiful, performant, and highly customizable snowfall animation component for React Native. Create stunning winter-themed effects in your mobile apps with ease!

[![npm version](https://img.shields.io/npm/v/react-native-snowfx.svg)](https://www.npmjs.com/package/react-native-snowfx)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

✨ **Smooth Animations** - Uses native driver for 60fps performance  
🎨 **Fully Customizable** - Control count, size, speed, color, and character  
📱 **Non-Intrusive** - Doesn't block touch events on underlying components  
⚡ **Lightweight** - Zero dependencies beyond React Native  
🔧 **TypeScript Support** - Fully typed with comprehensive prop definitions  
🌨️ **Realistic Motion** - Snowflakes fall, drift, and rotate naturally

## Installation

```sh
npm install react-native-snowfx
```

or

```sh
yarn add react-native-snowfx
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { SnowFX } from 'react-native-snowfx';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* Your app content */}
      <Text>Hello Winter! ❄️</Text>
      
      {/* Snow effect overlay */}
      <SnowFX />
    </View>
  );
}
```

### Advanced Example

```tsx
import { SnowFX } from 'react-native-snowfx';

<SnowFX
  snowflakesCount={100}
  minSize={10}
  maxSize={25}
  minSpeed={8000}
  maxSpeed={15000}
  color="#87CEEB"
  snowflakeCharacter="✨"
  zIndex={1000}
/>
```

### Toggle Snow On/Off

```tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { SnowFX } from 'react-native-snowfx';

export default function App() {
  const [isSnowing, setIsSnowing] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <Button 
        title={isSnowing ? "Stop Snow" : "Start Snow"} 
        onPress={() => setIsSnowing(!isSnowing)} 
      />
      
      {isSnowing && <SnowFX />}
    </View>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `snowflakesCount` | `number` | `50` | Number of snowflakes to render |
| `minSize` | `number` | `5` | Minimum size of snowflakes in pixels |
| `maxSize` | `number` | `15` | Maximum size of snowflakes in pixels |
| `minSpeed` | `number` | `8000` | Minimum falling speed (duration in ms) |
| `maxSpeed` | `number` | `15000` | Maximum falling speed (duration in ms) |
| `color` | `string` | `'#FFFFFF'` | Color of the snowflakes |
| `snowflakeCharacter` | `string` | `'❄'` | Custom snowflake character or emoji |
| `style` | `ViewStyle` | `undefined` | Custom container style |
| `zIndex` | `number` | `1000` | Z-index of the snow layer |

## Examples

### Light Snowfall
```tsx
<SnowFX snowflakesCount={25} />
```

### Heavy Blizzard
```tsx
<SnowFX 
  snowflakesCount={150}
  minSpeed={5000}
  maxSpeed={10000}
/>
```

### Blue Snow
```tsx
<SnowFX color="#87CEEB" />
```

### Sparkles Instead of Snow
```tsx
<SnowFX snowflakeCharacter="✨" />
```

### Custom Stars
```tsx
<SnowFX 
  snowflakeCharacter="⭐"
  color="#FFD700"
  snowflakesCount={30}
/>
```

## Performance Tips

- For better performance, use fewer snowflakes (25-75) on lower-end devices
- The component uses `useNativeDriver: true` for optimal animation performance
- Snowflakes are positioned absolutely and don't trigger layout recalculations
- The overlay uses `pointerEvents="none"` so it doesn't impact touch interactions

## TypeScript

The library is written in TypeScript and includes full type definitions:

```tsx
import { SnowFX, SnowFXProps } from 'react-native-snowfx';

const props: SnowFXProps = {
  snowflakesCount: 100,
  color: '#FFFFFF',
  // ...fully typed props
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with ❤️ and ❄️ by [Lasha Tsiklauri](https://github.com/aurryllash)

Built with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

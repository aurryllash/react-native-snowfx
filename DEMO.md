# SnowFX Demo Guide

## Testing the Library

To see the snow effect in action, run the example app:

### iOS
```bash
cd example
yarn ios
```

### Android
```bash
cd example
yarn android
```

## What You'll See

The example app demonstrates:

1. **Interactive Snow Controls**
   - Toggle snow on/off with a switch
   - Adjust snowflake count (Light/Medium/Heavy)
   - Change snow colors (White/Blue/Pink)

2. **Smooth Animations**
   - 60fps animations using native driver
   - Natural falling motion with drift
   - Rotating snowflakes
   - Varied speeds for realistic effect

3. **Non-Intrusive Design**
   - All UI elements remain interactive
   - Snow renders as an overlay layer
   - No impact on touch events

## Customization Examples

### Light Snowfall (Perfect for backgrounds)
```tsx
<SnowFX snowflakesCount={25} minSpeed={10000} maxSpeed={18000} />
```

### Heavy Blizzard (Dramatic effect)
```tsx
<SnowFX 
  snowflakesCount={150}
  minSpeed={5000}
  maxSpeed={8000}
  minSize={8}
  maxSize={22}
/>
```

### Colored Snow (Festive themes)
```tsx
<SnowFX color="#87CEEB" /> {/* Blue snow */}
<SnowFX color="#FFB6C1" /> {/* Pink snow */}
<SnowFX color="#FFD700" /> {/* Gold snow */}
```

### Custom Characters (Stars, sparkles, etc.)
```tsx
<SnowFX snowflakeCharacter="✨" /> {/* Sparkles */}
<SnowFX snowflakeCharacter="⭐" /> {/* Stars */}
<SnowFX snowflakeCharacter="🌸" /> {/* Cherry blossoms */}
<SnowFX snowflakeCharacter="🍂" /> {/* Autumn leaves */}
```

## Performance Tips

- **Mobile devices**: Use 25-75 snowflakes for optimal performance
- **Tablets**: Can handle 75-150 snowflakes smoothly
- **Lower-end devices**: Stick to 25-50 snowflakes
- All animations use native driver for best performance

## Integration Ideas

### 1. Holiday Theme App
```tsx
function HolidayApp() {
  return (
    <View style={{ flex: 1 }}>
      <YourApp />
      <SnowFX snowflakesCount={75} />
    </View>
  );
}
```

### 2. Conditional Seasonal Effect
```tsx
function App() {
  const isWinter = new Date().getMonth() >= 11 || new Date().getMonth() <= 2;
  
  return (
    <View style={{ flex: 1 }}>
      <YourApp />
      {isWinter && <SnowFX />}
    </View>
  );
}
```

### 3. Toggle with User Preference
```tsx
function App() {
  const [enableEffects, setEnableEffects] = useState(true);
  
  return (
    <View style={{ flex: 1 }}>
      <YourApp onToggleEffects={setEnableEffects} />
      {enableEffects && <SnowFX />}
    </View>
  );
}
```

## Troubleshooting

### Snow not visible?
- Check that the component is rendered after your main content
- Verify the `zIndex` prop is high enough (default is 1000)
- Ensure your app background isn't white (snow is white by default)

### Performance issues?
- Reduce `snowflakesCount` (try 25-50)
- Increase `minSpeed` and `maxSpeed` (slower falling = less rendering)
- Use smaller snowflakes (`maxSize={12}`)

### Snow blocks interactions?
- The component uses `pointerEvents="none"` by default
- If you modified it, make sure this prop is set

## Next Steps

1. Run the example app to see it in action
2. Experiment with different props in the example
3. Integrate it into your own React Native app
4. Share your awesome snowy apps! ❄️

Enjoy creating beautiful winter experiences! 🎄✨


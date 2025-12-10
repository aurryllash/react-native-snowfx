import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Switch,
} from 'react-native';
import { SnowFX } from 'react-native-snowfx';

export default function App() {
  const [isSnowing, setIsSnowing] = useState(true);
  const [snowflakesCount, setSnowflakesCount] = useState(50);
  const [snowColor, setSnowColor] = useState('#FFFFFF');

  return (
    <View style={styles.container}>
      {/* Snow Effect */}
      {isSnowing && (
        <SnowFX
          snowflakesCount={snowflakesCount}
          minSize={8}
          maxSize={20}
          minSpeed={8000}
          maxSpeed={15000}
          color={snowColor}
          snowflakeCharacter="❄"
        />
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>❄️ React Native SnowFX ❄️</Text>
        <Text style={styles.subtitle}>
          A beautiful snow falling effect for your React Native apps
        </Text>

        <View style={styles.controls}>
          <View style={styles.control}>
            <Text style={styles.label}>Enable Snow</Text>
            <Switch value={isSnowing} onValueChange={setIsSnowing} />
          </View>

          <View style={styles.control}>
            <Text style={styles.label}>Snowflakes: {snowflakesCount}</Text>
          </View>

          <View style={styles.buttonGroup}>
            <Button
              title="Light Snow (25)"
              onPress={() => setSnowflakesCount(25)}
            />
            <Button
              title="Medium (50)"
              onPress={() => setSnowflakesCount(50)}
            />
            <Button
              title="Heavy (100)"
              onPress={() => setSnowflakesCount(100)}
            />
          </View>

          <View style={styles.control}>
            <Text style={styles.label}>Snow Color</Text>
          </View>

          <View style={styles.buttonGroup}>
            <Button title="White" onPress={() => setSnowColor('#FFFFFF')} />
            <Button title="Blue" onPress={() => setSnowColor('#87CEEB')} />
            <Button title="Pink" onPress={() => setSnowColor('#FFB6C1')} />
          </View>
        </View>

        <View style={styles.demoContent}>
          <Text style={styles.demoText}>
            This is your app content. The snow effect is rendered on top with
            pointer events disabled, so all interactions work normally!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 60,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 40,
  },
  controls: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  demoContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
  },
  demoText: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 22,
    textAlign: 'center',
  },
});

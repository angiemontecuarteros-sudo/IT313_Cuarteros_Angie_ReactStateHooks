import { StyleSheet, Text, View } from 'react-native';

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({
  seconds,
  isRunning,
}: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {formattedTime}
      </Text>

      <Text style={styles.status}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 25,
  },

  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
  },

  status: {
    fontSize: 20,
    color: '#000000',
    marginTop: 5,
  },
});
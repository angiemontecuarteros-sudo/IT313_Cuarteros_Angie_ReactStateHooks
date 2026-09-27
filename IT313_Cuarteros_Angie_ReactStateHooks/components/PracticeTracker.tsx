import { Button, StyleSheet, Text, View } from 'react-native';

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        Solved: {solved}
      </Text>

      <View style={styles.button}>
        <Button
          title="Solve +1"
          onPress={onSolve}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={onReset}
        />
      </View>

      {solved >= 5 && (
        <Text style={styles.success}>
          Great job!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },

  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },

  button: {
    width: '80%',
    marginVertical: 5,
  },

  success: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#008000',
    marginTop: 15,
  },
});
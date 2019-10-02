import { PracticeSession } from './PracticeSession';
const session = new PracticeSession();

test('adds 1 + 2 to equal 3', () => {
  expect(session.state.newItem).toBe('');
});
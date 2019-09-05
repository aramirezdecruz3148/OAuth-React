import { connect } from 'react-redux';
import Farts from '../components/farts/Farts';
import { getFarts } from '../selectors/fartSelectors';

const mapStateToProps = state => ({
  farts: getFarts(state)
});

export default connect(
  mapStateToProps
)(Farts);

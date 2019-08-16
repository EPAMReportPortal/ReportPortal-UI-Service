import PropTypes from 'prop-types';
import { messages } from 'components/widgets/common/messages';
import { PassingRateChart } from '../common/passingRateChart';

const getFilterName = (widget) => widget.contentParameters.widgetOptions.launchNameFilter;

export const PassingRatePerLaunch = (props) => (
  <PassingRateChart
    {...props}
    filterNameTitle={messages.launchName}
    filterName={getFilterName(props.widget)}
  />
);
PassingRatePerLaunch.propTypes = {
  widget: PropTypes.object.isRequired,
};

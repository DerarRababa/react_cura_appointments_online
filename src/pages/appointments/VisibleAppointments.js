import { connect } from "react-redux";
import { VisibilityFilters } from "../../store/actions";
import Appointments from "./index"

const getVisibleDates = (dates, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return dates;
   
    default:
      return dates;
  }
};

const mapStateToProps = (state) => ({
  dates: getVisibleDates(state.dates, state.visibilityFilter)
});


export default connect(mapStateToProps)(Appointments);

//export default connect(mapStateToProps)(TodoList);

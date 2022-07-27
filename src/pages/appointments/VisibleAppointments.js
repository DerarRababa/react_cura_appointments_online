import { connect } from "react-redux";
import Appointments from "./index"



const mapStateToProps = (state) => ({
  dates: state.dates
});


  
export default connect(mapStateToProps)(Appointments);


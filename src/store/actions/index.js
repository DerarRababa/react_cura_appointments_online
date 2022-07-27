import axios from 'axios'


export const fetchData = (dispatch)  => {
    axios.get(`${process.env.REACT_APP_API_END_POINT}`).then((res)=>{
        dispatch({
          type: 'ADD_DATA',
          data: JSON.parse(res.data)
        })
     }) 
}
  


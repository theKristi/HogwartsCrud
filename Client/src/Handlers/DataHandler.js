
class DataHandler {
    constructor(props){
        this.props=props;
        console.log(props);
    }    

    getAll() {
    
        this.callApi()
          .then(res=>this.props.refresh(res))
          .catch(err => console.log(err));
      }
    
    callApi = async () => {
     
        const response = await fetch('/api//v1/getAll');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
      
        return body;
      };
     
}export default DataHandler;
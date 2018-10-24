
class DataHandler {
    constructor(props){
        this.props=props;
    }    

    getAll() {
    
        this.ApiGetAll()
          .then(res=>this.props.refresh(res))
          .catch(err => console.log(err));
      }
    addStudent(student){
        this.ApiAddStudent(student).then(res => alert(res.message))
        .catch(err => console.log(err));
    }
    ApiAddStudent=async(Adding)=>{
        const reqbody=JSON.stringify(Adding)
        const response = await fetch('/api//v1/addStudent',{method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: reqbody
      });
      const body=await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      }
    ApiGetAll = async () => {
     
        const response = await fetch('/api//v1/getAll');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
      
        return body;
      };
     
}export default DataHandler;

class DataHandler {
    constructor(props){
        this.props=props;
    }    

    getAll() {
    
        this.ApiGetAll()
          .then(res=>this.props.refresh(res))
          .catch(err => console.log(err));
      }
    deleteStudent=async(id)=>{
      const response = await fetch('/api/v1/deleteStudent',{method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {"id":id}
    });
    const body=await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  
    }
    addStudent=async(student)=>{
        const reqbody=JSON.stringify(student)
        const response = await fetch('/api/v1/addStudent',{method: 'POST',
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
     
        const response = await fetch('/api/v1/getAll');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
      
        return body;
      };
     
}export default DataHandler;
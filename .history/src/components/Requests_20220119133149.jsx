import MaterialTable from "material-table";
import Table from "material-table";
import tableIcons from './MaterialTableIcons';
import './Requests.css';

const data = [
  { name: "Water Bottle", quantity: "10", date:new Date() },
  { name: "Volunteer ", quantity: "10", date: new Date() },
  { name: "Blankets ", quantity: "200", date: new Date() },
  { name: "Product10", quantity: "10", date:new Date() },
  { name: "Product11 ", quantity: "10", date: new Date() },
  { name: "Product12", quantity: "200", date: new Date() },
  { name: "Product13", quantity: "10", date:new Date() },
  { name: "Product14 ", quantity: "10", date: new Date() },
  { name: "Product15 ", quantity: "200", date: new Date() },
  { name: "Water Bottle", quantity: "10", date:new Date() },
  { name: "Volunteer ", quantity: "10", date: new Date() },
  { name: "Blankets ", quantity: "200", date: new Date() },
  { name: "Product12", quantity: "10", date:new Date() },
  { name: "Product1 ", quantity: "10", date: new Date() },
  { name: "Product18 ", quantity: "200", date: new Date() },
  { name: "Product15", quantity: "10", date:new Date() },
  { name: "Product10 ", quantity: "10", date: new Date() },
  { name: "Blankets ", quantity: "200", date: new Date() },
  { name: "Product11", quantity: "10", date:new Date() },
  { name: "Product20 ", quantity: "10", date: new Date() },
  { name: "Product14 ", quantity: "200", date: new Date() },
  { name: "Product15", quantity: "10", date:new Date() },
  { name: "Product15 ", quantity: "10", date: new Date() },
  { name: "Product16 ", quantity: "200", date: new Date() },
  { name: "Water Bottle", quantity: "10", date:new Date() },
  { name: "Volunteer ", quantity: "10", date: new Date() },
  { name: "Blankets ", quantity: "200", date: new Date() },
];

const columns = [
  { title: "Name", field: "name", width: 100,
  minWidth: 100, cellStyle: {
    whiteSpace: 'nowrap'
   }},
  { title: "Quantity", field: "quantity", width: 100,
  minWidth: 100, cellStyle: {
    whiteSpace: 'nowrap'
   } },
  { title: "Date", field: "date", width: 100,
  minWidth: 100, type: "date", cellStyle: {
    whiteSpace: 'nowrap'
   } }
];

const Requests = () => {
        return (
        <div className="demo">
      <h1>Material-Table Demo</h1>
      <div className="requests-div">
          <div className="add-request">
              <button>New Request</button>
          </div>
        <Table
          columns={columns}
          data={data}
          icons={tableIcons}
          title="Requests"
        //   width= "max-content"
          options={{
            headerStyle: {
               backgroundColor: '#01579b',
               color: '#FFF',
               whiteSpace: 'nowrap',
               width: 200,
               minWidth: 200
            }
         }}
        />
      </div>
    </div>
          
        );
};

export default Requests;
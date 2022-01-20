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
  { title: "Name", field: "name" },
  { title: "Quantity", field: "quantity" },
  { title: "Date", field: "date", type: "date" }
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
        size="medium"
          columns={columns}
          data={data}
          icons={tableIcons}
          title="Requests"
        />
      </div>
    </div>
          
        );
};

export default Requests;
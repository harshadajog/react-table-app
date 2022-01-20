import MaterialTable from "material-table";
import tableIcons from './MaterialTableIcons';
import './Requests.css';

const data = [
  { name: "Water Bottle", Quantity: "10", Date:new Date() },
  { name: "Volunteer ", Quantity: "10", Date: new Date() },
  { name: "Blankets ", Quantity: "200", Date: new Date() },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Date", field: "surname" },
  { title: "Item", field: "birthYear", type: "numeric" },
];

const Requests = () => {
        return (
        <div className="demo">
      <h1>Material-Table Demo</h1>
      <div className="requests-div">
          <div className="add-request">
              <button>New Request</button>
          </div>
        <MaterialTable
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
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { ordersHandler } from "../../../utils/ordersServices";
import PageWrapper from "../../PageWrapper";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ordersHandler().then((res) => {
      setOrders(res);
    });
  }, []);

  return (
    // <PageWrapper>
    // {/* // title="Orders" // description=
    // {`G'day ${context.user.name}, you can manage all the orders here`}
    // // className="container-fluid" */}
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {orders?.map((o) => {
          return (
            <div className="mt-5" style={{ borderBottom: "5px solid indigo" }}>
              <h2 className="mb-5">
                <span className="bg-primary">Order ID: {o?._id}</span>
              </h2>

              <ul className="list-group mb-2">
                <li className="list-group-item">Ordered by: {o?.name}</li>

                <li className="list-group-item">
                  Delivery address: {o?.address}
                </li>
              </ul>
              <h3 className="mt-4 mb-4 font-italic">
                Total products in the order: {o?.items?.length}
              </h3>

              {o?.items?.map((i) => (
                <div className="mb-4" key={i._id}>
                  Items:
                  <ul>
                    <li> {i._id}</li>
                    <li> {i.price}</li>
                    <li> {i.name}</li>
                  </ul>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
    // </PageWrapper>
  );
};
export default Orders;

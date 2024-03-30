import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// {
//   "companyName": "VIT_Mart",
//   "clientID": "5f34c088-c7fb-420d-ba41-52ae57719ff1",
//   "clientSecret": "TlhVRLEdSziqUxxH",
//   "ownerName": "Piyush",
//   "ownerEmail": "piyush.verma2023@vitstudent.ac.in",
//   "rollNo": "23MCA1104"
// }

// {
//   "token_type": "Bearer",
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzkzMTg1LCJpYXQiOjE3MTE3OTI4ODUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmMzRjMDg4LWM3ZmItNDIwZC1iYTQxLTUyYWU1NzcxOWZmMSIsInN1YiI6InBpeXVzaC52ZXJtYTIwMjNAdml0c3R1ZGVudC5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlZJVF9NYXJ0IiwiY2xpZW50SUQiOiI1ZjM0YzA4OC1jN2ZiLTQyMGQtYmE0MS01MmFlNTc3MTlmZjEiLCJjbGllbnRTZWNyZXQiOiJUbGhWUkxFZFN6aXFVeHhIIiwib3duZXJOYW1lIjoiUGl5dXNoIiwib3duZXJFbWFpbCI6InBpeXVzaC52ZXJtYTIwMjNAdml0c3R1ZGVudC5hYy5pbiIsInJvbGxObyI6IjIzTUNBMTEwNCJ9.rAxoUGkZ66DMNLMm1wveH_nx376IUnLnnSTVElTeKas",
//   "expires_in": 1711793185
// }

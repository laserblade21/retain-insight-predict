
import { Navigate } from "react-router-dom";

// Redirect users from / to our main dashboard
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;

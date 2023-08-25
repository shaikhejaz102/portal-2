import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step3.css";
const Step3 = () => {
  return (
    <div className="step-3">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="remember-its-normal">
        Remember, it's normal to feel overwhelmed at first, but this map is
        designed to guide you at a pace that suits you best. Each step unlocks
        as you complete the task at hand, ensuring a seamless and manageable
        experience. So, let's take it one step at a time, celebrating every
        milestone as we move closer to your destination of success.
      </div>
      <Button className="button" variant="primary">
        Next
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step3;

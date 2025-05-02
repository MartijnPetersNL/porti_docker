import "../App.css";
import { useFormik } from "formik";
export default function LoginFormulier() {
  const formik = useFormik({});
  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder="Username..."
        className="border-solid border-2 border-gray-600"
      />
      <br />
      <br />
      <input
        type="text s"
        name="password"
        placeholder="Password..."
        className="border-solid border-2 border-gray-600"
      />
      <br />
      <button
        type="submit"
        className="forgotpassword border-solid border-2 border-gray-600"
      >
        Forgot password
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
